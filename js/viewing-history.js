// Viewing order is independent of the alphabetical filmstrip or browser page history.
export function createViewingHistory(initial) {
  let entries = initial === undefined ? [] : [initial];
  let position = entries.length - 1;
  return {
    get canBack() { return position > 0; },
    get canForward() { return position < entries.length - 1; },
    visit(value) {
      if (value === entries[position]) return;
      entries = entries.slice(0, position + 1);
      entries.push(value);
      position = entries.length - 1;
    },
    move(step) {
      position = Math.min(entries.length - 1, Math.max(0, position + step));
      return entries[position];
    },
  };
}
