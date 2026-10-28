// Viewing order and tag navigation are independent of the page layout.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createViewingHistory } from '../js/viewing-history.js';
import { filterEvidence, readFilters, tagGridUrl } from '../js/evidence.js';
import { peopleGroups, students, tagGroups } from '../js/content.js';

test('Back and Forward retrace selections rather than neighbouring file indices', () => {
  const history = createViewingHistory(0);
  history.visit(3);
  history.visit(12);
  assert.equal(history.move(-1), 3);
  assert.equal(history.move(-1), 0);
  assert.equal(history.canBack, false);
  assert.equal(history.move(1), 3);
  assert.equal(history.move(1), 12);
  assert.equal(history.canForward, false);
});

test('a new selection after going Back replaces the forward branch', () => {
  const history = createViewingHistory('file-a');
  history.visit('file-d');
  history.move(-1);
  history.visit('file-b');
  assert.equal(history.canForward, false);
  assert.equal(history.move(-1), 'file-a');
  assert.equal(history.move(1), 'file-b');
});

test('reopening the same evidence adds no duplicate history and boundaries stay usable', () => {
  const history = createViewingHistory();
  assert.equal(history.canBack, false);
  assert.equal(history.canForward, false);
  history.visit('one');
  history.visit('one');
  assert.equal(history.canBack, false);
  assert.equal(history.move(-10), 'one');
  assert.equal(history.move(10), 'one');
});

test('tag links encode one fresh Grid filter, including custom tags', () => {
  const tag = 'Trees & shade / cooling';
  const url = tagGridUrl(tag);
  assert.equal(url.split('?')[0], '#/hub/grid');
  const params = new URLSearchParams(url.split('?')[1]);
  assert.deepEqual([...params], [['include', tag]]);
  const records = [{ id: 'yes', title: 'One', tags: [tag], bucket: 'Research', files: [] },
    { id: 'no', title: 'Two', tags: [], bucket: 'Research', files: [] }];
  assert.deepEqual(filterEvidence(records, readFilters(params)).map(item => item.id), ['yes']);
});

test('bucket tags also find grouped records containing a matching file', () => {
  const records = [{ id: 'mixed', title: 'One', tags: [], bucket: 'Research',
    files: [{ fileName: 'one.png', framework: { tags: ['Analysis'] } }] },
  { id: 'other', title: 'Two', tags: [], bucket: 'Research', files: [] }];
  const params = new URLSearchParams(tagGridUrl('Analysis').split('?')[1]);
  assert.deepEqual(filterEvidence(records, readFilters(params)).map(item => item.id), ['mixed']);
});

test('People contains every framework author once and unique profile IDs', () => {
  assert.deepEqual(students.map(student => student.evidenceTag), tagGroups.Author);
  const people = peopleGroups.flatMap(group => group.items);
  assert.equal(new Set(people.map(person => person.id)).size, people.length);
  assert.deepEqual(peopleGroups.map(group => group.id), ['students', 'tutors', 'partners']);
});
