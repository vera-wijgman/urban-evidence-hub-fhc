// 1. Shared state and safe rendering helpers.
import { site, projects, collections, buckets, tagGroups } from './js/content.js';
import { titleOf, bucketStyle, extensionOf, isImage, previewFile, filterEvidence, readFilters } from './js/evidence.js';
import { mountGraph } from './js/graph.js';

const main = document.querySelector('#main');
const detail = document.querySelector('#evidence-detail');
const mobileViewport = matchMedia('(max-width: 680px)');
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

// 2. Shared collection cards: homepage previews and year-grouped subpages.
function collectionCard(item, type) {
  const href = type === 'projects' ? `#/projects/${item.id}` : safeUrl(item.url);
  const contents = `${item.image ? `<div class="collection-image"><img src="${safeUrl(item.image)}" alt="${escape(item.title)}" loading="lazy" width="640" height="360" /></div>` : ''}
    <div class="collection-card-copy"><h3>${escape(item.title)}</h3>${arrow}<p>${escape(item.description || site.studio)}</p><span class="card-year">${escape(item.year || '')} · ${escape(site.studio)}</span></div>`;
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
      <div class="hero-copy"><p class="eyebrow">TU/e · Future Healthy Cities</p><h1 id="home-title">${site.title}</h1><p class="hero-subtitle">${site.subtitle}</p><p class="hero-description">${site.description}</p>
        <figure class="hero-image"><img src="${site.heroImage}" alt="A vision of a healthy city with green buildings, public transport and connected urban systems." width="1792" height="1024" fetchpriority="high" /></figure>
      </div>
      <a class="graph-preview" href="#/hub/graph" aria-label="Open the knowledge graph in the Hub">
        <div class="graph-preview-top"><span class="eyebrow">Explore the connections</span>${arrow}</div>
        <div class="graph-preview-empty"><span class="preview-marker" aria-hidden="true">↗</span><h2>Knowledge graph</h2><p>A new way to explore<br>evidence and design.</p><span class="status-label">Preview coming soon</span></div>
        <div class="graph-preview-bottom">Open knowledge graph <span aria-hidden="true">→</span></div>
      </a>
    </section>
    ${collectionPreview('projects')}${collectionPreview('publications')}${collectionPreview('partners')}
  </div>`;
}

function renderCollection(type) {
  const collection = collections[type];
  const years = [...new Set(collection.items.map(item => item.year))].sort((a, b) => b - a);
  main.innerHTML = `<div class="container collection-page"><header class="page-heading"><p class="eyebrow">Future Healthy Cities</p><h1>${collection.title}</h1><p>${collection.description}</p></header>
    ${years.length ? years.map(year => `<section class="year-section"><div class="section-heading"><h2>Studio ${escape(year)}</h2><span class="muted">${collection.items.filter(item => item.year === year).length} ${type}</span></div><div class="collection-grid">${collection.items.filter(item => item.year === year).map(item => collectionCard(item, type)).join('')}</div></section>`).join('') : `<div class="collection-empty large"><span class="empty-label">${type === 'publications' ? 'Work in progress' : 'Building connections'}</span><h2>${type === 'publications' ? 'More to share, soon.' : 'Better cities, together.'}</h2><p>${collection.empty}</p></div>`}
  </div>`;
}

function renderProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return renderNotFound();
  const count = evidence.filter(item => item.tags.includes(project.tag)).length;
  const query = new URLSearchParams({ include: project.tag });
  main.innerHTML = `<article class="container project-page"><a class="back-link" href="#/projects">← All projects</a><header class="page-heading"><p class="eyebrow">Studio ${project.year}</p><h1>${escape(project.title)}</h1><p>${escape(project.description)}</p></header>
    <img class="project-cover" src="${project.image}" alt="${escape(project.title)} project visual" width="1440" height="700" />
    <div class="project-information"><div><h2>The project team</h2><p>${project.members.map(escape).join(' · ')}</p><p class="muted">TU/e · ${site.studio}</p></div><div><h2>Explore the project evidence</h2><p>${count} pieces of research, analysis and design.</p><a class="button" href="${hubUrl('grid', query)}">Browse project evidence <span aria-hidden="true">→</span></a></div></div>
  </article>`;
}

// 3. Hub shell and collapsible include/exclude filters.
function renderHub() {
  const view = route.view;
  main.innerHTML = `<section class="hub-page">
    <header class="hub-header"><div><p class="eyebrow">The evidence collection</p><h1>Hub</h1></div>
      <nav class="view-tabs" aria-label="Hub views">${['list', 'grid', 'graph'].map(name => `<a href="${hubUrl(name, route.params)}"${view === name ? ' aria-current="page"' : ''}>${name[0].toUpperCase() + name.slice(1)}</a>`).join('')}</nav>
    </header>
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
  document.querySelector('#result-count').textContent = `${results.length} ${results.length === 1 ? 'piece' : 'pieces'} of evidence${route.view === 'graph' ? ' in the collection' : ''}`;
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
    ${view === 'grid' ? `<span class="evidence-thumbnail">${image ? `<img src="${safeUrl(image)}" alt="" loading="lazy" width="400" height="260" />` : `<span class="file-placeholder"><span class="file-glyph" aria-hidden="true">▤</span>${escape(format)}</span>`}<span class="thumbnail-details">${escape(item.bucket)} · ${item.files.length} ${item.files.length === 1 ? 'file' : 'files'}<br>${escape(item.description || item.tags.slice(0, 3).join(' · '))}</span></span>` : ''}
    <span class="evidence-card-copy">${bucketLabel(item)}<span class="evidence-title">${escape(titleOf(item))}</span>${view === 'list' ? `<span class="evidence-description">${escape(item.description || item.tags.filter(tag => tag.startsWith('Group ')).join(' · ').replace(/Group \d: /g, '') || 'Future Healthy Cities studio')}</span><span class="card-tags">${item.tags.filter(tag => !tag.startsWith('Group ')).slice(0, 4).map(pill).join('')}</span>` : ''}<span class="card-open" aria-hidden="true">↗</span></span>
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
  document.querySelectorAll('.view-tabs a').forEach(link => { link.href = hubUrl(link.textContent.toLowerCase(), params); });
  visibleCount = 36;
  renderResults();
}

// 4. Evidence drawer: file previews, metadata, tags and actual directed links.
function renderPreview(file) {
  if (file?.available === false) {
    const note = 'The original file is awaiting publication.';
    return file.previewUrl ? `<div class="file-preview"><img src="${safeUrl(file.previewUrl)}" alt="Preview of ${escape(file.fileName)}" /><span class="preview-caption">Preview only · ${note}</span></div>` : `<div class="file-unavailable">${note}</div>`;
  }
  if (!file?.fileUrl) return '<div class="file-unavailable">A published file has not been attached to this record yet.</div>';
  const url = safeUrl(file.fileUrl);
  const name = escape(file.fileName || file.title || 'Evidence file');
  if (isImage(file)) return `<a class="file-preview" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${name}"><img src="${url}" alt="${name}" /><span class="preview-caption">Open full image ${arrow}</span></a>`;
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

function openDetail(id, focus = true) {
  const item = evidence.find(entry => entry.id === id);
  if (!item) return;
  if (detail.hidden) returnFocus = document.activeElement;
  selectedId = id;
  const params = new URLSearchParams(route.params);
  params.set('evidence', id);
  route.params = params;
  history.replaceState(null, '', hubUrl(route.view, params));
  document.querySelectorAll('.view-tabs a').forEach(link => { link.href = hubUrl(link.textContent.toLowerCase(), params); });
  const files = item.files;
  const file = previewFile(item);
  const metadata = [['Bucket', item.bucket], ['Project', item.tags.filter(tag => tag.startsWith('Group ')).map(tag => tag.replace(/^Group \d: /, '')).join(', ') || '—'], ['Content type', item.tags.filter(tag => tagGroups['Content type'].includes(tag)).join(', ') || '—'], ['Date', item.date || '—'], ['Source', item.source || 'Not recorded'], ['Framework rows', (item.frameworkRows || []).join(', ') || '—']];
  detail.innerHTML = `<div class="detail-top"><span class="eyebrow">Evidence details</span><button type="button" class="close-detail" data-close aria-label="Close evidence details">×</button></div>
    <h2 id="detail-title" tabindex="-1">${escape(titleOf(item))}</h2><div id="file-preview">${renderPreview(file)}</div>
    ${files.length > 1 ? `<label class="file-select-label">Attached files<select id="file-select">${files.map((attached, index) => `<option value="${index}"${attached === file ? ' selected' : ''}>${escape(attached.fileName || attached.title)}</option>`).join('')}</select></label>` : ''}
    <div id="file-action">${file?.fileUrl && file.available !== false ? `<a class="button secondary file-open" href="${safeUrl(file.fileUrl)}" target="_blank" rel="noopener noreferrer">Open file ${arrow}</a>` : ''}</div>
    <section class="detail-section"><h3>Description</h3><p>${escape(item.description || 'No description has been added yet.')}</p></section>
    <section class="detail-section"><h3>Metadata</h3><dl class="metadata">${metadata.map(([label, value]) => `<div><dt>${label}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl></section>
    <section class="detail-section"><h3>Tags</h3><div class="detail-tags">${item.tags.map(pill).join('') || '<p class="muted">No tags recorded.</p>'}</div></section>
    ${linkedSection(item, 'Backward')}${linkedSection(item, 'Forward')}`;
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
    document.querySelectorAll('.view-tabs a').forEach(link => { link.href = hubUrl(link.textContent.toLowerCase(), route.params); });
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

function renderRoute() {
  graphCleanup();
  closeDetail(false, false);
  const [path, query = ''] = location.hash.slice(1).split('?');
  const parts = (path || '/home').split('/').filter(Boolean);
  const params = new URLSearchParams(query);
  route = { page: parts[0], view: ['list', 'grid', 'graph'].includes(parts[1]) ? parts[1] : 'graph', params, filters: readFilters(params) };
  visibleCount = 36;
  document.querySelectorAll('#main-nav a').forEach(link => {
    if (link.dataset.page === route.page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.querySelector('#main-nav').classList.remove('is-open');
  document.querySelector('.menu-button').setAttribute('aria-expanded', 'false');
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
  } else if (button.hasAttribute('data-evidence')) openDetail(button.dataset.evidence);
  else if (button.hasAttribute('data-close')) closeDetail();
  else if (button.hasAttribute('data-more')) {
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
    const file = evidence.find(item => item.id === selectedId).files[Number(event.target.value)];
    document.querySelector('#file-preview').innerHTML = renderPreview(file);
    document.querySelector('#file-action').innerHTML = file.fileUrl && file.available !== false ? `<a class="button secondary file-open" href="${safeUrl(file.fileUrl)}" target="_blank" rel="noopener noreferrer">Open file ${arrow}</a>` : '';
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
