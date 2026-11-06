# Precious Evans

One-page site for Precious Evans: identity coaching and personal brand strategy. React 18, Vite 5 and Framer Motion, prerendered at build time and hydrated in the browser. Pushing to `main` deploys to cPanel through `.github/workflows/deploy.yml`.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
```

| To change | Edit |
| --- | --- |
| Any words on the page | `src/site/content.js` |
| Colours, type and spacing | Tokens at the top of `src/site/site.css` |
| Sections | `src/site/components/` |
| Font | `src/site/fonts.css` |
| Page title and SEO | `index.html` |

- [Configuration](docs/configuration.md)
- [Design notes](docs/design-notes.md)
