# 08 — SEO, Performance, Accessibility & Deployment

> The site must be *found*, *fast*, *usable by everyone*, and deploy cleanly. These are
> gates, not extras (see CLAUDE.md §3).

## SEO

- **Metadata:** per-route `metadata` (App Router) — title templates, descriptions, canonical
  URLs. Keep a `seo.ts` with defaults. Target keywords naturally: "senior full-stack
  developer", "SaaS developer", "Next.js / NestJS engineer", location terms (Pakistan / Gulf /
  remote), "Dev Logic Max".
- **Open Graph + Twitter cards:** per page, with auto-generated OG images (`07`).
- **Structured data (JSON-LD):** `Person` (Abdul), `Organization` (Dev Logic Max),
  `WebSite`, `BreadcrumbList`, and `Article` for blog posts. This helps rich results.
- **Sitemap + robots:** generate `sitemap.xml` and `robots.txt` (App Router built-ins).
- **Semantic HTML + one H1 per page**, descriptive link text, alt text — SEO and a11y overlap.
- **RSS** for the blog if built.
- Custom domain (`// TODO(abdul)`), `www`→apex redirect, HTTPS.

## Performance (Core Web Vitals)

- Targets: **LCP < 2.5s, INP < 200ms, CLS < 0.1**; Lighthouse mobile Perf ≥ 90.
- Self-host fonts via `next/font` (no layout shift, no third-party font request).
- `next/image` everywhere; hero `priority`, rest lazy + blur.
- Lazy-load heavy libs (Three/GSAP) with `next/dynamic`; keep them off the critical path.
- Prefer Server Components; ship minimal client JS; `use client` only where needed.
- Cap WebGL DPR, pause off-screen (`05`). Debounce/passive scroll listeners.
- Run `@next/bundle-analyzer` before shipping; watch the JS budget.
- Cache static assets aggressively; use static generation (SSG/ISR) for content pages.

## Accessibility (WCAG 2.1 AA)

- Contrast AA in **both** themes; visible focus rings; logical tab order; skip link.
- All interactive elements keyboard-operable; dialogs/menus trap focus and Esc-close
  (shadcn/Radix handles most).
- `prefers-reduced-motion` honored site-wide (`05`).
- Forms: labels tied to inputs, error text announced, `aria-*` where needed.
- Test with keyboard-only and a screen reader before "done". Run axe / Lighthouse a11y.

## Analytics (privacy-friendly)

- **[confirm]** Vercel Analytics or Plausible/Umami (no cookie banner needed) over GA.
  `// TODO(abdul): preference.`

## Deployment — two documented paths (pick with Abdul)

**Path 1 — Vercel (recommended for speed/simplicity):**
- Connect the GitHub repo, set env vars, auto-deploy on push, preview deployments per PR.
- Add the custom domain + DNS. Zero server maintenance. Best DX for a portfolio.

**Path 2 — Abdul's own VPS (shows off DevOps — on-brand for him):**
- Dockerize the Next.js app (multi-stage build, standalone output).
- **Nginx** reverse proxy + **Let's Encrypt** TLS.
- **GitHub Actions** CI/CD: build → test → push image → deploy to VPS on `main`.
- PM2 or Docker Compose to run/keep-alive; health check; zero-downtime reload.
- **Bonus:** document this deployment *as a case study / blog post* — it literally
  demonstrates his DevOps skill on his own site. Strong signal.

> Recommendation: ship v1 on **Vercel** to move fast, and optionally **also** stand up the
> VPS pipeline as a showcase + blog post. Confirm with Abdul.

## Pre-launch checklist
- [ ] All links work (socials, live, repo, CV, email).
- [ ] CV PDF downloads; OG images render; favicon + manifest set.
- [ ] Lighthouse: Perf ≥90 / A11y ≥95 / BP ≥95 / SEO 100 (mobile).
- [ ] Dark + light both authored; reduced-motion verified.
- [ ] 404/500 on-brand; sitemap + robots live; JSON-LD validates.
- [ ] Tested on a real mid-range phone.
- [ ] `README.md` documents run/edit-content/deploy.