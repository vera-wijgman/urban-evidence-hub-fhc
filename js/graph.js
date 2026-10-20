// Graph integration point. Replace this renderer with the graph from the other chat.
// Use the same evidence IDs and links; call onSelect(id) to open the shared drawer.
// Return a cleanup function if the future graph adds observers or event listeners.
export function mountGraph(container, { evidence, links, filters, onSelect }) {
  const query = location.hash.includes('?') ? '?' + location.hash.split('?')[1] : '';
  container.innerHTML = `<div class="graph-empty">
    <span class="eyebrow">A connected view of the evidence</span>
    <h2>Knowledge graph</h2>
    <p>The graph is taking shape.<br>Explore the evidence in List or Grid while the connections are being prepared.</p>
    <div class="inline-links"><a href="#/hub/list${query}">Browse the list <span aria-hidden="true">→</span></a><a href="#/hub/grid${query}">Explore the grid <span aria-hidden="true">→</span></a></div>
  </div>`;
  return () => {};
}
