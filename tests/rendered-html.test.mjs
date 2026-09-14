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

test("server-renders the Category King home page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Growth Labs/i);
  assert.match(html, /Add \$10,000 to your bottom line/i);
  assert.match(html, /BOOK A STRATEGY SESSION/);
  assert.match(html, /Category King System/);
  assert.match(html, /MTP Health/);
  assert.match(html, /These exact numbers are not those of MTP Health/);
  assert.match(html, /illustrative purposes as an aggregate/);
  assert.match(html, /href="\/work\/mtp-health"/);
  assert.match(html, /aria-label="Footer navigation"/);
  assert.doesNotMatch(html, /This illustration is the MTP Health install/);
  assert.doesNotMatch(html, />Partners</);
  assert.doesNotMatch(html, />Solutions</);
  assert.doesNotMatch(html, />About</);
  assert.doesNotMatch(html, /href="\/partners"/);
  assert.doesNotMatch(html, /href="\/solutions"/);
  assert.doesNotMatch(html, /href="\/about"/);
  assert.doesNotMatch(html, /href="\/audit"/);
  assert.doesNotMatch(html, /href="\/landing"/);
  assert.doesNotMatch(html, developmentPreviewMeta);
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
  assert.match(html, /30% YOY/);
  assert.match(html, /North Shore Health Hub/);
  assert.match(html, /These exact numbers are not those of MTP Health/);
  assert.match(html, /href="\/work\/mtp-health"/);
});

test("keeps the original operator landing with the particle portrait", async () => {
  const response = await render("/landing");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Turn AI into a/);
  assert.match(html, /revenue system/);
  assert.match(html, /BEN_KILLEN\.POINT_CLOUD|Lock the system|ParticlePortrait|portrait-stage/);
});
