# 02 — Daily Close (17:30 Asia/Makassar, Mon–Fri)

**One-line:** Factual close of the day's sales activity and tomorrow's highest-value first move.
Reports facts only — never changes strategy, contact status, messages, money, or human gates.

## Before acting

1. Read `ops/Ben-Brain/context/operating-brain/01-current-focus.md` and
   `02-active-vs-ceased-work.md`.
2. Read the [Growth Labs Automation Control Plane](https://app.notion.com/p/3ab94a6ff38f817991aaddf73fe2f028)
   and the [Dashboard & Daily Close Agent implementation](https://app.notion.com/p/3ab94a6ff38f8177b7a7d380a1e8a543).
3. **Idempotency:** if a "Growth Labs Daily Close — <today>" page already exists, update it
   rather than creating a duplicate.

## The run

**Update factual rows.** Update sales-activity rows only where source data is available. Where
it isn't, mark the row **Data gap** or **Error** — never guess a number.

**Anti-stale guard.** Exclude Bybit / Fortem / full-scope TCS from the funnel — ceased/reduced.

**Calculate the funnel:**
- Sent · Replies · Reply rate
- Qualified audits booked
- Install WIP (respect the two-install WIP limit)
- Care attach

**Trust telemetry.** From today's Morning Revenue Queue, record drafts **approved / edited /
rejected**. This is the metric that earns graduation past draft-only (target: 10 runs at ≥80%
approved-unedited).

**Surface blockers.** List today's blockers plainly, each with the smallest next unblock.

**Set tomorrow's first move.** One highest-value first action for tomorrow, tied to the sprint
order in `01-current-focus.md` (Seven → Cursor → Provy Pay).

## Output — the Daily Close record

Create/update "Growth Labs Daily Close — <today>" (matching the existing 28/30/31 July entries):
the funnel numbers first, then data gaps/errors, trust telemetry, blockers, and tomorrow's first
move.

## Permanent gates — STOP here

Do not change strategy, contact status, send messages, move money, or advance a human gate. This
is a reporting close only. Report missing access/data plainly rather than guessing.
