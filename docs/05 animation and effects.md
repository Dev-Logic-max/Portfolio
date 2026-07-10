# 05 — Animation & Effects

> Motion is a material, not decoration. Every animation must help the user understand the
> content or feel the brand. If it does neither, cut it. Over-animation is the #1 tell of a
> generated site — restraint reads as senior.

## The motion system (keep it consistent)

Define a small set of reusable primitives (in `/components/motion`) and use them everywhere
so the whole site feels like one system:

- **Durations:** micro 120–180ms · standard 240–360ms · large/hero 500–800ms.
- **Easing:** one signature ease (e.g. `[0.22, 1, 0.36, 1]` "expo-out" feel) for reveals;
  spring for interactive/gesture (Motion springs).
- **Reveal-on-scroll:** fade + 12–24px rise + slight scale, staggered for groups
  (stagger 40–80ms). Trigger once, in-view, with `IntersectionObserver` / Motion's `whileInView`.
- **Page/route transitions:** subtle cross-fade or mask wipe via `AnimatePresence`.
- **Text reveals:** word or line mask-up on the hero and section headings (restrained).

## Library roles (from `02`)

- **Motion (`motion/react`)** — component/scroll/gesture/exit animations. Primary.
- **Lenis** — smooth scroll feel; `lerp` 0.05–0.15; **off** under reduced-motion.
- **GSAP + ScrollTrigger** *(only if approved)* — one pinned, scroll-scrubbed story
  (e.g. animated architecture reveal or a timeline that draws as you scroll). Lazy-load.
- **Three.js / R3F / drei** *(only if approved)* — the hero WebGL signature. Lazy + guarded.

## The signature (choose per design direction in `03`)

- **A — Engineered Depth:** WebGL **particle network / animated gradient mesh** behind the
  hero. Subtle drift, cursor parallax, accent-tinted. Evokes distributed systems.
- **B — Studio Brutalist-Lite:** **kinetic type** — headline mask-reveals with slight skew;
  **magnetic cursor**; project thumbs distort/scale on hover.
- **C — Aurora Product:** **animated aurora gradient** background + **spotlight-follow** on
  glass cards; bento tiles lift and glow on hover.

**Rule:** the signature is the *one* place to be bold. Everywhere else, quiet.

## Micro-interactions (the polish layer)

- Buttons: press-scale (0.97), accent glow on hover, gradient underline sweep.
- Cards: lift + shadow/glow, border "beam" or spotlight following the cursor.
- Nav: active-link indicator that slides; header condense on scroll.
- Magnetic buttons/logo (optional, direction B/C).
- Marquee/logo band: infinite, pauses on hover, respects reduced-motion (becomes static).
- Number counters animate up when scrolled into view (stats).
- Custom cursor *(optional, B)* — only if it never harms usability; always keep native
  cursor on touch and for interactive controls.
- Copy-email / copy-command tooltip feedback.
- Scroll progress bar (thin, accent) at top.

## Shaders / WebGL guidance (if used)

- Keep the fragment/vertex shader **cheap** (this runs behind text). Cap DPR (≤1.5), cap
  particle count, pause when tab hidden / element off-screen (`IntersectionObserver`).
- Provide a **static export** (a pre-rendered gradient PNG or CSS gradient) as fallback for
  mobile, reduced-motion, and no-WebGL. The site must look premium with zero WebGL.
- `next/dynamic` with `ssr:false`; never block first paint on it.

## Accessibility & performance rules (hard gates)

- `prefers-reduced-motion: reduce` → disable Lenis, replace transforms with instant/opacity-
  only, freeze the signature to its static frame, stop marquees/counters.
- Never animate layout-shifting properties on scroll (stick to transform/opacity).
- 60fps target; profile the hero. If the signature can't hold 60fps on a mid phone, simplify
  it or fall back.
- Lazy-load all heavy motion libs; keep them out of the critical hero path.
- Don't animate on the main thread what CSS can do (prefer transform/opacity, GPU-friendly).

## Do / Don't

**Do:** orchestrate one memorable load sequence; reveal content as it enters; use motion to
show hierarchy and relationships.
**Don't:** animate every element; loop distracting motion near text; use parallax so strong
it induces motion sickness; keep the user waiting on a heavy intro before content.