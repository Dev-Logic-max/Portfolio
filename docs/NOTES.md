# NOTES — Portfolio build log

## Decisions (2026-07-08)
- **Design:** premium Aurora-Product base, engineered for both light+dark; multi-accent color
  system. (Claude's call, per Abdul.)
- **Hero:** build TWO signatures stacked (WebGL + canvas/CSS) + a color/theme demo → Abdul
  picks final look & palette.
- **Scope:** lean-first — polish Home page, confirm sections+colors, then expand.
- **Deploy:** Vercel now, VPS later. `output: "standalone"` from day one.
- **PM:** pnpm.

## Stack versions (confirmed on web 2026-07-08)
- Next.js 16.x stable (App Router, Turbopack default, React 19.2).
- Tailwind CSS v4 (CSS-first `@theme`, no tailwind.config.js, dark via `.dark` class).
- next-themes for no-flash theme switching (adds `.dark` on <html>).
- Motion (`motion/react`), Lenis, Three.js/R3F/drei, shadcn/ui, lucide-react.

## Status
- [x] Rewrote root CLAUDE.md (was a stale mobile file) → portfolio rulebook + question protocol.
- [x] NOTES.md created.
- [x] Scaffolded Next.js 16 app in `/web` (App Router, Turbopack, src dir, `@/` alias).
- [x] Installed stack: motion, next-themes, lenis, three + R3F + drei, lucide-react, clsx, tailwind-merge.
- [x] Design tokens — "Aurora Engineered" (light+dark, 7 accents + surfaces) in globals.css.
- [x] Providers: ThemeProvider (next-themes, default dark, no-flash), SmoothScroll (Lenis, off on reduced-motion).
- [x] Layout: fonts (Inter/Sora/JetBrains Mono), metadata+viewport, skip-link, VPS-ready `output: standalone`.
- [x] Base UI: Button/ButtonLink, Chip, SpotlightCard, SectionHeading, ThemeToggle, ScrollProgress, brand-icons.
- [x] Motion primitives: Reveal / RevealGroup / RevealItem.
- [x] Navbar (condense + hide-on-scroll + mobile sheet) + Footer.
- [x] TWO hero signatures (Canvas/CSS + WebGL Three.js, guarded fallback) stacked as HeroCompare demo.
- [x] PaletteDemo (live theme switch, all accents+surfaces+sample blocks) for palette decision.
- [x] Seeded typed content: profile, projects, skills, experience, services, social.
- [x] Home sections: TrustMarquee, About(+count-up stats), FeaturedProjects, Services, Skills, ExperienceTimeline, Contact.
- [x] `tsc --noEmit` passes clean.
- [ ] Production build verifying (in progress).
- [ ] Abdul reviews on dev server → picks hero + palette → I strip demos & finalize.

## Session 2 (2026-07-08) — real content, scroll story, studio view, SEO
- **Port now env-driven:** `PORT` in `.env.local` (via dotenv-cli). Change number + restart. Runs 3013.
- **Hero decision:** Hero B (WebGL) promoted to main hero. Canvas constellation repurposed into
  the Contact section background (nothing deleted).
- **Real data wired from GitHub:** name = Abdul Rehman Ahmad; real repos added as projects
  (ecommerce FE/BE, real-estate FE/BE, collaborative editor Next/Nest) + flagship Veylohr/Curantis.
- **New `content/tech.ts`:** single source of truth for stack with REAL colored brand icons
  (react-icons/si) + honest levels. Powers marquee + new Tech section. `lib/tech-color.ts` keeps
  near-black/white brand colors visible in both themes.
- **New TechStack section** — grouped grid, real logos, hover glow, core-dot.
- **New ProcessScroll section** — GSAP ScrollTrigger PINNED scroll story (Discover→Operate),
  scrubbed panels rising over a fixed aurora bg. Reduced-motion → plain stacked list.
- **Studio view:** `/studio` agency page (StudioHero + Services + ProcessScroll + Contact) with a
  "Me / Studio" nav toggle. One domain, two shareable links: `/` and `/studio`. Portfolio-first.
- **SEO/LLM layer:** JSON-LD (Person + Organization + WebSite + CreativeWorks) in layout,
  `sitemap.ts`, `robots.ts`, env-driven `NEXT_PUBLIC_SITE_URL`.
- **Palette ultra-tweaks:** fixed radial depth on body bg; added border-gradient/glow/shimmer utils.
- **Cleanup:** removed demo files (hero-compare, hero-canvas, palette-demo) + orphaned skills section.
- **CONTENT_GUIDE.md** written at repo root — what to gather, where it goes, paste-ready AI prompts.

## Session 3 (2026-07-08) — bug fixes, real projects, contact, docs
- **Bugs fixed:** (1) horizontal scroll → `html{overflow-x:hidden}` + `body{overflow-x:clip}` guard.
  (2) About count-up flicker → rewrote with Motion `useMotionValue`+`animate` (no interval/effect loop);
  added per-stat icons. (3) ProcessScroll cards "mixing" → blur-crossfade with hold, opaque cards + glow.
- **Real projects added:** Wequity (AI ESG/compliance — Abdul built calendar Apple/Google/Webex + CRM/AI
  modules), OCR Financial Extraction, Notion-style editor (Tiptap+Hocuspocus+Yjs CRDT), Vellora Mobile
  (React Native), + existing repos. Still need real links/one-liners from Abdul (marked TODO).
- **Contact:** WhatsApp click-to-chat (+92 335 0805204, 🇵🇰), both Gmails (ar3991492@, devlogicmax@),
  socials row. Full Web3Forms email-to-Gmail form = later slice.
- **social.ts:** scoped socials (personal/studio/both) + brand icons for WhatsApp/Fiverr/Upwork/Facebook.
  Fiverr/Upwork → studio scope (need URLs from Abdul).
- **Breadcrumbs component** built (with BreadcrumbList JSON-LD) — ready for route pages.
- **Docs rewritten:** CONTENT_GUIDE.md (dead-simple 3-bucket: PROVIDE/GENERATE/LATER) + ADMIN_PLAN.md
  (Supabase + /admin + auth + analytics/bot-logger, phased A0–A7).
- **Decided:** content stays typed-files now; admin panel is the immediate next phase after visuals.
  Routes to build (all): /work, /work/[slug], /about, /stack, /cv + breadcrumbs.
- **Still queued (visual slices):** me-hero 3D planets + typing headline (remove light blocks),
  studio-hero animation, DevOps/servers section, mobile section, photo section under hero strip,
  footer expansion, header hover mega-menu, OG images, light-theme cursor/rain effect (optional).
- Minor: THREE.Clock deprecation warning from drei (harmless).

## Session 4 (2026-07-08) — real CV content + hero upgrades
- **CV received** → corrected ALL content: name = **Abdul Rehman** (not Ahmad); Cure Logics
  Full-Stack Engineer Oct 2024–Present (Veylohr built there); Upwork/Fiverr 2023–2024, 30+ projects;
  B.Sc CS NCBA&E 2022–2026. Honest stats (30+ projects, 2+ yrs, 2 SaaS, 32 modules).
- **experience.ts** rewritten with `kind` (work/studio/education) → icons + stack chips + cards.
- **tech.ts** expanded with real CV tools: Zustand, Drizzle, Railway, Netlify, Cloudinary, GitLab,
  PM2, Postman, Turborepo, Kubernetes. (AWS not in Simple Icons → use lucide Cloud in DevOps section.)
- **editor project** now credits Tiptap + Hocuspocus + **Liveblocks** (per CV).
- **"Me" hero upgraded:** added drifting **3D planets** (meshStandardMaterial + lights + rings, fade-in
  over time) to particle-field; **animated typing headline** ("I build" + cycling phrases via new
  TypingText); dimmed the CSS conic blob when WebGL active (planets are the star).
- **Studio hero upgraded:** new **animated system-architecture diagram** (SVG edges draw in + data
  pulse + node glow rings, reduced-motion static) in a 2-col layout; broadened copy (SaaS / web+mobile /
  AI products).
- **Contact route decision:** Web3Forms (free, 250/mo → Gmail) chosen; form build = next.
- **URLs:** public profile URLs live in content files (NOT .env — they're not secrets). Fiverr/Upwork
  still need URLs from Abdul (studio scope).
- Transient HMR 500 (`socials` rename) self-resolved; final state clean. tsc+lint+build green.
- **Queued next:** Web3Forms form · DevOps/servers + Mobile sections · routes (/work,/work/[slug],
  /about,/stack,/cv + breadcrumbs) · photo section under hero strip · footer expansion · header mega-menu.

## Session 5 (2026-07-09) — photos, CV, realistic planets, hero fixes
- **Photos received** (3 PNGs, 6-7MB) → optimized with sharp to WebP: portrait.webp (70KB),
  avatar.webp (13KB, square), portrait-office.webp (83KB). Script: web/scripts/optimize-images.mjs.
- **CV**: Abdul_Rehman_CV_Pakistan.pdf → copied to public/cv.pdf (44KB). Download/`/cv` will use it.
- **Planets**: tried a fly-through (grow-toward-camera) version — Abdul rejected the look. REVERTED to
  the original gentle-orbit motion, but upgraded appearance: procedural fbm surface shader + fresnel
  atmosphere rim + small radii (0.24–0.6) + Saturn ring on the big one. Looks like real little worlds.
  → If Abdul wants even more realism, offer real planet textures (Solar System Scope) dropped in /public.
- **Hero height jump fixed**: TypingText now reserves space for the longest phrase (invisible sizer +
  absolute overlay); hero section is fixed `h-svh min-h-160` (was min-h that grew with text).
- **Hero text** refined; phrases end on "and I keep it alive."
- **New Intro/photo section** (components/sections/intro.tsx) under the marquee: portrait (next/image,
  priority) + gradient glow + name chip + short bio + quick-facts grid. profile.ts now has portrait/
  portraitOffice/avatar paths.
- Still queued this batch: Web3Forms contact form · DevOps + Mobile sections · routes (/work,
  /work/[slug],/about,/stack,/cv + breadcrumbs) · footer expansion · header mega-menu.

## Session 6 (2026-07-09) — routes, sections, form, footer, mega-menu
- **Multi-page routes built** (all static/SSG in prod build — 19 pages total):
  - `/work` (filterable grid, ProjectCard) · `/work/[slug]` (full case study: Problem→Approach→
    Architecture→Hard problems→Results + prev/next, generateStaticParams → all 8 pre-rendered)
  - `/about` (journey + office photo + principles + ExperienceTimeline + Contact)
  - `/stack` (TechStack + Contact) · `/cv` (embedded PDF viewer + download)
  - Shared `PageShell` (nav + breadcrumbs w/ JSON-LD + footer). Nav now points to real routes.
- **Landing tightened**: hero → marquee → intro → about → featured(top 3 + "View all") → DevOps →
  Mobile → process → tech → contact. Experience moved to /about.
- **DevOps section** (content/devops.ts): animated CI/CD pipeline (Commit→Build→Test→Deploy→Operate),
  platform grid (VPS/Docker/Nginx/K8s/AWS/Hostinger/Vercel/Railway/Netlify), highlights list.
- **Mobile section**: React Native/Expo/TS, phone mockup, Vellora, feature grid.
- **Contact form**: react-hook-form + zod + Web3Forms → Gmail. Honeypot. Falls back to mailto if
  NEXT_PUBLIC_WEB3FORMS_KEY absent. Success/error states. (Abdul needs to paste key from web3forms.com.)
- **Footer** rebuilt: CTA band + availability + 4 columns (brand/portfolio/studio/connect) + bottom bar.
- **Header mega-menu** (nav-mega.tsx): hovering Work → featured projects panel; Stack → categories panel.
- Fixes: data-scroll-behavior="smooth" on <html>; window.location.assign (RSC immutability lint).
- Prod build ✓ exit 0, 19 static pages, all case studies SSG. tsc+lint clean. All routes 200.
- **Abdul still to provide**: Web3Forms key · Fiverr/Upwork URLs · real project links/screenshots.

## Gotchas hit / notes for future
- Next 16 ships an AGENTS.md in /web warning its APIs differ; verified font/dynamic/metadata conventions
  against `node_modules/next/dist/docs/` — all current usage is correct.
- Tailwind v4: `bg-gradient-to-*` → `bg-linear-to-*`; `z-[100]`→`z-100`; `size-[18px]`→`size-4.5`.
- **lucide-react removed brand icons** (GitHub/LinkedIn/X) over trademark → added inline SVGs in
  `components/ui/brand-icons.tsx`.

## Open questions for Abdul (from CLAUDE.md §1)
Real stats · which projects public · exact services · contact route · domain · testimonials ·
tone lean · CV format · analytics choice. — surface each when its section comes up.

## Hero background — galaxy (2026-07-09)
- Removed orbiting planets entirely (Abdul: didn't look premium). `particle-field.tsx`
  now renders a **colored 3-arm spiral galaxy**: 6k PointsMaterial stars graded
  hot-gold core → violet arms → cyan rim, gentle rotation + subtle pointer parallax,
  slow tint drift toward live `--glow`. Theme-aware (dark rich / light cooler) +
  faint distant starfield for depth.
- Tried a heavier shader version (scroll-dolly zoom + cursor gravity + time color
  drift, 7k particles) — **reverted**: the scroll-dolly blew it into a giant bright
  arc hugging the top edge, and it ran slow. Lean version looks + performs better.
- `.glb` 3D planets Abdul has: parked as an OPTIONAL future toggle, not default.
- Fixed hydration warning: added `suppressHydrationWarning` to `<body>` in layout.tsx
  (Grammarly/extensions inject data-* attrs on body pre-hydration — harmless).
- `THREE.Clock deprecated` console line is internal to r3f — harmless, ignore.

## Next up
- **Deep case studies** (`/work/[slug]`: problem → approach → architecture →
  decisions → metric) — HOLD until Abdul finishes updating content/links, then build
  on real data (avoid placeholder churn). Metrics already covered by About section's
  count-up cards → decided NOT to add a duplicate stats band.
- Then: git init + GitHub + Vercel deploy + promo kit (Abdul runs commands himself).

## Placeholders in use
(none yet — will list `// TODO(abdul):` items here as they're seeded)
```
```
