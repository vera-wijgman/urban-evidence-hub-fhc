// 1. Shared state and safe rendering helpers.
import { site, projects, collections, buckets, tagGroups } from './js/content.js';
import { titleOf, bucketStyle, extensionOf, isImage, previewFile, projectAttachments, filterEvidence, readFilters } from './js/evidence.js';
import { mountGraph } from './js/graph.js';

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
const pill = tag => `<span class="tag">${escape(tag)}</span>`;
const bucketLabel = item => `<span class="bucket-label" style="${bucketStyle(item)}"><i aria-hidden="true"></i>${escape(item.bucket)}</span>`;
const hubUrl = (view, params = new URLSearchParams()) => `#/hub/${view}${params.size ? '?' + params : ''}`;
let evidence = [];
let links = [];
let route;
let graphCleanup = () => {};
let selectedId = null;
let returnFocus = null;
let visibleCount = 36;
let projectFiles = [];
let activeProject;

// 2. Shared collection cards: homepage previews and year-grouped subpages.
function collectionCard(item, type) {
  const href = type === 'projects' ? `#/projects/${item.id}` : safeUrl(item.url);
  const date = item.date ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(item.date)) : '';
  const metadata = type === 'projects' ? `<span class="card-year">Studio ${escape(item.year)}</span>`
    : type === 'publications' && date ? `<time class="card-year" datetime="${escape(item.date)}">${date}</time>` : '';
  const contents = `${item.image ? `<div class="collection-image"><img src="${safeUrl(item.image)}" alt="" loading="lazy" width="640" height="360" /></div>` : ''}
    <div class="collection-card-copy"><h3>${escape(item.title)}</h3>${metadata}</div>`;
  return href ? `<a class="collection-card" href="${href}"${type !== 'projects' ? ' target="_blank" rel="noopener noreferrer"' : ''}>${contents}</a>` : `<article class="collection-card">${contents}</article>`;
}

function collectionPreview(type) {
  const collection = collections[type];
  return `<section class="home-section" aria-labelledby="home-${type}">
    <div class="section-heading"><h2 id="home-${type}">${collection.title}</h2><a class="text-link" href="#/${type}">View all ${type} <span aria-hidden="true">→</span></a></div>
    ${collection.items.length ? `<div class="collection-grid">${collection.items.slice(0, 3).map(item => collectionCard(item, type)).join('')}</div>` : `<div class="collection-empty"><span class="empty-label">${type === 'publications' ? 'Work in progress' : 'Building connections'}</span><p>${collection.empty}</p></div>`}
  </section>`;
}

function renderHome() {
  main.innerHTML = `<div class="container home-page">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="hero-copy"><p class="eyebrow">${site.homeLabel}</p><h1 id="home-title">${site.title}</h1><p class="hero-subtitle">${site.subtitle}</p><p class="hero-description">${site.description}</p>
        <figure class="hero-image"><img src="${site.heroImage}" alt="A vision of a healthy city with green buildings, public transport and connected urban systems." width="1792" height="1024" fetchpriority="high" /></figure>
      </div>
      <div class="graph-preview">
        <div class="graph-preview-empty"><a class="graph-centre-link" href="#/hub/graph">Knowledge Graph ${arrow}</a></div>
        <a class="graph-preview-bottom" href="#/hub/graph">Open Knowledge Graph <span aria-hidden="true">→</span></a>
      </div>
    </section>
    ${collectionPreview('projects')}${collectionPreview('publications')}${collectionPreview('partners')}
  </div>`;
}

function renderCollection(type) {
  const collection = collections[type];
  const years = [...new Set(collection.items.map(item => item.year))].sort((a, b) => b - a);
  main.innerHTML = `<div class="container collection-page"><header class="page-heading"><h1>${collection.title}</h1><p>${collection.description}</p></header>
    ${years.length ? years.map(year => `<section class="year-section"><div class="section-heading"><h2>Studio ${escape(year)}</h2><span class="muted">${collection.items.filter(item => item.year === year).length} ${type}</span></div><div class="collection-grid">${collection.items.filter(item => item.year === year).map(item => collectionCard(item, type)).join('')}</div></section>`).join('') : `<div class="collection-empty large"><span class="empty-label">${type === 'publications' ? 'Work in progress' : 'Building connections'}</span><h2>${type === 'publications' ? 'More to share, soon.' : 'Better cities, together.'}</h2><p>${collection.empty}</p></div>`}
  </div>`;
}

// Project viewer: large selected file, project information on the right, all files below.
function renderProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return renderNotFound();
  activeProject = project;
  document.title = `${project.title} | ${site.title}`;
  projectFiles = projectAttachments(evidence, project.tag);
  main.innerHTML = `<article class="project-viewer" aria-label="${escape(project.title)}">
    <div class="project-toolbar"><a href="#/projects" class="text-link">← All projects</a><div class="project-controls"><button type="button" data-project-cover>Project overview</button><button type="button" data-project-step="-1" aria-label="Previous file">←</button><span id="project-position" role="status" aria-live="polite"></span><button type="button" data-project-step="1" aria-label="Next file">→</button></div></div>
    <div id="project-stage" class="project-stage"></div>
    <aside id="project-info" class="project-info" aria-label="Project information"></aside>
    <nav class="project-filmstrip" aria-label="Project files by evidence bucket">${buckets.map(bucket => {
      const files = projectFiles.map((entry, index) => ({ ...entry, index })).filter(entry => entry.item.bucket === bucket);
      return files.length ? `<details class="filmstrip-group" open><summary><h2>${bucket} <span>(${files.length})</span></h2></summary><div class="filmstrip-files">${files.map(({ item, file, index }) => {
        const thumbnail = file.previewUrl || (isImage(file) && file.available !== false ? file.fileUrl : item.thumbnail);
        return `<button type="button" class="project-thumbnail" style="${bucketStyle(item)}" data-project-file="${index}" aria-pressed="false" aria-label="Preview ${escape(file.fileName)}" title="${escape(file.fileName)}">${thumbnail ? `<img src="${safeUrl(thumbnail)}" alt="" loading="lazy" width="120" height="78" />` : `<span class="file-placeholder">${escape(extensionOf(file).toUpperCase())}</span>`}<span>${escape(file.fileName)}</span></button>`;
      }).join('')}</div></details>` : '';
    }).join('') || '<p class="muted">No project files have been added yet.</p>'}</nav>
  </article>`;
  const selected = projectFiles.findIndex(entry => entry.item.id === route.params.get('evidence') && entry.fileIndex === Number(route.params.get('file') || 0));
  selectProjectFile(selected, false);
}

function selectProjectFile(index, syncUrl = true) {
  const entry = projectFiles[index];
  const { item, file, fileIndex } = entry || {};
  const project = activeProject;
  const panel = document.querySelector('#project-info');
  document.querySelector('#project-stage').innerHTML = entry ? renderPreview(file, file === previewFile(item) ? item.thumbnail : '') : `<img class="project-overview" src="${safeUrl(activeProject.image)}" alt="${escape(activeProject.title)} project overview" />`;
  selectedId = item?.id || null;
  panel.classList.toggle('evidence-info', Boolean(entry));
  panel.setAttribute('aria-label', entry ? 'Evidence details' : 'Project information');
  panel.innerHTML = entry ? evidenceDetails(item, file) : `<img class="project-info-image" src="${safeUrl(project.image)}" alt="${escape(project.title)} project visual" /><p class="eyebrow">Studio ${project.year}</p><h1 id="project-title">${escape(project.title)}</h1><p>${escape(project.description)}</p><h2>Project team</h2><p>${project.members.map(escape).join(' · ')}</p><a class="text-link" href="${hubUrl('grid', new URLSearchParams({ include: project.tag }))}">Browse in the Hub →</a>`;
  panel.scrollTop = 0;
  document.querySelector('#project-position').textContent = entry ? `${index + 1} of ${projectFiles.length}` : `${projectFiles.length} files`;
  document.querySelector('[data-project-step="-1"]').disabled = index < 1;
  document.querySelector('[data-project-step="1"]').disabled = index >= projectFiles.length - 1;
  document.querySelectorAll('[data-project-file]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.projectFile) === index)));
  if (entry) {
    const thumbnail = document.querySelector(`[data-project-file="${index}"]`);
    thumbnail.closest('details').open = true;
    thumbnail.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  route.params = entry ? new URLSearchParams({ evidence: item.id, file: fileIndex }) : new URLSearchParams();
  if (syncUrl) history.replaceState(null, '', `#/projects/${activeProject.id}${route.params.size ? '?' + route.params : ''}`);
}

// 3. Hub shell and collapsible include/exclude filters.
function renderHub() {
  main.innerHTML = `<section class="hub-page">
    <header class="hub-header"><h1>Hub</h1><p>${site.hubDescription}</p></header>
    <div class="hub-layout"><aside class="filters" aria-label="Evidence filters"><details class="filter-container" open><summary class="mobile-filter-summary">Filters</summary><div id="filter-controls"></div></details></aside>
      <div class="hub-content"><div class="hub-toolbar"><form id="evidence-search" class="search-field" role="search"><label class="sr-only" for="evidence-query">Search evidence</label><span aria-hidden="true">⌕</span><input id="evidence-query" type="search" placeholder="Search evidence…" value="${escape(route.filters.q)}" /><button type="submit" class="search-submit">Search</button></form><label class="sort-label">Sort <select id="sort"><option value="title">Title A–Z</option><option value="bucket">Bucket</option><option value="newest">Newest first</option></select></label></div>
        <div id="active-filters" class="active-filters"></div><p id="result-count" class="result-count" role="status" aria-live="polite"></p>
        <div id="hub-results"></div>
      </div>
    </div>
  </section>`;
  document.querySelector('#sort').value = route.filters.sort;
  if (mobileViewport.matches) document.querySelector('.filter-container').open = false;
  renderFilters();
  renderResults();
  const id = route.params.get('evidence');
  if (id) openDetail(id, false);
}

function renderFilters() {
  const { filters } = route;
  const counts = new Map();
  evidence.forEach(item => item.tags.forEach(tag => counts.set(tag, (counts.get(tag) || 0) + 1)));
  document.querySelector('#filter-controls').innerHTML = `<div class="filter-heading"><h2>Evidence buckets</h2><button type="button" class="text-button" data-clear>Reset</button></div>
    <div class="bucket-filters">${buckets.map(bucket => `<label style="--bucket:var(--${bucket.toLowerCase()})"><span class="bucket-dot" aria-hidden="true"></span><span>${bucket}</span><input type="checkbox" data-bucket="${bucket}" ${!filters.buckets.length || filters.buckets.includes(bucket) ? 'checked' : ''} /></label>`).join('')}</div>
    <div class="filter-heading tag-heading"><h2>Filter by tags</h2></div><p class="filter-help">Include or exclude a tag.</p>
    ${Object.entries(tagGroups).map(([group, tags], index) => `<details class="filter-group"${index === 0 ? ' open' : ''}><summary>${group}<span class="group-indicator" aria-hidden="true">+</span></summary><div class="tag-options">${tags.map(tag => `<div class="tag-option"><span>${escape(tag.replace(/^Group \d: /, ''))}<small>${counts.get(tag) || 0}</small></span><div class="tag-actions"><button type="button" data-tag="${escape(tag)}" data-mode="include" aria-pressed="${filters.include.includes(tag)}" aria-label="Include ${escape(tag)}" title="Include ${escape(tag)}">+</button><button type="button" data-tag="${escape(tag)}" data-mode="exclude" aria-pressed="${filters.exclude.includes(tag)}" aria-label="Exclude ${escape(tag)}" title="Exclude ${escape(tag)}">−</button></div></div>`).join('')}</div></details>`).join('')}
    <button type="button" class="clear-filters" data-clear>Clear all filters <span aria-hidden="true">↺</span></button>`;
}

function renderResults() {
  graphCleanup();
  const results = filterEvidence(evidence, route.filters);
  const target = document.querySelector('#hub-results');
  document.querySelector('#result-count').textContent = `${results.length} ${results.length === 1 ? 'piece' : 'pieces'} of evidence`;
  document.querySelector('#active-filters').innerHTML = ['include', 'exclude'].flatMap(mode => route.filters[mode].map(tag => `<button class="filter-chip ${mode}" type="button" data-tag="${escape(tag)}" data-mode="${mode}">${mode === 'exclude' ? 'Exclude: ' : ''}${escape(tag)} <span aria-hidden="true">×</span></button>`)).join('');
  if (route.view === 'graph') {
    graphCleanup = mountGraph(target, { evidence: results, links, filters: route.filters, onSelect: openDetail });
    return;
  }
  if (!results.length) {
    target.innerHTML = `<div class="no-results"><h2>No matching evidence</h2><p>Try another search or remove a filter.</p><button class="button secondary" type="button" data-clear>Clear search and filters</button></div>`;
    return;
  }
  target.innerHTML = `<div class="evidence-${route.view}">${results.slice(0, visibleCount).map(item => evidenceCard(item, route.view)).join('')}</div>${results.length > visibleCount ? `<div class="load-more"><button type="button" class="button secondary" data-more>Show more evidence</button><span class="muted">Showing ${Math.min(visibleCount, results.length)} of ${results.length}</span></div>` : ''}`;
}

function evidenceCard(item, view) {
  const file = previewFile(item);
  const format = file ? extensionOf(file).toUpperCase() : 'FILE';
  const image = item.thumbnail || file?.previewUrl || (isImage(file) && file.available !== false ? file.fileUrl : '');
  return `<button type="button" class="evidence-card ${view}-card" style="${bucketStyle(item)}" data-evidence="${escape(item.id)}" aria-haspopup="dialog" aria-label="View details: ${escape(titleOf(item))}">
    ${view === 'grid' ? `<span class="evidence-thumbnail">${image ? `<img src="${safeUrl(image)}" alt="" loading="lazy" width="400" height="260" />` : `<span class="file-placeholder"><span class="file-glyph" aria-hidden="true">▤</span>${escape(format)}</span>`}<span class="thumbnail-details">${bucketLabel(item)}<span class="hover-project">${escape(item.tags.filter(tag => tag.startsWith('Group ')).map(tag => tag.replace(/^Group \d: /, '')).join(' · '))}</span><span class="detail-tags">${item.tags.filter(tag => !tag.startsWith('Group ')).map(pill).join('')}</span></span></span>` : ''}
    <span class="evidence-card-copy">${view === 'list' ? bucketLabel(item) : ''}<span class="evidence-title">${escape(titleOf(item))}</span>${view === 'list' ? `<span class="evidence-description">${escape(item.description || item.tags.filter(tag => tag.startsWith('Group ')).join(' · ').replace(/Group \d: /g, '') || site.studio)}</span><span class="card-tags">${item.tags.filter(tag => !tag.startsWith('Group ')).slice(0, 4).map(pill).join('')}</span><span class="card-open" aria-hidden="true">↗</span>` : ''}</span>
  </button>`;
}

function updateFilters() {
  const params = new URLSearchParams();
  const filters = route.filters;
  if (filters.q) params.set('q', filters.q);
  if (filters.sort !== 'title') params.set('sort', filters.sort);
  for (const [key, values] of [['bucket', filters.buckets], ['include', filters.include], ['exclude', filters.exclude]]) values.forEach(value => params.append(key, value));
  if (selectedId) params.set('evidence', selectedId);
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
    return file.previewUrl ? `<div class="file-preview"><img src="${safeUrl(file.previewUrl)}" alt="Preview of ${escape(file.fileName)}" /><span class="preview-caption">Preview only · ${note}</span></div>` : `<div class="file-unavailable">${note}</div>`;
  }
  if (!file?.fileUrl) return '<div class="file-unavailable">A published file has not been attached to this record yet.</div>';
  const url = safeUrl(file.fileUrl);
  const name = escape(file.fileName || file.title || 'Evidence file');
  // Mobile PDF viewers vary: show the cached first page with a link to the original.
  const mobilePdf = extensionOf(file) === 'pdf' && mobileViewport.matches && thumbnail;
  if (isImage(file) || mobilePdf) return `<a class="file-preview" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${name}"><img src="${mobilePdf ? safeUrl(thumbnail) : url}" alt="${name}" /><span class="preview-caption">${mobilePdf ? 'Open PDF' : 'Open full image'} ${arrow}</span></a>`;
  if (extensionOf(file) === 'pdf') return `<iframe class="pdf-preview" title="Preview: ${name}" src="${url}#toolbar=0" loading="lazy"></iframe>`;
  if (['mp4', 'webm', 'mov'].includes(extensionOf(file))) return `<video class="video-preview" controls preload="metadata" src="${url}"></video>`;
  return `<div class="file-unavailable"><span class="file-glyph" aria-hidden="true">▤</span><strong>${name}</strong><p>Open the file to view its contents.</p></div>`;
}

function linkedSection(item, direction) {
  const backward = direction === 'Backward';
  const related = links.filter(link => (backward ? link.target : link.source) === item.id)
    .map(link => ({ link, item: evidence.find(entry => entry.id === (backward ? link.source : link.target)) })).filter(entry => entry.item);
  return `<section class="detail-section"><h3>${direction} linked <span class="muted">(${related.length})</span></h3>${related.length ? `<div class="linked-items">${related.map(({ item: linked, link }) => `<button type="button" data-evidence="${escape(linked.id)}">${bucketLabel(linked)}<strong>${escape(titleOf(linked))}</strong><span class="muted">${link.type === 'supports' ? 'Supports' : 'Links to'} ${backward ? 'this evidence' : 'from this evidence'}</span>${arrow}</button>`).join('')}</div>` : '<p class="muted">No links recorded yet.</p>'}</section>`;
}

// Both the Hub drawer and project sidebar render this same evidence content.
function evidenceDetails(item, file = previewFile(item)) {
  const files = item.files;
  const metadata = [['File', file?.fileName || '—'], ['Bucket', item.bucket], ['Project', item.tags.filter(tag => tag.startsWith('Group ')).map(tag => tag.replace(/^Group \d: /, '')).join(', ') || '—'], ['Content type', item.tags.filter(tag => tagGroups['Content type'].includes(tag)).join(', ') || '—'], ['Date', item.date || '—'], ['Source', file?.source || item.source || 'Not recorded'], ['Framework rows', (item.frameworkRows || []).join(', ') || '—']];
  return `<div class="detail-top"><span class="eyebrow">Evidence details</span><button type="button" class="close-detail" data-close aria-label="Close evidence details">×</button></div>
    <h2 id="detail-title" tabindex="-1">${escape(titleOf(item))}</h2><div id="file-preview">${renderPreview(file, file === previewFile(item) ? item.thumbnail : '')}</div>
    ${files.length > 1 ? `<label class="file-select-label">Attached files<select id="file-select">${files.map((attached, index) => `<option value="${index}"${attached === file ? ' selected' : ''}>${escape(attached.fileName || attached.title)}</option>`).join('')}</select></label>` : ''}
    <div id="file-action">${file?.fileUrl && file.available !== false ? `<a class="button secondary file-open" href="${safeUrl(file.fileUrl)}" target="_blank" rel="noopener noreferrer">Open file ${arrow}</a>` : ''}</div>
    <section class="detail-section"><h3>Description</h3><p>${escape(item.description || 'No description has been added yet.')}</p></section>
    <section class="detail-section"><h3>Metadata</h3><dl class="metadata">${metadata.map(([label, value]) => `<div><dt>${label}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl></section>
    <section class="detail-section"><h3>Tags</h3><div class="detail-tags">${item.tags.map(pill).join('') || '<p class="muted">No tags recorded.</p>'}</div></section>
    ${linkedSection(item, 'Backward')}${linkedSection(item, 'Forward')}`;
}

function openDetail(id, focus = true) {
  const item = evidence.find(entry => entry.id === id);
  if (!item) return;
  if (route.page === 'projects') {
    const index = projectFiles.findIndex(entry => entry.item.id === id && entry.file === previewFile(item));
    if (index >= 0) selectProjectFile(index);
    else location.hash = hubUrl('grid', new URLSearchParams({ evidence: id }));
    return;
  }
  if (detail.hidden) returnFocus = document.activeElement;
  selectedId = id;
  route.params.set('evidence', id);
  history.replaceState(null, '', hubUrl(route.view, route.params));
  syncHubLinks();
  detail.innerHTML = evidenceDetails(item);
  detail.setAttribute('aria-labelledby', 'detail-title');
  detail.hidden = false;
  document.body.classList.add('detail-open');
  syncDrawerMode();
  detail.scrollTop = 0;
  if (focus || mobileViewport.matches) document.querySelector('#detail-title').focus({ preventScroll: true });
}

function closeDetail(restoreFocus = true, syncUrl = true) {
  detail.hidden = true;
  detail.innerHTML = '';
  document.body.classList.remove('detail-open');
  syncDrawerMode();
  selectedId = null;
  if (syncUrl && route?.page === 'hub') {
    route.params.delete('evidence');
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

// 5. Site search and URL routing. Hash routes work on any static GitHub host.
function renderSearch() {
  const query = route.params.get('q') || '';
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const matches = item => terms.every(term => [item.title, item.description, item.year].join(' ').toLowerCase().includes(term));
  const results = filterEvidence(evidence, readFilters(new URLSearchParams({ q: query })));
  main.innerHTML = `<div class="container search-page"><header class="page-heading"><p class="eyebrow">Search the Urban Evidence Hub</p><h1>${query ? `Results for “${escape(query)}”` : 'Search the hub'}</h1><p>${results.length} pieces of evidence. Browse matching projects and studio content below.</p></header>
    ${Object.entries(collections).map(([type, collection]) => {
      const items = collection.items.filter(matches);
      return items.length ? `<section class="home-section"><div class="section-heading"><h2>${collection.title}</h2></div><div class="collection-grid">${items.map(item => collectionCard(item, type)).join('')}</div></section>` : '';
    }).join('')}
    <section class="home-section"><div class="section-heading"><h2>Evidence</h2><a href="${hubUrl('grid', new URLSearchParams({ q: query }))}">View all evidence →</a></div>${results.length ? `<div class="search-evidence">${results.slice(0, 8).map(item => `<a class="search-result" style="${bucketStyle(item)}" href="${hubUrl('list', new URLSearchParams({ q: query, evidence: item.id }))}">${bucketLabel(item)}<h3>${escape(titleOf(item))}</h3>${arrow}</a>`).join('')}</div>` : '<div class="no-results"><h3>No matching evidence</h3><p>Try a different search term.</p></div>'}</section></div>`;
}

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
  graphCleanup();
  closeDetail(false, false);
  const [path, query = ''] = location.hash.slice(1).split('?');
  const parts = (path || '/home').split('/').filter(Boolean);
  const params = new URLSearchParams(query);
  route = { page: parts[0], view: ['list', 'grid', 'graph'].includes(parts[1]) ? parts[1] : 'graph', params, filters: readFilters(params) };
  visibleCount = 36;
  document.querySelectorAll('#main-nav [data-page]').forEach(link => {
    if (link.dataset.page === route.page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  syncHubLinks();
  setHubMenu(hubNav.matches(':hover') && !mobileViewport.matches);
  const mobileHub = mobileViewport.matches && route.page === 'hub';
  document.querySelector('#main-nav').classList.toggle('is-open', mobileHub);
  document.querySelector('.menu-button').setAttribute('aria-expanded', String(mobileHub));
  document.querySelector('#global-search').value = params.get('q') || '';
  document.title = `${route.page === 'home' ? 'Trace evidence into design' : (collections[route.page]?.title || (route.page === 'hub' ? 'Hub' : 'Search'))} | ${site.title}`;
  if (route.page === 'home') renderHome();
  else if (route.page === 'hub') renderHub();
  else if (route.page === 'projects' && parts[1]) renderProject(parts[1]);
  else if (collections[route.page]) renderCollection(route.page);
  else if (route.page === 'search') renderSearch();
  else renderNotFound();
  window.scrollTo(0, 0);
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
  } else if (button.hasAttribute('data-project-file')) selectProjectFile(Number(button.dataset.projectFile));
  else if (button.hasAttribute('data-project-cover')) selectProjectFile(-1);
  else if (button.hasAttribute('data-project-step')) {
    const current = document.querySelector('[data-project-file][aria-pressed="true"]');
    selectProjectFile((current ? Number(current.dataset.projectFile) : -1) + Number(button.dataset.projectStep));
  } else if (button.hasAttribute('data-evidence')) openDetail(button.dataset.evidence);
  else if (button.hasAttribute('data-close')) {
    if (route.page === 'projects') {
      const thumbnail = document.querySelector('[data-project-file][aria-pressed="true"]');
      selectProjectFile(-1);
      thumbnail?.focus({ preventScroll: true });
    }
    else closeDetail();
  } else if (button.hasAttribute('data-more')) {
    visibleCount += 36;
    renderResults();
    document.querySelectorAll('.evidence-card')[visibleCount - 36]?.focus({ preventScroll: true });
  } else if (button.hasAttribute('data-clear')) {
    route.filters = readFilters(new URLSearchParams());
    document.querySelector('#evidence-query').value = '';
    document.querySelector('#sort').value = 'title';
    renderFilters();
    updateFilters();
  } else if (button.hasAttribute('data-tag')) {
    const { tag, mode } = button.dataset;
    const other = mode === 'include' ? 'exclude' : 'include';
    const values = route.filters[mode];
    route.filters[mode] = values.includes(tag) ? values.filter(value => value !== tag) : [...values, tag];
    route.filters[other] = route.filters[other].filter(value => value !== tag);
    document.querySelectorAll('[data-tag]').forEach(control => control.setAttribute('aria-pressed', String(route.filters[control.dataset.mode].includes(control.dataset.tag))));
    updateFilters();
  }
});

// Hover reveals the view links; Hub pages keep them open, including on touch screens.
// Keep the three links centred under Hub while their background spans the header.
new ResizeObserver(() => {
  const header = document.querySelector('.site-header').getBoundingClientRect();
  const hub = hubLink.getBoundingClientRect();
  hubNav.style.setProperty('--hub-centre', `${hub.left - header.left + hub.width / 2}px`);
}).observe(document.querySelector('.site-header'));
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
    const params = new URLSearchParams({ q: document.querySelector('#global-search').value.trim() });
    location.hash = `#/search?${params}`;
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
    const item = evidence.find(item => item.id === selectedId);
    const file = item.files[Number(event.target.value)];
    const scrollTop = detail.scrollTop;
    detail.innerHTML = evidenceDetails(item, file);
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
  if (event.key === 'Escape' && route.page === 'projects' && selectedId) {
    const thumbnail = document.querySelector('[data-project-file][aria-pressed="true"]');
    selectProjectFile(-1);
    thumbnail?.focus({ preventScroll: true });
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
  renderRoute();
} catch (error) {
  main.innerHTML = '<div class="container no-results"><h1>The collection could not be loaded</h1><p>Please reload the page to try again.</p><button class="button" type="button" data-reload>Reload page</button></div>';
  console.error(error);
}
