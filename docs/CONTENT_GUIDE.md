# 📋 What I need from you — simple version

Read this top to bottom. Everything is split into **3 buckets**:

- 🟩 **PROVIDE** = give me the real thing (text or a file). Best if it's real.
- 🟦 **GENERATE** = make it with an AI image tool (Gemini / nano-banana). I give you the exact prompt.
- ⬜ **LATER** = fine to skip now; I put a placeholder, you swap it when ready.

The site works fully right now with placeholders. Nothing here blocks you.

---

## 🟩 BUCKET 1 — PROVIDE (real text — just paste it to me in chat)

You can literally paste answers in chat and I'll put them in the right place.

1. **Your CV / résumé (PDF)** → save the file as `web/public/cv.pdf`. Then a Download button + `/cv` page work. ✅ highest priority.
2. **Confirm your name** shown on the site: currently **Abdul Rehman Ahmad**. Keep or change?
3. **Your current job**: title + dates at **Cure Logics** (you said full-time on-site). 1–2 lines of what you do.
4. **For each real project** — paste this little block and I'll wire it:
   ```
   Project: <name>
   Live URL: <link or "not public">
   Repo: <github link or "private">
   LinkedIn post: <link or "none">
   Stack: <comma list>
   One line: <what it does + the impressive part>
   ```
   I already added: Wequity, OCR Finance, Notion-style editor, Real-Estate, E-commerce, Vellora Mobile, Veylohr, Curantis. Just send me the **real links + one-liners** to replace my `// TODO` guesses.
5. **Fiverr + Upwork** (to show on the Studio page) → just paste the two profile URLs.
6. **Anything you want me to know** — new skills, tools (Slack, Google Calendar, Webex, etc.), certifications.

## 🟩 BUCKET 1b — PROVIDE (real images — save file to the path, then tell me "done")

| What | Save it here | Notes |
|---|---|---|
| **Your photo** (headshot) | `web/public/images/portrait.webp` | A clean professional photo. Goes in a section right under the hero. Real photo = big trust boost. |
| **Project screenshots** | `web/public/images/projects/<slug>-cover.webp` | e.g. `wequity-cover.webp`, `ocr-cover.webp`. Just screenshot your live apps. I frame them nicely. |
| **Client / tool logos** (optional) | `web/public/images/logos/` | If you have client logos you're allowed to show. |

> Slugs to use for covers: `wequity, ocr-finance, veylohr, curantis, collab-editor, real-estate, ecommerce, vellora-mobile`.

---

## 🟦 BUCKET 2 — GENERATE with AI (Gemini / nano-banana) — I give you the prompt

Only generate these if you *want* extra visual polish. The site looks premium without them.
Generate the image, then save it to the path shown.

**① Hero background art (optional — we already have live 3D)** → `web/public/images/hero-bg.webp`
```
Abstract dark space background, deep navy (#070A14), a glowing aurora of violet (#7C5CFF),
electric blue (#3E9BFF) and cyan (#22D3EE), faint interconnected node network suggesting
distributed systems, soft depth of field, lots of negative space, premium tech aesthetic,
16:9, ultra high resolution, no text, no logos.
```

**② Your avatar (ONLY if you don't want a real photo yet)** → `web/public/images/portrait.webp`
```
Professional stylized portrait of a male software engineer, confident and approachable,
clean modern illustration, subtle navy/violet studio lighting, neutral background,
high quality, no text.
```
> ⚠️ A real photo is much better than AI for recruiters. Use AI only as a temporary stand-in.

**③ Project mockup base (if you want fancy device frames)** → per project
```
Clean minimal device mockup scene: a laptop and phone at a slight angle on a dark gradient
surface with soft shadows, navy + violet/cyan tones, lots of empty space, premium product
shot, screens left blank/dark for compositing, high resolution, no text.
```

**④ Grain texture (optional polish)** → `web/public/images/noise.png`
```
Fine subtle film grain noise texture, monochrome, seamless, very low contrast, for a 3%
opacity overlay, high resolution.
```

> Tip: keep every generated image in the **dark navy + violet/blue/cyan** palette so they match.

---

## ⬜ BUCKET 3 — LATER (skip now, I placeholder it)

- Custom domain name (for final SEO/deploy). I ask again before we deploy.
- Testimonials / client quotes (name + title + quote).
- Architecture diagrams for case studies — I'll draw these as clean SVG (don't AI-generate; they must be accurate).
- Blog posts / "war stories" (your challenges + how you solved them) — goes in `/blog` later.

---

## 🔁 How we do this fast (the loop)

I ask you for things **one bucket at a time, in the session**. You answer "here it is" or
"skip for now", and I move to the next. That way we fill everything without you doing homework
alone. **Right now, the most useful things you can paste me:**
1. Your **CV file** at `web/public/cv.pdf`
2. **Real links + one-liners** for your top 3–4 projects (block above)
3. Your **Cure Logics** role + dates
4. **Fiverr + Upwork** URLs

Everything else can wait. 👍
