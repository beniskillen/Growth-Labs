---
name: growth-labs-service-agreement
description: Create Growth Labs branded services agreements from a commercial brief. Use when drafting, restyling, or producing a client contract, retainer, pilot, SOW, or services agreement as print-ready HTML/PDF, or when applying the Growth Labs contract style guide.
---

# Growth Labs service agreement

Produce print-ready **Services Agreements** in the Growth Labs visual system. Architecture copies the house legal document (cover → At a Glance → parties and recitals → numbered terms → schedules → execution). Voice and tokens copy the **shipped website**, not older brand concepts.

This skill writes **commercial drafts**. It is not legal advice. Never invent governing law, liability caps, tax treatment, entity names, addresses, or convenience-termination terms. Mark unknowns as `TO CONFIRM` or `TO CONFIRM WITH COUNSEL`.

## When to use

- A services, retainer, pilot, or growth-operating agreement needs to be created or restyled.
- The user supplies commercial points and a reference contract (or this repo's template).
- The output should look like Growth Labs, not like a generic Word contract.

## Do this in order

1. Read [references/brand.md](references/brand.md) and [references/architecture.md](references/architecture.md).
2. Collect parties, term, fee, scope, exclusions, and open items. Do not guess legal facts.
3. Copy [assets/template.html](assets/template.html) and [assets/agreement.css](assets/agreement.css).
4. Fill placeholders. Keep clause numbering (`1.1`, `(a)`) and the At a Glance table.
5. Put measurable volumes, fee mechanics, and open items in **Schedules**, not on the cover.
6. Render PDF with [scripts/render.mjs](scripts/render.mjs).
7. If the git remote is public, **do not commit filled client commercials**. Publish the signed-path draft in Notion (or another private store). Commit only the skill, CSS, template, and style guide.

## Visual rules (non-negotiable)

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#0a0a0b` | Cover ground, body text |
| Paper | `#f4f4f2` | Inner pages, cover type |
| Steel | `#8a8f98` | Meta, eyebrows, running headers |
| Signal | `#667cff` | Mark, clause index, rules, links |
| Panel | `#111115` / `#16161b` | Cover cards |

- Wordmark: three-bar mark + `GROWTH LABS_` in Geist Mono, 0.12em tracking.
- Eyebrows: Geist Mono, 10px, 0.14em, uppercase, signal status dot.
- Cover is dark + 56px grid. Inner pages are paper on ink type (readable when printed).
- Pairing mark on the title line: `PROVIDER × CLIENT` (same pattern as the reference agreement).
- Do **not** use concept green `#2AF598`, concept amber `#FFB020`, or the blue-block favicon as the contract mark.
- Body copy uses **and**, not **&**. Australian/British spelling (`licence` as a noun, `organisation`). No AI-hype.

## Document architecture

Follow [references/architecture.md](references/architecture.md). Minimum spine:

1. **Cover** — wordmark, document title, one-sentence lede, two party cards, `REF` / version / date / `PRIVATE AND CONFIDENTIAL`.
2. **At a Glance** — what this is, who engages whom, term, fee, what is not included, how it closes.
3. **Parties** — legal names, notices, trading names. Then **Background** recitals A–D.
4. **Terms** — numbered clauses (`1`, `1.1`, `(a)`). Independent contractor. No employment.
5. **Schedules** — deliverables/volumes, fees, open items, optional field lists or carve-outs.
6. **Execution** — signature blocks. Optional “complete at onboarding” list.

House letterhead is **Growth Labs**. Contracting parties are whoever actually invoices and pays. If Ben/Growth Labs only does strategy and QA, say so in a roles clause and **do not** make Growth Labs a party unless it is signing.

## Content rules

- Targets and daily volumes are **baselines / planning tools**, not guarantees, unless counsel drafts a warranty.
- Daily volumes are averages across ordinary business days and may be throttled for platform limits, deliverability, account health, holidays, approval delays, and list quality.
- No commission or revenue share unless a separate attribution schedule is signed (percentage, baseline, eligible opportunities, payment event, exclusions, refunds, tail).
- Client owns client data, credentials, and paid client-specific deliverables. Provider retains pre-existing templates, methods, prompts, and reusable operating systems, and grants a perpetual internal-use licence to final paid materials.
- **No credentials in Notion.** Access via official sharing or OAuth.
- Acceptance: material defect window (default five business days) then deemed accepted.
- Breach termination: material breach not remedied within ten business days, unless the brief says otherwise.
- Change control: channel count, market, daily volume, creative production, technical build, or response workload needs a written re-scope.
- Flag every unresolved legal item visually with `<span class="open">TO CONFIRM</span>`.

## Reference codes

Format: `GL-<PROVIDER>-<CLIENT>-<YEAR>-<NNN>` in uppercase ASCII, hyphenated short names.

Example: `GL-NARA-SPECTRE-2026-001`.

## Render

From the skill directory, or pass absolute paths:

```bash
node .cursor/skills/growth-labs-service-agreement/scripts/render.mjs \
  path/to/agreement.html \
  path/to/agreement.pdf
```

Chrome must be available (`google-chrome` or `CHROME=/path`). Print A4, colour, no browser header/footer.

## Notion

- Style guide and SOP belong in the SOP database (`collection://17394a6f-f38f-82a5-ba00-07b817cfeee5`).
- Filled agreements belong under the **client** page, not in the public git repo.
- HTML for Notion must be uploaded with `create-attachment` and placed with `<embed src="file-upload://...">`, never as a code block. Inline CSS; keep the file under 200 KiB.

## Quality bar

- Cover reads in five seconds: who, what, term, fee.
- Inner pages still look like Growth Labs when printed greyscale (signal remains a second colour).
- Every `TO CONFIRM` also appears in Schedule 3 so nothing hides in body copy.
- The filled file contains no placeholder tokens (`{{LIKE_THIS}}`).
