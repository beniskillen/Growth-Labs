import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, extname } from "node:path";

const origin = process.env.PREVIEW_ORIGIN ?? "http://127.0.0.1:3000";
const base = (process.env.PAGES_BASE ?? "/Growth-Labs").replace(/\/$/, "");
const out = process.env.PAGES_OUT ?? "gh-pages-site";
const routes = [
  "/",
  "/about",
  "/audit",
  "/landing",
  "/partners",
  "/solutions",
  "/studio",
  "/system",
  "/work/mtp-health",
];
const rewriteExt = new Set([".html", ".js", ".css", ".svg", ".txt", ".json", ".xml"]);

function withBase(content) {
  if (content.includes(`${base}/`) && !content.includes('href="/trustbar')) {
    // Still rewrite unprefixed public assets even if some URLs already have basePath.
  }
  let next = content
    .replaceAll('href="/assets/', `href="${base}/assets/`)
    .replaceAll('src="/assets/', `src="${base}/assets/`)
    .replaceAll('url(/assets/', `url(${base}/assets/`)
    .replaceAll('url("/assets/', `url("${base}/assets/`)
    .replaceAll('"/assets/', `"${base}/assets/`)
    .replaceAll("'/assets/", `'${base}/assets/`)
    .replaceAll('href="/trustbar/', `href="${base}/trustbar/`)
    .replaceAll('src="/trustbar/', `src="${base}/trustbar/`)
    .replaceAll('"/trustbar/', `"${base}/trustbar/`)
    .replaceAll('href="/partners/', `href="${base}/partners/`)
    .replaceAll('src="/partners/', `src="${base}/partners/`)
    .replaceAll('"/partners/', `"${base}/partners/`)
    .replaceAll('href="/work/', `href="${base}/work/`)
    .replaceAll('src="/work/', `src="${base}/work/`)
    .replaceAll('"/work/', `"${base}/work/`)
    .replaceAll('href="/offer/', `href="${base}/offer/`)
    .replaceAll('src="/offer/', `src="${base}/offer/`)
    .replaceAll('"/offer/', `"${base}/offer/`)
    .replaceAll('href="/ben-', `href="${base}/ben-`)
    .replaceAll('src="/ben-', `src="${base}/ben-`)
    .replaceAll('"/ben-', `"${base}/ben-`)
    .replaceAll('href="/favicon', `href="${base}/favicon`)
    .replaceAll('href="/og.png', `href="${base}/og.png`)
    .replaceAll('content="/og.png', `content="${base}/og.png`)
    .replaceAll('"/favicon', `"${base}/favicon`)
    .replaceAll('"/og.png', `"${base}/og.png`)
    .replaceAll(`${base}${base}/`, `${base}/`);

  for (const route of routes) {
    if (route === "/") continue;
    next = next.replaceAll(`href="${base}${route}"`, `href="${base}${route}/"`);
  }

  return next;
}

async function fetchHtml(path) {
  const url = `${origin}${base}${path === "/" ? "/" : `${path}/`}`;
  const response = await fetch(url, { headers: { accept: "text/html" } });
  if (!response.ok) {
    throw new Error(`Failed to prerender ${url} (${response.status})`);
  }
  return withBase(await response.text());
}

async function rewriteTree(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      await rewriteTree(path);
      continue;
    }
    if (!rewriteExt.has(extname(entry.name))) continue;
    const original = await readFile(path, "utf8");
    const next = withBase(original);
    if (next !== original) await writeFile(path, next);
  }
}

async function main() {
  await mkdir(out, { recursive: true });
  await cp("dist/client", out, { recursive: true });
  await rewriteTree(out);

  for (const route of routes) {
    const html = await fetchHtml(route);
    const file =
      route === "/" ? join(out, "index.html") : join(out, route.slice(1), "index.html");
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }

  await writeFile(join(out, ".nojekyll"), "");
  const known = routes.map((route) =>
    route === "/" ? `${base}/` : `${base}${route}/`,
  );
  await writeFile(
    join(out, "404.html"),
    `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting</title>
<script>
(function () {
  var known = ${JSON.stringify(known)};
  var path = location.pathname;
  var slashed = path.endsWith("/") ? path : path + "/";
  if (known.indexOf(slashed) !== -1 && path !== slashed) {
    location.replace(slashed + location.search + location.hash);
    return;
  }
  location.replace(${JSON.stringify(`${base}/`)} + location.search + location.hash);
})();
</script>
</head>
<body>
<p>This page moved. <a href="${base}/">Go to Growth Labs</a></p>
</body>
</html>
`,
  );
}

await main();
