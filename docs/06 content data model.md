# 06 — Content Data Model (Content-as-Code)

> All content lives in typed data files in `/content`. Components read from these. Abdul
> edits his life here in one place. Define the TS types, ship sample/placeholder data so the
> site always renders, and mark gaps with `// TODO(abdul):`. If new info doesn't fit a type,
> propose the schema change first (CLAUDE.md rule #1).

Suggested files: `/content/profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`,
`services.ts`, `testimonials.ts`, `social.ts`, `uses.ts`, `seo.ts`.

## Types (adapt as needed)

```ts
// profile.ts
export type Profile = {
  name: string;                 // "Abdul Rehman"
  brand: string;                // "Dev Logic Max"
  roleLine: string;             // hero sub-headline / title
  headline: string;             // hero H1
  location: string;             // "Rahim Yar Khan, Pakistan"
  availability: "open" | "selective" | "unavailable";
  shortBio: string;             // 1–2 sentences
  longBio: string;              // About page
  email: string;
  cvUrl: string;                // /cv.pdf (or generated)
  stats: { label: string; value: string }[];   // honest numbers
  portrait: string;             // /images/portrait.webp
};

// projects.ts
export type Project = {
  slug: string;
  title: string;
  tagline: string;              // one-line outcome
  type: "SaaS" | "Web App" | "Tool" | "OSS" | "Client";
  featured: boolean;
  year: string;
  role: string;                 // "Solo full-stack + DevOps"
  summary: string;              // card/intro
  problem: string;              // case study
  approach: string;
  architecture: string;         // + link to diagram image
  results: string[];            // bullet outcomes (honest)
  hardProblems: string[];       // depth signals (multi-tenant, ATS, GDPR...)
  stack: string[];              // ["Next.js","NestJS","PostgreSQL",...]
  links: { live?: string; repo?: string; caseStudy?: string };
  images: { cover: string; gallery?: string[]; diagram?: string };
  accent?: string;              // optional per-project accent
};

// experience.ts
export type Experience = {
  company: string;
  role: string;
  start: string; end: string | "Present";
  location?: string;
  summary: string;
  impact: string[];             // 1–3 quantified bullets
  stack?: string[];
};

// skills.ts
export type SkillGroup = {
  category: "Frontend" | "Backend" | "DevOps & Infra" | "Data" | "Practices" | "Tools";
  items: { name: string; level?: "core" | "strong" | "working" }[];
};

// services.ts (Dev Logic Max)
export type Service = {
  title: string;                // "Full product builds"
  outcome: string;              // what the client gets
  description: string;
  icon: string;                 // lucide name
  deliverables?: string[];
};

// testimonials.ts
export type Testimonial = {
  quote: string; author: string; title?: string; company?: string; avatar?: string;
};

// social.ts
export type SocialLink = { label: string; href: string; icon: string };
```

## Placeholder data to seed (Claude Code: prefill, Abdul edits)

**Profile** — name/brand/location known; write draft headline + bios from `01`; stats as
`// TODO`.

**Projects (seed with):**
- **Veylohr** — multi-tenant HR SaaS, Italian clients. hardProblems: multi-tenant RBAC,
  Indeed/ATS integration (XML feed, HMAC-SHA1 webhook verification, Disposition Sync/GraphQL,
  exponential backoff, audit logging, 120-day dedupe, SSR bot-readable pages), GDPR legal
  pages, Italian province mapping. stack: Next.js, NestJS, TypeScript, PostgreSQL, Prisma,
  Supabase, Docker, Nginx, GitHub Actions. `// TODO(abdul): live/repo/screenshots + honest metrics`
- **Curantis** — hospital management SaaS. Turborepo, Next.js, Prisma, Supabase, 32 modules.
  `// TODO(abdul): status, live, screenshots`
- **+1 public repo/project** — `// TODO(abdul): pick a strong public one from github.com/Dev-Logic-max`

**Experience** — Cure Logics (contractor, senior full-stack + DevOps). `// TODO(abdul):
dates, other roles, education (B.Sc. Computer Science).`

**Skills** — Frontend: Next.js, React, TypeScript, Tailwind. Backend: NestJS, Node,
PostgreSQL, Prisma, REST/GraphQL. DevOps & Infra: Linux VPS, Docker, Nginx, GitHub Actions
CI/CD, RBAC, multi-tenant. Data: PostgreSQL, Supabase, Prisma. Practices: system design,
auth/RBAC, integrations, GDPR-aware.

**Services (Dev Logic Max)** — Full product builds · SaaS architecture & multi-tenancy ·
DevOps & deployment (VPS/Docker/CI/CD) · Integrations & compliance. `// TODO(abdul): confirm.`

**Social** — GitHub `Dev-Logic-max`, LinkedIn `abdul-dev-logic-max`. `// TODO(abdul): X,
YouTube, email, domain.`

## Rules
- Keep content honest and specific — real systems, real numbers where possible.
- One source of truth: no duplicating content into JSX.
- Types are strict; every consumer imports the type.
- When Abdul pastes new info mid-session, slot it into the right file, keep types in sync,
  and confirm where it went.