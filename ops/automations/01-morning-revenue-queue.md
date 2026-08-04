# 01 — Morning Revenue Queue (07:30 Asia/Makassar, Mon–Fri)

**One-line:** Draft-only. No contact with an assigned Next Action goes cold by accident, and
every touch queued is the best available move toward a booked Growth Constraint Audit — written
the way Ben would write it on a good day. Ben owns every send.

## Before acting

1. Read `ops/Ben-Brain/README.md`, `ops/Ben-Brain/context/operating-brain/01-current-focus.md`, and
   `ops/Ben-Brain/context/operating-brain/02-active-vs-ceased-work.md`.
2. Read the [Growth Labs Automation Control Plane](https://app.notion.com/p/3ab94a6ff38f817991aaddf73fe2f028)
   and the [Growth Pipeline / BD Chase-Up spec](https://app.notion.com/p/6f39ea3692154e869af153709951f824).
3. **Idempotency:** check whether a Morning Revenue Queue run sheet already exists for today. If
   it does, stop and report "already run today" — do not produce a second queue.

## The run

**Sweep.** Query the Growth CRM for contacts in To-do / In-progress where Next Contact ≤ today
OR Next Contact is empty. Enumerate the full due list — no silent skips. Deduplicate.

**Anti-stale guard (override).** Drop or flag any row that assumes Bybit, Fortem, or full-scope
TCS is active — these are ceased/reduced. Never draft a touch that treats them as live.

**Classify + score.** For each due contact: score Relevance 0–100; classify High / Medium /
Low / Unknown; classify path (audit-path / partner-channel / park); identify a real why-now
trigger. No trigger you can evidence → flag the gap, do not invent one.

**Best-action check.** Test the assigned Next Action against the live objective, the contact's
status, and the last real interaction. Confirm as drafted, or propose a replacement with
reasoning shown — never silently override.

**Draft the touches (draft-only).** Channel-native per the cadence + congruence rules in the
spec. Match `ops/Ben-Brain/context/voice-examples/` and `08-style-guide.md`:
- Every touch earns its place — gives something real or references a real shared moment.
  "Just bumping this" is banned. Never fabricate shared history.
- Read-aloud test: Ben could send it verbatim. If a sentence survives deleting "just", "quick",
  and "circle back", it was saying nothing.
- One draft per contact; alternate angle only where the read is genuinely ambiguous.
- **Every outbound send is labelled `REVIEW · BEN KILLEN`.**

**Cadence reset.** Propose the new Next Contact date per the cadence matrix, plus the next-next
action, so every contact leaves with a forward move.

**Budget:** max 15 drafts. If the queue exceeds it, rank by Activation Priority × Relevance and
defer the tail with a note (it carries to tomorrow flagged, never dropped).

## Conditional add-ons

- **Monday:** also run the weekly constraint review.
- **First weekday of a new month:** also run the monthly Care/Care+ review **only if** it has
  not already been completed this month (check the Control Plane / Care sub-page first).

## Output — the run sheet

1. The number — audits booked yesterday / this week vs target.
2. Ready to send — contact · relevance · class · why-now · confirmed/revised action · draft ·
   send window · new Next Contact. Every draft `REVIEW · BEN KILLEN`.
3. Judgment calls — proposed overrides with reasoning; anything emotionally loaded routed to Ben
   untouched.
4. Flags — stale/ceased-work rows, off-avatar contacts over-cadenced, three-strike parks, Do Not
   Contact anomalies, missing data.
5. Log line — due / actioned / deferred / parked.

## Permanent gates — STOP here

Do not send anything, do not write status changes, do not move money, do not advance any human
gate. Ben owns every external send, live relationship, diagnosis, price, scope, and partner
invitation. Present the run sheet and stop. Report missing access/data plainly.
