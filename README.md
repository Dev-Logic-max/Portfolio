# Abdul Rehman — Portfolio & Dev Logic Max

A world-class personal + agency portfolio for **Abdul Rehman** — senior full-stack /
DevOps engineer and founder of the software studio **Dev Logic Max**.

Built to Awwwards quality: distinctive design, buttery motion, fast, accessible, with
a live WebGL galaxy hero.

**Live:** _add your Vercel URL here after first deploy_

## Tech

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript (strict) · Tailwind CSS v4 ·
Motion (`motion/react`) · Lenis smooth scroll · Three.js + React Three Fiber (guarded
WebGL) · next-themes (light/dark, no flash) · lucide-react.

## Run locally

```bash
pnpm install
pnpm dev            # http://localhost:3013
```

```bash
pnpm build && pnpm start   # production build + serve
pnpm lint                  # eslint
npx tsc --noEmit           # typecheck (strict)
```

Environment variables are documented in [`.env.example`](./.env.example). Copy it to
`.env.local` and fill in real values (never commit `.env.local`).

## Editing content

All portfolio content is **typed data** in [`src/content/`](./src/content) — edit
`profile`, `projects`, `skills`, `experience`, `services`, `social` there and every
section updates automatically. Search the codebase for `// TODO(abdul):` for the gaps
to fill. A plain-language guide lives in [`docs/CONTENT_GUIDE.md`](./docs/CONTENT_GUIDE.md).

## Design system

"Aurora Engineered" — one multi-accent palette, premium in **both** light and dark.
Tokens are CSS variables in [`src/app/globals.css`](./src/app/globals.css)
(`:root` = light, `.dark` = dark). 7 accents so each section can carry a distinct
color. Default theme is dark; toggle in the navbar.

## Project structure

```
.
├── src/
│   ├── app/            # routes, layout, globals.css (design tokens)
│   ├── components/     # hero, layout, sections, ui, motion, providers
│   ├── content/        # TYPED DATA — edit your life here
│   └── lib/            # helpers
├── public/             # images, cv.pdf, og, favicon
└── docs/               # project brief, content guide, build notes
```

## Deploy (Vercel)

The app is at the repo root, so **no Root Directory setting is needed** — Vercel
detects Next.js automatically. Import the repo, add the env vars from `.env.example`,
deploy. Every push gets a preview URL; `main` publishes production.

`output: "standalone"` is set, so a VPS (Docker + Nginx + GitHub Actions) is possible
later without refactoring.
