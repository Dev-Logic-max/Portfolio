# 09 — Build Phases & Checkpoints

> Build in phases, vertical slices, with a confirmation checkpoint (⛳) before each phase.
> At every ⛳, post a short plan + any decisions needing Abdul's call (CLAUDE.md rule #1),
> then wait for the go-ahead. Keep `NOTES.md` updated throughout.

## ⛳ Phase 0 — Align (no code yet)
- Summarize the stack (`02`), ask Abdul to pick a **design direction A/B/C** (`03`), and
  confirm **v1 scope** (below). Resolve the `[confirm]` decisions (3D? GSAP? blog? contact
  backend? analytics? deploy path?).
- Offer to mock the **hero of the chosen direction first** as a quick proof.

## Phase 1 — Foundation
- Init Next.js + TS + Tailwind + shadcn + fonts + `next-themes`. Folder structure (`02`).
- Implement **design tokens**, base layout, **nav + footer**, dark/light toggle.
- Ship the `/style-guide` route so Abdul approves the system. **⛳ review before Phase 2.**

## Phase 2 — Signature hero
- Build the hero end-to-end: signature effect (`05`), headline/sub/CTAs/socials, reduced-
  motion + mobile fallback. Get it to "wow." **⛳ review — this sets the bar.**

## Phase 3 — Home narrative
- Trust strip → About/stats → Featured projects → Services (Dev Logic Max) → Skills →
  Experience timeline → Testimonials → Contact CTA. Each reads from `06` data. One slice at
  a time; brief review between the big ones.

## Phase 4 — Work + case studies
- `/work` index (filterable) + flagship case-study template (`/work/[slug]`) with Veylohr +
  Curantis fully written (Problem→Approach→Architecture→Results) incl. diagrams (`07`).

## Phase 5 — Remaining pages
- About, Experience, CV (`/cv` + PDF), Contact page (form + zod + delivery), Services page
  (if separate), 404/500. Blog + Uses if approved (set up MDX even if near-empty).

## Phase 6 — Polish & compliance
- SEO metadata, JSON-LD, sitemap/robots, OG images, favicon/manifest.
- Performance pass (bundle analyze, image/font/motion budgets, CWV).
- Accessibility pass (keyboard, screen reader, axe, contrast, reduced-motion).
- Cross-browser + real-phone test. Self-critique each page; remove one excess thing each.

## Phase 7 — Deploy
- Vercel (fast path) and/or VPS pipeline (Docker + Nginx + GH Actions) per `08`. Custom
  domain. `README.md`. Optional: write the VPS deploy up as the first blog post.

## Suggested v1 scope (confirm/trim with Abdul)
Home (all core sections) · Work index · Veylohr + Curantis case studies · About · Experience
· CV/download · Contact · style-guide · SEO/perf/a11y baseline · deploy.
**v2 fast-follow:** Services page, Blog, Uses, command palette, impact "war stories",
extra case studies.

## Working agreement (repeat of the important bits)
- **Ask before doing more than asked**; present 2–3 options + a recommendation.
- **One polished slice at a time**; don't scaffold many half-done sections.
- **Search the web** to confirm current library versions/APIs and for inspiration; adapt,
  never clone.
- **Content in typed data files**, never hard-coded. Prefill placeholders; never leave blank.
- **Keep `NOTES.md`**; commit in small, described chunks.
- **Quality floor is non-negotiable** (responsive, a11y, reduced-motion, CWV).