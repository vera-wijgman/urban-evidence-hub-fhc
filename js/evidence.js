// Evidence model: filtering and file helpers, independent of the page layout.
import { buckets, tagGroups } from './content.js';

export const titleOf = item => item.title.replace(/\.(pdf|pptx?|docx?|xlsx?|csv|png|jpe?g|svg|webp|mp4|mov)$/i, '');
export const bucketStyle = item => `--bucket:var(--${item.bucket.toLowerCase()})`;
export const extensionOf = file => (file?.fileName || file?.fileUrl || '').split(/[?#]/)[0].match(/\.([a-z0-9]{1,6})$/i)?.[1].toLowerCase() || 'link';
export const isImage = file => ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'].includes(extensionOf(file));
export const previewFile = item => item.files.find(isImage) || item.files.find(file => extensionOf(file) === 'pdf') || item.files[0];
export const tagGridUrl = tag => `#/hub/grid?${new URLSearchParams({ include: tag })}`;

// Project filmstrip: retain every attachment and its original index for direct links.
export function projectAttachments(items, tag) {
  return items.filter(item => item.tags.includes(tag))
    .flatMap(item => item.files.map((file, fileIndex) => ({ item, file, fileIndex })))
    .sort((a, b) => buckets.indexOf(a.item.bucket) - buckets.indexOf(b.item.bucket)
      || a.file.fileName.localeCompare(b.file.fileName, undefined, { numeric: true }));
}

// Inclusive tags use OR within a category and AND between categories.
// Exclusions always remove matching items. Graph and Grid share these semantics.
export function filterEvidence(items, filters) {
  const terms = filters.q.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const knownCategories = [...Object.values(tagGroups), buckets];
  const otherTags = filters.include.filter(tag => !knownCategories.some(tags => tags.includes(tag)));
  const categories = [...knownCategories, ...otherTags.map(tag => [tag])].map(tags => filters.include.filter(tag => tags.includes(tag)));
  const results = items.filter(item => {
    const text = [item.title, item.description, item.source, ...item.tags, ...item.files.map(file => file.fileName)].join(' ').toLocaleLowerCase();
    const tags = new Set([...item.tags, ...(item.buckets || [item.bucket]), ...item.files.flatMap(file => file.framework?.tags || [])]);
    return (!filters.buckets.length || (item.buckets || [item.bucket]).some(bucket => filters.buckets.includes(bucket)))
      && terms.every(term => text.includes(term))
      && categories.every(category => !category.length || category.some(tag => tags.has(tag)))
      && filters.exclude.every(tag => !tags.has(tag));
  });
  return results.sort((a, b) => {
    if (filters.sort === 'bucket') return buckets.indexOf(a.bucket) - buckets.indexOf(b.bucket) || titleOf(a).localeCompare(titleOf(b));
    if (filters.sort === 'newest') return (b.date || '').localeCompare(a.date || '') || titleOf(a).localeCompare(titleOf(b));
    return titleOf(a).localeCompare(titleOf(b), undefined, { numeric: true });
  });
}

export function readFilters(params) {
  return {
    q: params.get('q') || '', sort: params.get('sort') || 'title',
    buckets: params.getAll('bucket').filter(bucket => buckets.includes(bucket) || bucket === 'none'),
    include: [...new Set(params.getAll('include').map(tag => tag.trim()).filter(Boolean))],
    exclude: [...new Set(params.getAll('exclude').map(tag => tag.trim()).filter(Boolean))],
  };
}
