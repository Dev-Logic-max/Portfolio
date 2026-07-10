# 🛠️ Admin Panel — Implementation Plan (Phase after the public site)

Goal: a private dashboard where **you log in** (locally or on the deployed site) and manage the
portfolio + studio content — **without editing code** — plus see who's visiting.

This is designed so the public site keeps working exactly as-is; we just move content from typed
files into a database and add a protected `/admin` area that reads/writes it.

---

## What you'll be able to do from `/admin`
- **Projects:** add / edit / reorder / feature / unfeature; edit links, stack, case-study text.
- **Experience & skills:** add roles, update the stack list and levels.
- **Media:** upload project screenshots, your photo, logos (stored in Supabase Storage) — no file paths.
- **Blog / war-stories:** write posts (Markdown), publish/unpublish, drafts.
- **Links & contact:** update socials, WhatsApp, Fiverr/Upwork, emails.
- **Testimonials:** add client quotes.
- **Site settings:** hero copy, availability status, domain, feature flags.
- **Analytics:** see visitors, page views, referrers, and **bot/crawler hits** (great for the LLM/SEO goal).

---

## Recommended stack (fits what we already have)
- **Database + Auth + Storage:** **Supabase** (Postgres). Free tier is plenty; you already use it.
  - Auth: email-magic-link or email+password. **Just you** (single admin) — allowlist your email.
- **Data access:** Next.js **Server Actions** + Supabase server client (no separate API needed).
- **Admin UI:** reuse our design system; add **shadcn/ui** (Table, Dialog, Form, Tabs) + react-hook-form + zod.
- **Image uploads:** Supabase Storage; serve via `next/image` remote loader.
- **Analytics (two options, can do both):**
  - **Vercel Analytics** / **Vercel Web Analytics** (privacy-friendly, zero-config) for visitors.
  - A tiny **custom hit-logger** (a Postgres table + a middleware) to record path, referrer,
    user-agent, and whether it's a known bot (Googlebot, GPTBot, ClaudeBot, PerplexityBot…). This
    is what lets you literally see LLM crawlers indexing you.

---

## Phases (each is a reviewable slice)

**A0 — Foundation (0.5 day)**
- Create Supabase project; add env vars (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`).
- Define schema (tables below) + Row Level Security (only your user can write).
- Seed the DB from the current `content/*.ts` files (one-time migration script) so nothing is lost.

**A1 — Auth + shell (0.5 day)**
- `/admin/login` (magic link) → protected `/admin` layout (middleware guards it; your email allowlisted).
- Empty dashboard shell with nav (Projects, Experience, Media, Blog, Links, Analytics, Settings).

**A2 — Projects CRUD (1 day)**
- List + create + edit + delete + drag-reorder + feature toggle.
- The public site reads projects from the DB instead of the typed file (with a safe fallback).

**A3 — Media library (0.5 day)**
- Upload to Supabase Storage; pick images for projects/photo; delete unused.

**A4 — Experience / Skills / Links / Testimonials CRUD (1 day)**

**A5 — Blog / War-stories (1 day)**
- Markdown editor, draft/publish, slugs → renders at `/blog/[slug]` with SEO + JSON-LD Article.

**A6 — Analytics (0.5–1 day)**
- Enable Vercel Analytics + build the bot/visitor hit-logger + a dashboard chart (path, referrer, bots).

**A7 — Polish + security review (0.5 day)**
- Rate-limit admin, audit RLS, confirm no secrets leak to the client, backups.

> Rough total: ~5–6 focused days, shippable slice by slice.

---

## Draft schema (Postgres)
```
profiles        (id, name, headline, bio, availability, email, whatsapp, cv_url, ...)   -- single row
projects        (id, slug, title, tagline, type, featured, year, role, summary,
                 problem, approach, architecture, results[], hard_problems[], stack[],
                 links jsonb, accent, cover_url, gallery[], sort_order, published)
experience      (id, company, role, start, end, location, summary, impact[], stack[], sort_order)
skills          (id, name, category, level, brand_color, sort_order)
services        (id, title, outcome, description, icon, accent, deliverables[], sort_order)
testimonials    (id, quote, author, title, company, avatar_url, sort_order)
socials         (id, label, href, icon, scope, sort_order)
posts           (id, slug, title, excerpt, body_md, cover_url, tags[], published, published_at)
media           (id, path, alt, width, height, created_at)
page_views      (id, path, referrer, user_agent, is_bot, bot_name, country, created_at)  -- analytics
settings        (key, value jsonb)
```

---

## How the public site switches to the DB (no rewrite)
Each `content/*.ts` export becomes an async `getX()` that reads Supabase, with the current
typed data kept as a **fallback/seed**. Components already read from these accessors, so the
switch is mostly in the data layer — the UI barely changes.

---

## Decisions to make when we start this phase
1. **Auth method:** magic-link (no password) vs email+password. (I lean magic-link — simplest & safe.)
2. **Analytics depth:** Vercel-only, or Vercel + custom bot-logger (recommended for the LLM-visibility goal).
3. **Blog now or later:** we can defer A5 if you want the site live sooner.
4. **Access:** admin only on the deployed site, or also expose locally? (Both is fine; it's the same auth.)

> This file is the source of truth for the admin build. When we start it, we work phase by phase
> with a checkpoint before each — same as the public site.
