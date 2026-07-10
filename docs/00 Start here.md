# 00 — START HERE

Hi Claude Code. You're building a top-tier portfolio + agency website. Everything you
need is in this folder. Here's the order and what each file is for.

## Read these in order (all of them, before coding)

| File | What it gives you |
|------|-------------------|
| `CLAUDE.md` | **Behavior rules.** Confirmation workflow, quality floor, how to work. |
| `00-START-HERE.md` | This file — orientation + first actions. |
| `01-brief-and-positioning.md` | Who Abdul is, dual brand (person + Dev Logic Max), audience, voice, sample copy. |
| `02-tech-stack.md` | Framework + libraries, with rationale and options to confirm. |
| `03-design-system.md` | Theme, color, type, gradients, shadows, dark/light, the signature element. |
| `04-sections-and-pages.md` | Full site map: every page and section, and what goes in each. |
| `05-animations-and-effects.md` | Motion system, 3D/shaders, scroll, micro-interactions, perf budget. |
| `06-content-data-model.md` | Typed data schema for all content + how Abdul fills it. |
| `07-assets-and-images.md` | Image plan + ready-to-paste Gemini prompts, favicon, OG, formats. |
| `08-seo-perf-deploy.md` | SEO, performance, a11y, and deploy (Vercel or Abdul's VPS). |
| `09-build-phases.md` | The phased build plan with confirmation checkpoints. |

## Your first three actions

**Action 1 — Confirm the foundations.**
Before scaffolding anything, post a short summary of the choices you're about to lock in
and ask Abdul to confirm or adjust:
- The tech stack (from `02`) — one line each, note any option you want his call on.
- The **design direction** — `03` gives three directions (A/B/C). Ask which one, or offer
  to mock a hero of the top choice first.
- The **scope of v1** — which pages ship first (from `09`).

Do NOT start building until Abdul picks a design direction. This is the single highest-
leverage decision.

**Action 2 — Scaffold + design system.**
Once confirmed: initialize the project, install the stack, and implement the **design
tokens and base layout only** (colors, fonts, spacing, dark/light toggle, container,
nav, footer). Show the empty shell so the foundation is right before content.

**Action 3 — Build one signature section end-to-end.**
Build the **hero** completely (see `03` signature + `04` hero spec + `05` motion). Get it
to "wow" before moving on. This sets the quality bar for everything after.

## Ground rules reminder (from CLAUDE.md)
- Ask before doing more than requested. Offer 2–3 options + a recommendation.
- Search the web to confirm current library versions/APIs and for inspiration.
- Content lives in typed data files, never hard-coded.
- Keep a `NOTES.md` of decisions. Commit in small described chunks.

## What "great" looks like here
When a recruiter or a potential client lands on this site, within 5 seconds they should
think: *"This person operates at a senior level and ships real products."* Everything —
copy, motion, spacing, the projects shown — serves that single impression.

Now read `01-brief-and-positioning.md`.