# Growth Labs — Daily Operating Cycle (Automations)

This folder is the version-controlled source for the three scheduled agents that run the
Growth Labs operating cycle. **Notion is the source of truth** (the
[Growth Labs Automation Control Plane](https://app.notion.com/p/3ab94a6ff38f817991aaddf73fe2f028));
this repo is the thin execution + doctrine layer the agents check out.

## Why three automations, not one

The original Codex instruction was one prompt that had to detect which window was due. That is
fragile and hard to log. Instead we run three single-purpose scheduled agents — one per window —
mirroring the Control Plane's own "Scheduled operating orchestrator". Each is easy to debug and
writes its own log line. A loop without a log is a cron job with vibes.

## The three windows (Asia/Makassar, UTC+8, no DST)

| # | Automation | Cron (local) | Instruction file |
|---|---|---|---|
| 1 | Morning Revenue Queue | `30 7 * * 1-5` | `01-morning-revenue-queue.md` |
| 2 | Daily Close | `30 17 * * 1-5` | `02-daily-close.md` |
| 3 | Daily Wisdom | `30 20 * * 1-5` | `03-daily-wisdom.md` |

> If the automation runtime schedules in UTC rather than your local timezone, shift each cron by
> −8h: `30 23 * * 0-4` (07:30 WITA), `30 9 * * 1-5` (17:30 WITA), `30 12 * * 1-5` (20:30 WITA).
> Confirm the editor's displayed run time before saving.

**Inbound sibling (desktop-only):** `04-inbox-triage.md` is the inbound counterpart. It **cannot**
run as a cloud automation (it needs local WhatsApp/Telegram sessions and Ben's logged-in browser
for Instagram), so it is scheduled via launchd on the Mac and kicked off from the Cursor desktop
agent. See that file for its own setup.

**Plus one desktop-only flow (window 4):** `04-inbox-triage.md` — the inbound counterpart that pulls
WhatsApp/Telegram/Instagram DMs into the Growth CRM. It is *not* a cloud automation (it needs local
message sessions + Ben's logged-in browser); its data pull is scheduled locally via `launchd` and the
agent run is a one-line desktop kickoff. See that file and `../inbox-connectors/README.md`.

## What each automation prompt does (the short version)

Each automation's instruction field should stay thin and point here:

```
Read ops/Ben-Brain/README.md and ops/automations/<file>.md in this repo, then read the Growth
Labs Automation Control Plane in Notion and the linked implementation sub-page. Execute exactly
as those files specify. Draft only. Stop at every permanent Ben gate. Write the run's log line.
```

The full behaviour lives in the per-window files so it is version-controlled and editing the
doctrine in Notion updates every run without touching the automation.

## Improvements over the original Codex instruction

Baked into the per-window files, grounded in Ben-Brain:

1. **Anti-stale guard** — never resurface Bybit/Fortem (CEASED) or full-scope TCS (reduced).
   See `ops/Ben-Brain/context/operating-brain/02-active-vs-ceased-work.md`.
2. **Voice + evidence gate** — every draft matches `ops/Ben-Brain/context/voice-examples/` and the
   `08-style-guide.md`, passes the read-aloud test, and never fabricates shared history.
3. **Trust-ladder telemetry** — the Daily Close logs drafts approved / edited / rejected, the
   metric that earns graduation past draft-only (10 runs ≥80% approved-unedited).
4. **Idempotency** — each run checks "already completed today?" before acting; the monthly Care
   review never double-fires.
5. **Thin prompts, Notion as source of truth** — no duplicated doctrine that can drift.

## Permanent human gates (from the Control Plane)

Ben owns every external send, live relationship, diagnosis, price, scope, contract/payment,
production deploy/DNS change, strategic reprioritisation, renewal change, and Growth Partner
invitation. Agents prepare the work and stop at the gate. Missing access or data is reported
plainly, never guessed.

## Setup (one-time)

1. **Connect Notion at your Cursor account level** so cloud automations can reach it
   (cursor.com → Settings → MCP/Integrations → add Notion). The desktop-only connection in
   `~/.cursor/mcp.json` does **not** carry to cloud agents.
2. **Push this repo to GitHub** so cloud automations can check it out
   (`gh auth login` then `gh repo create`).
3. Create the three automations from the per-window files (cron + thin instruction above).
