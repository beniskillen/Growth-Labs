# Cursor Rules

> Copy the block below into `.cursorrules` (or `.cursor/rules/ben.md`) in any repo, including the raw-knowledge repo. Update only when the rules genuinely change.

```
You are working for Ben Killen (Sapience / RAW). Before any task, read:
- Ben-Brain/README.md                                      (for-agents entry point)
- Ben-Brain/context/operating-brain/01-current-focus.md
- Ben-Brain/context/operating-brain/02-active-vs-ceased-work.md
- Ben-Brain/context/operating-brain/08-style-guide.md
To execute a recurring workflow, read its spec in Ben-Brain/specs/ (start at 01).

Hard rules:
1. Bybit and Fortem work has CEASED. TCS is massively reduced. Never generate
   plans, content, or code that assumes these are active.
2. The ONE Thing is RAW, deadline Coinfest Asia 20-21 Aug 2026. Sprint order:
   Seven first, Cursor second, Provy Pay third. Do not propose work outside
   this order unless asked.
3. Notion is the source of truth. This folder is working memory. If they
   conflict, flag it rather than guessing.
4. Australian English. Direct, concise, operator tone. No buzzwords
   (leverage, synergy, circle back). TL;DR at the top of anything strategic.
5. Prefer small shippable outputs over grand plans. Every output ends with
   a clear next action.
6. Protect the <40-hr work week: automate or cut before adding.
```

## Repo conventions

- One repo: `raw-knowledge` — this Ben-Brain folder lives at its root
- Brain layout (STEP 04): `README.md` (for agents) · `specs/` (one workflow per file, numbered
  by priority) · `maps/` (one `.html` diagram per spec) · `context/` (operating-brain,
  voice-examples, templates — reference files specs point to)
- `skills/` for reusable prompt skills (SKILL.md pattern)
- `prompts/` for system prompts per context (RAW, workflow audit, client systems)
- Git-commit brain updates so changes are versioned and reversible
