# README — FOR AGENTS

You are operating inside **Ben Killen's** (Sapience / RAW) workflow system. This folder is the
complete, authoritative description of how his recurring work runs. Read this file fully before
executing anything.

## What this folder is

- **`specs/`** contains one file per workflow. Each spec is self-contained: an agent with zero
  outside context must be able to execute it from the file alone. If you find you need
  information a spec doesn't contain, that is a spec defect — flag it, do not guess.
- Specs are **numbered by priority**. Told to "start" with no other instruction? Start at the
  lowest number.
- **`maps/`** contains a visual diagram of each spec (`NN-<workflow>.html`). They are for
  humans; you don't need them to execute.
- **`context/`** contains reference files that specs explicitly point to. Only open what a spec
  sends you to. It holds three things:
  - `context/operating-brain/` — Ben's compressed working memory (current focus, active vs
    ceased work, clients, OKRs, style guide, decisions log). Background an agent reads to avoid
    stale or off-strategy output. Start with `01-current-focus.md` and
    `02-active-vs-ceased-work.md`.
  - `context/voice-examples/` — real messages that sound like Ben. Read before writing anything
    in his name.
  - `context/templates/` — reference files specs point to (run-sheet, run-log, setup kits).

## How to read a spec

- **THE FLOW** is the execution order. **[EXECUTOR]** tags name who runs each step — only
  execute steps tagged for an agent. Steps tagged with a human's name (e.g. **[BEN]**) are
  theirs, not yours.
- **⟡ REVIEW GATE** is a hard stop. Produce everything up to the gate, present it, and WAIT.
  Never continue past a gate on your own judgment, no matter how obvious the approval seems.
- **AGENT BRIEFING** contains rules that override your defaults. If a briefing rule conflicts
  with what seems efficient, the briefing wins.
- **FAILURE RULES** tell you what to do when reality doesn't match the spec. Every failure path
  ends in a safe default or "flag Ben" — never improvisation.

## Standing rules (apply to every workflow)

1. **Never invent facts, numbers, dates, or fees.** Anything unconfirmed stays as an explicit
   `[CONFIRM: ...]` placeholder. A visible gap is correct; a plausible guess is a failure.
2. **Nothing external sends without a gate.** No email, message, post, or file leaves this
   system to a third party unless the spec's flow explicitly passed a review gate for it. Ben
   keeps the send button.
3. **Match the voice.** Anything written in Ben's name follows the examples in
   `context/voice-examples/` and the rules in `context/operating-brain/08-style-guide.md`.
4. **Respect what's ceased.** Bybit and Fortem work has CEASED; TCS is massively reduced. Never
   generate plans, content, or code that assumes these are active — see
   `context/operating-brain/02-active-vs-ceased-work.md`. If any input treats them as live, flag
   it as stale before acting.
5. **Notion is the source of truth.** This folder is the compressed working layer. When they
   conflict, flag it — do not guess. Protect the <40-hour work week: automate or cut before
   adding.

## Escalation

When blocked, confused, or facing a decision the specs don't cover: stop, state what you have,
state what's missing, and ask. One clear question beats ten assumptions.

---

## Workflow index

| # | Spec | Map | What it does |
|---|---|---|---|
| 01 | [`specs/01-bd-outreach-loop.md`](specs/01-bd-outreach-loop.md) | [`maps/01-bd-outreach-loop.html`](maps/01-bd-outreach-loop.html) | Daily BD chase-up loop over the Growth CRM — sweep due contacts, draft the best next touch in Ben's voice, reset cadence, log. Ben sends. |
| 02 | [`specs/02-inbox-triage-loop.md`](specs/02-inbox-triage-loop.md) | — | Inbound sibling of 01 — pull recent WhatsApp/Telegram/Instagram DMs, match them to the Growth CRM, research unknown contacts, draft the reply Ben would send. Ben sends. Connectors live in `../inbox-connectors/`. |

*Add new workflows as `specs/NN-<workflow>.md`, numbered by Clone Score / priority, with a
matching `maps/NN-<workflow>.html`. One spec = one workflow = one file.*
