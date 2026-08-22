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

test("server-renders the Growth Labs home page with the revenue atom", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Growth Labs/i);
  assert.match(html, /We engineer/i);
  assert.match(html, /revenue systems/i);
  assert.match(html, /first principles/i);
  assert.match(html, /atom-hero/);
  assert.match(html, /CLICK THE ATOM TO REVEAL BRANDS/);
  assert.match(html, />brand</);
  assert.match(html, />TAM</);
  assert.match(html, /your potential/i);
  assert.match(html, /Impressions/);
  assert.match(html, /CTR %/);
  assert.match(html, /Page CVR %/);
  assert.match(html, /B2C marketing/);
  assert.match(html, /B2B marketing/);
  assert.match(html, /Growth consulting/);
  assert.match(html, /Custom engineering/);
  assert.match(html, /AI Powered/);
  assert.match(html, /atom-copy-module/);
  assert.match(html, /Your brand sits in the centre/);
  assert.doesNotMatch(html, developmentPreviewMeta);
});

test("server-renders the partners page with AI Powered", async () => {
  const response = await render("/partners");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Partner bench/i);
  assert.match(html, /AI Powered/);
  assert.match(html, /aipowered\.xyz/);
});

test("keeps the original operator landing with the particle portrait", async () => {
  const response = await render("/landing");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Turn AI into a/);
  assert.match(html, /revenue system/);
  assert.match(html, /BEN_KILLEN\.POINT_CLOUD|Lock the system|ParticlePortrait|portrait-stage/);
});
