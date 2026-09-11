import type { CopyEdit } from "./copy";
import {
  STUDIO_EDITS_KEY,
  STUDIO_FLAG_KEY,
  STUDIO_TYPEFACE_KEY,
  type StudioTypeface,
} from "./keys";

const STUDIO_EVENT = "growth-labs-studio";

let editsRaw = "";
let editsCache: CopyEdit[] = [];

export function subscribeStudio(onStoreChange: () => void) {
  window.addEventListener(STUDIO_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(STUDIO_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function emitStudioChange() {
  window.dispatchEvent(new Event(STUDIO_EVENT));
}

export function getEnabledSnapshot() {
  return window.localStorage.getItem(STUDIO_FLAG_KEY) === "1";
}

export function getEnabledServerSnapshot() {
  return false;
}

export function getTypefaceSnapshot(): StudioTypeface {
  return window.localStorage.getItem(STUDIO_TYPEFACE_KEY) === "geist"
    ? "geist"
    : "aesop";
}

export function getTypefaceServerSnapshot(): StudioTypeface {
  return "aesop";
}

const EMPTY_EDITS: CopyEdit[] = [];

export function getEditsSnapshot(): CopyEdit[] {
  const raw = window.localStorage.getItem(STUDIO_EDITS_KEY) ?? "";
  if (raw === editsRaw) return editsCache;
  editsRaw = raw;
  try {
    const parsed = JSON.parse(raw) as CopyEdit[];
    editsCache = Array.isArray(parsed) ? parsed : EMPTY_EDITS;
  } catch {
    editsCache = EMPTY_EDITS;
  }
  return editsCache;
}

export function getEditsServerSnapshot(): CopyEdit[] {
  return EMPTY_EDITS;
}

export function writeStudioFlag(enabled: boolean) {
  if (enabled) window.localStorage.setItem(STUDIO_FLAG_KEY, "1");
  else window.localStorage.removeItem(STUDIO_FLAG_KEY);
  emitStudioChange();
}

export function writeTypeface(typeface: StudioTypeface) {
  window.localStorage.setItem(STUDIO_TYPEFACE_KEY, typeface);
  emitStudioChange();
}

export function writeEdits(edits: CopyEdit[]) {
  const raw = JSON.stringify(edits);
  window.localStorage.setItem(STUDIO_EDITS_KEY, raw);
  editsRaw = raw;
  editsCache = edits;
  emitStudioChange();
}

export function ensureStudioFromQuery() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("studio") !== "1") return;
  window.localStorage.setItem(STUDIO_FLAG_KEY, "1");
  if (!window.localStorage.getItem(STUDIO_TYPEFACE_KEY)) {
    window.localStorage.setItem(STUDIO_TYPEFACE_KEY, "aesop");
  }
}
