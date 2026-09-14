/* Render first-principles-review JSON into 1080×1350 slides. */
(function () {
  const MARK = '<span class="mark" aria-hidden="true"><i></i><i></i><i></i></span>';

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatText(value) {
    return esc(value).replace(/\n/g, "<br>");
  }

  function fieldHighlights(slide, field) {
    return (slide.highlights || []).filter((item) => item.field === field);
  }

  function highlight(text, highlights) {
    const value = text == null ? "" : String(text);
    if (!value) return "";
    const marks = (highlights || [])
      .filter((item) => item.end > item.start)
      .sort((a, b) => a.start - b.start);
    if (!marks.length) return formatText(value);
    let html = "";
    let cursor = 0;
    for (const mark of marks) {
      const start = Math.max(0, Math.min(value.length, mark.start));
      const end = Math.max(start, Math.min(value.length, mark.end));
      html += formatText(value.slice(cursor, start));
      const cls = mark.border ? "hl hl-box" : "hl";
      html += `<span class="${cls}">${formatText(value.slice(start, end))}</span>`;
      cursor = end;
    }
    html += formatText(value.slice(cursor));
    return html;
  }

  function fieldHtml(slide, field) {
    return highlight(slide[field] ?? "", fieldHighlights(slide, field));
  }

  function numbered(index) {
    return String(index + 1).padStart(2, "0");
  }

  function totalLabel(total) {
    return String(total).padStart(2, "0");
  }

  function hasText(value) {
    return Boolean(value && String(value).trim());
  }

  function splitHeadline(slide) {
    const text = slide.headline || "";
    const marks = fieldHighlights(slide, "headline");
    const blank = text.indexOf("\n\n");
    if (blank < 0) return { title: highlight(text, marks), rest: "" };
    let restStart = blank;
    while (restStart < text.length && text[restStart] === "\n") restStart += 1;
    const shift = (range, offset, length) =>
      range
        .map((item) => ({
          ...item,
          start: item.start - offset,
          end: item.end - offset,
        }))
        .filter((item) => item.end > 0 && item.start < length)
        .map((item) => ({
          ...item,
          start: Math.max(0, item.start),
          end: Math.min(length, item.end),
        }));
    const titleText = text.slice(0, blank);
    const restText = text.slice(restStart);
    return {
      title: highlight(titleText, shift(marks, 0, titleText.length)),
      rest: highlight(restText, shift(marks, restStart, restText.length)),
    };
  }

  function applyLeadBox(slide, titleHtml) {
    const lead = slide.definitionLead;
    const leadMarks = fieldHighlights(slide, "definitionLead").filter(
      (item) => item.border,
    );
    if (!lead || !leadMarks.length) return titleHtml;
    const headline = slide.headline || "";
    if (!headline.startsWith(lead)) return titleHtml;
    const mark = leadMarks[0];
    const boxed = lead.slice(mark.start, mark.end);
    const remainder = lead.slice(mark.end);
    const after = headline.slice(lead.length);
    const restMarks = fieldHighlights(slide, "headline")
      .map((item) => ({
        ...item,
        start: item.start - lead.length,
        end: item.end - lead.length,
      }))
      .filter((item) => item.end > 0);
    return `<span class="hl hl-box">${formatText(boxed)}</span>${formatText(remainder)}${highlight(after, restMarks)}`;
  }

  function varsList(text) {
    const lines = String(text)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const items = lines.map((line) => {
      const match = line.match(/^(\d+)\.\s*(.*)$/);
      if (!match) return `<li>${formatText(line)}</li>`;
      return `<li><span>${numbered(Number(match[1]) - 1)}</span><p>${formatText(match[2])}</p></li>`;
    });
    return `<ol class="vars-list">${items.join("")}</ol>`;
  }

  function formulaBlock(slide) {
    const formula = slide.formula || "";
    if (!hasText(formula)) return "";
    if (slide.equationStyle === "product") {
      const [left, right] = formula.split("=").map((part) => part.trim());
      const factors = (left || "")
        .split("×")
        .map((part) => part.trim())
        .filter(Boolean);
      const bits = factors.map((part) => `<span>${formatText(part)}</span>`);
      const joined = bits.join("<i>×</i>");
      const result = right
        ? `${joined}<i>=</i><strong>${formatText(right)}</strong>`
        : joined;
      return `<p class="beats">${result}</p>`;
    }
    const parts = formula.split("=");
    const rhs = (parts.slice(1).join("=") || "").trim();
    const frac = rhs.split("/").map((part) => part.trim());
    if (frac.length === 2) {
      return `<div class="formula"><p class="label">${formatText(parts[0].trim() || "Perceived value")}</p><p class="eq"><span class="num">${formatText(frac[0])}</span><span class="bar"></span><span class="den">${formatText(frac[1])}</span></p></div>`;
    }
    return `<div class="formula"><p class="eq">${formatText(formula)}</p></div>`;
  }

  function parseBench(item) {
    const text = String(item);
    const split = text.split(">");
    if (split.length >= 2) {
      return {
        label: split[0].replace(/[:\s]+$/, "").trim() || text,
        value: `> ${split.slice(1).join(">").trim()}`,
      };
    }
    const colon = text.split(":");
    if (colon.length >= 2) {
      return { label: colon[0].trim(), value: colon.slice(1).join(":").trim() };
    }
    return { label: "Metric", value: text };
  }

  function bodyFor(slide, index, total) {
    const layout = slide.layout;
    const n = numbered(index);
    const eyebrow = fieldHtml(slide, "eyebrow") || formatText(slide.eyebrow || "");
    const { title, rest } = splitHeadline(slide);
    const headline = applyLeadBox(slide, title);
    const sub = fieldHtml(slide, "sub");
    const body = fieldHtml(slide, "body");
    const line = slide.line || "";
    const lineIsList = /^\s*\d+\./m.test(line);

    if (index === 0) {
      return `
        <p class="eyebrow"><span class="status-dot"></span>${eyebrow}</p>
        <h1>${headline}</h1>
        ${hasText(slide.sub) ? `<p class="lede">${sub}</p>` : ""}
        ${hasText(slide.corner) ? `<p class="byline">${formatText(slide.corner)}</p>` : ""}
        <div class="cover-atom" role="img" aria-label="Revenue atom"></div>`;
    }

    if (layout === "comparison") {
      const items = (slide.items || [])
        .map(
          (item, itemIndex) =>
            `<div class="mix-item"><span>${numbered(itemIndex)}</span><p>${formatText(item)}</p></div>`,
        )
        .join("");
      return `
        <p class="eyebrow"><span class="status-dot"></span>${eyebrow}</p>
        <h1>${headline}</h1>
        <div class="mix-list">${items}</div>
        ${hasText(line) ? `<p class="callout pin-bottom">${fieldHtml(slide, "line")}</p>` : ""}`;
    }

    if (layout === "definition") {
      const metric = hasText(slide.metric)
        ? `<p class="metric-pill">${fieldHtml(slide, "metric")}</p>`
        : "";
      const closing = lineIsList
        ? varsList(line)
        : hasText(line)
          ? `<p class="callout pin-bottom">${fieldHtml(slide, "line")}</p>`
          : "";
      return `
        <p class="eyebrow"><span class="status-dot"></span>${eyebrow}</p>
        <h1>${headline}</h1>
        ${hasText(slide.body) ? `<p class="lede">${body}</p>` : ""}
        ${metric}
        ${closing}`;
    }

    if (layout === "equation") {
      return `
        <p class="eyebrow"><span class="status-dot"></span>${eyebrow}</p>
        <h1>${headline}</h1>
        ${rest ? `<p class="lede">${rest}</p>` : ""}
        ${hasText(slide.body) ? `<p class="lede">${body}</p>` : ""}
        ${formulaBlock(slide)}
        ${hasText(slide.foot) ? `<p class="foot-note">${fieldHtml(slide, "foot")}</p>` : ""}
        ${hasText(line) ? `<p class="callout pin-bottom">${fieldHtml(slide, "line")}</p>` : ""}`;
    }

    if (layout === "diagram") {
      const benches = (slide.items || [])
        .map((item) => {
          const bench = parseBench(item);
          return `<div class="bench"><small>${formatText(bench.label)}</small><strong>${formatText(bench.value)}</strong></div>`;
        })
        .join("");
      return `
        <p class="eyebrow"><span class="status-dot"></span>${eyebrow}</p>
        <h1 class="score-hed">${headline}</h1>
        ${slide.atom ? `<div class="atom-panel" role="img" aria-label="Revenue atom scoreboard"></div>` : ""}
        <div class="bench-grid">${benches}</div>
        ${hasText(line) ? `<p class="foot-note">${fieldHtml(slide, "line")}</p>` : ""}`;
    }

    if (layout === "diagnostic" && slide.variant === "cta") {
      const cta = hasText(slide.cta)
        ? `<div class="cta">${formatText(slide.cta)} <span>→</span></div>`
        : "";
      const url = hasText(slide.url)
        ? `<p class="url">${formatText(String(slide.url).replace(/^https?:\/\//, ""))}</p>`
        : "";
      const secondary = hasText(slide.secondary)
        ? `<p class="lede">${fieldHtml(slide, "secondary")}</p>`
        : "";
      const footer = hasText(slide.footer)
        ? `<p class="foot-note pin-bottom">${fieldHtml(slide, "footer")}</p>`
        : "";
      return `
        <p class="eyebrow"><span class="status-dot"></span>${eyebrow}</p>
        <h1>${headline}</h1>
        ${hasText(slide.body) ? `<p class="lede">${body}</p>` : ""}
        ${cta}${url}${secondary}${footer}`;
    }

    if (layout === "diagnostic") {
      const items = (slide.items || [])
        .map(
          (item, itemIndex) =>
            `<li><span>${numbered(itemIndex)}</span>${formatText(item)}</li>`,
        )
        .join("");
      return `
        <p class="eyebrow"><span class="status-dot"></span>${eyebrow}</p>
        <h1>${headline}</h1>
        ${hasText(slide.sub) ? `<p class="lede signal-lede">${sub}</p>` : ""}
        <ol class="diag-list">${items}</ol>
        ${hasText(slide.body) ? `<p class="foot-note pin-bottom">${body}</p>` : ""}
        ${hasText(line) ? `<p class="callout">${fieldHtml(slide, "line")}</p>` : ""}`;
    }

    return `
      <p class="eyebrow"><span class="status-dot"></span>${eyebrow}</p>
      <h1>${headline}</h1>
      ${hasText(slide.body) ? `<p class="lede">${body}</p>` : ""}
      ${hasText(line) ? `<p class="callout pin-bottom">${fieldHtml(slide, "line")}</p>` : ""}`;
  }

  function slideArticle(slide, index, total) {
    const n = numbered(index);
    const theme = slide.theme === "paper" ? "theme-paper" : "theme-ink";
    const dense =
      (slide.headline || "").length > 80 ||
      (slide.body || "").length > 180 ||
      (slide.items || []).length >= 5 ||
      slide.layout === "definition" ||
      slide.layout === "diagnostic"
        ? "tight dense"
        : "";
    const cover = index === 0 ? "slide-cover" : "";
    const grid = slide.layout === "diagram" || index === 0 ? "" : "grid-bg";
    const watermark =
      slide.layout === "definition" && slide.term
        ? `<div class="watermark" aria-hidden="true">${esc(slide.term)}</div>`
        : "";
    return `<article class="slide ${theme} ${grid} ${dense} ${cover}" data-slide="${index + 1}">
      ${watermark}
      <div class="chrome">
        <span class="wordmark">${MARK}GROWTH LABS_</span>
        <span class="count">${n} / ${totalLabel(total)}</span>
      </div>
      <div class="body">${bodyFor(slide, index, total)}</div>
      <div class="slide-foot">
        <span>Growth Labs</span>
        <span>${n} / ${totalLabel(total)}</span>
      </div>
    </article>`;
  }

  function fitSlide(slide) {
    const limit = 1350;
    if (slide.scrollHeight <= limit) return;
    const h1 = slide.querySelector("h1");
    const shrinkables = slide.querySelectorAll(
      ".lede, .callout, .diag-list li, .mix-item p, .foot-note, .vars-list li, .formula .eq",
    );
    for (let step = 0; step < 28 && slide.scrollHeight > limit; step += 1) {
      if (h1) {
        const size = parseFloat(getComputedStyle(h1).fontSize);
        if (size > 30) h1.style.fontSize = `${size - 2}px`;
      }
      shrinkables.forEach((el) => {
        const size = parseFloat(getComputedStyle(el).fontSize);
        if (size > 14) el.style.fontSize = `${size - 1}px`;
      });
    }
  }

  function render(review) {
    const slides = review?.batch?.slides || [];
    const deck = document.querySelector("main.deck");
    deck.innerHTML = slides
      .map((slide, index) => slideArticle(slide, index, slides.length))
      .join("");

    const params = new URLSearchParams(location.search);
    const n = Number(params.get("slide") || 0);
    const active = n >= 1 ? document.querySelector(`.slide[data-slide="${n}"]`) : null;
    if (active) {
      document.body.classList.add("export");
      active.classList.add("is-active");
      if (active.classList.contains("theme-paper")) {
        document.body.style.background = "#f4f4f2";
      }
    }

    const targets = active
      ? [active]
      : [...document.querySelectorAll(".slide")];
    targets.forEach(fitSlide);
    document.body.dataset.ready = "1";
  }

  async function boot() {
    const review = window.REVIEW;
    if (!review) {
      document.body.dataset.ready = "error";
      return;
    }
    if (document.fonts && document.fonts.ready) {
      try {
        await document.fonts.ready;
      } catch {
        /* keep going */
      }
    }
    render(review);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
