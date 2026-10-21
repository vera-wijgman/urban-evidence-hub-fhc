# Integrate the studio evidence graph into Hub → Graph

Use this handover when integrating the completed prototype into the main website.
The source files are in this repository; the generated standalone HTML is a review
copy. The public Graph tab is still the integration point in `js/graph.js`.

## Preparation checkpoint — 21 October 2026

The local prototype has been located and its 11 Node checks pass. Its snapshot
contains 660 individual files and 1,874 relationships. The current public dataset
has 300 grouped catalogue records and no relationships or `frameworkEvidenceIds`
mapping yet. These are different data shapes; do not pass one directly to the
other renderer or match records by title.

For the integration task, first import the consolidated workbook into a temporary
snapshot and verify fixed-ID coverage, attachment URLs and relationships. Then
adapt the graph to the existing mount/cleanup entry point and shared drawer,
including exact-file selection and bubble-member views. Verify the mounted Graph,
Grid, List and Projects before replacing the public snapshot. The graph sources
and workbook currently live in this local workspace and are outside the public
build; commit the required runtime sources as part of that integration.

This preparation keeps the current website usable. It does not mount the
prototype, overwrite the catalogue, or publish a graph deployment.

## Sources to use

| File | Role |
| --- | --- |
| `prototypes/health-islands-graph/graph-model.js` | Project-scoped grouping, compact rings, neighbour-aware layout, safe contraction/clearance, directed decision chains and optional tag positions |
| `prototypes/health-islands-graph/app.js` | Current graph interactions and the final bubble/file drawer behavior |
| `prototypes/health-islands-graph/styles.css` | Graph-specific visuals and controls; uses the main website's theme tokens |
| `prototypes/health-islands-graph/index.html` | Reference markup for the graph canvas, filters, legend and drawer sections |
| `prototypes/health-islands-graph/data.js` | Exported file-level evidence and relationships from the consolidated workbook |
| `prototypes/health-islands-graph/relationship-batch.json` | Recorded rules and explicit removals; the workbook contains the resulting actual links |
| `outputs/health-islands-edge-test/Framework table - Studio 2026 and 2027.xlsx` | Authoritative working framework: 660 fixed IDs; Studio 2027 has the same two header rows and no entries |
| `assets/theme.css`, `styles.css`, `js/content.js` | Shared website palette, shell, drawer styles and tag categories; reuse these |
| `scripts/import-framework.py` | Reads Studio 2026 and resolves Informs/Supports/Evaluates by fixed Evidence ID |
| `tests/health-islands-graph.test.mjs`, `tests/test_framework_import.py` | Existing behavior and importer checks to preserve during integration |

The standalone review file remains
`outputs/health-islands-edge-test/Health Islands - evidence graph.html`, although
its graph now includes the whole studio. It contains 660 file entries, 296 bubbles
and 48 group arrows backed by 1,874 file relationships. The 421 entries added to
the original test have no recorded relationships yet.

## Integrate with the existing website

1. Implement the existing `mountGraph(container, { evidence, links, filters,
   onSelect })` entry point in `js/graph.js` using the model and rendering behavior
   above. Keep the main website's existing header, Hub bar, routes and sidebar.
   Copy the graph canvas and controls rather than nesting the standalone page or
   its duplicate header inside the website.
2. Separate the current `app.js` startup closure from its graph renderer. Scope
   lookups to the mounted container, inject data and selection callbacks, and
   return cleanup for observers and listeners. The current prototype uses
   document-level lookups and handlers; it is a reference implementation, not yet
   a drop-in `mountGraph` module.
3. Preserve the file-level graph identities. `UEH-…` IDs are fixed workbook values
   used by relationships; never reconstruct them from current row positions or
   use file titles as identifiers. The website catalogue currently groups several
   attachments in one record. After importing this workbook,
   `frameworkEvidenceIds` maps those catalogue records to their framework files.
   `frameworkRows` represents current physical rows and is not an identity map.
4. Keep the file-level nodes, per-file tags and links available to the graph.
   Adapt website catalogue filters to that data. Do not discard individual file
   IDs when aggregating visual bubbles. Group keys include project membership so
   equally named groups from different projects remain separate.
5. Reuse the main shared drawer. A bubble opens its own member/relationship view.
   A file click must open that exact attachment, its own metadata/tags and its own
   links; extend the selection callback to carry the selected attachment where
   necessary. Opening the catalogue record's default attachment can show the
   wrong file and is not sufficient.
6. Keep shared theme tokens and `js/content.js` as the sources for palette and tag
   categories. The prototype's generated `tag-groups.js` is a standalone-file
   compatibility snapshot, not a second maintained taxonomy. Scope graph CSS to
   the graph container and avoid global overrides of website controls.
7. Extend the build allowlist in `scripts/build.mjs` for any new runtime graph
   modules/data. Export only the runtime data needed by the website; the local
   workbook, previews and test tools should stay outside the public build.

Do not replace the new workbook with the historical 239-entry Health Islands test
or rerun one-off reset/merge scripts. The website catalogue has not been imported
or published as part of the prototype's final visual edits.

## Final visual and interaction behavior

- Round, compact group bubbles use the majority bucket color with translucent
  fill and no outline at rest. Evidence dots have no outline. Displayed titles
  omit file suffixes, while original filenames remain in the data.
- All relationship arrows use `#909090`, with solid Informs, dashed Supports and
  dotted Evaluates lines. Arrowheads are 18 × 18 graph units. `refX=10` matches the
  triangle tip at `x=10`, keeping that tip on the target circle boundary.
- Hover previews the upstream/downstream decision chain and outlines only the
  focused bubble in darker gray. Clicking pins the chain. The rest fades; click
  blank canvas or outside the chain, close the drawer, or press Escape to clear.
  Pan and zoom remain usable. Avoid traversing backwards and then forwards into
  unrelated sibling branches.
- Bubble drawers show the bubble title, its member files and its nonempty
  relationship categories. No tags, preview or file metadata appear for a bubble.
- Individual file drawers show title, preview, description, Bucket, Project,
  Evidence group, Content type, Source and the file's own tags. Do not display
  Evidence ID, Framework row or a duplicate File metadata field.
- Member lists and linked-item lists display names only. Do not add ID numbers,
  bucket badges, secondary metadata or navigation icons to each list entry.
- Use Informs, Supports, Evaluates, Informed by, Supported by and Evaluated by.
  Omit empty relationship sections entirely, including their headings and any
  “No links recorded yet” placeholder. File links refer to the exact linked file;
  bubble links refer to the connected bubble.
- Keep the lower-left legend next to Fit/zoom controls, the Unconnected switch in
  the filter header, and unchecked-by-default tag display checkboxes grouped by
  the website's categories. Tag membership lines are an optional metadata overlay,
  not new workbook relationships.
- Keep related bubbles close, place disconnected evidence separately, and verify
  initial straight arrows do not pass through unrelated bubbles. Enabled tag
  nodes also stay clear of relationship arrows. Preserve circle-boundary endpoints
  when dragging; the layout does not run a continuous animation.
- Preserve the final neighbour-aware placement logic: count distinct neighbours,
  give single-neighbour bubbles stronger attraction, penalize long gaps more than
  short ones, and search nearby clear slots around the neighbour. Contract only
  as permitted by circle and arrow clearances, retaining at least 60 graph units
  between connected bubbles and 24 from unrelated arrows. Do not replace this
  with a generic force layout that strands single-connection bubbles far away.

## Verify the integrated result

Run the Node tests and Python importer tests using the configured workspace
runtimes. Update tests to exercise the mounted website renderer, then build and
check the real Graph route. Verify hover/pin/clear behavior, filtered and unconnected
views, tag overlays, member/linked-file clicks, correct attachments, omitted empty
categories, hidden IDs and route teardown/remount without duplicated listeners.
Check Grid, List and Projects still open their expected files and shared drawer.

To refresh the standalone reference, run
`tmp/health-islands-edge-test/export_graph.py`, then
`tmp/health-islands-edge-test/package-preview.cjs`. This reads the authoritative
workbook; it does not change it.
