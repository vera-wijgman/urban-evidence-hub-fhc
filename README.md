# Urban Evidence Hub · Version 2

A static website for the Future Healthy Cities UrbanLab. Plain HTML, CSS and
JavaScript, with no framework, runtime packages, external fonts or installation
step. The original website is preserved in Git history and on `main`; this
version is developed on `codex/website-v2`.

## Run and publish

The [holding page](https://urbanevidencehub.com/) links to the
[website draft](https://urbanevidencehub.com/draft/).

Requires Node.js 20 or later.

```sh
npm run dev       # Local preview: http://127.0.0.1:4174
npm test          # Evidence filtering and data integrity
npm run build     # Public website only, written to dist/
npm run build:cloudflare # Holding page and draft, written to dist-cloudflare/
```

The homepage uses the split design at `#/home`. Edit the shared palette in
`assets/theme.css` and the homepage wording in `js/content.js`. The homepage
renderer and hero styles are in `app.js` and section 3 of `styles.css`.

### Publish the holding page and draft

The Cloudflare Pages project `urban-evidence-hub-coming-soon` uses
[Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/).
Deploy the combined build to keep the holding page at `/` and the draft at
`/draft/`. GitHub stores the source. Each release requires a Pages upload.

1. Run `npm test` and `npm run build:cloudflare`.
2. With Wrangler signed in, deploy `dist-cloudflare` to a preview branch.
   Open the preview URL and follow **View draft website** to check the release.
3. Upload the same folder to the production branch `main`.

```sh
npx wrangler pages deploy dist-cloudflare --project-name urban-evidence-hub-coming-soon --branch ueh-draft-review
npx wrangler pages deploy dist-cloudflare --project-name urban-evidence-hub-coming-soon --branch main
```

The draft is publicly accessible by link and requests that search engines do
not index it.

Only the allowlisted public files are copied into `dist`. Local spreadsheets,
archives, prototypes, working documents and evidence originals are excluded.
The build includes `_headers` for the draft. It requests no indexing and
limits embedded evidence to the configured hosts. Inline styles support the
graph and bucket colors. Review these policies when moving to a public launch
or adding another evidence host.
All page links use hash routes, so direct links work on static hosts without
server rewrite rules or a backend.

## Where to change things

The standing code requirements are in [AGENTS.md](AGENTS.md). Every change must
stay minimal, readable and organised into labelled sections that explain which
part of the website they implement, so the next student group can maintain it.

| File | Owns |
| --- | --- |
| `index.html` | Centred logo/title and navigation, full-width Hub bar, search, main area, detail drawer and footer |
| `_headers` | Cloudflare Pages browser security and indexing policies for the draft |
| `coming-soon/` | Holding page HTML, artwork, styles and browser policies |
| `scripts/build-cloudflare.mjs` | Packages the holding page and draft together with path-specific browser policies |
| `assets/ueh-logo.png` | Original supplied logo; its header SVG frame removes surrounding whitespace |
| `assets/theme.css` | Palette, font, shared page-title size, header/bar heights, content width, spacing and corner radius |
| `styles.css` | Eight labelled sections for shared controls, pages, Hub, cards, drawer and responsive layouts |
| `js/content.js` | Studio and collection copy, People and avatar colors, tag categories |
| `app.js` | Seven labelled sections for pages, project viewer, shared evidence cards and details, filters, routing, events and loading |
| `js/viewing-history.js` | Back/Forward through actual evidence selections; separate Hub and project sessions |
| `js/evidence.js` | Shared evidence filtering, project attachment ordering and file helpers |
| `js/graph.js` | Connected homepage preview and interactive Hub graph with shared SVG geometry, chains, pan/zoom and cleanup |
| `js/graph-model.js` | Pure compact layout, project-scoped bubbles, majority colors, directed chains and arrow clearance |
| `js/graph-data.js` | Exact framework-file mapping and typed incoming/outgoing relationship sections |
| `assets/graph.css` | Scoped graph visuals and filter controls; shared palette stays in `assets/theme.css` |
| `GRAPH-INTEGRATION.md` | Integrated graph data contract, maintenance workflow, interaction requirements and checks |
| `data/evidence.json` | 300 catalogue records, 660 fixed file identities, exact attachment metadata/previews and 1,874 file relationships |
| `scripts/` | Small build, preview, framework-import and thumbnail tools |
| `scripts/import-framework.py` | Imports Studio 2026 and resolves Informs/Supports/Evaluates through fixed Evidence IDs; also supports the earlier row-reference format |
| `tests/graph.test.mjs`, `tests/test_framework_import.py`, `tests/browser/graph-flow.js` | Integrated model/data, workbook identity and mounted website checks |
| `tests/studio-navigation.test.mjs`, `tests/browser/studio-feedback-flow.js` | Viewing order, tag-to-Grid navigation, People, preview and mobile-header checks |

The header's `.brand` centres the logo and title together above the tabs.
Adjust `.brand-logo` in `styles.css` for its size; the SVG viewBox in `index.html`
frames the artwork while preserving the original PNG. Navigation reserves the
bold width of each label so hover and selection do not move neighbouring tabs.
When renaming a tab, update both its visible `span` and `data-label` in `index.html`.
Hover makes text dark and bold; the selected tab remains dark and bold.
Other accent links and controls use the logo's blue (`--accent` in `assets/theme.css`).
No annotation marks, paper textures, About page,
latest-evidence section or separate decision-chain strip are included.

## Adding studio content

The working framework is `outputs/health-islands-edge-test/Framework table - Studio 2026 and 2027.xlsx`. Studio 2026 contains 660 entries with fixed IDs and outgoing Informs/Supports/Evaluates columns; Studio 2027 retains the same headers. The website now uses the consolidated snapshot. The workbook and historical prototype remain local working files outside the public build.

Edit `js/content.js`. Homepage previews and the corresponding subpages use the
same collections. Add a project with an `id`, `title`, `year`, `image`, `tag`,
`description` and `members`. A new year automatically creates a new Studio year
section. Project cards show only their image, title and studio year.

Project pages show the overview text beside one cover image, above a single grid
of all attachments. Selecting a file opens a large preview and
replaces the project introduction with the same evidence details used in the
Hub: buckets, a description when provided, clickable tags and typed
incoming/outgoing links. Linked titles use natural numeric order.
The sidebar omits the preview because it is already shown on the main stage.
Both sidebars use `evidenceDetails` in `app.js`, so their content stays consistent.
The large preview and shareable URL update with the selection. Previous and Next,
or the left and right arrow keys, browse the files in grid order. Back/Forward
controls retrace the files actually viewed, including nonadjacent selections.
Going Back and selecting something new replaces the old forward branch. Restoring
a file updates the viewer, and the toolbar remains accessible while scrolling.
Project overview or closing the evidence details restores the project image.
The layout stacks on mobile. Cached PDF first pages provide mobile previews,
with links to open the original PDFs.

Publications contains two clearly named layout examples. People lists Partners,
Tutors and Students in that order. Existing
`?category=students`, `tutors` or `partners` links scroll to the corresponding section.
Student examples reuse `projects[].members` and their framework author tags;
cards, profiles and project overviews display first names only. Students share
their project’s avatar color. Tutors are in `tutors`; update names, colors and
introductions there. Add an image for a portrait when available. The RIVM card
uses the supplied black-text Dutch logo, exported from EPS to PNG.

Replace the publication examples or add new entries when available, for example:

```js
{ id: 'publication-id', title: 'Publication title', year: 2027,
  date: '2027-06-15', image: 'assets/publication-cover.webp',
  description: 'A short introduction to the publication.' }
```

Publication cards show an image, title and publication date; partner cards show
an image and title. The image is optional. Every card opens its own page at
`#/publications/<id>` or `#/people/<id>`, with a title, the `description`
sentence and a link back to the collection. Edit these introductions in
`js/content.js`; both page types share `renderCollectionItem` in `app.js`.

Collection cards share one hover and focus treatment in `styles.css`. The
shadow surrounds both the artwork and the card copy. Partner
`imageFrame` settings in `js/content.js` define the visible SVG viewBox and original
image dimensions, excluding white margins so the artwork starts at the title
edge. Original logo files stay unchanged.

## Updating evidence from the framework table

The browser reads a JSON snapshot, rather than needing to process Excel on each
visit. The current snapshot represents all **660 rows** of the consolidated
Studio 2026 framework, matched to **300 catalogue records / 660 attachments**.
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
python scripts/import-framework.py "outputs/health-islands-edge-test/Framework table - Studio 2026 and 2027.xlsx" --output tmp/evidence-review.json
```

This reads the workbook without changing it. It matches rows against titles,
published filenames and verified filename aliases, combines group tags, and
updates descriptions, dates, sources, buckets and row references. The import
report is written beside the output. Modern imports must resolve each fixed ID
to an exact attachment and validate all relationship targets before writing.
Review the temporary snapshot/report, then import again without `--output` to
update the website. Existing file URLs and preview excerpts are retained. Optional
`--previews path/to/prototype-data.js` seeds Office/notebook excerpts during the
initial migration; ordinary metadata updates do not need the prototype.

To attach a new file, publish the original in the evidence file store and add its
`fileName` and absolute `fileUrl` to the corresponding record's `files` array in
`data/evidence.json`. Import again after updating the metadata. Attachment URLs
currently point to the existing evidence host. When moving originals to another
host, update those URLs and `FILE_BASE_URL` in the importer together.

Tags use **OR within a category, AND between categories**. Excluded tags always
remove matching evidence. Bucket checkboxes support any combination, including
none. Filters, sorting and selected evidence are stored in the URL and survive
switches between Knowledge Graph and Grid in the horizontal Hub submenu. Hover or
keyboard focus reveals it; clicking Hub opens Graph and keeps the view links
visible while browsing any Hub view, including on touch screens. Both views
share the same filter function and details drawer. Choose Include or Exclude
before selecting a tag. Solid blue squares mark included tags and hatched
squares mark excluded tags. Grid cards always show the title over the thumbnail
with a colored bucket badge. Displayed titles omit file extensions and use
spaces instead of underscores. Images fit inside the thumbnail without cropping,
and spreadsheet cards use the saved cell excerpts. The arrow actions share
one style in `styles.css`.

The header search opens the evidence Grid with a quoted results heading. The
Grid’s own search refines the same query. Saved `#/search?q=…` links open Grid.

Evidence tags in the Hub drawer and project sidebar link to a fresh Grid query
containing only that tag, including bucket/custom tags. Prior search, filters
and open-file state are cleared. Saved List links redirect to Grid; saved
Partners links redirect to the People partner category/profile.

On phones, the main menu stays collapsed until Menu is pressed, while the two
Hub views remain visible. Change their shared size with `--nav-font-size`.
The centered logo/title remains in place; at 320–430 px widths the header is
about 113 px tall, or 169 px including the Hub view bar, without horizontal overflow.

To regenerate previews from an available local `evidence-files` archive, install
Pillow and pypdfium2 and run `python scripts/create-thumbnails.py`. It reuses
existing thumbnails, writes small WebP images, and leaves originals untouched.

## Adding the graph and evidence relationships

The completed graph is mounted at `#/hub/graph`. See
[GRAPH-INTEGRATION.md](GRAPH-INTEGRATION.md) for its maintenance contract.

`frameworkEntries` in `js/graph-data.js` derives individual graph files from
`files[].framework`. Each fixed `UEH-…` ID retains its exact catalogue record,
attachment, per-file tags and metadata. `fileLinks` stores all 1,874 file edges;
`links` is the 66-edge catalogue aggregation. Never reconstruct IDs from row
positions or use a representative image when a specific file is selected.

`mountGraph` receives the full file collection, file links, shared filters,
filter-controls root, shared drawer and selection/clear/count callbacks. Its
controller provides `select`, `clear`, `update` and `destroy`; route changes abort
document listeners and disconnect its resize observer. Filter updates keep the
same mounted layout. Evidence buckets and tag categories are collapsible.
The graph opens with connected evidence only. Clear all filters restores that default.

Bubble selection shows member files and nonempty typed relationships. File
selection reuses the same simplified drawer renderer as Grid and Projects.
The homepage's clickable `mountGraphPreview` renders actual connected bubbles,
members and typed arrows from the same snapshot and layout. It shares SVG geometry
with the interactive graph and adds no listeners or observers. The whole preview
opens Hub → Knowledge Graph.

Enter fixed target IDs in the workbook's Informs, Supports or Evaluates column,
separated by semicolons, then refresh the snapshot. The importer validates IDs
before writing and derives the incoming labels Informed by, Supported by and
Evaluated by. Palette, arrow colors and fade levels live in `assets/theme.css`;
line types and labels live in `js/content.js`.

## Verification

`npm test` checks filter semantics, search, bucket selection, file labels,
project attachment coverage and ordering, unique evidence IDs, framework row coverage, tags, safe file URLs, thumbnail
paths and relationship integrity. The local browser flow additionally checks
navigation, filters across views, direct evidence links, drawer controls,
project file selection, the flat project grid, direct links, shared metadata and
relationship navigation, persistent Hub tabs, grid titles, example
collections, global search and mobile overflow.

For the mounted graph flow, start the local preview and run
`npx --yes --package @playwright/cli playwright-cli run-code --filename=tests/browser/graph-flow.js`
in an open Playwright CLI session. Importer checks run with
`python -m unittest discover -s tests -p test_framework_import.py` (requires openpyxl).
Run the same browser command with `--filename=tests/browser/studio-feedback-flow.js`
for tag links, multi-step viewing history, ordered People sections and profiles,
stable navigation hover/selection, the connected homepage preview and graph
defaults, UrbanLab branding and mobile menu/header checks.
