# 02 — Tech Stack & Libraries

> Claude Code: confirm versions on the web before installing (rule #2 in CLAUDE.md). The
> choices below are the recommended default. Where marked **[confirm]**, present the option
> to Abdul before locking it.

## Core

- **Next.js (App Router, latest stable)** + **React** + **TypeScript (strict)**.
  Rationale: matches Abdul's daily stack, best-in-class SSR/SSG for SEO, image optimization,
  easy Vercel or self-host deploy.
- **Tailwind CSS (latest)** for styling, driven entirely by the design tokens in `03`.
- **shadcn/ui** for accessible, unstyled-then-themed primitives (buttons, dialog, tabs,
  accordion, tooltip, sheet). Restyle to our tokens — don't ship default shadcn look.
- **lucide-react** for icons. Consistent, lightweight, huge set.

## Motion & 3D (see `05` for how they're used)

- **Motion** (formerly Framer Motion — import from `motion/react`). Primary animation
  library: component transitions, scroll reveals, gestures, `AnimatePresence`. It's the
  React-native default and the safest, most-documented choice.
- **Lenis** (~3KB) for smooth/inertia scroll. Pairs with scroll-driven animation. Keep
  `lerp` between 0.05–0.15. Disable on reduced-motion.
- **GSAP + ScrollTrigger** **[confirm]** — only if we build a scroll-sequenced/pinned
  storytelling moment (e.g. an animated architecture or timeline). Lazy-load it. Note:
  GSAP is free for our use but check current license terms before relying on a plugin.
- **Three.js + @react-three/fiber + @react-three/drei** **[confirm]** — for the hero's
  optional WebGL/shader signature (particles, animated gradient mesh, or a subtle 3D object).
  **Lazy-load and guard**: static, beautiful fallback for mobile + reduced-motion + slow
  connections. If Abdul prefers pure-CSS/canvas flair, we skip Three entirely (lighter).

## Nice-to-have component/effect sources (copy-paste, adapt to tokens)

- **Aceternity UI**, **Magic UI**, **React Bits** — for gradient beams, shimmer, spotlight,
  animated text, marquee, bento cards. Use as *inspiration/starting points*, then rework so
  they match our design system and don't look like off-the-shelf demos.

## Content, forms, extras

- **MDX** **[confirm]** for a blog / long-form case studies (great for Abdul's "write to
  build authority" angle; strongly recommended even if empty at launch).
- **react-hook-form + zod** for the contact form (typed, validated).
- **Contact delivery [confirm]:** Resend or Formspree (simple), or a Next.js route handler
  to Abdul's own backend. Pick based on whether he wants zero-backend or self-hosted.
- **next-themes** for dark/light with no flash.
- **Embla Carousel** for sliders/testimonials (lightweight, accessible, touch-friendly).
- **@vercel/og** (or Satori) for auto-generated Open Graph images.

## Tooling / quality

- **ESLint + Prettier**, **Husky + lint-staged** (pre-commit).
- **TypeScript strict**, path aliases (`@/`).
- **Vitest + Testing Library** **[confirm]** for a few smoke tests on critical components.
- **@next/bundle-analyzer** to keep the heavy stuff (Three, GSAP) honest.

## Package manager & structure

- **pnpm** (fast, disk-efficient). `// TODO(abdul): npm if you prefer`.
- Suggested structure:
```
/app                 # routes (App Router)
/components
  /ui                # shadcn primitives (themed)
  /sections          # hero, projects, experience, etc.
  /motion            # reusable animation wrappers
  /three             # WebGL scene (lazy)
/content             # typed data (see 06) — projects, jobs, skills...
/lib                 # utils, seo, theme, constants
/styles              # globals, tokens
/public              # images, cv.pdf, og, favicon
```

## Bundle discipline

- Ship the hero fast: defer Three/GSAP until after first paint, `next/dynamic` with
  `ssr:false` for WebGL, `IntersectionObserver`-gate anything below the fold.
- Keep total blocking JS lean; the design should look great even before motion hydrates.

## Decision summary to confirm with Abdul (put this to him as a short menu)
1. **3D hero?** Three.js signature vs. pure CSS/canvas signature (lighter). → affects `03`/`05`.
2. **GSAP?** Only if we do a pinned scroll story. Yes/No.
3. **Blog/MDX?** Recommended on. Yes/No.
4. **Contact backend?** Resend / Formspree / his own API.
5. **Package manager:** pnpm / npm.