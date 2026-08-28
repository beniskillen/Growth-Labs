# Notion architecture

Search first. Reuse IDs. The hub is the shareable spine; children are appendix.

## Placement

- If a client project page exists, create the hub as its **child**.
- Else create under the client hub, then mention from the project.
- SOP twin of this skill lives in the **SOPs** data source (`collection://17394a6f-f38f-82a5-ba00-07b817cfeee5`) with Type `Agent Instructions`, Asset Type `Agent` + `Guide`, Client `Reusable / Internal` + client name, Workspace `Growth Consulting`.

Optional: Agent Build Tracker row (`collection://10d5ffc5-087d-4250-ad7f-e00e7ea6dc24`), Department `Growth Consulting`, Stage `🧪 Testing` after first run.

After the SOP page exists, convert it with Notion `convert-page-to-skill`.

## Hub page (required)

Title: `Leverage Map — architecture + FigJam` (or `Leverage Map — [Client] [Event]`).

Cover must be readable in four minutes. Use TL;DR callout (DM-ready): Result, Numbers, Timeframe, Workflow, Roles, Next step.

Hub sections, in order:

1. **Constraint** (gold/orange) — evidence, sample size
2. **Unique mechanism** — Leverage Map + valence, one paragraph
3. **Three offers** — Client / Buyer / Sponsor tables
4. **FigJam** — URL, one sentence what to look at
5. **30-day bet** — pass/fail metric, linked DB
6. **UNASSIGNED count** — the ask
7. **Money model** — cash timing; planning-case labelled
8. **Scope map** — In 30 / In 90 / Not now / Out
9. **Decisions** — approved / rejected / needs evidence / deferred
10. **Links to existing source-of-truth pages** (mentions, not copies)

Australian spelling. USD unless told otherwise. Private Loom minutes stay off this page.

## Children (create only if missing)

Prefer child pages under the hub. Prefer **databases** for 30/90.

| Child | Type | Notes |
| --- | --- | --- |
| Offer clinic | Page | Value equation per offer; stack; what would have to be true |
| Money model | Page | Attraction → upsell → downsell → continuity; cash calendar |
| Growth Labs scope map | Page | Ceiling vs buy; staff (self/bench/partner) |
| Competitive map | Page or link | Reuse if a market-research page exists |
| Funnel current vs future | Page | Valence table + Data gaps |
| Impression inventory | Page | Earned / paid / hoped |
| Sponsor pipeline | DB or link | Reuse Top 100 if it exists |
| Custom proposal briefs | Pages | Flagship only |
| COGS model | Page or link | Reuse cashflow page |
| 30-day actions | Database | Schema below |
| 90-day actions | Database | Same schema, Window default 90 |
| Decision log | DB or table | Four statuses |
| Parking lot | Page | Re-entry conditions |

Do **not** rewrite an existing meeting pack. Reconcile dates and sprints **into** the 30/90 tables.

## 30/90 database schema

Create with Notion `create-database` under the hub. Suggested SQL:

```sql
CREATE TABLE (
  "Action" TITLE,
  "Window" SELECT('30':blue, '90':purple),
  "Outcome" RICH_TEXT,
  "Owner" RICH_TEXT,
  "Seat status" SELECT('Named':green, 'UNASSIGNED — needs owner by date':red, 'Client to appoint':orange, 'Growth Labs':blue, 'Bench / partner':yellow),
  "Hours/wk" NUMBER,
  "Depends on" RICH_TEXT,
  "Done when" RICH_TEXT,
  "Kill / pivot if" RICH_TEXT,
  "Due" DATE
)
```

If a tasks DB already exists on the project, add properties rather than a third tracker — but the assignment schema must still be visible.

Seed rows from the brief + existing RACI. Unknown producer/closer = UNASSIGNED with a by-when date.

## Mentions

Use `<mention-page url="https://app.notion.com/p/...">` for existing pages. Do not wrap existing pages in `<page>` (that **moves** them).

## First-run parent (AI Powered)

Parent page_id: `3c294a6ff38f8020bdc5d55a71a7de5c` (Event Sponsorship & Sales | $2M Business).

Reconcile the existing two-week sprint (26 Aug–8 Sept 2026) and October architecture into 30/90. Do not compete with that pack.

## Convert to Notion AI skill

1. Create SOP row with the human-readable playbook (pipeline, gates, assignment schema, palatability layers).
2. Call `notion-convert-page-to-skill` with that page URL.
3. Link the Cursor skill path (`.cursor/skills/leverage-map-proposal/`) at the top of the SOP.
