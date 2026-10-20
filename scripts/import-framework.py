"""Refresh evidence metadata from a framework workbook without changing file URLs.

Usage: python scripts/import-framework.py "path/to/Framework Table.xlsx"
Requires openpyxl. The existing JSON snapshot is the published-file registry.
Supporting links and Direct links contain Excel row numbers, separated by commas.
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


def refresh(workbook):
    # 1. Read the current published files and the workbook without modifying it.
    previous = json.loads(DATA.read_text(encoding='utf-8'))
    items = previous if isinstance(previous, list) else previous['items']
    for item in items:
        for file in item['files']:
            if file.get('fileUrl', '').startswith('evidence-files/'):
                file['fileUrl'] = FILE_BASE_URL + file['fileUrl']
    sheet = openpyxl.load_workbook(workbook, data_only=True).active
    values = list(sheet.values)
    headers = list(values[1])
    by_name, by_group = defaultdict(set), defaultdict(set)
    by_id = {item['id']: item for item in items}
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
        candidates = by_name[key(FILE_ALIASES.get(title, title))]
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

    # 4. Build real directed links; never infer links from coincident tags.
    links, invalid_links = [], []
    seen = set()
    for item_rows in rows_by_id.values():
        for number, row, _ in item_rows:
            for column, kind in [('Supporting links', 'supports'), ('Direct links', 'links-to')]:
                for value in re.findall(r'\d+', text(row.get(column))):
                    target_row = int(value)
                    if target_row not in row_ids:
                        invalid_links.append({'row': number, 'column': column, 'target': target_row})
                        continue
                    edge = (row_ids[number], row_ids[target_row], kind)
                    if edge[0] != edge[1] and edge not in seen:
                        links.append(dict(zip(['source', 'target', 'type'], edge)))
                        seen.add(edge)
    if invalid_links:
        raise ValueError(f'Invalid link row references: {invalid_links}')

    # 5. Save an auditable snapshot, ready for any static host.
    payload = {'source': Path(workbook).name, 'rowCount': len(row_ids), 'items': items, 'links': links}
    DATA.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    unpublished = [{'item': item['id'], 'file': file['fileName']} for item in items for file in item['files'] if file.get('available') is False]
    report = {'source': Path(workbook).name, 'frameworkRows': len(row_ids), 'evidenceItems': len(items),
        'links': len(links), 'unresolvedFiles': unresolved, 'unpublishedFiles': unpublished}
    (ROOT / 'data' / 'import-report.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'Imported {len(row_ids)} framework rows into {len(items)} evidence items; {len(links)} directed links.')
    print(f'{len(unresolved)} rows need published-file matching. See data/import-report.json.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('workbook', type=Path)
    refresh(parser.parse_args().workbook)
