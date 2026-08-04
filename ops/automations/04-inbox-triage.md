# 04 — Inbox Triage (WhatsApp + Telegram + Instagram → Growth CRM)

The inbound sibling of the BD outreach loop. Full behaviour lives in
`Ben-Brain/specs/02-inbox-triage-loop.md`; this file is the thin execution + scheduling layer.

## Why this one is desktop-only (not a cloud automation)

Unlike windows 01–03, this run **cannot run as a Cursor cloud automation**. It needs two things that
only exist on Ben's Mac:

1. **Local message sessions** — the Telegram session file and the WhatsApp listener's SQLite store.
2. **Ben's logged-in browser** — Instagram has no safe local API, so DMs are read from the live
   session via the browser tools (read-only).

So scheduling is split: the **data pull is fully automated locally**, and the **agent run is a
one-line desktop kickoff** (with an optional reminder).

## The two scheduled local pieces (launchd)

| Job | What it does | Cadence |
|---|---|---|
| `com.growthlabs.whatsapp-listener` | Keeps the neonize listener up, recording WhatsApp messages to SQLite | Always on (KeepAlive) |
| `com.growthlabs.inbox-pull` | Runs `run.py` → refreshes `out/bundle-latest.json` (Telegram + WhatsApp) | Daily 07:15 WITA |

Install both: `cd inbox-connectors && bash scheduling/install.sh` (one-time; see the connector README
for the venv + login steps first).

## The desktop kickoff (paste into the Cursor desktop agent)

```
Read Ben-Brain/README.md and Ben-Brain/specs/02-inbox-triage-loop.md in this repo. Then run the
Inbox Triage loop exactly as that spec specifies: ingest inbox-connectors/out/bundle-latest.json,
read my Instagram DMs through my logged-in browser (read-only), match every recent inbound to the
Growth CRM, research any contact the CRM doesn't know, and deliver the Inbox Triage run sheet with
drafted replies + proposed CRM writes. Draft only. Do not send anything on any platform and do not
touch the CRM until I confirm.
```

Run it in the morning after the pull, before the BD Morning Revenue Queue — the two run sheets then
cover inbound + outbound together. Graduate toward more automation only via the spec's trust ladder.

## Permanent human gates

Same as the rest of the operating cycle: Ben owns every external send and every CRM write. The agent
prepares the run sheet and stops at the gate. Missing access (stale bundle, IG not logged in, missing
CRM field/option) is reported plainly, never guessed.
