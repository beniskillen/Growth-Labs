# Posting checklist

Upload the files in [`exports/`](exports/) (PNGs) and [`linkedin.pdf`](linkedin.pdf). Copy captions from [`COPY.md`](COPY.md).

## LinkedIn — document post (preferred)

1. Start a post from your personal profile (Ben Killen), not a company page if you want founder reach.
2. Choose **Add a document** (not a multi-image carousel).
3. Upload `linkedin.pdf`. Title the document: **“marketing” is not content.**
4. Paste the **LinkedIn caption** from `COPY.md`. Do not dump hashtags.
5. Post.
6. Immediately add the **first comment** from `COPY.md` (live scoreboard + calendar link). LinkedIn captions do not always keep URLs prominent; the comment is the working CTA.
7. Optional same week: a short native video of the live orbiting atom on the site, framed as the scoreboard, not as a metaphor for marketing / brand / advertising.

Do not label the atom rings as those three words in any overlay you add later.

## Instagram — 4:5 carousel

1. Feed post → **Carousel**.
2. Upload `exports/slide-01.png` through `slide-12.png` in order. Crop: **4:5** (1080×1350). Do not letterbox.
3. Cover is slide 01. CTA is slide 12.
4. Paste the **Instagram caption** from `COPY.md`. First line is the hook before “…more”.
5. Put the diagnostic URL in **bio** (or a Stories link sticker). Feed captions are not clickable.
6. Add alt text per slide from `COPY.md` (Edit → Accessibility).
7. Optional: Stories that swipe through 01, 07, 09, 12 with a link sticker to the calendar.

## Same-week follow-up

- Stories / LinkedIn native clip of the live atom: “This is the scoreboard. Definitions are not results.”
- Do not rebuild the atom in Canva. If you need a text tweak, replace `review.json` (or edit copy there) and run `node export-slides.mjs`.

## Files

| Use | File |
| --- | --- |
| LinkedIn document | `linkedin.pdf` |
| Instagram + spare LinkedIn images | `exports/slide-01.png` … `slide-12.png` |
| Captions + alt text | `COPY.md` |
| Rebuild | Drop a new `review.json`, then `node export-slides.mjs` |
