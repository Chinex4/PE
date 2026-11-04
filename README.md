# Precious Evans

Identity, purpose and personal branding platform. Existing React 18, Vite 5, React Router 6 and Tailwind 3 stack; EmailJS enquiry delivery. Primary pages are prerendered at build time and hydrated in React. Legacy resource, case-study and purchase routes remain available.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Fill confirmed public configuration only. Never put secret API keys in VITE variables. Blank booking and EmailJS configuration gives an honest unavailable state.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
```

Copy and images: `src/editorial/content.js`. Checked contract: `src/editorial/schema.ts`. SEO: `src/editorial/metadata.js`. Tokens: `src/editorial/editorial.css`.

- [Repository audit](docs/repo-audit.md)
- [Design decisions and reference analysis](docs/design-notes.md)
- [Configuration and content editing](docs/configuration.md)
- [Verification and remaining release work](docs/verification.md)

No production deployment is part of this branch. See the handoff for required owner configuration and outstanding confirmation.
