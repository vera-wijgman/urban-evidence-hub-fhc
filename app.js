// 1. Shared state and safe rendering helpers.
import { site, projects, collections, buckets, tagGroups, relationshipTypes, peopleGroups, students } from './js/content.js';
import { displayTitle, titleOf, bucketStyle, extensionOf, isImage, previewFile, projectAttachments, filterEvidence, readFilters, tagGridUrl } from './js/evidence.js';
import { mountGraph, mountGraphPreview } from './js/graph.js?v=direct-links';
import { frameworkEntries, relatedEntries } from './js/graph-data.js';
import { createViewingHistory } from './js/viewing-history.js';

const main = document.querySelector('#main');
const detail = document.querySelector('#evidence-detail');
const mobileViewport = matchMedia('(max-width: 680px)');
const hubNav = document.querySelector('.hub-nav');
const hubLink = document.querySelector('[data-page="hub"]');
const escape = (value = '') => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const safeUrl = value => {
  if (!value) return '';
  try {
    const url = new URL(value, location.href);
    return ['http:', 'https:'].includes(url.protocol) ? escape(url.href) : '';
  } catch { return ''; }
};
const arrow = '<span aria-hidden="true">↗</span>';
// The blue square sits behind the arrowhead on shared navigation actions.
const actionArrow = (direction = 'right') => `<span class="action-arrow action-arrow--${direction}" aria-hidden="true"></span>`;
const hubUrl = (view, params = new URLSearchParams()) => `#/hub/${view}${params.size ? '?' + params : ''}`;
let evidence = [];
let links = [];
let route;
let graphView;
let fileEvidence = [];
let fileLinks = [];
let evidenceByFile = new Map();
let selectedId = null;
let returnFocus = null;
let visibleCount = 36;
let projectFiles = [];
let activeProject;
let projectHistory;
let evidenceHistory = createViewingHistory();

function cleanupGraph() {
  graphView?.destroy();
  graphView = null;
}

// 2. Shared collection cards: homepage previews and year-grouped subpages.
function collectionCard(item, type) {
  const href = `#/${type}/${item.id}`;
  const avatar = type === 'people' && item.avatar;
  const date = item.date ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(item.date)) : '';
  const metadata = type === 'people' && item.role ? `<span class="person-role">${escape(item.role)}</span>` : type === 'projects' ? `<span class="card-year">Studio ${escape(item.year)}</span>`
    : type === 'publications' && date ? `<time class="card-year" datetime="${escape(item.date)}">${date}</time>` : '';
  // Frame padded logos in SVG so the visible artwork aligns with the card title.
  const artwork = item.imageFrame
    ? `<svg class="collection-artwork" viewBox="${escape(item.imageFrame.viewBox)}" preserveAspectRatio="xMinYMid meet" aria-hidden="true"><image href="${safeUrl(item.image)}" width="${item.imageFrame.width}" height="${item.imageFrame.height}" /></svg>`
    : `<img class="collection-artwork" src="${safeUrl(item.image)}" alt="" loading="lazy" width="640" height="360" />`;
  const copyClass = item.logoOnly && item.image ? 'sr-only' : 'collection-card-copy';
  const contents = `${avatar && !item.image ? `<span class="person-avatar" style="--avatar:var(--${escape(avatar)})" aria-hidden="true"></span>` : ''}${item.image ? `<div class="collection-image${item.imageFrame ? ' partner-logo' : ''}">${artwork}</div>` : ''}
    <div class="${copyClass}"><h3>${escape(item.title)}</h3>${metadata}</div>`;
  return `<a class="collection-card${avatar ? ' person-card' : ''}" href="${href}">${contents}</a>`;
}

function collectionPreview(type, items = collections[type].items) {
  const collection = collections[type];
  return `<section class="home-section" aria-labelledby="home-${type}">
    <div class="section-heading"><h2 id="home-${type}">${collection.title}</h2><a class="text-link arrow-action" href="#/${type}">View all ${type} ${actionArrow()}</a></div>
    ${items.length ? `<div class="collection-grid">${items.slice(0, 3).map(item => collectionCard(item, type)).join('')}</div>` : `<div class="collection-empty"><span class="empty-label">${type === 'publications' ? 'Work in progress' : 'Building connections'}</span><p>${collection.empty}</p></div>`}
  </section>`;
}

function renderHome() {
  main.innerHTML = `<section class="container home-hero" aria-labelledby="home-title">
      <div class="hero-copy"><p class="eyebrow">${site.homeLabel}</p><h1 id="home-title">${site.title}</h1><p class="hero-subtitle">${site.subtitle}</p>
        <p class="home-introduction" id="hub-introduction">${escape(site.introduction)}</p>
      </div>
      <a class="graph-preview" href="#/hub/graph" aria-label="View Knowledge graph">
        <div id="home-graph-preview" class="graph-preview-canvas" aria-hidden="true"></div>
        <span class="graph-preview-bottom arrow-action">View Knowledge graph ${actionArrow()}</span>
      </a>
    </section>
    <div class="container">
      ${collectionPreview('projects')}${collectionPreview('publications')}${collectionPreview('people', students)}
    </div>`;
  mountGraphPreview(document.querySelector('#home-graph-preview'), { evidence: fileEvidence, links: fileLinks });
}

function renderCollection(type) {
  if (type === 'people') return renderPeople();
  const collection = collections[type];
  const years = [...new Set(collection.items.map(item => item.year))].sort((a, b) => b - a);
  main.innerHTML = `<div class="container collection-page"><header class="page-heading"><h1>${collection.title}</h1><p>${collection.description}</p></header>
    ${years.length ? years.map(year => `<section class="year-section"><div class="section-heading"><h2>Studio ${escape(year)}</h2><span class="muted">${collection.items.filter(item => item.year === year).length} ${type}</span></div><div class="collection-grid">${collection.items.filter(item => item.year === year).map(item => collectionCard(item, type)).join('')}</div></section>`).join('') : `<div class="collection-empty large"><span class="empty-label">${type === 'publications' ? 'Work in progress' : 'Building connections'}</span><h2>${type === 'publications' ? 'More to share, soon.' : 'Better cities, together.'}</h2><p>${collection.empty}</p></div>`}
  </div>`;
}

// People sections reuse the same content cards and profile-page renderer.
function renderPeople() {
  main.innerHTML = `<div class="container collection-page"><header class="page-heading"><h1>People</h1><p>${collections.people.description}</p></header>
    ${peopleGroups.map(group => {
      const years = [...new Set(group.items.map(item => item.year).filter(Boolean))];
      const label = group.title.toLowerCase();
      return `<section id="people-${group.id}" class="year-section"><div class="section-heading"><h2>${group.title}</h2><span class="muted">${group.id === 'students' ? years.map(year => `Studio ${year}`).join(', ') + ' · ' : ''}${group.items.length} ${group.items.length === 1 ? label.slice(0, -1) : label}</span></div><div class="collection-grid">${group.items.map(item => collectionCard(item, 'people')).join('')}</div></section>`;
    }).join('')}</div>`;
}

// Profile and publication pages share a title, introduction and return link.
function renderCollectionItem(type, id) {
  const item = collections[type].items.find(item => item.id === id);
  if (!item) return renderNotFound();
  document.title = `${item.title} | ${site.title}`;
  const category = type === 'people' ? peopleGroups.find(group => group.items.includes(item)) : null;
  const back = category ? `#/people?category=${category.id}` : `#/${type}`;
  main.innerHTML = `<article class="container collection-page"><header class="page-heading"><h1>${escape(item.title)}</h1><p>${escape(item.description)}</p></header>${item.evidenceTag ? `<p><a class="text-link" href="${tagGridUrl(item.evidenceTag)}">Browse evidence by ${escape(item.title)} →</a></p>` : ''}<a class="text-link" href="${back}">← All ${type}</a></article>`;
}

// Project viewer: large selected file, project information on the right, all files below.
function renderProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return renderNotFound();
  activeProject = project;
  document.title = `${project.title} | ${site.title}`;
  projectFiles = projectAttachments(evidence, project.tag);
  const selected = projectFiles.findIndex(entry => (entry.item.id === route.params.get('evidence') && entry.fileIndex === Number(route.params.get('file') || 0)) || entry.file.framework?.id === route.params.get('evidence'));
  projectHistory = createViewingHistory(selected);
  main.innerHTML = `<article class="container project-viewer" aria-label="${escape(project.title)}">
    <div class="project-toolbar"><a href="#/projects" class="text-link arrow-action">${actionArrow('left')} All projects</a><div class="project-controls"><button type="button" data-project-cover>Project overview</button>${historyControls(projectHistory, 'project')}<span id="project-position" role="status" aria-live="polite"></span></div>
      <div class="project-sequence" role="group" aria-label="Browse project evidence" hidden>
        <button class="arrow-action" type="button" data-project-step="-1" aria-label="Previous evidence">${actionArrow('left')} Previous</button>
        <button class="arrow-action" type="button" data-project-step="1" aria-label="Next evidence">Next ${actionArrow()}</button>
      </div>
    </div>
    <div class="project-display">
      <div id="project-info" class="project-info" role="region" aria-label="Project information"></div>
      <div id="project-stage" class="project-stage" tabindex="-1"></div>
    </div>
    <section class="project-files" aria-labelledby="project-files-title">
      <h2 id="project-files-title">Project evidence</h2>
      ${projectFiles.length ? `<div class="evidence-grid">${projectFiles.map((entry, index) => evidenceCard(entry.item, { ...entry, index })).join('')}</div>` : '<p class="muted">No project files have been added yet.</p>'}
    </section>
  </article>`;
  selectProjectFile(selected, false);
}

function selectProjectFile(index, syncUrl = true) {
  const entry = projectFiles[index];
  projectHistory.visit(entry ? index : -1);
  const { item, file, fileIndex } = entry || {};
  const project = activeProject;
  const panel = document.querySelector('#project-info');
  panel.closest('.project-display').classList.toggle('is-file-open', Boolean(entry));
  document.querySelector('#project-stage').innerHTML = entry ? renderPreview(file, file === previewFile(item) ? item.thumbnail : '') : `<img class="project-overview" src="${safeUrl(activeProject.image)}" alt="${escape(activeProject.title)} project overview" />`;
  selectedId = item?.id || null;
  panel.setAttribute('aria-label', entry ? 'Evidence details' : 'Project information');
  panel.innerHTML = entry ? evidenceDetails(item, file) : `<p class="eyebrow">Studio ${project.year}</p><h1 id="project-title">${escape(project.title)}</h1><p>${escape(project.description)}</p><h2>Project team</h2><p>${project.members.map(name => escape(name.split(' ')[0])).join(' · ')}</p>`;
  document.querySelector('.project-controls').hidden = !entry && !projectHistory.canBack && !projectHistory.canForward;
  document.querySelector('#project-position').textContent = entry ? `${index + 1} of ${projectFiles.length}` : `${projectFiles.length} files`;
  document.querySelector('.project-sequence').hidden = !entry;
  document.querySelector('[data-project-step="-1"]').disabled = index <= 0;
  document.querySelector('[data-project-step="1"]').disabled = index >= projectFiles.length - 1;
  document.querySelector('.project-controls [data-step="-1"]').disabled = !projectHistory.canBack;
  document.querySelector('.project-controls [data-step="1"]').disabled = !projectHistory.canForward;
  document.querySelectorAll('[data-project-file]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.projectFile) === index)));
  route.params = entry ? new URLSearchParams({ evidence: item.id, file: fileIndex }) : new URLSearchParams();
  if (syncUrl) history.replaceState(null, '', `#/projects/${activeProject.id}${route.params.size ? '?' + route.params : ''}`);
}

function stepProjectFile(step) {
  const index = projectHistory.current + step;
  if (projectHistory.current >= 0 && projectFiles[index]) selectProjectFile(index);
}

function closeProjectFile() {
  const card = document.querySelector('[data-project-file][aria-pressed="true"]');
  selectProjectFile(-1);
  card?.focus();
}

// 3. Hub shell and collapsible include/exclude filters.
function renderHub() {
  main.innerHTML = `<section class="hub-page${route.view === 'graph' ? ' graph-hub' : ''}">
    <header class="hub-header"><h1 id="hub-title">Hub</h1><p id="hub-description">${site.hubDescription}</p></header>
    <div class="hub-layout"><aside class="filters" aria-label="Evidence filters"><details class="filter-container" open><summary class="mobile-filter-summary">Filters</summary><div id="filter-controls"></div></details></aside>
      <div class="hub-content"><div class="hub-toolbar"><form id="evidence-search" class="search-field" role="search"><label class="sr-only" for="evidence-query">Search evidence</label><span aria-hidden="true">⌕</span><input id="evidence-query" type="search" placeholder="Search evidence…" value="${escape(route.filters.q)}" /><button type="submit" class="search-submit">Search</button></form><label class="sort-label">Sort <select id="sort"><option value="title">Title A–Z</option><option value="bucket">Bucket</option><option value="newest">Newest first</option></select></label></div>
        <div id="active-filters" class="active-filters"></div><p id="result-count" class="result-count" role="status" aria-live="polite"></p>
        <div id="hub-results"></div>
      </div>
    </div>
  </section>`;
  document.querySelector('#sort').value = route.filters.sort;
  document.querySelector('.sort-label').hidden = route.view === 'graph';
  if (mobileViewport.matches) document.querySelector('.filter-container').open = false;
  renderFilters();
  renderResults();
  const id = route.params.get('evidence');
  if (id) openDetail(id, false);
  else if (route.params.has('group')) graphView?.select(route.params.get('group'), true);
}

function renderFilters() {
  const { filters } = route;
  const counts = new Map();
  (route.view === 'graph' ? fileEvidence : evidence).forEach(item => item.tags.forEach(tag => counts.set(tag, (counts.get(tag) || 0) + 1)));
  document.querySelector('#filter-controls').innerHTML = `${route.view === 'graph' ? '<div class="filter-heading graph-filter-header"><h2>Filters</h2><label class="connection-toggle"><span>Unconnected</span><input data-graph="show-unconnected" type="checkbox" role="switch" aria-label="Show unconnected evidence" /><span class="switch-track" aria-hidden="true"></span></label></div>' : ''}
    <details class="filter-group" open><summary>Evidence buckets<span class="group-indicator" aria-hidden="true"></span></summary>
      <div class="bucket-filters">${buckets.map(bucket => `<label><input type="checkbox" style="${bucketStyle(bucket)}" data-bucket="${bucket}" ${!filters.buckets.length || filters.buckets.includes(bucket) ? 'checked' : ''} />${bucket}</label>`).join('')}</div>
    </details>
    <div class="filter-heading tag-heading"><h2>Filter by tags</h2></div>
    <div class="tag-modes" role="group" aria-label="Tag filter mode">
      <button type="button" data-tag-mode="include" aria-pressed="${route.tagMode === 'include'}">Include</button>
      <button type="button" data-tag-mode="exclude" aria-pressed="${route.tagMode === 'exclude'}">Exclude</button>
    </div>
    ${Object.entries(tagGroups).map(([group, tags], index) => `<details class="filter-group"${index === 0 ? ' open' : ''}><summary>${group}<span class="group-indicator" aria-hidden="true"></span></summary><div class="tag-options">${tags.map(tag => `<button class="tag-option" type="button" data-tag="${escape(tag)}" aria-pressed="false">
      <span class="filter-square" aria-hidden="true"></span><span>${escape(tag.replace(/^Group \d: /, ''))}</span><small class="tag-total" aria-hidden="true">${counts.get(tag) || 0}</small><span class="sr-only tag-state" hidden>Excluded</span>
    </button>`).join('')}</div></details>`).join('')}
    <button type="button" class="clear-filters" data-clear>Clear all filters <span aria-hidden="true">↺</span></button>`;
}

function renderResults() {
  const results = filterEvidence(evidence, route.filters);
  const target = document.querySelector('#hub-results');
  const query = route.view === 'grid' ? route.filters.q : '';
  document.querySelector('#hub-title').textContent = query ? `Results for “${query}”` : 'Hub';
  document.querySelector('#hub-description').hidden = Boolean(query);
  document.querySelector('#result-count').textContent = `${results.length} ${results.length === 1 ? 'piece' : 'pieces'} of evidence`;
  document.querySelectorAll('.tag-option[data-tag]').forEach(button => {
    const { tag } = button.dataset;
    const excluded = route.filters.exclude.includes(tag);
    const included = route.filters.include.includes(tag);
    button.dataset.selection = excluded ? 'exclude' : included ? 'include' : '';
    button.setAttribute('aria-pressed', String(excluded || included));
    button.querySelector('.tag-state').hidden = !excluded;
  });
  document.querySelector('#active-filters').innerHTML = ['include', 'exclude'].flatMap(mode => route.filters[mode].map(tag => `<button class="filter-chip ${mode}" type="button" data-tag="${escape(tag)}" data-mode="${mode}" aria-label="Remove ${mode} filter: ${escape(tag)}">${mode === 'exclude' ? 'Exclude: ' : ''}${escape(tag)}</button>`)).join('');
  if (route.view === 'graph') {
    if (graphView) graphView.update(route.filters);
    else graphView = mountGraph(target, { evidence: fileEvidence, links: fileLinks, filters: route.filters,
      controls: document.querySelector('#filter-controls'), drawer: detail,
      onSelect: openGraphDetail, onClear: () => closeDetail(false),
      onCount: count => { document.querySelector('#result-count').textContent = `${count} pieces of evidence`; } });
    return;
  }
  if (!results.length) {
    target.innerHTML = `<div class="no-results"><h2>No matching evidence</h2><p>Try another search or remove a filter.</p><button class="button secondary" type="button" data-clear>Clear search and filters</button></div>`;
    return;
  }
  target.innerHTML = `<div class="evidence-grid">${results.slice(0, visibleCount).map(item => evidenceCard(item)).join('')}</div>${results.length > visibleCount ? `<div class="load-more"><button type="button" class="arrow-action" data-more>Show more evidence ${actionArrow('down')}</button><span class="muted">Showing ${visibleCount} of ${results.length}</span></div>` : ''}`;
}

function evidenceCard(item, { file = previewFile(item), index, bucket = item.bucket } = {}) {
  const format = file ? extensionOf(file).toUpperCase() : 'FILE';
  const inProject = index !== undefined;
  const title = inProject ? displayTitle(file.framework?.title || file.fileName) : titleOf(item);
  const preview = file?.framework?.preview;
  const image = (file === previewFile(item) ? item.thumbnail : '') || file?.previewUrl || (isImage(file) && file.available !== false ? file.fileUrl : '');
  const artwork = preview?.kind === 'table' && preview.rows?.length ? tableThumbnail(preview.rows)
    : image ? `<img src="${safeUrl(image)}" alt="" loading="lazy" width="400" height="260" />`
    : `<span class="file-placeholder"><span class="file-glyph" aria-hidden="true">▤</span>${escape(format)}</span>`;
  const action = inProject ? `data-project-file="${index}" aria-pressed="false"` : `data-evidence="${escape(item.id)}" aria-haspopup="dialog"`;
  return `<button type="button" class="evidence-card" style="${bucketStyle(bucket)}" ${action} aria-label="${inProject ? 'Preview' : 'View details:'} ${escape(title)}">
    <span class="evidence-thumbnail">${artwork}</span>
    <span class="evidence-card-copy"><span class="bucket-badge">${escape(bucket)}</span><span class="evidence-title">${escape(title)}</span></span>
  </button>`;
}

// Spreadsheet tiles show a small excerpt of the saved preview, as phrasing content inside the button.
function tableThumbnail(rows) {
  return `<span class="table-thumbnail" aria-hidden="true">${rows.slice(0, 6).map(row =>
    `<span>${row.slice(0, 5).map(cell => `<span>${escape(cell)}</span>`).join('')}</span>`).join('')}</span>`;
}

function updateFilters() {
  const params = new URLSearchParams();
  const filters = route.filters;
  if (filters.q !== (route.params.get('q') || '')) document.querySelector('#global-search').value = filters.q;
  if (filters.q) params.set('q', filters.q);
  if (filters.sort !== 'title') params.set('sort', filters.sort);
  for (const [key, values] of [['bucket', filters.buckets], ['include', filters.include], ['exclude', filters.exclude]]) values.forEach(value => params.append(key, value));
  if (selectedId) params.set('evidence', selectedId);
  if (route.params.has('group')) params.set('group', route.params.get('group'));
  route.params = params;
  history.replaceState(null, '', hubUrl(route.view, params));
  syncHubLinks();
  visibleCount = 36;
  renderResults();
}

// 4. Evidence drawer: file previews, metadata, tags and actual directed links.
function renderPreview(file, thumbnail = '') {
  if (file?.available === false) {
    const note = 'The original file is awaiting publication.';
    return file.previewUrl ? `<div class="file-preview"><img src="${safeUrl(file.previewUrl)}" alt="Preview of ${escape(displayTitle(file.fileName))}" /><span class="preview-caption">Preview only · ${note}</span></div>` : `<div class="file-unavailable">${note}</div>`;
  }
  if (!file?.fileUrl) return '<div class="file-unavailable">A published file has not been attached to this record yet.</div>';
  const url = safeUrl(file.fileUrl);
  const name = escape(displayTitle(file.framework?.title || file.fileName || file.title || 'Evidence file'));
  const preview = file.framework?.preview;
  if (preview?.kind === 'table') return `<div class="excerpt-preview"><table>${preview.rows.map(row => `<tr>${row.map(value => `<td>${escape(value)}</td>`).join('')}</tr>`).join('')}</table><p class="preview-caption">${escape(preview.caption || '')}</p></div>`;
  if (preview?.kind === 'text') return `<div class="excerpt-preview"><pre>${escape(preview.text)}</pre><p class="preview-caption">${escape(preview.caption || '')}</p></div>`;
  // Mobile PDF viewers vary: show the cached first page with a link to the original.
  const mobilePdf = extensionOf(file) === 'pdf' && mobileViewport.matches && thumbnail;
  if (isImage(file) || mobilePdf) return `<a class="file-preview" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${name}"><img src="${mobilePdf ? safeUrl(thumbnail) : url}" alt="${name}" /><span class="preview-caption">${mobilePdf ? 'Open PDF' : 'Open full image'} ${arrow}</span></a>`;
  if (extensionOf(file) === 'pdf') return `<iframe class="pdf-preview" title="Preview: ${name}" src="${url}#toolbar=0" loading="lazy"></iframe>`;
  if (preview?.kind === 'document') return `<iframe class="pdf-preview" title="Preview: ${name}" src="${url}" loading="lazy" sandbox="allow-scripts"></iframe>`;
  if (['mp4', 'webm', 'mov'].includes(extensionOf(file))) return `<video class="video-preview" controls preload="metadata" src="${url}"></video>`;
  return `<div class="file-unavailable"><span class="file-glyph" aria-hidden="true">▤</span><strong>${name}</strong><p>Open the file to view its contents.</p></div>`;
}

// Simplified file/bubble link lists contain names and recorded relationships only.
function linkedItemsSection(label, entries, attribute = 'data-evidence') {
  if (!entries.length) return '';
  const ordered = entries.map(({ id, title }) => ({ id, title: displayTitle(title) }))
    .sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }));
  return `<section class="detail-section"><h3>${escape(label)} (${entries.length})</h3><div class="linked-items">${ordered.map(entry => `<button type="button" ${attribute}="${escape(entry.id)}"><strong>${escape(entry.title)}</strong></button>`).join('')}</div></section>`;
}

// History follows actual selections, with independent project and Hub sessions.
function historyControls(history, scope) {
  return `<div class="viewing-history" role="group" aria-label="Evidence viewing history"><button class="arrow-action" type="button" data-view-history="${scope}" data-step="-1" aria-label="Back to previously viewed evidence"${history.canBack ? '' : ' disabled'}>${actionArrow('left')} Back</button><button class="arrow-action" type="button" data-view-history="${scope}" data-step="1" aria-label="Forward to next viewed evidence"${history.canForward ? '' : ' disabled'}>Forward ${actionArrow()}</button></div>`;
}

// Shared file details; project pages already show the preview on their main stage.
function evidenceDetails(item, file = previewFile(item)) {
  const entry = file?.framework;
  const tags = entry?.tags || item.tags;
  const fileBuckets = entry?.buckets.length ? entry.buckets : item.buckets || [item.bucket];
  const description = (entry ? entry.description : item.description)?.trim();
  const related = relatedEntries(entry?.id || item.id, entry ? fileEvidence : evidence, entry ? fileLinks : links, relationshipTypes);
  const selectFiles = item.files.length > 1 && !(route.page === 'hub' && route.view === 'graph');
  return `<div class="detail-top"><span class="eyebrow">Evidence details</span><button type="button" class="close-detail" data-close aria-label="Close evidence details">×</button></div>
    ${route.page === 'hub' ? historyControls(evidenceHistory, 'evidence') : ''}
    <h2 id="detail-title" tabindex="-1">${escape(displayTitle(entry?.title || item.title))}</h2>${route.page === 'projects' ? '' : `<div id="file-preview">${renderPreview(file, file === previewFile(item) ? item.thumbnail : '')}</div>`}
    ${selectFiles ? `<label class="file-select-label">Attached files<select id="file-select">${item.files.map((attached, index) => `<option value="${index}"${attached === file ? ' selected' : ''}>${escape(displayTitle(attached.fileName || attached.title))}</option>`).join('')}</select></label>` : ''}
    <div id="file-action">${file?.fileUrl && file.available !== false ? `<a class="button secondary file-open" href="${safeUrl(file.fileUrl)}" target="_blank" rel="noopener noreferrer">Open file ${arrow}</a>` : ''}</div>
    ${description ? `<section class="detail-section"><h3>Description</h3><p>${escape(description)}</p></section>` : ''}
    <section class="detail-section"><h3>${fileBuckets.length === 1 ? 'Bucket' : 'Buckets'}</h3><p>${escape(fileBuckets.join(', '))}</p></section>
    <section class="detail-section"><h3>Tags</h3><div class="detail-tags">${tags.map(tag => `<a class="tag" href="${escape(tagGridUrl(tag))}">${escape(tag)}</a>`).join('') || '<p class="muted">No tags recorded.</p>'}</div></section>
    ${related.map(section => linkedItemsSection(section.label, section.entries)).join('')}`;
}

function showDetail(contents, focus = true) {
  if (detail.hidden) returnFocus = document.activeElement;
  detail.innerHTML = contents;
  detail.setAttribute('aria-labelledby', 'detail-title');
  detail.hidden = false;
  document.body.classList.add('detail-open');
  syncDrawerMode();
  detail.scrollTop = 0;
  if (focus || mobileViewport.matches) document.querySelector('#detail-title').focus({ preventScroll: true });
}

// Graph bubbles use this same drawer, with members/relationships instead of file metadata.
function openGraphDetail(group, node, arrows) {
  route.params.delete('evidence');
  route.params.delete('group');
  selectedId = node?.id || null;
  route.params.set(node ? 'evidence' : 'group', node?.id || group.key);
  history.replaceState(null, '', hubUrl('graph', route.params));
  syncHubLinks();
  if (node) {
    evidenceHistory.visit(node.id);
    return showDetail(evidenceDetails(node.item, node.file));
  }
  const relations = [false, true].flatMap(backward => relationshipTypes.map(type => {
    const entries = arrows.filter(arrow => arrow.type === type.id && (backward ? arrow.target : arrow.source) === group.key)
      .map(arrow => backward ? arrow.sourceGroup : arrow.targetGroup).map(other => ({ id: other.key, title: other.name }));
    return linkedItemsSection(backward ? type.incoming : type.label, entries, 'data-graph-group');
  })).join('');
  showDetail(`<div class="detail-top"><span class="eyebrow">Evidence group</span><button type="button" class="close-detail" data-close aria-label="Close evidence details">×</button></div><h2 id="detail-title" tabindex="-1">${escape(displayTitle(group.name))}</h2>${linkedItemsSection('Evidence in this bubble', group.members)}${relations}`);
}

function openDetail(id, focus = true, fileIndex) {
  const exact = evidenceByFile.get(id);
  const item = exact?.item || evidence.find(entry => entry.id === id);
  if (!item) return;
  const file = exact?.file || item.files[fileIndex] || previewFile(item);
  if (route.page === 'projects') {
    const index = projectFiles.findIndex(entry => entry.item === item && entry.file === file);
    if (index >= 0) selectProjectFile(index);
    else location.hash = hubUrl('grid', new URLSearchParams({ evidence: file?.framework?.id || id }));
    return;
  }
  if (route.page === 'hub' && route.view === 'graph' && graphView?.select(file?.framework?.id || id, true)) return;
  selectedId = file?.framework?.id || id;
  evidenceHistory.visit(selectedId);
  route.params.set('evidence', selectedId);
  route.params.delete('group');
  history.replaceState(null, '', hubUrl(route.view, route.params));
  syncHubLinks();
  showDetail(evidenceDetails(item, file), focus);
}

function closeDetail(restoreFocus = true, syncUrl = true) {
  graphView?.clear(false);
  detail.hidden = true;
  detail.innerHTML = '';
  document.body.classList.remove('detail-open');
  syncDrawerMode();
  selectedId = null;
  if (syncUrl && route?.page === 'hub') {
    route.params.delete('evidence');
    route.params.delete('group');
    history.replaceState(null, '', hubUrl(route.view, route.params));
    syncHubLinks();
  }
  if (restoreFocus && returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
}

// The drawer is modal on small screens; keep background content out of keyboard focus.
function syncDrawerMode() {
  const modal = !detail.hidden && mobileViewport.matches;
  document.querySelectorAll('.site-header, #main, .site-footer, .skip-link').forEach(element => { element.inert = modal; });
  detail.setAttribute('aria-modal', String(modal));
}

// 5. Site pages and URL routing. Hash routes work on any static GitHub host.
function renderNotFound() {
  main.innerHTML = '<div class="container no-results"><h1>Page not found</h1><p>This page may have moved.</p><a class="button" href="#/home">Return home →</a></div>';
}

// The header submenu shares the current Hub filters and selected evidence.
function syncHubLinks() {
  document.querySelectorAll('#hub-subnav a').forEach(link => {
    link.href = hubUrl(link.dataset.view, route.page === 'hub' ? route.params : new URLSearchParams());
    if (route.page === 'hub' && link.dataset.view === route.view) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function setHubMenu(open) {
  open = open || route?.page === 'hub';
  hubNav.classList.toggle('is-open', open);
  hubLink.setAttribute('aria-expanded', String(open));
}

function renderRoute() {
  cleanupGraph();
  closeDetail(false, false);
  const [path, query = ''] = location.hash.slice(1).split('?');
  const parts = (path || '/home').split('/').filter(Boolean);
  const params = new URLSearchParams(query);
  // Saved search and List links open the same evidence grid.
  if (parts[0] === 'search' || (parts[0] === 'hub' && parts[1] === 'list')) {
    parts[0] = 'hub';
    parts[1] = 'grid';
    history.replaceState(null, '', hubUrl('grid', params));
  }
  if (parts[0] === 'partners') {
    parts[0] = 'people';
    if (!parts[1]) params.set('category', 'partners');
    history.replaceState(null, '', '#/people' + (parts[1] ? '/' + parts[1] : '') + (params.size ? '?' + params : ''));
  }
  if (route?.page !== 'hub' || parts[0] !== 'hub') evidenceHistory = createViewingHistory();
  route = { page: parts[0], view: parts[1] === 'grid' ? 'grid' : 'graph', params, filters: readFilters(params), tagMode: 'include' };
  visibleCount = 36;
  document.querySelectorAll('#main-nav [data-page]').forEach(link => {
    if (link.dataset.page === route.page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  syncHubLinks();
  setHubMenu(hubNav.matches(':hover') && !mobileViewport.matches);
  document.querySelector('#main-nav').classList.remove('is-open');
  document.querySelector('.menu-button').setAttribute('aria-expanded', 'false');
  document.querySelector('#global-search').value = params.get('q') || '';
  const pageTitles = { home: site.subtitle, hub: 'Hub' };
  document.title = `${collections[route.page]?.title || pageTitles[route.page] || 'Page not found'} | ${site.title}`;
  if (route.page === 'home') renderHome();
  else if (route.page === 'hub') renderHub();
  else if (route.page === 'projects' && parts[1]) renderProject(parts[1]);
  else if (collections[route.page] && parts[1]) renderCollectionItem(route.page, parts[1]);
  else if (collections[route.page]) renderCollection(route.page);
  else renderNotFound();
  const peopleSection = route.page === 'people' && document.getElementById(`people-${params.get('category')}`);
  if (peopleSection) peopleSection.scrollIntoView({ block: 'start' });
  else window.scrollTo(0, 0);
}

// 6. Delegated interactions: one handler per event, with no per-card listeners.
document.addEventListener('click', event => {
  if (!event.target.closest('.hub-nav')) setHubMenu(false);
  if (event.target.closest('.skip-link')) {
    event.preventDefault();
    main.focus();
    return;
  }
  const button = event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-reload')) location.reload();
  else if (button.matches('.menu-button')) {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    document.querySelector('#main-nav').classList.toggle('is-open', open);
  } else if (button.hasAttribute('data-project-file')) {
    selectProjectFile(Number(button.dataset.projectFile));
    document.querySelector('.project-viewer').scrollIntoView({ block: 'start' });
    document.querySelector('#project-stage').focus({ preventScroll: true });
  } else if (button.hasAttribute('data-project-step')) stepProjectFile(Number(button.dataset.projectStep));
  else if (button.hasAttribute('data-project-cover')) selectProjectFile(-1);
  else if (button.hasAttribute('data-view-history')) {
    const project = button.dataset.viewHistory === 'project';
    const value = (project ? projectHistory : evidenceHistory).move(Number(button.dataset.step));
    if (project) selectProjectFile(value);
    else openDetail(value);
  } else if (button.hasAttribute('data-graph-group')) graphView?.select(button.dataset.graphGroup, true);
  else if (button.hasAttribute('data-evidence')) openDetail(button.dataset.evidence);
  else if (button.hasAttribute('data-close')) {
    if (route.page === 'projects') closeProjectFile();
    else closeDetail();
  } else if (button.hasAttribute('data-more')) {
    visibleCount += 36;
    renderResults();
    document.querySelectorAll('.evidence-card')[visibleCount - 36]?.focus({ preventScroll: true });
  } else if (button.hasAttribute('data-clear')) {
    route.filters = readFilters(new URLSearchParams());
    route.tagMode = 'include';
    document.querySelector('#evidence-query').value = '';
    document.querySelector('#sort').value = 'title';
    cleanupGraph();
    closeDetail(false);
    renderFilters();
    updateFilters();
  } else if (button.hasAttribute('data-tag-mode')) {
    route.tagMode = button.dataset.tagMode;
    document.querySelectorAll('[data-tag-mode]').forEach(control => control.setAttribute('aria-pressed', String(control === button)));
  } else if (button.hasAttribute('data-tag')) {
    const { tag, mode = route.tagMode } = button.dataset;
    const other = mode === 'include' ? 'exclude' : 'include';
    const values = route.filters[mode];
    route.filters[mode] = values.includes(tag) ? values.filter(value => value !== tag) : [...values, tag];
    route.filters[other] = route.filters[other].filter(value => value !== tag);
    updateFilters();
  }
});

// Hover reveals the view links; Hub pages keep them open, including on touch screens.
// Keep the three links centred under Hub while their background spans the header.
const headerObserver = new ResizeObserver(() => {
  const header = document.querySelector('.site-header').getBoundingClientRect();
  const hub = hubLink.getBoundingClientRect();
  hubNav.style.setProperty('--hub-centre', `${hub.left - header.left + hub.width / 2}px`);
});
headerObserver.observe(document.querySelector('.site-header'));
headerObserver.observe(hubLink);
hubNav.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse' && !mobileViewport.matches) setHubMenu(true); });
hubNav.addEventListener('pointerleave', () => { if (!hubNav.querySelector(':focus-visible')) setHubMenu(false); });
hubNav.addEventListener('focusin', () => setHubMenu(true));
hubNav.addEventListener('focusout', event => { if (!hubNav.contains(event.relatedTarget)) setHubMenu(false); });
hubNav.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' && event.target === hubLink) {
    event.preventDefault();
    setHubMenu(true);
    document.querySelector('#hub-subnav a').focus();
  }
});

document.addEventListener('submit', event => {
  if (event.target.id === 'site-search') {
    event.preventDefault();
    const query = document.querySelector('#global-search').value.trim();
    location.hash = hubUrl('grid', new URLSearchParams(query ? { q: query } : undefined));
  } else if (event.target.id === 'evidence-search') {
    event.preventDefault();
    route.filters.q = document.querySelector('#evidence-query').value.trim();
    updateFilters();
  }
});

document.addEventListener('change', event => {
  if (event.target.hasAttribute('data-bucket')) {
    const checked = [...document.querySelectorAll('[data-bucket]:checked')].map(input => input.dataset.bucket);
    // A sentinel distinguishes "no buckets" from the default "all buckets".
    route.filters.buckets = checked.length === buckets.length ? [] : checked.length ? checked : ['none'];
    updateFilters();
  } else if (event.target.id === 'sort') {
    route.filters.sort = event.target.value;
    updateFilters();
  } else if (event.target.id === 'file-select') {
    if (route.page === 'projects') {
      selectProjectFile(projectFiles.findIndex(entry => entry.item.id === selectedId && entry.fileIndex === Number(event.target.value)));
      document.querySelector('#file-select')?.focus({ preventScroll: true });
      return;
    }
    const item = evidenceByFile.get(selectedId)?.item || evidence.find(item => item.id === selectedId);
    const scrollTop = detail.scrollTop;
    openDetail(item.id, false, Number(event.target.value));
    detail.scrollTop = scrollTop;
    document.querySelector('#file-select')?.focus({ preventScroll: true });
  }
});

// Failed external previews keep an explicit fallback and the original file link.
document.addEventListener('error', event => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) return;
  image.hidden = true;
  const note = document.createElement('span');
  note.className = 'preview-fallback';
  note.textContent = 'Preview unavailable';
  image.parentElement.append(note);
}, true);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && hubNav.classList.contains('is-open') && route.page !== 'hub') {
    hubLink.focus();
    setHubMenu(false);
    return;
  }
  if (route.page === 'projects' && selectedId) {
    if (event.key === 'Escape') closeProjectFile();
    else if (['ArrowLeft', 'ArrowRight'].includes(event.key)
      && !event.altKey && !event.ctrlKey && !event.metaKey && !event.target.closest('input, select, textarea, video')) {
      event.preventDefault();
      stepProjectFile(event.key === 'ArrowRight' ? 1 : -1);
    }
  }
  if (detail.hidden) return;
  if (event.key === 'Escape') closeDetail();
  if (event.key === 'Tab' && mobileViewport.matches) {
    const controls = [...detail.querySelectorAll('a[href], button, select, iframe, video[controls]')].filter(element => element.getClientRects().length);
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && (document.activeElement === first || !controls.includes(document.activeElement))) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  }
});
mobileViewport.addEventListener('change', event => {
  const filters = document.querySelector('.filter-container');
  if (filters) filters.open = !event.matches;
  syncDrawerMode();
});
window.addEventListener('hashchange', renderRoute);

// 7. Load the generated evidence snapshot; the public site needs no build tools.
try {
  const response = await fetch('data/evidence.json');
  if (!response.ok) throw new Error(`Evidence request failed (${response.status})`);
  const data = await response.json();
  evidence = data.items;
  links = data.links;
  fileLinks = data.fileLinks;
  fileEvidence = frameworkEntries(evidence);
  evidenceByFile = new Map(fileEvidence.map(entry => [entry.id, entry]));
  renderRoute();
} catch (error) {
  main.innerHTML = '<div class="container no-results"><h1>The collection could not be loaded</h1><p>Please reload the page to try again.</p><button class="button" type="button" data-reload>Reload page</button></div>';
  console.error(error);
}
