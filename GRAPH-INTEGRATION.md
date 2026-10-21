# Integrated studio evidence graph

Hub → Graph now uses the completed compact prototype, the consolidated 660-entry
framework and the website's shared header, filters, theme and detail drawer.
The snapshot has 300 catalogue records, 660 exact file IDs, 296 bubbles,
1,874 file relationships and 48 aggregated graph arrows.

## Runtime code map

| File | Responsibility |
| --- | --- |
| `js/graph.js` | Scoped mounted SVG, graph interactions, visibility/tag controls and lifecycle cleanup |
| `js/graph-model.js` | Pure prototype layout: compact rings, neighbour-aware placement, safe contraction, project-scoped bubbles, directed chains and optional tag positions |
| `js/graph-data.js` | Individual file identities/attachment references and nonempty typed relationship sections |
| `app.js` | Hub shell/filter URLs, graph mounting and one shared drawer renderer for Graph, Grid, List and Projects |
| `assets/graph.css` | Graph-scoped visuals and controls; no duplicate header or drawer styling |
| `assets/theme.css`, `js/content.js` | Shared palette/fade tokens, tag categories and relationship labels/line types |
| `data/evidence.json` | Published catalogue/file snapshot, attachment URLs and directed edges |
| `scripts/import-framework.py` | Read-only workbook import, exact-file mapping and validation before writing |

## Data and selection contract

The authoritative local workbook is
`outputs/health-islands-edge-test/Framework table - Studio 2026 and 2027.xlsx`.
Studio 2026 contains all fixed IDs and outgoing Informs/Supports/Evaluates targets;
Studio 2027 retains the same two header rows. Do not rerun historical reset/merge
scripts or replace it with the 239-entry Health Islands test.

The 300 existing catalogue records retain their IDs and published file URLs.
Each attachment has `framework` metadata: its fixed ID, original title, group,
buckets, own tags/authors/projects, description/source and optional lightweight
preview excerpt. Its current `row` controls display order only, never identity.
`frameworkEvidenceIds` maps catalogue records to these file identities.
`fileLinks` preserves all 1,874 exact file edges, including links inside the same
catalogue card. `links` is the separate 66-edge catalogue aggregation.

`frameworkEntries` derives graph nodes without maintaining a second metadata
snapshot. `mountGraph(container, { evidence, links, filters, controls, drawer,
onSelect, onClear, onCount })` receives the full file collection. Shared filters
apply to individual file metadata. The controller exposes `select(id, focus)`,
`clear(notify)`, `update(filters)` and `destroy()`. The selection callback carries
the bubble, optional exact file and group arrows to the shared drawer.

The graph owns scoped canvas events, two abortable document listeners and one
resize observer. Route teardown destroys them. Filter updates preserve positions,
pan/zoom and tag overlays. Reset remounts a fresh graph. Fit all can zoom far enough
out to contain the complete disconnected collection; zoom in or switch Unconnected
off to inspect the connected core. Layout geometry itself matches the prototype.

## Refresh workflow

1. Publish/register new attachments before importing. Keep fixed IDs when sorting.
2. Run `python scripts/import-framework.py "path/to/consolidated.xlsx" --output tmp/evidence-review.json`.
3. Review the snapshot and adjacent import report. Missing exact-file matches or
   invalid IDs fail before writing. Run the same command without `--output` only
   after review, then rebuild the local preview.
4. Existing excerpt previews survive imports. The optional `--previews` argument
   can read the local prototype's exported data.js when refreshing those excerpts.
   It is not a second maintained taxonomy or runtime dependency.

All runtime modules in `js/` and styles in `assets/` are already included by
the build allowlist. Workbooks, prototype pages, private originals and test tools
stay outside the public build. The original `prototypes/health-islands-graph/`
and standalone HTML in `outputs/` remain local historical references.

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

## Verification

`node --test tests/evidence.test.mjs tests/graph.test.mjs` checks fixed-ID coverage,
exact attachment mapping, per-file filter/link behavior, compact placement,
circle/arrow clearance, majority colors, typed aggregation and directed chains.
`python -m unittest discover -s tests -p test_framework_import.py` checks stable
IDs, legacy references, invalid targets and exact-file metadata after reordering.

With the local preview running, use Playwright CLI's `run-code` with
`--filename=tests/browser/graph-flow.js`. The mounted website flow checks hover,
pin/clear, exact member/linked-file selection, simplified panels, tag overlays,
filters, pan/zoom, Unconnected, mobile modal behavior and Graph/Grid/List/Projects.
It also counts abortable listeners through repeated route teardown/remount.
Additional local verification checked dragging, circle-boundary arrow endpoints,
pinned-over-hover behavior, faded/outside clicks and empty searches.

This version is saved to GitHub and verified locally; no deployment is performed.
