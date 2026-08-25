#!/usr/bin/env node
/**
 * Render a Growth Labs agreement HTML file to A4 PDF.
 * Inlines a sibling agreement.css when the HTML uses a relative stylesheet link.
 *
 * Usage:
 *   node render.mjs path/to/agreement.html path/to/agreement.pdf
 */
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const skillDir = dirname(fileURLToPath(import.meta.url));
const cssPath = join(skillDir, "..", "assets", "agreement.css");

const input = process.argv[2];
const output = process.argv[3];
if (!input || !output) {
  console.error("Usage: node render.mjs <agreement.html> <agreement.pdf>");
  process.exit(1);
}

const htmlPath = resolve(input);
const pdfPath = resolve(output);
let html = readFileSync(htmlPath, "utf8");

const cssHref = /<link\s+rel="stylesheet"\s+href="([^"]+)"\s*\/?>/i;
const match = html.match(cssHref);
if (match) {
  const href = match[1];
  const linked = href.startsWith("http")
    ? null
    : resolve(dirname(htmlPath), href);
  const cssFile = linked && linked.endsWith("agreement.css") ? linked : cssPath;
  try {
    const css = readFileSync(cssFile, "utf8");
    html = html.replace(
      cssHref,
      `<style>\n${css}\n</style>`,
    );
  } catch {
    // Keep the original link if CSS cannot be read.
  }
}

const dir = mkdtempSync(join(tmpdir(), "gl-agreement-"));
const compiled = join(dir, "agreement.html");
writeFileSync(compiled, html, "utf8");

const candidates = [
  process.env.CHROME,
  "/usr/local/bin/google-chrome",
  "google-chrome",
  "google-chrome-stable",
  "chromium",
  "chromium-browser",
].filter(Boolean);

let chrome = null;
for (const bin of candidates) {
  const probe = spawnSync(bin, ["--version"], { encoding: "utf8" });
  if (probe.status === 0) {
    chrome = bin;
    break;
  }
}

if (!chrome) {
  console.error("Chrome/Chromium not found. Set CHROME to the binary path.");
  process.exit(1);
}

const result = spawnSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--no-first-run",
    "--no-default-browser-check",
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(compiled).href,
  ],
  { encoding: "utf8" },
);

if (result.status !== 0) {
  console.error(result.stderr || result.stdout || "Chrome print failed");
  process.exit(result.status ?? 1);
}

console.log(`Wrote ${pdfPath}`);
