#!/usr/bin/env node
/**
 * Export 12 slides at 1080×1350 PNG + a LinkedIn PDF.
 * Uses system Chrome. Run from this folder: node export-slides.mjs
 */
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const outDir = join(root, "exports");
const chrome = process.env.CHROME_PATH || "/opt/google/chrome/chrome";

if (!existsSync(chrome)) {
  console.error("Chrome not found. Set CHROME_PATH.");
  process.exit(1);
}

const types = {
  ".html": "text/html; charset=utf-8",
  ".woff2": "font/woff2",
  ".png": "image/png",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const url = new URL(req.url || "/", "http://127.0.0.1");
      let filePath = join(root, decodeURIComponent(url.pathname));
      if (url.pathname === "/") filePath = join(root, "slides.html");
      try {
        const data = await readFile(filePath);
        res.writeHead(200, {
          "content-type": types[extname(filePath)] || "application/octet-stream",
          "cache-control": "no-store",
        });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("not found");
      }
    });
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

function run(cmd, args, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      stdio: ["ignore", "pipe", "pipe"],
      env: env ? { ...process.env, ...env } : process.env,
    });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.stdout.on("data", (chunk) => {
      process.stdout.write(chunk);
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited ${code}\n${stderr.slice(-800)}`));
    });
  });
}

const review = JSON.parse(await readFile(join(root, "review.json"), "utf8"));
await writeFile(
  join(root, "review-data.js"),
  `window.REVIEW = ${JSON.stringify(review)};\n`,
);

const { server, port } = await startServer();
await mkdir(outDir, { recursive: true });

const pngs = [];
for (let i = 1; i <= 12; i += 1) {
  const name = `slide-${String(i).padStart(2, "0")}.png`;
  const dest = join(outDir, name);
  pngs.push(dest);
  const url = `http://127.0.0.1:${port}/slides.html?slide=${i}`;
  console.log(`Capturing ${name}`);
  await run(chrome, [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    "--force-device-scale-factor=1",
    `--user-data-dir=/tmp/growth-labs-carousel-chrome`,
    "--window-size=1080,1350",
    `--screenshot=${dest}`,
    "--virtual-time-budget=4000",
    url,
  ]);
}

server.close();

const py = `
from pathlib import Path
from PIL import Image

paths = ${JSON.stringify(pngs)}
images = []
for path in paths:
    img = Image.open(path)
    print(path, img.size)
    if img.size != (1080, 1350):
        img = img.resize((1080, 1350), Image.Resampling.LANCZOS)
        img.save(path, "PNG", optimize=True)
    images.append(img.convert("RGB"))
pdf_path = Path(${JSON.stringify(join(root, "linkedin.pdf"))})
images[0].save(pdf_path, save_all=True, append_images=images[1:], resolution=72.0)
print("wrote", pdf_path)
`;

const pyFile = join(outDir, "_make_pdf.py");
await writeFile(pyFile, py);
const pyEnv = {
  PYTHONPATH: [
    `${process.env.HOME}/.local/lib/python3.12/site-packages`,
    process.env.PYTHONPATH || "",
  ]
    .filter(Boolean)
    .join(":"),
};
await run("python3", [pyFile], pyEnv);
await unlink(pyFile).catch(() => {});
console.log("Done.");
