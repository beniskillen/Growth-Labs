# FigJam draft board

Visualise the Notion architecture. The board is the “holy shit” demo. It is not a second strategy.

## Tools (mandatory order)

1. Load skills: `/figma-create-new-file`, `/figma-use`, `/figma-use-figjam`, `/figma-generate-diagram`, plus FigJam refs: `plan-board-content`, `create-section`, `create-sticky`, `create-shape-with-text`, `create-connector`, `create-table`, `create-text`, `position-figjam-nodes`, `figjam-colors`.
2. `whoami` → `planKey` (single plan: use it; multiple: prefer the Growth Labs / personal drafts plan).
3. `create_new_file`: `editorType: "figjam"`, `fileName: "Leverage Map — [Client] [Event]"`.
4. Build with `use_figma` (FigJam APIs only — **never** `figma.createPage()`).
5. `generate_diagram` **into the same `fileKey`** for (a) money-model/ascension flowchart (b) sponsor ROI sequence.
6. Paste the file URL onto the Notion hub.

Do not call `generate_diagram` without `fileKey` after the first file exists — that spawns extra drafts.

## Board structure

Wrap everything in one top-level white section (movable unit). Left → right, top → bottom. Inter for all text.

| Zone | Content | Colour signal |
| --- | --- | --- |
| 1 North star | Vision, ticket math, net target (three numbers) | Cool grey / blue |
| 2 Constraint | The leak + sample size | Gold “look here” (not red unless actually broken) |
| 3 Three offers | Client / Buyer / Sponsor cards | Distinct cards |
| 4 Valence leverage map | Impressions → UVs → CTR → CVR → CAC → LTV → sponsor ROI | Flow shapes + connectors |
| 5 Growth Labs scope strip | In 30 / In 90 / Not now / Out | Strip under the map |
| 6 30-day bet | Swimlanes by owner; UNASSIGNED pink | Green healthy / pink decision |
| 7 90-day engine | Same; depends-on from 30-day pass/fail | Blue in-progress |
| 8 COGS vs funding | Low/high vs cash gates | Orange if unfunded |
| 9 Decisions / CTA | One primary CTA: approve 30-day bet + appoint UNASSIGNED | Pink |

Stickies for `Data gap` and kill criteria. Do not put private Loom minutes on the board.

## Colour semantics (FigJam)

- Gold — look here (constraint)
- Red — actually broken / UNASSIGNED overdue
- Pink — decision required / UNASSIGNED
- Orange — problem / unfunded
- Green — named + healthy
- Blue — in progress / 90-day
- Purple — exploration / parking lot

UNASSIGNED swimlane cards are pink. Named owners are green labels.

## 30/90 swimlanes

One column per named owner (Ben, Ross, Andy, …). One extra column **UNASSIGNED**. Each action is a sticky: action, done-when, due date. Do not exceed ~7 stickies per 30-day lane — parking lot the rest.

## Diagrams (`generate_diagram`)

- **Ascension / money model:** flowchart, no emojis, no `\n` in labels, quote labels with special characters, camelCase IDs, never use `end` as an ID.
- **Sponsor ROI:** reach → segments → attribution → conversion → LTV → ROI.

Place them under zone 4 / 8 rather than a new file.

## Copy density

Board title 60–96px. Section headings 48px. Body 20–24px. Cards size to text (400–1000px), then size sections to cards. Spacing in multiples of 4.

Entry point: title top-left readable at overview zoom: `Leverage Map — [Client]`. Subtitle: the one-line constraint.

## After generation

Return: FigJam URL, fileKey, what to look at in 30 seconds, UNASSIGNED count. Update Notion hub with the URL. If two generate attempts fail, stop and leave the `use_figma` board up.
