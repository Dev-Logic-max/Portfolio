# 04 — Sections & Pages (Information Architecture)

> The complete map. Build as vertical slices (one section fully polished at a time).
> `v1` = ship first. `v2` = fast-follow. Confirm the v1 scope with Abdul (see `09`).

## Global (every page)

- **Nav / header** `v1`: logo/monogram ("Dev Logic Max" or "AR" mark), links (Work, About,
  Services, Experience, Contact), dark/light toggle, a primary CTA ("Let's talk" /
  "Download CV"). Sticky, condenses on scroll, disappears-on-scroll-down / reappears-up.
  Mobile: sheet menu. Skip-to-content link for a11y.
- **Footer** `v1`: short pitch line, all social links (GitHub, LinkedIn, X, YouTube, email),
  CV download, "built with Next.js" honest note, back-to-top, copyright + location.
- **Command palette** `v2` `[nice-to-have]`: ⌘K to jump to sections/projects — a subtle
  "this person is an engineer" flourish.

## Home (`/`) — the anchor `v1`

A single, scroll-driven narrative. Sections in order:

1. **Hero** — the signature (per `03`). Headline (dual positioning), one-line sub, two CTAs
   (primary "View work" / secondary "Download CV"), social row, subtle scroll cue.
   Background = the chosen signature (WebGL mesh / kinetic type / aurora).
2. **Trust strip** — logos/stack marquee: the technologies + (if available) client/industry
   logos. A quiet, moving band of "Next.js · NestJS · TypeScript · PostgreSQL · Prisma ·
   Supabase · Docker · Nginx · GitHub Actions ...". Doubles as skill signal.
3. **About / story** — short narrative (from `01`) + a portrait (Gemini or real photo) +
   3–4 headline stats (`// TODO(abdul):` e.g. "X yrs shipping SaaS", "N production systems",
   "N integrations"). Keep numbers honest.
4. **Featured projects** — 2–3 flagship cards (Veylohr, Curantis, +1) with rich hover,
   short outcome line, tech chips, links to case study + live + repo. This is the heart —
   make it beautiful (bento or large alternating rows).
5. **Services / "Dev Logic Max"** — the agency slice. 3–4 service cards (Full product builds,
   DevOps & deployment, SaaS architecture, integrations). Each: what it is + outcome. CTA
   "Start a project."
6. **Skills & stack** — grouped, scannable: Frontend / Backend / DevOps & Infra / Data /
   Practices. Use mono tags + subtle proficiency signal (avoid cheesy % bars; prefer
   grouped chips or a compact matrix). See `06` data.
7. **Experience timeline** — roles/positions, condensed (full detail on Experience page).
   Vertical timeline with company, role, dates, 1–2 impact bullets each.
8. **Selected impact / highlights** `v2` — a few "war stories": the Indeed/ATS integration,
   multi-tenant RBAC, GDPR compliance — each as a one-paragraph proof-of-depth.
9. **Testimonials** `v1 if available` — slider (Embla). `// TODO(abdul): real quotes/logos`.
10. **Contact / CTA** — strong close. Dual CTA (hire me / start a project), contact form or
    direct email + Calendly, social links, location + availability status.

## Work (`/work`) — projects index `v1`

Filterable grid of all projects (filter by type/stack). Each card → case-study page.

## Project case study (`/work/[slug]`) `v1 for flagships`

Long-form, the strongest seniority proof. Template:
- Hero: title, role, one-line summary, live/repo buttons, key stats.
- **Problem → Approach → Architecture → Results.** Include an **architecture diagram**
  (see `07`), tech stack, and 2–3 "hard problems solved" (integrations, multi-tenancy,
  compliance, CI/CD). Screenshots/mockups. Honest outcomes.
- Next/prev project nav.

## About (`/about`) `v1`

The full story: journey, how he works, principles, DevOps philosophy, what Dev Logic Max
stands for, tools he lives in, a personality touch (RYK, interests). Portrait(s). Ends with
CV download + contact.

## Services (`/services`) `v2` (or a strong Home section for v1)

Deeper agency page: engagement model, process (Discover → Architect → Build → Ship →
Operate), what you get, FAQ. `// TODO(abdul): services + any pricing/model.`

## Experience (`/experience` or part of About) `v1`

Full timeline + a clean, printable summary. Link to downloadable CV (PDF).

## CV / Résumé `v1`

- A **/cv** route rendering the résumé nicely on-screen **and** a **Download PDF** button.
- `// TODO(abdul):` decide — static PDF in `/public/cv.pdf`, or generate the PDF from the
  same data. Keep Gulf + Pakistan variants if he wants (from his known preference).

## Blog / Writing (`/blog`, `/blog/[slug]`) `v2` `[recommended]`

MDX-powered. Even 2–3 posts (e.g. "Building multi-tenant RBAC", "Deploying Next.js to a
VPS with Docker + Nginx + GitHub Actions") massively boost authority + SEO. Set up the
system in v1 even if empty.

## Uses / Stack (`/uses`) `v2` `[nice-to-have]`

The tools, hardware, services, and DevOps setup he uses. Developer-community favorite,
cheap to build from `06` data, great for SEO + personality.

## Contact (`/contact`) `v1`

Dedicated page: form (react-hook-form + zod), direct email, socials, location/availability,
response-time expectation. Success/error states designed.

## Utility

- `404` + `500` — on-brand, not default.
- `/style-guide` — the living style guide from `03` (noindex).
- `sitemap.xml`, `robots.txt`, RSS (if blog).

## Section-build checklist (apply to each)
- Reads from typed data (`06`), not hard-coded.
- Responsive 320px→ultrawide; looks great before JS/motion hydrates.
- One meaningful motion moment, reduced-motion fallback.
- Real or clearly-placeholdered content, never blank.
- Keyboard + screen-reader sane.