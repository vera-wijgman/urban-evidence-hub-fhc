// File identities are shared by Graph, catalogue drawers and project attachments.
export function frameworkEntries(items) {
  return items.flatMap(item => item.files.flatMap((file, fileIndex) => file.framework
    ? [{ ...file.framework, item, file, fileIndex, files: [file] }] : [])).sort((a, b) => a.row - b.row);
}

// Return only recorded links for this exact file, grouped by direction and type.
export function relatedEntries(id, entries, links, types) {
  const byId = new Map(entries.map(entry => [entry.id, entry]));
  return [false, true].flatMap(backward => types.map(type => ({
    label: backward ? type.incoming : type.label,
    entries: links.filter(link => link.type === type.id && (backward ? link.target : link.source) === id)
      .map(link => byId.get(backward ? link.source : link.target)).filter(Boolean),
  }))).filter(section => section.entries.length);
}
