"""Refresh evidence metadata from a framework workbook without changing file URLs.

Usage: python scripts/import-framework.py "path/to/Framework Table.xlsx"
Requires openpyxl. The existing JSON snapshot is the published-file registry.
Informs, Supports and Evaluates contain stable target Evidence IDs. Older tables
with Supporting links and Direct links containing Excel row numbers also work.
"""
import argparse
from collections import defaultdict
from datetime import date, datetime
import json
from pathlib import Path
import re
import unicodedata

import openpyxl

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data' / 'evidence.json'
FILE_BASE_URL = 'https://urban-evidence-hub-fhc-files.netlify.app/'
PROJECTS = {
    'Group 1: Responsive Neighbourhood': {'Raneem', 'Lara', 'Niels'},
    'Group 2: Living Superblocks': {'Hilda', 'Tim', 'Daniel'},
    'Group 3: Health Islands': {'Cas', 'Milana', 'Vera'},
}
# Verified renamed attachments in the existing published collection.
FILE_ALIASES = {
    'Adaptive Street Transformation before render.png': 'Adaptive Street Transformation before render.jpg',
    'design_base_protection_cas.docx': 'pitch_individual_design_protection.pptx',
    'Individual Design Protection.pdf': 'pitch_individual_design_protection.pptx',
    'Waterfront current': 'Waterfront current.png',
    'Stakeholder diagram ecologial network.svg': 'Stakeholders ecological network.svg',
    'Stakeholder diagram health spine and islands.svg': 'Stakeholders health spine and islands.svg',
    'Stakeholder diagram WellWay.svg': 'Stakeholders WellWay.svg',
    'Events and volunteering.png': 'Events & volunteering.png',
    'Walk routines community faith.png': 'walk_community_faith.png',
    'Walk routines after school.png': 'walk_youth_after_school.png',
    'Marco Polopark impression.mp4': 'Marco Polopark impression.png',
}
# Framework group codes disambiguate files with identical names.
GROUP_ITEMS = {'D_ID_V': 'individual-design-vera-promotion', 'D_ID_C': 'individual-design-cas-protection'}


def text(value):
    if value is None or value == 0:
        return ''
    if isinstance(value, (date, datetime)):
        return value.isoformat()[:10]
    return str(value).strip()


def key(value):
    return re.sub(r'[^a-z0-9]', '', unicodedata.normalize('NFKD', text(value)).encode('ascii', 'ignore').decode().lower())


def framework_links(rows, row_ids):
    """Resolve stable IDs before mapping file relationships to website records."""
    stable_rows = {}
    for number, row in rows:
        stable_id = text(row.get('Evidence ID'))
        if stable_id:
            if stable_id in stable_rows:
                raise ValueError(f'Duplicate Evidence ID: {stable_id}')
            stable_rows[stable_id] = number
    links, seen, invalid = [], set(), []
    for number, row in rows:
        modern = 'Evidence ID' in row
        columns = [('Informs', 'informs'), ('Supports', 'supports'), ('Evaluates', 'evaluates')] if modern else [('Supporting links', 'supports'), ('Direct links', 'links-to')]
        for column, kind in columns:
            targets = [part.strip() for part in text(row.get(column)).split(';') if part.strip()] if modern else re.findall(r'\d+', text(row.get(column)))
            for target in targets:
                target_row = stable_rows.get(target) if modern else int(target)
                if target_row not in row_ids:
                    invalid.append({'row': number, 'column': column, 'target': target})
                    continue
                edge = (row_ids[number], row_ids[target_row], kind)
                if edge[0] != edge[1] and edge not in seen:
                    links.append(dict(zip(['source', 'target', 'type'], edge)))
                    seen.add(edge)
    if invalid:
        raise ValueError(f'Invalid relationship references: {invalid}')
    return links


def refresh(workbook, output=None, previews=None):
    # 1. Read the current published files and the workbook without modifying it.
    previous = json.loads(DATA.read_text(encoding='utf-8'))
    items = previous if isinstance(previous, list) else previous['items']
    for item in items:
        for file in item['files']:
            if file.get('fileUrl', '').startswith('evidence-files/'):
                file['fileUrl'] = FILE_BASE_URL + file['fileUrl']
    book = openpyxl.load_workbook(workbook, data_only=True)
    sheet = book['Studio 2026'] if 'Studio 2026' in book.sheetnames else book.active
    values = list(sheet.values)
    headers = list(values[1])
    by_name, by_group = defaultdict(set), defaultdict(set)
    by_id = {item['id']: item for item in items}
    by_evidence_id = {identity: item['id'] for item in items for identity in item.get('frameworkEvidenceIds', [])}
    for item in items:
        by_group[key(item.get('group') or item['title'])].add(item['id'])
        by_name[key(item['title'])].add(item['id'])
        for file in item['files']:
            by_name[key(file.get('fileName') or file.get('title'))].add(item['id'])

    # 2. Resolve rows to published evidence. Ambiguities remain metadata-only.
    rows_by_id, row_ids, unresolved = defaultdict(list), {}, []
    for number, values_row in enumerate(values[2:], 3):
        if not text(values_row[0]):
            continue
        row = dict(zip(headers, values_row))
        tags = [headers[column] for column in range(10, 55) if values_row[column] == 1]
        project_tags = [name for name, authors in PROJECTS.items() if authors.intersection(tags)]
        group_number = re.search(r'(?:^|_)G([123])(?:_|$)', text(row.get('Item group name')))
        if not project_tags and group_number:
            project_tags = [list(PROJECTS)[int(group_number[1]) - 1]]
        tags += project_tags
        title = text(row['Title'])
        fixed_id = text(row.get('Evidence ID'))
        candidates = {by_evidence_id[fixed_id]} if fixed_id in by_evidence_id else by_name[key(FILE_ALIASES.get(title, title))]
        group_id = GROUP_ITEMS.get(text(row.get('Item group name')))
        if len(candidates) != 1 and group_id in by_id:
            candidates = {group_id}
        elif len(candidates) > 1 and not row.get('Item group name'):
            ungrouped = {id for id in candidates if not by_id[id].get('group')}
            candidates = ungrouped or candidates
        group_matches = by_group[key(row.get('Item group name'))] if row.get('Item group name') else set()
        if len(candidates) != 1 and group_matches:
            candidates = candidates.intersection(group_matches) or group_matches
        if len(candidates) > 1 and project_tags:
            candidates = {id for id in candidates if set(project_tags).intersection(by_id[id]['tags'])}
        if len(candidates) == 1:
            id = next(iter(candidates))
        else:
            group_key = key(row.get('Item group name') or row['Title'])
            id = f'framework-{group_key}-{key(" ".join(project_tags))}'
            if id not in by_id:
                buckets = [headers[column] for column in range(2, 10) if values_row[column] == 1]
                by_id[id] = {'id': id, 'title': text(row.get('Item group name')) or text(row['Title']),
                    'bucket': buckets[0] if buckets else 'Research', 'tags': [], 'description': '',
                    'date': '', 'source': '', 'files': [], 'group': text(row.get('Item group name'))}
                items.append(by_id[id])
            unresolved.append({'row': number, 'title': text(row['Title']), 'reason': 'No unique published-file match'})
        row_ids[number] = id
        rows_by_id[id].append((number, row, tags))

    # 3. Apply updated metadata to each evidence group, retaining published files.
    for item in items:
        matched = rows_by_id.get(item['id'], [])
        if not matched:
            continue
        item['frameworkRows'] = [number for number, _, _ in matched]
        item['frameworkEvidenceIds'] = [text(row['Evidence ID']) for _, row, _ in matched if row.get('Evidence ID')]
        previous_projects = [tag for tag in item['tags'] if tag in PROJECTS]
        item['tags'] = list(dict.fromkeys(tag for _, _, tags in matched for tag in tags))
        if not any(tag in PROJECTS for tag in item['tags']):
            item['tags'] += previous_projects
        for field, column in [('description', 'Description/caption'), ('date', 'Date'), ('source', 'Source')]:
            recorded = list(dict.fromkeys(text(row.get(column)) for _, row, _ in matched if text(row.get(column))))
            item[field] = '\n'.join(recorded) if recorded else item.get(field, '')
        bucket_names = headers[2:10]
        marked = [bucket for bucket in bucket_names if any(row.get(bucket) == 1 for _, row, _ in matched)]
        if marked:
            item['bucket'] = marked[0]
        # Keep a usable source URL for metadata-only records when provided.
        if not item['files'] and re.match(r'^https?://', item.get('source', '')):
            item['files'] = [{'title': item['title'], 'fileName': item['title'], 'fileUrl': item['source']}]

    # 4. Preserve exact file identity/metadata alongside the grouped catalogue.
    # Preview excerpts are optional and read once from the completed prototype.
    preview_nodes = {}
    if previews:
        content = Path(previews).read_text(encoding='utf-8').strip()
        if content.startswith('window.HEALTH_ISLANDS_DATA = '):
            content = content.removeprefix('window.HEALTH_ISLANDS_DATA = ').removesuffix(';')
        preview_nodes = {node['id']: node for node in json.loads(content)['nodes']}
    file_ids, mapping_errors = {}, []
    for item in items:
        used = set()
        for number, row, tags in rows_by_id.get(item['id'], []):
            stable_id = text(row.get('Evidence ID'))
            if not stable_id:
                continue
            preview_node = preview_nodes.get(stable_id, {})
            names = {key(FILE_ALIASES.get(text(row['Title']), text(row['Title']))),
                     key(preview_node.get('preview', {}).get('filename')),
                     key(text(row.get('Source')).replace('\\', '/').split('/')[-1])} - {''}
            candidates = [index for index, file in enumerate(item['files'])
                          if index not in used and key(file.get('fileName')) in names]
            previous_match = [index for index, file in enumerate(item['files'])
                              if index not in used and file.get('framework', {}).get('id') == stable_id]
            if previous_match:
                candidates = previous_match
            if not candidates or len({item['files'][index]['fileUrl'] for index in candidates}) > 1:
                mapping_errors.append({'id': stable_id, 'title': row['Title'], 'item': item['id']})
                continue
            # Verified aliases can share an identical published file; retain each row.
            index = candidates[0]
            used.add(index)
            file = item['files'][index]
            marked = [bucket for bucket in headers[2:10] if row.get(bucket) == 1]
            preview = preview_node.get('preview') or file.get('framework', {}).get('preview', {})
            file['framework'] = {
                'id': stable_id, 'row': number, 'title': text(row['Title']), 'group': text(row.get('Item group name')),
                'bucket': marked[0] if marked else item['bucket'], 'buckets': marked,
                'authors': [tag for tag in tags if tag in set().union(*PROJECTS.values())],
                'projects': [tag for tag in tags if tag in PROJECTS],
                'tags': list(dict.fromkeys(marked + tags)),
                'description': text(row.get('Description/caption')), 'date': text(row.get('Date')), 'source': text(row.get('Source')),
                'preview': {name: value for name, value in preview.items() if name not in ['url', 'fileUrl', 'filename']},
            }
            file_ids[number] = stable_id
    if mapping_errors:
        raise ValueError(f'Files need exact attachment mapping: {mapping_errors}')
    if 'Evidence ID' in headers and len(file_ids) != len(row_ids):
        raise ValueError('Every framework file requires a fixed Evidence ID.')

    # 5. Keep file relationships intact; catalogue links aggregate the same rows.
    rows = [(number, row) for item_rows in rows_by_id.values() for number, row, _ in item_rows]
    links = framework_links(rows, row_ids)
    file_links = framework_links(rows, file_ids) if file_ids else []

    # 6. Validate before replacing the public snapshot; --output supports review.
    payload = {'source': Path(workbook).name, 'rowCount': len(row_ids), 'items': items, 'links': links, 'fileLinks': file_links}
    output = Path(output or DATA)
    output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
    unpublished = [{'item': item['id'], 'file': file['fileName']} for item in items for file in item['files'] if file.get('available') is False]
    report = {'source': Path(workbook).name, 'frameworkRows': len(row_ids), 'evidenceItems': len(items),
        'links': len(links), 'fileLinks': len(file_links), 'mappedFiles': len(file_ids), 'unresolvedFiles': unresolved, 'unpublishedFiles': unpublished}
    report_path = output.with_name('import-report.json')
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
    print(f'Imported {len(row_ids)} rows into {len(items)} catalogue records; {len(file_links)} file relationships.')
    print(f'{len(unresolved)} rows need published-file matching. See {report_path}.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('workbook', type=Path)
    parser.add_argument('--output', type=Path, help='Review snapshot before replacing data/evidence.json')
    parser.add_argument('--previews', type=Path, help='Optional completed prototype snapshot for text/table excerpts')
    args = parser.parse_args()
    refresh(args.workbook, args.output, args.previews)
