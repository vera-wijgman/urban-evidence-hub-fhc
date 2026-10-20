# Urban Evidence Hub · Version 2

A static website for the Future Healthy Cities master studio. Plain HTML, CSS and
JavaScript, with no framework, runtime packages, external fonts or installation
step. The original website is preserved in Git history and on `main`; this
version is developed on `codex/website-v2`.

## Run and publish

Checked hosted preview with the refined Hub and project file viewer:
[Open version 2](https://6ad7d367272be27c6cd9dce5--urban-evidence-hub-fhc.netlify.app/).
This preview does not change the production domain or holding page.

Requires Node.js 20 or later.

```sh
npm run dev       # Local preview: http://127.0.0.1:4174
npm test          # Evidence filtering and data integrity
npm run build     # Public website only, written to dist/
```

Connect a static host to this GitHub repository, select `codex/website-v2`, use
`npm run build` as its build command and `dist` as its output directory. The
included Netlify configuration uses these same settings. For Cloudflare, use
these build settings when connecting this repository to the website project.
The custom domain belongs to the hosting project; committing this branch does
not change the existing holding page or DNS.

Only the allowlisted public files are copied into `dist`. Local spreadsheets,
archives, prototypes, working documents and evidence originals are excluded.
All page links use hash routes, so direct links work on static hosts without
server rewrite rules or a backend.

## Where to change things

The standing code requirements are in [AGENTS.md](AGENTS.md). Every change must
stay minimal, readable and organised into labelled sections that explain which
part of the website they implement, so the next student group can maintain it.

| File | Owns |
| --- | --- |
| `index.html` | Shared header, Hub view dropdown, logo space, search, main area, detail drawer and footer |
| `assets/theme.css` | All palette colours, font, content width, spacing and corner radius |
| `styles.css` | Eight labelled sections for shared controls, pages, Hub, cards, drawer and responsive layouts |
| `js/content.js` | Homepage copy, projects, studio years, publications, partners and tag categories |
| `app.js` | Seven labelled sections for page rendering (including the project viewer), filters, drawer, routing, events and loading |
| `js/evidence.js` | Shared evidence filtering, project attachment ordering and file helpers |
| `js/graph.js` | Empty graph renderer, ready for the graph being developed separately |
| `data/evidence.json` | Published framework snapshot, attachment URLs and directed relationships |
| `scripts/` | Small build, preview, framework-import and thumbnail tools |

The empty `.logo-space` in the header reserves room for the eventual logo. Add
an image there when available. No annotation marks, paper textures, About page,
latest-evidence section or decision-chain interface are included.

## Adding studio content

Edit `js/content.js`. Homepage previews and the corresponding subpages use the
same collections. Add a project with an `id`, `title`, `year`, `image`, `tag`,
`description` and `members`. A new year automatically creates a new Studio year
section. Project cards show only their image, title and studio year.

Project pages show a large file preview, project information on the right and a
scrollable thumbnail strip underneath. The strip includes every attachment,
ordered by the eight evidence buckets and then alphabetically by filename.
Selecting a file updates its preview, details and shareable URL. Previous/next
controls follow the same order; Project overview restores the project image.
The layout stacks on mobile. Cached PDF first pages provide mobile previews,
with links to open the original PDFs. A link also opens the project's filtered
Hub view.

Publications and Partners contain two clearly named layout examples each.
Replace those entries with real content when available, for example:

```js
{ id: 'publication-id', title: 'Publication title', year: 2027,
  date: '2027-06-15', image: 'assets/publication-cover.webp',
  url: 'https://example.org/publication' }
```

Publication cards show an image, title and publication date; partner cards show
an image and title. The image is optional. Entries with a URL open their source
in a new tab; entries without a URL remain informational cards.

## Updating evidence from the framework table

The browser reads a JSON snapshot, rather than needing to process Excel on each
visit. The initial snapshot represents all **626 rows** of `Framework Table
updated.xlsx`, matched to the existing **300 evidence groups / 660 attachments**.
Named evidence groups keep their multiple files together in the detail drawer.
There are 236 local WebP thumbnails; other file types have a format placeholder.

The 21 previously unavailable Health Islands originals were restored on
20 October 2026, including the route maps, two literature spreadsheets,
stakeholder diagram, video and masterplan. Their public file links are enabled;
17 local image previews are retained. Originals are also saved in the shared
`03 Workfolder/03.4 Urban Evidence Hub/Group 3 - Health Islands` archive:
route maps and literature in `07 Design/Individual/Promotion`, the diagram in
`06 Strategy/Stakeholder diagram`, the video in `07 Design`, and the masterplan
in `07 Design/Vision map`. Each restored attachment records its archive path in
its `source` field. Older differing website copies were backed up locally.

With Python and `openpyxl` installed, refresh metadata with:

```sh
python scripts/import-framework.py "path/to/Framework Table.xlsx"
```

This reads the workbook without changing it. It matches rows against titles,
published filenames and verified filename aliases, combines group tags, and
updates descriptions, dates, sources, buckets and row references. The import
report lists any row without a unique file match. Those records remain visible
with an explicit missing-file state; the importer never invents a URL. Existing
published attachments are preserved, including evidence outside the new table.

To attach a new file, publish the original in the evidence file store and add its
`fileName` and absolute `fileUrl` to the corresponding record's `files` array in
`data/evidence.json`. Import again after updating the metadata. Attachment URLs
currently point to the existing evidence host. When moving originals to another
host, update those URLs and `FILE_BASE_URL` in the importer together.

Tags use **OR within a category, AND between categories**. Excluded tags always
remove matching evidence. Bucket checkboxes support any combination, including
none. Filters, sorting and selected evidence are stored in the URL and survive
switches between List, Grid and Graph in the Hub navigation dropdown. Hover or
keyboard focus opens it on desktop; its disclosure button supports touch.
Clicking Hub itself opens Graph. The list and grid share the same filter
function and details drawer. Grid cards show their bucket on hover or focus.

To regenerate previews from an available local `evidence-files` archive, install
Pillow and pypdfium2 and run `python scripts/create-thumbnails.py`. It reuses
existing thumbnails, writes small WebP images, and leaves originals untouched.

## Adding the graph and evidence relationships

Replace `mountGraph` in `js/graph.js`. It receives:

```js
mountGraph(container, { evidence, links, filters, onSelect })
```

`evidence` is the filtered collection. Use each record's stable `id`; its
`frameworkRows` array maps spreadsheet rows to that record. Call `onSelect(id)`
to open the existing preview drawer. Return a cleanup function for graph
listeners or observers. The homepage preview in `renderHome` has a centre link
and a bottom link; replace its empty centre with a graph preview when available.

The shared relationship format is:

```js
{ source: 'source-evidence-id', target: 'target-evidence-id', type: 'supports' }
// type may also be 'links-to'.
```

The supplied table has no relationships yet, so no graph nodes or links have
been fabricated. Enter forward target Excel row numbers in `Supporting links`
or `Direct links`, separated by commas, and import again. The source is the row
containing the link and the target is the referenced row. The drawer derives
backward links from incoming relationships and forward links from outgoing
ones. Invalid row references stop the import before it overwrites the snapshot.

## Verification

`npm test` checks filter semantics, search, bucket selection, file labels,
project attachment coverage and ordering, unique evidence IDs, framework row coverage, tags, safe file URLs, thumbnail
paths and relationship integrity. The local browser flow additionally checks
navigation, filters across views, direct evidence links, drawer controls,
project file selection and direct links, example collections, global search and
mobile overflow.
