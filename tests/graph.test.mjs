// Real website data/model checks; browser QA exercises the mounted graph and drawer.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import graphModel from '../js/graph-model.js';
import { frameworkEntries, relatedEntries } from '../js/graph-data.js';
import { buckets, relationshipTypes } from '../js/content.js';
import { filterEvidence, readFilters } from '../js/evidence.js';

const catalogue = JSON.parse(fs.readFileSync(new URL('../data/evidence.json', import.meta.url)));
const entries = frameworkEntries(catalogue.items);
const data = { nodes: entries, links: catalogue.fileLinks, buckets: buckets.map(name => ({ name })) };
const modelContext = () => ({ HealthIslandsGraphModel: graphModel, window: { HEALTH_ISLANDS_DATA: data } });

test('all 660 fixed file IDs map to exact catalogue attachments and 1,874 valid relationships', () => {
  assert.equal(entries.length, 660);
  const ids = new Set(entries.map(entry => entry.id));
  assert.equal(ids.size, entries.length);
  for (const entry of entries) {
    assert.match(entry.id, /^UEH-/);
    assert.equal(entry.item.files[entry.fileIndex], entry.file);
    assert.ok(entry.item.frameworkEvidenceIds.includes(entry.id));
    assert.ok(entry.file.fileUrl.startsWith('https://'));
  }
  assert.equal(data.links.length, 1874);
  assert.equal(new Set(data.links.map(link => JSON.stringify(link))).size, data.links.length);
  for (const link of data.links) {
    assert.ok(ids.has(link.source) && ids.has(link.target));
    assert.notEqual(link.source, link.target);
    assert.ok(relationshipTypes.some(type => type.id === link.type));
  }
  const model = graphModel.buildGraph(data);
  assert.equal(model.clusters.length, 296);
  assert.equal(model.arrows.length, 48);
});

test('file filters use that file’s metadata rather than sibling tags', () => {
  const pair = entries.flatMap(a => entries.filter(b => a.item === b.item && a.id !== b.id)
    .map(b => ({ a, b, tag: a.tags.find(tag => !b.tags.includes(tag) && tag === 'Image') }))).find(pair => pair.tag);
  assert.ok(pair);
  const result = filterEvidence([pair.a, pair.b], readFilters(new URLSearchParams({ include: pair.tag })));
  assert.deepEqual(result.map(entry => entry.id), [pair.a.id]);
});

test('simplified relationship sections follow exact file IDs and omit empty categories', () => {
  const entry = entries.find(entry => data.links.some(link => link.source === entry.id));
  const sections = relatedEntries(entry.id, entries, data.links, relationshipTypes);
  const outgoing = data.links.filter(link => link.source === entry.id);
  for (const section of sections) assert.ok(section.entries.length);
  assert.equal(sections.filter(section => ['Informs','Supports','Evaluates'].includes(section.label)).reduce((sum, section) => sum + section.entries.length, 0), outgoing.length);
  assert.deepEqual(relatedEntries('missing', entries, data.links, relationshipTypes), []);
});

test('bubble labels omit file extensions without removing ordinary dotted text', () => {
  const context = modelContext();
  const label = context.HealthIslandsGraphModel.displayTitle;
  for (const extension of ['pdf', 'png', 'jpg', 'xlsx', 'pptx', 'docx', 'SVG']) {
    assert.equal(label(`Example.${extension}`), 'Example');
  }
  assert.equal(label('Studio.2026'), 'Studio.2026');
});

test('new spoken connections replace the two superseded paths with their intended directions', () => {
  const context = modelContext();
  const model = context.HealthIslandsGraphModel.buildGraph(context.window.HEALTH_ISLANDS_DATA);
  const has = (source, target, type = 'informs') => model.arrows.some(arrow =>
    arrow.sourceGroup.name === source && arrow.targetGroup.name === target && arrow.type === type);
  for (const name of ['Individual design Vera - Promotion', 'Individual design Cas - Protection', 'Individual design Milana - Facilitation']) {
    assert(has(name, 'Integration'));
    assert(!has(name, 'Design vision map'));
    assert(has('Prioritized intervention locations', name));
  }
  assert(has('Integration', 'Design vision map'));
  assert(has('timeline', 'Wijkgedachte', 'supports'));
  assert(has('Wijkgedachte', 'Conclusions: city, district and neighbourhood'));
  assert(has('Wijkgedachte', 'Opportunities: city, district and neighbourhood'));
  assert(has('Opportunities: city, district and neighbourhood', 'Conclusion maps'));
  assert(has('Conclusion diagrams', 'Conclusion maps', 'supports'));
  assert(!has('Conclusion maps', 'Conclusion diagrams'));
  assert(has('Impact-effort matrices per health domain', 'Prioritized intervention locations'));
  assert(has('Prioritized intervention locations', 'Waterfront scenarios per health domain'));
  assert(has('Design vision map', 'Resident scenarios'));
  assert(has('WellWay Health Interface', 'Resident scenarios'));
  assert(!has('Resident scenarios', 'Design vision map', 'supports'));
});

test('different projects can reuse a bubble title without merging their evidence', () => {
  const context = modelContext();
  const model = context.HealthIslandsGraphModel.buildGraph({
    nodes: [
      { id: 'A', title: 'A', group: 'Master plan', projects: ['One'] },
      { id: 'B', title: 'B', group: 'Master plan', projects: ['Two'] }
    ], links: []
  });
  assert.equal(model.clusters.length, 2);
  assert.notEqual(model.membership.get('A'), model.membership.get('B'));
});

test('decision chains follow predecessors and successors without highlighting sibling branches', () => {
  const context = modelContext();
  const arrows = [
    { source: 'A', target: 'B' }, { source: 'B', target: 'C' },
    { source: 'A', target: 'Sibling' }, { source: 'Elsewhere', target: 'Other' }
  ];
  const chain = context.HealthIslandsGraphModel.decisionChain(arrows, 'B');
  assert.deepEqual([...chain.groups].sort(), ['A', 'B', 'C']);
  assert.equal(chain.arrows.size, 2);
  arrows.push({ source: 'C', target: 'B' });
  assert.equal(context.HealthIslandsGraphModel.decisionChain(arrows, 'B').groups.size, 3);
});

test('different relationship types and reverse directions do not disappear during grouping', () => {
  const context = modelContext();
  const data = {
    nodes: [{ id: 'A', title: 'A', group: 'One' }, { id: 'B', title: 'B', group: 'One' }, { id: 'C', title: 'C', group: 'Two' }],
    links: [
      { source: 'A', target: 'C', type: 'informs' },
      { source: 'B', target: 'C', type: 'informs' },
      { source: 'A', target: 'C', type: 'supports' },
      { source: 'C', target: 'A', type: 'evaluates' },
      { source: 'A', target: 'B', type: 'informs' }
    ]
  };
  const model = context.HealthIslandsGraphModel.buildGraph(data);
  assert.equal(model.arrows.length, 3);
  assert.equal(model.arrows.find(arrow => arrow.type === 'informs').evidenceLinks.length, 2);
  assert.equal(model.arrows.find(arrow => arrow.type === 'evaluates').sourceGroup.name, 'Two');
});

test('relationship layout is deterministic, keeps title clearance and avoids arrow/bubble intersections', () => {
  const context = modelContext();
  const data = context.window.HEALTH_ISLANDS_DATA;
  const model = context.HealthIslandsGraphModel.buildGraph(data);
  const second = context.HealthIslandsGraphModel.buildGraph(data);
  const neighbours = new Map(model.clusters.map(group => [group, new Set()]));
  assert.deepEqual(model.clusters.map(group => [group.key, group.x, group.y]), second.clusters.map(group => [group.key, group.x, group.y]));
  for (let left = 0; left < model.clusters.length; left++) {
    for (let right = left + 1; right < model.clusters.length; right++) {
      const a = model.clusters[left];
      const b = model.clusters[right];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      assert(distance >= a.radius + b.radius, `${a.name} overlaps ${b.name}`);
    }
  }
  for (const arrow of model.arrows) {
    const a = arrow.sourceGroup;
    const b = arrow.targetGroup;
    neighbours.get(a).add(b);
    neighbours.get(b).add(a);
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    for (const group of model.clusters) {
      if (group === a || group === b) continue;
      const projection = ((group.x - a.x) * dx + (group.y - a.y) * dy) / (dx * dx + dy * dy);
      if (projection <= 0 || projection >= 1) continue;
      const clearance = Math.hypot(group.x - a.x - projection * dx, group.y - a.y - projection * dy) - group.radius;
      assert(clearance >= 20, `${arrow.source} → ${arrow.target} crosses ${group.name}`);
    }
  }
  const connected = model.clusters.filter(group => neighbours.get(group).size);
  const gap = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) - a.radius - b.radius;
  const leafGaps = connected.filter(group => neighbours.get(group).size === 1).map(group => gap(group, [...neighbours.get(group)][0]));
  const width = Math.max(...connected.map(group => group.x + group.radius)) - Math.min(...connected.map(group => group.x - group.radius));
  const height = Math.max(...connected.map(group => group.y + group.radius)) - Math.min(...connected.map(group => group.y - group.radius));
  // The earlier layout had 3,968 units of leaf arrows and a 4.61M-unit footprint.
  // Guard the visible improvement without pinning particular bubble coordinates.
  assert(leafGaps.reduce((sum, value) => sum + value, 0) < 1200);
  assert(Math.max(...leafGaps) < 400);
  assert(model.arrows.reduce((sum, arrow) => sum + gap(arrow.sourceGroup, arrow.targetGroup), 0) < 16000);
  assert(width * height < 4000000);
  for (const group of connected) {
    for (const other of connected) {
      if (group !== other) assert(gap(group, other) >= 59.99);
    }
  }
  for (const group of model.clusters) {
    const titleHalfWidth = Math.max(...group.titleLines.map(line => line.length)) * 3.6;
    const titleBottom = group.titleLines.length * 8 + 18;
    assert(group.orbit - Math.hypot(titleHalfWidth, titleBottom) >= 13);
    if (group.members.length > 1) assert(2 * group.orbit * Math.sin(Math.PI / group.members.length) >= 17);
  }
});

test('bubble color follows the member majority, with palette order resolving ties', () => {
  const context = modelContext();
  const model = context.HealthIslandsGraphModel.buildGraph({
    buckets: [{ name: 'Analysis' }, { name: 'Design' }],
    nodes: [
      { id: 'A', group: 'Majority', bucket: 'Analysis' },
      { id: 'B', group: 'Majority', bucket: 'Design' },
      { id: 'C', group: 'Majority', bucket: 'Design' },
      { id: 'D', group: 'Tie', bucket: 'Design' },
      { id: 'E', group: 'Tie', bucket: 'Analysis' }
    ],
    links: []
  });
  assert.equal(model.clusters.find(group => group.name === 'Majority').bucket, 'Design');
  assert.equal(model.clusters.find(group => group.name === 'Tie').bucket, 'Analysis');
});
