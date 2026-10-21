// Behavioural checks for shared filtering and the published data contract.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { filterEvidence, readFilters, extensionOf, projectAttachments } from '../js/evidence.js';
import { buckets, tagGroups } from '../js/content.js';

const fixture = [
  { id: 'a', title: 'Tree shade', description: 'Cooling streets', bucket: 'Research', tags: ['Environment', 'Map', 'Meso'], files: [], date: '2026-01-01' },
  { id: 'b', title: 'Daily journeys', description: 'Walking routes', bucket: 'Analysis', tags: ['Mobility', 'Map', 'Micro'], files: [], date: '2026-02-01' },
  { id: 'c', title: 'Resident voices', description: 'Cooling streets', bucket: 'Research', tags: ['Environment', 'Interview / survey', 'Micro'], files: [], date: '' },
];
const filters = values => ({ q: '', sort: 'title', buckets: [], include: [], exclude: [], ...values });

test('tags combine as OR within a category, AND across categories, with exclusions taking precedence', () => {
  const result = filterEvidence(fixture, filters({ include: ['Environment', 'Mobility', 'Map'], exclude: ['Micro'] }));
  assert.deepEqual(result.map(item => item.id), ['a']);
});

test('search, buckets, newest sort and empty results work together', () => {
  assert.deepEqual(filterEvidence(fixture, filters({ q: 'COOLING street', buckets: ['Research'], sort: 'newest' })).map(item => item.id), ['a', 'c']);
  assert.equal(filterEvidence(fixture, filters({ q: 'not present' })).length, 0);
});

test('unchecking every bucket survives a shared URL instead of resetting to all', () => {
  const parsed = readFilters(new URLSearchParams('bucket=none'));
  assert.equal(filterEvidence(fixture, parsed).length, 0);
  assert.equal(filterEvidence(fixture, readFilters(new URLSearchParams())).length, 3);
});

test('external app attachments and ordinary files have usable format labels', () => {
  assert.equal(extensionOf({ fileName: 'Urban map.PNG' }), 'png');
  assert.equal(extensionOf({ fileName: 'WellWay interface app' }), 'link');
});

test('project files include every attachment in bucket order, then alphabetical filename order', () => {
  const records = [
    { id: 'design', bucket: 'Design', tags: ['Project A'], files: [{ fileName: 'A.png' }] },
    { id: 'methods', bucket: 'Methods', tags: ['Project A'], files: [{ fileName: 'Z.pdf' }, { fileName: 'B.png' }] },
    { id: 'research', bucket: 'Research', tags: ['Project A'], files: [{ fileName: 'Z.png' }] },
    { id: 'other', bucket: 'Methods', tags: ['Project B'], files: [{ fileName: 'A.png' }] },
  ];
  const result = projectAttachments(records, 'Project A');
  assert.deepEqual(result.map(entry => entry.file.fileName), ['B.png', 'Z.pdf', 'Z.png', 'A.png']);
  assert.deepEqual(result.map(entry => [entry.item.id, entry.fileIndex]), [['methods', 1], ['methods', 0], ['research', 0], ['design', 0]]);
  assert.deepEqual(projectAttachments(records, 'Empty project'), []);
});

test('published evidence has unique IDs, valid metadata, safe files and existing thumbnails', async () => {
  const data = JSON.parse(await readFile(new URL('../data/evidence.json', import.meta.url)));
  const ids = new Set(data.items.map(item => item.id));
  assert.equal(ids.size, data.items.length);
  const tags = new Set(Object.values(tagGroups).flat());
  const rows = new Set();
  for (const item of data.items) {
    assert.ok(item.title && buckets.includes(item.bucket), `Invalid record ${item.id}`);
    assert.ok(item.tags.every(tag => tags.has(tag)), `Unknown tag on ${item.id}`);
    for (const row of item.frameworkRows || []) {
      assert.ok(!rows.has(row), `Framework row ${row} was assigned twice`);
      rows.add(row);
    }
    for (const file of item.files) {
      assert.match(file.fileUrl, /^https?:\/\//);
      if (file.previewUrl) await access(new URL('../' + file.previewUrl, import.meta.url));
    }
    if (item.thumbnail) await access(new URL('../' + item.thumbnail, import.meta.url));
  }
  assert.equal(rows.size, data.rowCount, 'All source framework rows should be represented');
  for (const link of data.links) {
    assert.ok(ids.has(link.source) && ids.has(link.target));
    assert.notEqual(link.source, link.target);
    assert.ok(['informs', 'supports', 'evaluates', 'links-to'].includes(link.type));
  }
});
