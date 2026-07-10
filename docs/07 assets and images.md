# 07 — Assets & Images

> What visual assets the site needs, where they go, and **ready-to-paste Gemini prompts**
> Abdul can use to generate them. Keep everything optimized and consistent with the chosen
> design direction's palette (`03`).

## Where assets live
`/public/images/` (content), `/public/og/` (social cards), `/public/cv.pdf`, favicon set at
project root/app. Prefer **WebP/AVIF**; serve via `next/image` (sizes, lazy, blur placeholder).

## Asset checklist

- **Portrait** (About + hero if used) — real photo strongly preferred for trust; if using
  AI, keep it plausibly professional. `// TODO(abdul): real headshot?`
- **Project covers** (per project) — clean mockups/screenshots in device frames.
- **Project galleries** — 2–4 screenshots each.
- **Architecture diagrams** (per flagship case study) — *don't* AI-generate these; draw them
  as clean SVG/diagram (Excalidraw/Mermaid/tldraw export) so they're accurate. This is a
  seniority signal — make them correct and legible in dark/light.
- **Signature background** (if not WebGL) — a pre-rendered gradient/mesh PNG fallback.
- **Logo / monogram** — a simple "Dev Logic Max" wordmark + an "AR"/"DLM" mark for favicon.
  `// TODO(abdul): existing logo?` Otherwise generate a clean geometric mark.
- **OG image** — auto-generate per page with `@vercel/og`/Satori (name, role, accent), plus
  one default. 1200×630.
- **Favicon set** — 16/32/apple-touch/maskable + `site.webmanifest` (PWA-ready).
- **Texture** — optional subtle noise/grain PNG at low opacity.

## Gemini image prompts (paste-ready; tune palette to the chosen direction)

**1) Hero background — "Engineered Depth" (Direction A):**
> "Abstract dark background of a glowing interconnected network of nodes and thin lines,
> deep space-navy (#0A0E1A) base with electric-blue (#4F8CFF) and teal-mint (#22D3AA)
> accents, subtle depth-of-field, minimal, premium tech aesthetic, lots of negative space
> on the left for text, 16:9, high resolution, no text, no logos."

**2) Hero background — "Aurora Product" (Direction C):**
> "Smooth flowing aurora gradient, violet (#7C5CFF) to blue (#3E9BFF) to cyan (#22D3EE) on a
> near-black background, soft blurred organic shapes, glassy, modern SaaS landing aesthetic,
> lots of empty space, 16:9, high resolution, no text."

**3) Abstract accent shapes / blobs (section dividers, card art):**
> "Set of abstract 3D glass and gradient shapes, translucent, soft studio lighting, matching
> a [navy + electric-blue + teal] palette, isolated on transparent/dark background, premium,
> minimal, high resolution, no text."

**4) Project cover mockup base (then composite the real screenshot on top):**
> "Clean minimal device mockup scene, a laptop and phone floating at a slight angle on a
> subtle gradient surface, soft shadows, [palette] tones, lots of empty space, product-shot
> aesthetic, high resolution, no text on screens (leave screens blank/dark for compositing)."

**5) Texture / grain:**
> "Fine subtle film grain noise texture, monochrome, seamless, very low contrast, for a 3%
> opacity overlay, high resolution."

**6) Monogram/logo concept (iterate, then redraw as SVG):**
> "Minimal geometric monogram combining letters 'D L M' (Dev Logic Max), single-weight,
> modern, tech studio logo, works in one color, on transparent background, no gradients,
> clean vector style."

**7) 404 / empty-state illustration (optional, keep on-brand):**
> "Minimal abstract line illustration of a disconnected node / lost signal, [accent color]
> on transparent background, simple, modern, no text."

> Tip for Abdul: generate a few variants, keep the palette locked to the chosen direction,
> and prefer **abstract backgrounds** over literal AI scenes (they age better and stay
> premium). For anything factual (diagrams, screenshots), use real captures, not AI.

## Image performance rules (Claude Code)
- Always `next/image` with correct `sizes`, width/height (no CLS), `priority` only on the
  hero, blur placeholder elsewhere.
- Compress to WebP/AVIF; keep hero under a sensible budget; lazy-load below the fold.
- Provide meaningful `alt` text for every content image (empty alt for pure decoration).
- Store 1x/2x where needed; avoid shipping 4K PNGs.