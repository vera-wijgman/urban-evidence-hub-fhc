// 1. Mounted graph canvas; the shared Hub owns filters, routes and the drawer.
import graphModel from './graph-model.js?v=direct-links';
import { buckets, relationshipTypes } from './content.js';
import { filterEvidence } from './evidence.js';

function svgElement(tag, attributes = {}, text) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  if (text !== undefined) element.textContent = text;
  return element;
}

// Shared geometry keeps the homepage preview identical to the interactive graph.
const arrowheadSize = 18;
function bubbleElement(group, colors, interactive = false) {
  const name = graphModel.displayTitle(group.name);
  const element = svgElement('g', {
    class: 'cluster', 'data-group': group.key,
    ...(interactive ? { tabindex: 0, role: 'button', 'aria-label': `${name}, ${group.members.length} evidence entries` } : {})
  });
  const boundary = svgElement('circle', { r: group.radius, class: 'cluster-boundary' });
  boundary.style.fill = colors.get(group.bucket) || 'var(--muted)';
  element.append(boundary);
  const title = svgElement('text', { class: 'cluster-title', 'text-anchor': 'middle' });
  const lines = graphModel.wrapTitle(name);
  lines.forEach((line, index) => {
    title.append(svgElement('tspan', { x: 0, y: (index - (lines.length - 1) / 2) * 16 }, line));
  });
  element.append(title);
  element.append(svgElement('text', {
    class: 'cluster-count', y: lines.length * 8 + 16, 'text-anchor': 'middle'
  }, `${group.members.length} ${group.members.length === 1 ? 'entry' : 'entries'}`));
  return element;
}

function addArrowMarkers(defs, prefix) {
  for (const type of relationshipTypes) {
    const marker = svgElement('marker', {
      id: `${prefix}-${type.id}`, viewBox: '0 0 10 10', refX: 10, refY: 5,
      markerWidth: arrowheadSize, markerHeight: arrowheadSize, orient: 'auto', markerUnits: 'userSpaceOnUse'
    });
    marker.append(svgElement('path', { d: 'M 0 0 L 10 5 L 0 10 z', fill: type.color }));
    defs.append(marker);
  }
}

function arrowPath(arrow) {
  const sourceX = arrow.sourceGroup.x;
  const sourceY = arrow.sourceGroup.y;
  const targetX = arrow.targetGroup.x;
  const targetY = arrow.targetGroup.y;
  const distance = Math.max(1, Math.hypot(targetX - sourceX, targetY - sourceY));
  const unitX = (targetX - sourceX) / distance;
  const unitY = (targetY - sourceY) / distance;
  return `M ${sourceX + unitX * arrow.sourceGroup.radius} ${sourceY + unitY * arrow.sourceGroup.radius} L ${targetX - unitX * arrow.targetGroup.radius} ${targetY - unitY * arrow.targetGroup.radius}`;
}

function graphBoundsOf(extent) {
  const minimumX = Math.min(...extent.map(group => group.x - group.radius)) - 60;
  const minimumY = Math.min(...extent.map(group => group.y - group.radius)) - 60;
  return {
    x: minimumX, y: minimumY,
    width: Math.max(...extent.map(group => group.x + group.radius)) - minimumX + 60,
    height: Math.max(...extent.map(group => group.y + group.radius)) - minimumY + 60
  };
}

// Read-only homepage preview: only bubbles with recorded links and their member dots.
export function mountGraphPreview(container, { evidence, links }) {
  const model = graphModel.buildGraph({ nodes: evidence, links, buckets: buckets.map(name => ({ name })) });
  const connected = new Set(links.flatMap(link => [model.membership.get(link.source).key, model.membership.get(link.target).key]));
  const groups = model.clusters.filter(group => connected.has(group.key));
  if (!groups.length) { container.textContent = 'Knowledge Graph'; return; }
  const colors = new Map(buckets.map(name => [name, 'var(--' + name.toLowerCase() + ')']));
  const bounds = graphBoundsOf(groups);
  const svg = svgElement('svg', { viewBox: [bounds.x, bounds.y, bounds.width, bounds.height].join(' '), preserveAspectRatio: 'xMidYMid meet' });
  const defs = svgElement('defs');
  addArrowMarkers(defs, 'preview-arrow');
  svg.append(defs);
  groups.forEach(group => {
    const bubble = bubbleElement(group, colors);
    bubble.setAttribute('transform', `translate(${group.x} ${group.y})`);
    svg.append(bubble);
  });
  model.arrows.forEach(arrow => {
    const type = relationshipTypes.find(type => type.id === arrow.type);
    svg.append(svgElement('path', { class: 'relationship-arrow', d: arrowPath(arrow), fill: 'none', stroke: type.color,
      'stroke-dasharray': type.dash, 'marker-end': `url(#preview-arrow-${type.id})` }));
  });
  groups.forEach(group => group.members.forEach((member, index) => {
    const angle = -Math.PI / 2 + index / group.members.length * Math.PI * 2;
    svg.append(svgElement('circle', { class: 'preview-node', r: 7, fill: colors.get(member.bucket),
      cx: group.x + Math.cos(angle) * group.orbit, cy: group.y + Math.sin(angle) * group.orbit }));
  }));
  container.classList.add('graph-view');
  container.replaceChildren(svg);
}

const graphMarkup = `<section class="graph-view canvas-panel" aria-label="Evidence graph">
  <p class="canvas-hint">Hover to see direct connections · Click to pin · Click blank canvas to clear</p>
  <svg data-graph="knowledge-graph" aria-label="Studio evidence graph"><defs data-graph="arrow-markers"></defs><g data-graph="world"><g data-graph="clusters"></g><g data-graph="links"></g><g data-graph="nodes"></g></g></svg>
  <div data-graph="graph-tools" class="graph-tools">
    <div class="graph-navigation">
      <div class="controls" role="group" aria-label="Graph view controls"><button data-graph="fit" type="button">Fit all</button><button data-graph="minus" type="button" aria-label="Zoom out">−</button><output data-graph="zoom">100%</output><button data-graph="plus" type="button" aria-label="Zoom in">+</button></div>
      <p data-graph="edge-count" class="edge-count" aria-live="polite"></p>
    </div>
    <div class="graph-legend" role="group" aria-label="Relationship legend"><strong>Legend</strong><div data-graph="relationship-legend"></div></div>
  </div>
</section>`;

export function mountGraph(container, { evidence, links, filters, controls, drawer, onSelect, onClear, onCount }) {
  // Evidence, shared settings and view state.
  const data = { nodes: evidence, links, buckets: buckets.map(name => ({ name, color: 'var(--' + name.toLowerCase() + ')' })), relationshipTypes };
  const lifetime = new AbortController();
  const listen = (element, event, handler, options = {}) => element.addEventListener(event, handler, { ...options, signal: lifetime.signal });
  container.innerHTML = graphMarkup;
  const getElement = id => container.querySelector('[data-graph="' + id + '"]') || controls.querySelector('[data-graph="' + id + '"]');
  const svg = getElement('knowledge-graph');
  const world = getElement('world');
  const colors = new Map(data.buckets.map(bucket => [bucket.name, bucket.color]));
  const relationshipById = new Map(data.relationshipTypes.map(type => [type.id, type]));
  const nodes = [];
  const model = graphModel.buildGraph(data);
  const clusters = model.clusters;
  const groups = new Map(clusters.map(group => [group.key, group]));
  const arrows = model.arrows;
  const connectedGroups = new Set(data.links.flatMap(link => [model.membership.get(link.source).key, model.membership.get(link.target).key]));
  let visibleArrows = [];
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let pointer = null;
  let selected = null;
  let hovered = null;

  const wrapTitle = graphModel.wrapTitle;

  function registerHover(element, group) {
    element.addEventListener('pointerenter', () => {
      if (selected || pointer || !group.visible) return;
      hovered = group;
      updateArrows();
    });
    element.addEventListener('pointerleave', () => {
      if (selected || hovered !== group) return;
      hovered = null;
      updateArrows();
    });
  }

  // Each group is a bubble with its title in the centre and evidence on a ring.
  for (const cluster of clusters) {
    cluster.element = bubbleElement(cluster, colors, true);
    cluster.element.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showSelection(cluster);
      }
    });
    getElement('clusters').append(cluster.element);
    registerHover(cluster.element, cluster);
    cluster.members.forEach((entry, index) => {
      const angle = -Math.PI / 2 + index / cluster.members.length * Math.PI * 2;
      const node = {
        ...entry, cluster,
        offsetX: Math.cos(angle) * cluster.orbit,
        offsetY: Math.sin(angle) * cluster.orbit
      };
      const title = graphModel.displayTitle(node.title);
      node.element = svgElement('g', {
        class: 'node', tabindex: 0, role: 'button', 'data-id': node.id,
        'aria-label': `${title}, ${node.buckets.join(', ')}`
      });
      node.element.append(svgElement('title', {}, `${title}\n${node.buckets.join(', ')}`));
      const circle = svgElement('circle', { r: 7, fill: colors.get(node.bucket) || 'var(--muted)' });
      node.element.append(circle);
      const label = svgElement('text', { y: 24, class: 'member-label' });
      wrapTitle(title).forEach((line, index) => {
        label.append(svgElement('tspan', { x: 0, dy: index ? 15 : 0 }, line));
      });
      node.element.append(label);
      node.element.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          showSelection(cluster, node);
        }
      });
      getElement('nodes').append(node.element);
      registerHover(node.element, cluster);
      nodes.push(node);
    });
  }
  const nodeMap = new Map(nodes.map(node => [node.id, node]));

  function graphBounds() {
    const shown = clusters.filter(group => group.visible);
    return graphBoundsOf(shown.length ? shown : clusters);
  }

  function drawBubbles() {
    clusters.forEach(group => group.element.setAttribute('transform', `translate(${group.x} ${group.y})`));
    for (const node of nodes) {
      node.x = node.cluster.x + node.offsetX;
      node.y = node.cluster.y + node.offsetY;
      node.element.setAttribute('transform', `translate(${node.x} ${node.y})`);
    }
    updateArrows();
  }

  // Directed arrows use the workbook's types and point from source to target.
  addArrowMarkers(getElement('arrow-markers'), 'arrow');
  for (const type of data.relationshipTypes) {
    const legend = document.createElement('div');
    legend.className = 'relationship-key';
    const line = document.createElement('span');
    line.style.borderTopColor = type.color;
    line.style.borderTopStyle = type.dash ? (type.id === 'evaluates' ? 'dotted' : 'dashed') : 'solid';
    const label = document.createElement('span');
    label.textContent = `${type.label} · ${type.meaning}`;
    legend.append(line, label);
    getElement('relationship-legend').append(legend);
  }
  for (const arrow of arrows) {
    const type = relationshipById.get(arrow.type);
    if (!type) throw new Error('Unknown relationship type.');
    arrow.element = svgElement('path', {
      class: 'relationship-arrow', fill: 'none', stroke: type.color,
      'stroke-dasharray': type.dash, 'marker-end': `url(#arrow-${type.id})`,
      'data-source': arrow.source, 'data-target': arrow.target, 'data-type': type.id
    });
    arrow.element.append(svgElement('title', {}, `${graphModel.displayTitle(arrow.sourceGroup.name)} → ${type.label.toLowerCase()} → ${graphModel.displayTitle(arrow.targetGroup.name)} (${arrow.evidenceLinks.length} evidence links)`));
    getElement('links').append(arrow.element);
  }

  function drawArrows() {
    for (const arrow of visibleArrows) {
      arrow.element.setAttribute('d', arrowPath(arrow));
    }
  }

  function updateArrows() {
    const focus = selected || hovered;
    const connections = focus ? graphModel.directConnections(arrows, focus.key) : null;
    let highlighted = 0;
    visibleArrows = arrows.filter(arrow => {
      const visible = arrow.sourceGroup.visible && arrow.targetGroup.visible;
      arrow.element.style.display = visible ? '' : 'none';
      arrow.element.classList.toggle('unrelated', Boolean(connections && !connections.arrows.has(arrow)));
      if (visible && (!connections || connections.arrows.has(arrow))) highlighted++;
      return visible;
    });
    clusters.forEach(group => {
      group.element.classList.toggle('unrelated', Boolean(connections && !connections.groups.has(group.key)));
      group.element.classList.toggle('previewed', !selected && hovered === group);
    });
    nodes.forEach(node => node.element.classList.toggle('unrelated', Boolean(connections && !connections.groups.has(node.cluster.key))));
    const mode = focus ? 'direct connections' : 'all connections';
    getElement('edge-count').textContent = `${highlighted} of ${arrows.length} group arrows · ${mode}`;
    drawArrows();
  }

  // View navigation and metadata filters.
  function transform() {
    world.setAttribute('transform', `translate(${translateX} ${translateY}) scale(${scale})`);
    getElement('zoom').value = `${Math.round(scale * 100)}%`;
  }

  function focusBox(box) {
    const rect = svg.getBoundingClientRect();
    const top = 54;
    const height = rect.height - top - getElement('graph-tools').offsetHeight - 20;
    scale = Math.max(0.01, Math.min(1.15, (rect.width - 90) / box.width, height / box.height));
    translateX = (rect.width - box.width * scale) / 2 - box.x * scale;
    translateY = top + (height - box.height * scale) / 2 - box.y * scale;
    transform();
  }

  function fit() {
    focusBox(graphBounds());
  }

  function zoomBy(factor, centerX = svg.clientWidth / 2, centerY = svg.clientHeight / 2) {
    const next = Math.max(0.01, Math.min(2.5, scale * factor));
    translateX = centerX - (centerX - translateX) * next / scale;
    translateY = centerY - (centerY - translateY) * next / scale;
    scale = next;
    transform();
  }

  function filter() {
    const matching = new Set(filterEvidence(evidence, filters).map(node => node.id));
    let count = 0;
    nodes.forEach(node => {
      const showGroup = getElement('show-unconnected').checked || connectedGroups.has(node.cluster.key);
      node.visible = showGroup && matching.has(node.id);
      node.element.style.display = showGroup ? '' : 'none';
      node.element.classList.toggle('dim', !node.visible);
      node.element.setAttribute('tabindex', node.visible ? '0' : '-1');
      if (node.visible) count++;
    });
    clusters.forEach(cluster => {
      const showGroup = getElement('show-unconnected').checked || connectedGroups.has(cluster.key);
      cluster.visible = nodes.some(node => node.cluster === cluster && node.visible);
      cluster.element.style.display = showGroup ? '' : 'none';
      cluster.element.classList.toggle('dim', !cluster.visible);
      cluster.element.setAttribute('tabindex', cluster.visible ? '0' : '-1');
    });
    onCount(count);
    if (hovered && !hovered.visible) hovered = null;
    if (selected && !selected.visible) clearSelection();
    updateArrows();
  }

  // Group details keep file identities available without drawing file-level arrows.
  function focusGroup(group) {
    const margin = group.radius + 60;
    focusBox({ x: group.x - margin, y: group.y - margin, width: margin * 2 + 360, height: margin * 2 });
  }

  function showSelection(group, node = null) {
    selected?.element.classList.remove('selected');
    selected = group;
    hovered = null;
    group.element.classList.add('selected');
    onSelect(group, node, arrows);
    // Linked files can be inspected even when they fall outside the active filters.
    updateArrows();
  }

  function clearSelection(notify = true) {
    selected?.element.classList.remove('selected');
    selected = null;
    hovered = null;
    updateArrows();
    if (notify) onClear();
  }

  listen(document, 'pointerdown', event => {
    if (!selected) return;
    const interactiveAreas = [svg, drawer, controls, getElement('graph-tools')];
    if (!interactiveAreas.some(element => element.contains(event.target))) clearSelection();
  });
  listen(document, 'keydown', event => {
    if (event.key === 'Escape') clearSelection();
  });

  getElement('show-unconnected').onchange = () => { filter(); fit(); };

  // Pointer navigation and movement keep arrow endpoints attached to their nodes.
  svg.addEventListener('wheel', event => {
    event.preventDefault();
    const rect = svg.getBoundingClientRect();
    zoomBy(Math.exp(-event.deltaY * 0.0015), event.clientX - rect.left, event.clientY - rect.top);
  }, { passive: false });
  svg.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    const target = event.target.closest('.node');
    const bubble = event.target.closest('.cluster');
    pointer = {
      id: event.pointerId, x: event.clientX, y: event.clientY,
      startX: event.clientX, startY: event.clientY,
      node: target ? nodeMap.get(target.dataset.id) : null,
      group: target ? nodeMap.get(target.dataset.id).cluster : bubble ? groups.get(bubble.dataset.group) : null, moved: false
    };
    svg.setPointerCapture(event.pointerId);
    svg.classList.add('dragging');
  });
  svg.addEventListener('pointermove', event => {
    if (!pointer || pointer.id !== event.pointerId) return;
    const dx = event.clientX - pointer.x;
    const dy = event.clientY - pointer.y;
    pointer.moved ||= Math.hypot(event.clientX - pointer.startX, event.clientY - pointer.startY) > 4;
    if (pointer.group) {
      pointer.group.x += dx / scale;
      pointer.group.y += dy / scale;
      drawBubbles();
    } else {
      translateX += dx;
      translateY += dy;
      transform();
    }
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
  svg.addEventListener('pointerup', event => {
    if (!pointer || pointer.id !== event.pointerId) return;
    if (!pointer.moved) {
      if (!pointer.group) clearSelection();
      else if (pointer.group.visible) showSelection(pointer.group, pointer.node);
    }
    pointer = null;
    svg.classList.remove('dragging');
  });
  svg.addEventListener('pointercancel', () => {
    pointer = null;
    svg.classList.remove('dragging');
  });
  getElement('fit').onclick = fit;
  getElement('plus').onclick = () => zoomBy(1.3);
  getElement('minus').onclick = () => zoomBy(1 / 1.3);

  // Mount once; filters preserve positions, selection, pan and zoom.
  filter();
  drawBubbles();
  fit();
  const observer = new ResizeObserver(() => { if (!pointer) fit(); });
  observer.observe(svg);
  return {
    select(id, focus = false) {
      const node = nodeMap.get(id);
      const group = node?.cluster || groups.get(id);
      if (!group) return false;
      showSelection(group, node);
      if (focus && group.visible) focusGroup(group);
      return true;
    },
    clear: clearSelection,
    update(nextFilters) { filters = nextFilters; filter(); },
    destroy() {
      lifetime.abort();
      observer.disconnect();
      getElement('show-unconnected').onchange = null;
      container.replaceChildren();
    }
  };
}
