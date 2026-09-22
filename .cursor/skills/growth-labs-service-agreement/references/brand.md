# Growth Labs contract brand tokens

Shipped website is the source of truth (`app/globals.css`, `app/components.tsx`). Older Notion concepts that used green `#2AF598` or amber `#FFB020` are **retired for contracts**.

## Colour

| Name | Hex | Role |
| --- | --- | --- |
| Ink | `#0a0a0b` | Cover ground, body text |
| Panel | `#111115` | Cover cards |
| Panel 2 | `#16161b` | Cover card hover / depth |
| Paper | `#f4f4f2` | Inner page ground, cover type |
| Steel | `#8a8f98` | Meta, eyebrows, running header/footer |
| Signal | `#667cff` | Three-bar mark, clause index, left rules, status dot |
| Signal soft | `rgba(102, 124, 255, 0.16)` | Notes, selection |
| Line | `rgba(244, 244, 242, 0.13)` | Cover rules |
| Line strong | `rgba(244, 244, 242, 0.25)` | Cover emphasis |
| Open | `#8a4b12` on `#f4e6d4` | `TO CONFIRM` chips only |

Do not introduce a third accent. Do not use the public favicon's cyan/blue blocks as the contract mark.

## Type

| Role | Face | Spec |
| --- | --- | --- |
| Body | Geist Sans | 10.5pt / 1.55, ink on paper |
| Display | Geist Sans | Cover title ~34px, tracking -0.03em, weight 600 |
| Meta | Geist Mono | 8–12px, tracking 0.12–0.16em, uppercase for eyebrows |

Load Geist from Google Fonts in the HTML head (see `assets/agreement.css`). Fallback: Segoe UI / Arial / ui-monospace.

## Wordmark

Three ascending bars (6 / 12 / 18px high, 6px wide, 2px signal border on top+right) plus `GROWTH LABS_`.

```html
<span class="wordmark">
  <span class="mark" aria-hidden="true"><i></i><i></i><i></i></span>
  <span>GROWTH LABS_</span>
</span>
```

On the cover, add class `inverse` so type is paper.

## Motifs to reuse

- Eyebrow + 6px signal status dot.
- `§` style numeric indexes on clauses (`01`, `02`) in Geist Mono / signal.
- 56px grid on the **cover only**.
- `PROVIDER × CLIENT` pairing line under the page title.
- Running header: `{TITLE} · REF {CODE}`.
- Footer: `PRIVATE AND CONFIDENTIAL` (spell out **and**; do not use `&` in running text).
- At a Glance as a two-column definition table, not a marketing hero.

## Voice

Direct, senior, operator. Australian/British spelling. No “AI-powered”, no hype, no emoji in the instrument.

- Use **and** in sentences. The pairing mark `×` is allowed in titles.
- Numbers: write the figure and the words once for money (`US$1,000 (one thousand United States dollars)`).
- Guarantees: never. Targets are planning tools.
- Roles: say who operates, who approves, who pays tools, who owns the commercial decision.

## What the cover must contain

1. House wordmark (Growth Labs).
2. Document type: `Services Agreement` (not “proposal”, not “LOI” unless it truly is).
3. One-sentence commercial summary.
4. Two party cards (provider / client) with trading name, legal line or `TO CONFIRM`, and the human counterpart.
5. `REF`, version, month/year, confidentiality.

## Public-repo rule

This repository is public. Brand tokens, the blank template, and the style guide may be committed. Named client fees, SAMs, and signature packs stay out of git.
