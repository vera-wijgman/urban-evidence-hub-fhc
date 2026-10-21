const graphModel = (() => {
  'use strict';

  // Shared dimensions keep the ring layout and spring spacing consistent.
  const layout = {
    memberSpacing: 18,
    bubblePadding: 12,
    groupGap: 95,
    arrowClearance: 42,
    iterations: 450,
    leafAttraction: 0.2,
    leafLengthWeight: 5,
    minimumGroupGap: 60,
    minimumArrowClearance: 24,
    neighbourAngles: 72,
    neighbourRingStep: 40
  };

  // Presentation labels omit file suffixes; source filenames and IDs stay intact.
  function displayTitle(title) {
    return title.replace(/\.(?:pdf|png|jpe?g|xlsx?|pptx?|docx?|svg|webp|gif|mp4|html?|csv|tsv|json|geojson|tiff?|zip|mov|txt)$/i, '');
  }

  // The same wrapping determines both title rendering and ring clearance.
  function wrapTitle(title, maximum = 18) {
    const words = title.replace(/_/g, '_\u200b').split(/\s|\u200b/);
    const lines = [];
    let line = '';
    for (let word of words) {
      while (word.length > maximum) {
        if (line) lines.push(line);
        line = '';
        lines.push(word.slice(0, maximum));
        word = word.slice(maximum);
      }
      if ((line + ' ' + word).trim().length > maximum) {
        lines.push(line);
        line = word;
      } else line = (line + ' ' + word).trim();
    }
    if (line) lines.push(line);
    return lines;
  }

  function buildGraph(data) {
    const groups = new Map();
    const membership = new Map();
    for (const entry of data.nodes) {
      // Different studios/projects may reuse a group title. File IDs remain global.
      const projectScope = (entry.projects || []).join('|');
      const key = entry.group ? `group:${projectScope ? projectScope + ':' : ''}${entry.group}` : entry.id;
      if (!groups.has(key)) {
        groups.set(key, { key, name: displayTitle(entry.group || entry.title), named: Boolean(entry.group), members: [] });
      }
      const group = groups.get(key);
      group.members.push(entry);
      membership.set(entry.id, group);
    }

    // Keep one arrow per directed group pair and relationship type.
    const connections = new Map();
    for (const link of data.links) {
      const source = membership.get(link.source);
      const target = membership.get(link.target);
      if (!source || !target) throw new Error('Unknown evidence ID in relationship.');
      if (source === target) continue;
      const key = `${source.key}|${target.key}|${link.type}`;
      if (!connections.has(key)) {
        connections.set(key, {
          source: source.key, target: target.key, type: link.type,
          sourceGroup: source, targetGroup: target, evidenceLinks: []
        });
      }
      connections.get(key).evidenceLinks.push(link);
    }

    const clusters = [...groups.values()];
    const arrows = [...connections.values()];
    const degree = new Map(clusters.map(group => [group.key, 0]));
    const neighbours = new Map(clusters.map(group => [group, new Set()]));
    arrows.forEach(arrow => {
      degree.set(arrow.source, degree.get(arrow.source) + 1);
      degree.set(arrow.target, degree.get(arrow.target) + 1);
      neighbours.get(arrow.sourceGroup).add(arrow.targetGroup);
      neighbours.get(arrow.targetGroup).add(arrow.sourceGroup);
    });
    clusters.sort((a, b) => degree.get(b.key) - degree.get(a.key) || a.key.localeCompare(b.key));
    clusters.forEach((group, index) => {
      // Count the primary bucket used by each member's dot; ties follow palette order.
      const counts = new Map();
      group.members.forEach(member => {
        if (member.bucket) counts.set(member.bucket, (counts.get(member.bucket) || 0) + 1);
      });
      const palette = (data.buckets || []).map(bucket => bucket.name);
      group.bucket = [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a) || palette.indexOf(a) - palette.indexOf(b))[0] || null;
      group.titleLines = wrapTitle(group.name);
      const titleHalfWidth = Math.max(...group.titleLines.map(line => line.length)) * 3.6;
      const titleBottom = group.titleLines.length * 8 + 18;
      const titleClearance = Math.hypot(titleHalfWidth, titleBottom) + 14;
      group.orbit = Math.max(48, titleClearance, group.members.length * layout.memberSpacing / (2 * Math.PI));
      group.radius = group.orbit + layout.bubblePadding;
      const angle = index * Math.PI * (3 - Math.sqrt(5));
      const distance = Math.sqrt(index) * 340;
      group.x = Math.cos(angle) * distance;
      group.y = Math.sin(angle) * distance;
      group.vx = 0;
      group.vy = 0;
    });

    // Unlinked evidence does not participate in the spring solve. Packing it
    // separately keeps loading quick as new groups are added to the framework.
    const linkedClusters = clusters.filter(group => degree.get(group.key));
    const movingGroups = linkedClusters.length ? linkedClusters : clusters;

    // A small, deterministic spring layout runs once on groups, never on file links.
    for (let iteration = 0; iteration < layout.iterations; iteration++) {
      for (const group of movingGroups) {
        group.vx -= group.x * 0.0007;
        group.vy -= group.y * 0.0007;
      }
      for (let left = 0; left < movingGroups.length; left++) {
        for (let right = left + 1; right < movingGroups.length; right++) {
          const a = movingGroups[left];
          const b = movingGroups[right];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          const clearance = a.radius + b.radius + layout.groupGap;
          const force = distance < clearance ? (clearance - distance) * 0.2 : 6000 / (distance * distance);
          const forceX = dx / distance * force;
          const forceY = dy / distance * force;
          a.vx -= forceX;
          a.vy -= forceY;
          b.vx += forceX;
          b.vy += forceY;
        }
      }
      for (const arrow of arrows) {
        const a = arrow.sourceGroup;
        const b = arrow.targetGroup;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const isLeafConnection = neighbours.get(a).size === 1 || neighbours.get(b).size === 1;
        const preferred = a.radius + b.radius + layout.groupGap + (isLeafConnection ? 0 : 40);
        const force = (distance - preferred) * (isLeafConnection ? layout.leafAttraction : 0.025);
        a.vx += dx / distance * force;
        a.vy += dy / distance * force;
        b.vx -= dx / distance * force;
        b.vy -= dy / distance * force;
      }
      for (const group of movingGroups) {
        group.vx *= 0.65;
        group.vy *= 0.65;
        group.x += Math.max(-25, Math.min(25, group.vx));
        group.y += Math.max(-25, Math.min(25, group.vy));
      }
    }

    // Resolve residual overlaps without running a permanent physics simulation.
    for (let pass = 0; pass < 100; pass++) {
      for (let left = 0; left < movingGroups.length; left++) {
        for (let right = left + 1; right < movingGroups.length; right++) {
          const a = movingGroups[left];
          const b = movingGroups[right];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          const overlap = a.radius + b.radius + layout.groupGap - distance;
          if (overlap <= 0) continue;
          const shiftX = dx / distance * overlap * 0.5;
          const shiftY = dy / distance * overlap * 0.5;
          a.x -= shiftX;
          a.y -= shiftY;
          b.x += shiftX;
          b.y += shiftY;
        }
      }
    }
    // Move obstructing bubbles perpendicular to straight arrow corridors. The pass
    // limit keeps the diagram bounded rather than expanding it indefinitely.
    for (let pass = 0; pass < 120; pass++) {
      let moved = false;
      for (const arrow of arrows) {
        const source = arrow.sourceGroup;
        const target = arrow.targetGroup;
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const lengthSquared = dx * dx + dy * dy;
        if (lengthSquared < 1) continue;
        const length = Math.sqrt(lengthSquared);
        for (const group of movingGroups) {
          if (group === source || group === target) continue;
          const projection = ((group.x - source.x) * dx + (group.y - source.y) * dy) / lengthSquared;
          if (projection <= 0 || projection >= 1) continue;
          const offsetX = group.x - (source.x + projection * dx);
          const offsetY = group.y - (source.y + projection * dy);
          const distance = Math.hypot(offsetX, offsetY);
          const overlap = group.radius + layout.arrowClearance - distance;
          if (overlap <= 0) continue;
          const side = dx * offsetY - dy * offsetX >= 0 ? 1 : -1;
          group.x += -dy / length * side * (overlap + 2);
          group.y += dx / length * side * (overlap + 2);
          moved = true;
        }
      }
      for (let left = 0; left < movingGroups.length; left++) {
        for (let right = left + 1; right < movingGroups.length; right++) {
          const a = movingGroups[left];
          const b = movingGroups[right];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          const overlap = a.radius + b.radius + layout.groupGap - distance;
          if (overlap < 0.1) continue;
          a.x -= dx / distance * overlap * 0.5;
          a.y -= dy / distance * overlap * 0.5;
          b.x += dx / distance * overlap * 0.5;
          b.y += dy / distance * overlap * 0.5;
          moved = true;
        }
      }
      if (!moved) break;
    }

    // Corridor nudges can cycle in dense parts of a graph. Test a small set of
    // alternative positions, strongly preferring clear paths, then shorter links.
    function corridorPenalty(group, source, target, margin = layout.arrowClearance) {
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const squared = dx * dx + dy * dy;
      if (!squared) return 0;
      const projection = ((group.x - source.x) * dx + (group.y - source.y) * dy) / squared;
      if (projection <= 0 || projection >= 1) return 0;
      const distance = Math.hypot(group.x - source.x - projection * dx, group.y - source.y - projection * dy);
      return Math.max(0, group.radius + margin - distance) ** 2;
    }
    function positionCost(group) {
      let penalty = 0;
      let length = 0;
      for (const other of movingGroups) {
        if (other === group) continue;
        penalty += Math.max(0, group.radius + other.radius + layout.groupGap - Math.hypot(group.x - other.x, group.y - other.y)) ** 2;
      }
      for (const arrow of arrows) {
        const source = arrow.sourceGroup;
        const target = arrow.targetGroup;
        if (source === group || target === group) {
          const gap = Math.max(0, Math.hypot(target.x - source.x, target.y - source.y) - source.radius - target.radius);
          const leafWeight = neighbours.get(source).size === 1 || neighbours.get(target).size === 1 ? layout.leafLengthWeight : 1;
          length += gap * gap / layout.groupGap * leafWeight;
          for (const other of movingGroups) {
            if (other !== source && other !== target) penalty += corridorPenalty(other, source, target);
          }
        } else penalty += corridorPenalty(group, source, target);
      }
      return penalty * 1000 + length;
    }
    for (let pass = 0; pass < 20 && arrows.length; pass++) {
      let improved = false;
      for (const group of movingGroups) {
        let bestX = group.x;
        let bestY = group.y;
        let bestCost = positionCost(group);
        const origin = { x: group.x, y: group.y };
        for (const radius of [20, 60, 180, 360, 720]) {
          for (let direction = 0; direction < 16; direction++) {
            const angle = direction / 16 * Math.PI * 2;
            group.x = origin.x + Math.cos(angle) * radius;
            group.y = origin.y + Math.sin(angle) * radius;
            const cost = positionCost(group);
            if (cost < bestCost - 0.01) {
              bestX = group.x;
              bestY = group.y;
              bestCost = cost;
              improved = true;
            }
          }
        }
        group.x = bestX;
        group.y = bestY;
      }
      if (!improved) break;
    }

    // Contract the connected layout only as far as its actual circle and arrow
    // clearances permit. Bubble sizes and readable text remain unchanged.
    let contraction = 0;
    for (let left = 0; left < linkedClusters.length; left++) {
      const group = linkedClusters[left];
      for (const other of linkedClusters.slice(left + 1)) {
        contraction = Math.max(contraction, (group.radius + other.radius + layout.minimumGroupGap) / Math.hypot(group.x - other.x, group.y - other.y));
      }
      for (const arrow of arrows) {
        const source = arrow.sourceGroup;
        const target = arrow.targetGroup;
        if (group === source || group === target) continue;
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const projection = ((group.x - source.x) * dx + (group.y - source.y) * dy) / (dx * dx + dy * dy);
        if (projection <= 0 || projection >= 1) continue;
        const distance = Math.hypot(group.x - source.x - projection * dx, group.y - source.y - projection * dy);
        contraction = Math.max(contraction, (group.radius + layout.minimumArrowClearance) / distance);
      }
    }
    if (contraction > 0 && contraction < 1) {
      linkedClusters.forEach(group => { group.x *= contraction; group.y *= contraction; });
    }

    // A one-neighbour bubble has no competing destination. Place it in the
    // nearest free slot around its neighbour, rather than leaving it stranded
    // behind a corridor that small local moves cannot cross.
    function clearPosition(group) {
      for (const other of movingGroups) {
        if (other === group) continue;
        if (Math.hypot(group.x - other.x, group.y - other.y) < group.radius + other.radius + layout.minimumGroupGap - 0.001) return false;
      }
      for (const arrow of arrows) {
        const source = arrow.sourceGroup;
        const target = arrow.targetGroup;
        if (source === group || target === group) {
          for (const other of movingGroups) {
            if (other !== source && other !== target && corridorPenalty(other, source, target, layout.minimumArrowClearance) > 0.001) return false;
          }
        } else if (corridorPenalty(group, source, target, layout.minimumArrowClearance) > 0.001) return false;
      }
      return true;
    }
    const arrowGap = (group, neighbour) => Math.hypot(group.x - neighbour.x, group.y - neighbour.y) - group.radius - neighbour.radius;
    const leaves = linkedClusters.filter(group => neighbours.get(group).size === 1);
    for (let pass = 0; pass < 3; pass++) {
      leaves.sort((a, b) => arrowGap(b, [...neighbours.get(b)][0]) - arrowGap(a, [...neighbours.get(a)][0]) || a.key.localeCompare(b.key));
      let moved = false;
      for (const group of leaves) {
        const neighbour = [...neighbours.get(group)][0];
        const oldGap = arrowGap(group, neighbour);
        const origin = { x: group.x, y: group.y };
        const startAngle = Math.atan2(group.y - neighbour.y, group.x - neighbour.x);
        let best = null;
        for (let gap = layout.minimumGroupGap; gap < oldGap - 1; gap += layout.neighbourRingStep) {
          const radius = group.radius + neighbour.radius + gap;
          for (let index = 0; index < layout.neighbourAngles; index++) {
            const angle = startAngle + index / layout.neighbourAngles * Math.PI * 2;
            group.x = neighbour.x + Math.cos(angle) * radius;
            group.y = neighbour.y + Math.sin(angle) * radius;
            if (!clearPosition(group)) continue;
            const width = Math.max(...linkedClusters.map(item => item.x + item.radius)) - Math.min(...linkedClusters.map(item => item.x - item.radius));
            const height = Math.max(...linkedClusters.map(item => item.y + item.radius)) - Math.min(...linkedClusters.map(item => item.y - item.radius));
            const cost = width * height + Math.hypot(group.x - origin.x, group.y - origin.y) * 0.001;
            if (!best || cost < best.cost) best = { x: group.x, y: group.y, cost };
          }
          if (best) break;
        }
        group.x = best ? best.x : origin.x;
        group.y = best ? best.y : origin.y;
        moved ||= Boolean(best);
      }
      if (!moved) break;
    }
    if (linkedClusters.length) {
      const detached = clusters.filter(group => !degree.get(group.key)).sort((a, b) =>
        String(a.bucket).localeCompare(String(b.bucket)) || a.name.localeCompare(b.name));
      const left = Math.min(...linkedClusters.map(group => group.x - group.radius));
      const top = Math.max(...linkedClusters.map(group => group.y + group.radius)) + layout.groupGap;
      const width = Math.max(1800, Math.max(...linkedClusters.map(group => group.x + group.radius)) - left);
      let x = left;
      let y = top;
      let rowHeight = 0;
      for (const group of detached) {
        if (x > left && x + group.radius * 2 > left + width) {
          x = left;
          y += rowHeight + layout.groupGap;
          rowHeight = 0;
        }
        group.x = x + group.radius;
        group.y = y + group.radius;
        rowHeight = Math.max(rowHeight, group.radius * 2);
        x += group.radius * 2 + layout.groupGap;
      }
    }
    return { clusters, arrows, membership };
  }

  // Follow predecessors and successors separately so sibling branches are not
  // accidentally highlighted just because they share an upstream source.
  function decisionChain(arrows, selectedKey) {
    const groups = new Set([selectedKey]);
    const links = new Set();
    for (const backwards of [true, false]) {
      const visited = new Set([selectedKey]);
      const pending = [selectedKey];
      while (pending.length) {
        const key = pending.pop();
        for (const arrow of arrows) {
          if ((backwards ? arrow.target : arrow.source) !== key) continue;
          links.add(arrow);
          const neighbour = backwards ? arrow.source : arrow.target;
          groups.add(neighbour);
          if (!visited.has(neighbour)) {
            visited.add(neighbour);
            pending.push(neighbour);
          }
        }
      }
    }
    return { groups, arrows: links };
  }

  // Tag membership is a view overlay, independent of workbook relationships.
  // Place enabled tags in free space without moving the evidence layout.
  function buildTagOverlay(clusters, nodes, activeTags, arrows = []) {
    const tags = [];
    const occupied = clusters.map(group => ({ x: group.x, y: group.y, radius: group.radius }));
    for (const name of activeTags) {
      const members = nodes.filter(node => node.visible && (node.tags || []).includes(name));
      const groups = [...new Set(members.map(node => node.cluster))];
      if (!groups.length) continue;
      const titleLines = wrapTitle(name);
      const radius = Math.max(45, Math.max(...titleLines.map(line => line.length)) * 3.6 + 14);
      const centreX = groups.reduce((sum, group) => sum + group.x, 0) / groups.length;
      const centreY = groups.reduce((sum, group) => sum + group.y, 0) / groups.length;
      let position;
      for (let ring = 0; !position; ring++) {
        const count = ring ? Math.max(16, ring * 12) : 1;
        for (let index = 0; index < count; index++) {
          const angle = index / count * Math.PI * 2 - Math.PI / 2;
          const x = centreX + Math.cos(angle) * ring * 80;
          const y = centreY + Math.sin(angle) * ring * 80;
          const clearOfArrows = arrows.every(arrow => {
            const source = arrow.sourceGroup;
            const target = arrow.targetGroup;
            const dx = target.x - source.x;
            const dy = target.y - source.y;
            const squared = dx * dx + dy * dy;
            if (!squared) return true;
            const projection = ((x - source.x) * dx + (y - source.y) * dy) / squared;
            if (projection <= 0 || projection >= 1) return true;
            return Math.hypot(x - source.x - projection * dx, y - source.y - projection * dy) >= radius + 20;
          });
          if (clearOfArrows && occupied.every(other => Math.hypot(x - other.x, y - other.y) >= radius + other.radius + 24)) {
            position = { x, y, radius };
            break;
          }
        }
      }
      occupied.push(position);
      tags.push({ name, titleLines, members, groups, ...position });
    }
    return tags;
  }

  return { buildGraph, wrapTitle, displayTitle, decisionChain, buildTagOverlay };
})();

export default graphModel;
