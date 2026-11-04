process.env.NODE_ENV = "production";
const { renderPage } = await import("../dist-ssr/prerender.js");
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { metadata } from "../src/editorial/metadata.js";
const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
const routes = {
  home: "",
  about: "about",
  coaching: "coaching",
  branding: "personal-branding",
  speaking: "speaking",
  contact: "contact",
  privacy: "privacy",
  booking: "booking",
};
for (const [page, path] of Object.entries(routes)) {
  const [title, description] = metadata[page];
  const url = `https://preciousevans.com/${path}`;
  const tags =
    `<title>${escape(title)}</title>\n<meta data-rh="true" name="description" content="${escape(description)}"/>\n<link data-rh="true" rel="canonical" href="${url}"/>\n` +
    [
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["property", "og:url", url],
      ["property", "og:type", "website"],
      [
        "property",
        "og:image",
        "https://preciousevans.com/images/portrait.webp",
      ],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", title],
      ["name", "twitter:description", description],
      [
        "name",
        "twitter:image",
        "https://preciousevans.com/images/portrait.webp",
      ],
    ]
      .map(
        ([attribute, name, value]) =>
          `<meta data-rh="true" ${attribute}="${name}" content="${escape(value)}"/>`,
      )
      .join("\n");
  const html = template
    .replace(
      '<div id="root"></div>',
      `<div id="root" data-rendered-path="/${path}">${renderPage("/" + path)}</div>`,
    )
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, "")
    .replace(/<link rel="canonical"[^>]*\/>/, "")
    .replace("</head>", `${tags}\n</head>`);
  const hero =
    page === "home"
      ? "portrait"
      : page === "about"
        ? "about-portrait"
        : page === "speaking"
          ? "speaking"
          : "";
  const finalHtml = hero
    ? html.replace(
        "</head>",
        `<link rel="preload" as="image" href="/images/${hero}.webp" imagesrcset="/images/${hero}-480.webp 480w, /images/${hero}-720.webp 720w, /images/${hero}.webp ${hero === "speaking" ? 1170 : 900}w" imagesizes="(max-width: 767px) calc(100vw - 48px), 40vw" fetchpriority="high"/></head>`,
      )
    : html;
  const directory = path ? `dist/${path}` : "dist";
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, finalHtml);
}
console.log("Generated route-specific static SEO heads for 8 pages.");
