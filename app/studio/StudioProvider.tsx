"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  applyCopyEdits,
  collectHosts,
  EDITABLE_SELECTOR,
  isSafeTextHost,
  restoreOriginalCopy,
  serializeHost,
  type CopyEdit,
} from "./copy";
import {
  STUDIO_EDITS_KEY,
  STUDIO_FLAG_KEY,
  STUDIO_TYPEFACE_KEY,
  type StudioTypeface,
} from "./keys";
import "./studio.css";

function readTypeface(): StudioTypeface {
  try {
    return localStorage.getItem(STUDIO_TYPEFACE_KEY) === "geist"
      ? "geist"
      : "aesop";
  } catch {
    return "aesop";
  }
}

function readEdits(): CopyEdit[] {
  try {
    const raw = localStorage.getItem(STUDIO_EDITS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CopyEdit[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeEdits(edits: CopyEdit[]) {
  localStorage.setItem(STUDIO_EDITS_KEY, JSON.stringify(edits));
}

function syncRoot(enabled: boolean, typeface: StudioTypeface) {
  const root = document.documentElement;
  if (!enabled) {
    root.removeAttribute("data-studio");
    root.removeAttribute("data-typeface");
    return;
  }
  root.setAttribute("data-studio", "on");
  root.setAttribute("data-typeface", typeface);
}

export default function StudioProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [typeface, setTypeface] = useState<StudioTypeface>("aesop");
  const [edits, setEdits] = useState<CopyEdit[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("studio") === "1") {
      localStorage.setItem(STUDIO_FLAG_KEY, "1");
      if (!localStorage.getItem(STUDIO_TYPEFACE_KEY)) {
        localStorage.setItem(STUDIO_TYPEFACE_KEY, "aesop");
      }
    }
    const nextEnabled = localStorage.getItem(STUDIO_FLAG_KEY) === "1";
    const nextTypeface = readTypeface();
    const nextEdits = readEdits();
    setEnabled(nextEnabled);
    setTypeface(nextTypeface);
    setEdits(nextEdits);
    syncRoot(nextEnabled, nextTypeface);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    applyCopyEdits(pathname, edits);

    let frame = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => applyCopyEdits(pathname, edits));
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [enabled, edits, pathname]);

  const persistEdit = useCallback(
    (el: HTMLElement) => {
      const original = el.dataset.studioOriginal ?? serializeHost(el);
      const occurrence = Number(el.dataset.studioOccurrence ?? "0");
      const value = serializeHost(el);
      setEdits((current) => {
        const next = current.filter(
          (edit) =>
            !(
              edit.pathname === pathname &&
              edit.original === original &&
              edit.occurrence === occurrence
            ),
        );
        if (value !== original) {
          next.push({ pathname, occurrence, original, value });
        }
        writeEdits(next);
        return next;
      });
    },
    [pathname],
  );

  useEffect(() => {
    if (!enabled) return;

    const resolveHost = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return null;
      const hit = target.closest(EDITABLE_SELECTOR);
      if (!(hit instanceof HTMLElement) || !isSafeTextHost(hit)) return null;
      return hit;
    };

    const onPointerOver = (event: Event) => {
      const host = resolveHost(event.target);
      for (const el of collectHosts()) delete el.dataset.studioHot;
      if (host && document.activeElement !== host) host.dataset.studioHot = "";
    };

    const onClick = (event: Event) => {
      const mouse = event as globalThis.MouseEvent;
      const host = resolveHost(mouse.target);
      if (!host) return;
      if (mouse.metaKey || mouse.ctrlKey) return;
      if (host.isContentEditable) return;
      mouse.preventDefault();
      mouse.stopPropagation();
      applyCopyEdits(pathname, readEdits());
      host.setAttribute("contenteditable", "true");
      host.focus();
    };

    const onBlur = (event: Event) => {
      const host = event.target;
      if (!(host instanceof HTMLElement) || !host.isContentEditable) return;
      host.removeAttribute("contenteditable");
      delete host.dataset.studioHot;
      persistEdit(host);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const host = event.target;
      if (!(host instanceof HTMLElement) || !host.isContentEditable) return;
      if (event.key === "Escape") {
        host.blur();
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        host.blur();
      }
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("click", onClick, true);
    document.addEventListener("focusout", onBlur, true);
    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("focusout", onBlur, true);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, [enabled, pathname, persistEdit]);

  function chooseTypeface(next: StudioTypeface) {
    setTypeface(next);
    localStorage.setItem(STUDIO_TYPEFACE_KEY, next);
    syncRoot(true, next);
  }

  function resetCopy() {
    writeEdits([]);
    setEdits([]);
    restoreOriginalCopy();
  }

  function exitStudio() {
    localStorage.removeItem(STUDIO_FLAG_KEY);
    setEnabled(false);
    syncRoot(false, typeface);
    const url = new URL(window.location.href);
    if (url.searchParams.has("studio")) {
      url.searchParams.delete("studio");
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    }
  }

  return (
    <>
      {children}
      {enabled ? (
        <div className="studio-chrome" data-studio-ignore="true">
          <div className="studio-chrome-copy">
            <p className="studio-chrome-kicker">Studio / local preview</p>
            <h2>Click any line to edit. Compare typefaces live.</h2>
            <p>
              Aesop web pairing: Zapf Humanist 601 / Optima on headlines,
              Suisse Int’l on UI — previewed as Tenor Sans + Inter. Neue
              Helvetica is packaging-only and is not applied.
            </p>
          </div>
          <div className="studio-chrome-actions">
            <div className="studio-toggle" role="group" aria-label="Typeface">
              <button
                type="button"
                aria-pressed={typeface === "geist"}
                onClick={() => chooseTypeface("geist")}
              >
                Geist
              </button>
              <button
                type="button"
                aria-pressed={typeface === "aesop"}
                onClick={() => chooseTypeface("aesop")}
              >
                Aesop pairing
              </button>
            </div>
            <button type="button" onClick={resetCopy}>
              Reset copy
            </button>
            <button type="button" className="studio-exit" onClick={exitStudio}>
              Exit studio
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function StudioGateRedirect() {
  useEffect(() => {
    localStorage.setItem(STUDIO_FLAG_KEY, "1");
    if (!localStorage.getItem(STUDIO_TYPEFACE_KEY)) {
      localStorage.setItem(STUDIO_TYPEFACE_KEY, "aesop");
    }
    window.location.replace("/?studio=1");
  }, []);

  return (
    <main className="studio-gate">
      <p>Opening the editable Aesop type preview</p>
    </main>
  );
}
