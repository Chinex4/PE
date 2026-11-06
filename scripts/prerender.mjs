// Writes the rendered page into dist/index.html so it paints before React loads.
process.env.NODE_ENV = "production";
const { renderPage } = await import("../dist-ssr/prerender.js");
import { readFile, writeFile } from "node:fs/promises";

const template = await readFile("dist/index.html", "utf8");
const preload =
  '<link rel="preload" as="image" href="/img/hero-1200.webp" imagesrcset="/img/hero-480.webp 480w, /img/hero-800.webp 800w, /img/hero-1200.webp 1200w" imagesizes="(max-width: 899px) 100vw, 44vw" fetchpriority="high" />';
const html = template
  .replace('<div id="root"></div>', `<div id="root">${renderPage()}</div>`)
  .replace("</head>", `${preload}\n</head>`);
await writeFile("dist/index.html", html);
console.log("Prerendered dist/index.html");
