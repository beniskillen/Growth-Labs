import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

async function render(path = "/") {
  const worker = await loadWorker();
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the guarantee offer as the home page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Add up to \$100k\/month/);
  assert.match(html, /180 days/);
  assert.match(html, /or you don&#x27;t pay|or you don't pay/);
  assert.match(html, /Get a Growth Strategy/);
  assert.match(html, /Category King System/);
  assert.match(html, /We've worked with/);
  assert.match(html, /loom\.com\/embed\/3a9f9fc4977c40dba0c92f7dc9e059e5/);
  assert.match(html, /href="\/work\/mtp-health"/);
  assert.match(html, /fortemmedia\.com/);
  assert.match(html, /ethosperformance\.com\.au\/ben-killen/);
  assert.match(html, /proprietary data analysis/);
  assert.match(html, /Growth Labs director/);
  assert.doesNotMatch(html, /\bdraft\b/i);
  assert.doesNotMatch(html, /\$5000/);
  assert.doesNotMatch(html, /\$300 p\/m/);
  assert.doesNotMatch(html, /href="\/growth-partnership"/);
  assert.doesNotMatch(html, developmentPreviewMeta);
});

test("keeps the 30-day offer hidden at /growth-partnership", async () => {
  const response = await render("/growth-partnership");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Add \$10,000 to your bottom line/i);
  assert.match(html, /in 30 days/i);
  assert.match(html, /\$5000/);
  assert.match(html, /\$300 p\/m/);
  assert.match(html, /What it costs/);
  assert.match(html, /noindex/);
  assert.doesNotMatch(html, /I will make you \$10,000 to your bottom line in 90 days/);
});

test("keeps the revenue-atom homepage hidden at /system", async () => {
  const response = await render("/system");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /We engineer/i);
  assert.match(html, /revenue systems/i);
  assert.match(html, /atom-hero/);
  assert.match(html, /CLICK THE ATOM TO REVEAL BRANDS/);
  assert.match(html, /noindex/);
});

test("serves the studio gate without indexing it as marketing copy", async () => {
  const response = await render("/studio");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Opening the editable Aesop type preview/);
  assert.match(html, /noindex/);
});

test("server-renders the partners page with AI Powered", async () => {
  const response = await render("/partners");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Partner bench/i);
  assert.match(html, /AI Powered/);
  assert.match(html, /aipowered\.xyz/);
});

test("server-renders the MTP Health flagship case study", async () => {
  const response = await render("/work/mtp-health");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /The Knee Program/);
  assert.match(html, /Consistent monthly profits/);
  assert.match(html, /Consistent monthly revenue increase/);
  assert.match(html, /true moat in the industry/);
  assert.match(html, />Home</);
  assert.match(html, /href="\/"/);
  assert.doesNotMatch(html, /Add \$10,000 to your bottom line/);
  assert.doesNotMatch(html, />Work</);
  assert.doesNotMatch(html, />Partners</);
  assert.doesNotMatch(html, />Solutions</);
  assert.doesNotMatch(html, />About</);
  assert.doesNotMatch(html, /href="\/partners"/);
});

test("server-renders the case study index and the Fortem page", async () => {
  const index = await render("/work");
  assert.equal(index.status, 200);
  const indexHtml = await index.text();
  assert.match(indexHtml, /The same read/);
  assert.match(indexHtml, /href="\/work\/mtp-health"/);
  assert.match(indexHtml, /href="\/work\/fortem"/);
  assert.match(indexHtml, /Unofficial Run Club|Build the room/);

  const fortem = await render("/work/fortem");
  assert.equal(fortem.status, 200);
  const html = await fortem.text();
  assert.match(html, /Unofficial Run Club/);
  assert.match(html, /\$1\.5M\+/);
  assert.match(html, /not getting seen/);
  assert.match(html, />Home</);
  assert.match(html, /href="\/work"/);
});

test("serves a first-principles 404 that returns to the offer", async () => {
  const response = await render("/this-page-does-not-exist");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(html, /This page is gone/);
  assert.match(html, /The first principles are not/);
  assert.match(html, /\$10,000 hits your bottom line/);
  assert.match(html, /valence-stage/);
  assert.match(html, /CLICK THE ATOM TO REVEAL BRANDS/);
  assert.match(
    html,
    /Discover the first principles of marketing &amp; never see business the same again/,
  );
  assert.match(html, /class="button missing-cta"[^>]*href="\/"/);
  assert.match(html, /noindex/);
});

test("keeps the original operator landing with the particle portrait", async () => {
  const response = await render("/landing");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Turn AI into a/);
  assert.match(html, /revenue system/);
  assert.match(html, /BEN_KILLEN\.POINT_CLOUD|Lock the system|ParticlePortrait|portrait-stage/);
});
