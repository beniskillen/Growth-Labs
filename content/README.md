# Content

Ready-to-post files for the first-principles carousel. After you pull this branch in your local Growth Labs folder, this is the directory to open.

## Instagram

`instagram/slide-01.png` through `slide-12.png`  
1080×1350 · 4:5 · upload in order · do not letterbox

Caption and alt text are in `COPY.md`.

## LinkedIn

`linkedin.pdf` — **Add a document** (not a multi-image post)  
Title: **“marketing” is not content.**

Caption and first comment are in `COPY.md`.

## Rebuild

Source and slide renderer live in `social/revenue-atom-carousel/`. A new studio JSON goes on `review.json` there, then:

```bash
node social/revenue-atom-carousel/export-slides.mjs
```

That rebuilds the PNGs and PDF and copies them back into this folder.
