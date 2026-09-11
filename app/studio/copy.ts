export type CopyEdit = {
  pathname: string;
  occurrence: number;
  original: string;
  value: string;
};

export const EDITABLE_SELECTOR =
  "h1, h2, h3, h4, p, span, a, button, figcaption, strong, li, small";

const INLINE_TAGS = new Set(["EM", "STRONG", "BR", "WBR"]);

export function normalizeText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export function isStudioIgnored(el: Element) {
  return Boolean(
    el.closest(
      ".studio-chrome, .sr-only, svg, canvas, script, style, [data-studio-ignore]",
    ),
  );
}

function isDecorativeChild(child: Element) {
  if (child.matches(".mark, .status-dot, .crosshair")) return true;
  return (
    child instanceof HTMLElement &&
    child.getAttribute("aria-hidden") === "true" &&
    normalizeText(child.textContent ?? "") === "↗"
  );
}

function extrasOf(el: HTMLElement) {
  return [...el.children].filter((child) => !INLINE_TAGS.has(child.tagName));
}

function directText(el: HTMLElement) {
  return [...el.childNodes]
    .filter((node): node is Text => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent ?? "")
    .join("");
}

export function isSafeTextHost(el: HTMLElement) {
  if (isStudioIgnored(el) || !el.matches(EDITABLE_SELECTOR)) return false;
  const extras = extrasOf(el);
  if (extras.some((child) => !isDecorativeChild(child))) return false;
  if (!normalizeText(el.textContent ?? "")) return false;
  if (extras.length && !normalizeText(directText(el))) return false;
  return true;
}

export function serializeHost(el: HTMLElement) {
  if (extrasOf(el).length) return normalizeText(directText(el));
  const hasInline = [...el.children].some((child) =>
    ["EM", "STRONG"].includes(child.tagName),
  );
  if (hasInline) return el.innerHTML.replace(/\s+/g, " ").trim();
  return normalizeText(el.innerText || el.textContent || "");
}

export function writeHost(el: HTMLElement, value: string) {
  if (extrasOf(el).length) {
    const texts = [...el.childNodes].filter(
      (node): node is Text => node.nodeType === Node.TEXT_NODE,
    );
    if (texts.length === 0) {
      el.insertBefore(document.createTextNode(value), el.firstChild);
      return;
    }
    texts[0].textContent = value;
    for (const extra of texts.slice(1)) extra.textContent = "";
    return;
  }
  if (/<\/?(em|strong)\b/i.test(value)) {
    el.innerHTML = value;
    return;
  }
  el.textContent = value;
}

export function collectHosts(root: ParentNode = document) {
  return [...root.querySelectorAll<HTMLElement>(EDITABLE_SELECTOR)].filter(
    isSafeTextHost,
  );
}

export function resolveOriginal(
  el: HTMLElement,
  pathname: string,
  edits: CopyEdit[],
) {
  if (el.dataset.studioOriginal) return el.dataset.studioOriginal;
  const current = serializeHost(el);
  const byValue = edits.find(
    (edit) => edit.pathname === pathname && edit.value === current,
  );
  return byValue?.original ?? current;
}

let applying = false;

export function applyCopyEdits(
  pathname: string,
  edits: CopyEdit[],
  root: ParentNode = document,
) {
  if (applying) return;
  applying = true;
  try {
    const hosts = collectHosts(root).map((el) => ({
      el,
      original: resolveOriginal(el, pathname, edits),
    }));
    const seen = new Map<string, number>();

    for (const host of hosts) {
      const occurrence = seen.get(host.original) ?? 0;
      seen.set(host.original, occurrence + 1);
      host.el.dataset.studioOriginal = host.original;
      host.el.dataset.studioOccurrence = String(occurrence);

      const edit = edits.find(
        (item) =>
          item.pathname === pathname &&
          item.original === host.original &&
          item.occurrence === occurrence,
      );
      if (
        edit &&
        serializeHost(host.el) !== edit.value &&
        document.activeElement !== host.el
      ) {
        writeHost(host.el, edit.value);
      }
    }
  } finally {
    applying = false;
  }
}

export function restoreOriginalCopy(root: ParentNode = document) {
  for (const el of collectHosts(root)) {
    const original = el.dataset.studioOriginal;
    if (original && serializeHost(el) !== original) writeHost(el, original);
    el.removeAttribute("contenteditable");
    delete el.dataset.studioHot;
  }
}
