export type ProjectLink = {
  live?: string;
  repo?: string;
  repoBackend?: string; // for split frontend/backend repos
  caseStudy?: string;
  linkedin?: string; // a LinkedIn post about the project
  video?: string; // demo video
};

export type Project = {
  slug: string;
  title: string;
  tagline: string; // one-line outcome
  type: "SaaS" | "Web App" | "Tool" | "OSS" | "Client";
  featured: boolean;
  year: string;
  role: string;
  summary: string; // card / intro
  problem: string;
  approach: string;
  architecture: string;
  results: string[];
  hardProblems: string[];
  stack: string[]; // names must match content/tech.ts for real icons
  links: ProjectLink;
  images: { cover: string; gallery?: string[]; diagram?: string };
  accent?: string; // per-project accent (--accent-* token)
};

export const projects: Project[] = [
  // ---- Wequity (client — AI ESG/compliance platform) ----
  {
    slug: "wequity",
    title: "Wequity",
    tagline: "AI compliance platform — I built the calendar & CRM/AI modules.",
    type: "SaaS",
    featured: true,
    year: "2025",
    role: "Full-stack engineer (contract)",
    summary:
      "Wequity automates complex ESG & compliance disclosures with AI. I built a deep calendar module with Apple / Google / Webex integrations, plus CRM and AI-assisted modules.",
    problem:
      "Teams drown in ESG/compliance questionnaires and scattered scheduling across providers. Wequity needed a unified calendar and CRM layer that plugs into the AI disclosure engine.",
    approach:
      "Designed and built a full calendar module (events, availability, invites) with two-way sync to Apple, Google, and Webex, and CRM modules that feed the AI system — all typed and production-grade.",
    architecture:
      "Calendar module with multi-provider sync (Apple / Google / Webex) · CRM data models · AI-assisted modules integrated with the disclosure engine. // TODO(abdul): confirm stack (Next/Nest? DB?) + which parts you can name publicly.",
    results: [
      "Shipped a production calendar module with Apple/Google/Webex two-way sync.",
      "Built CRM + AI modules feeding the compliance engine.",
      "// TODO(abdul): metrics/impact you can share",
    ],
    hardProblems: [
      "Two-way calendar sync across Apple, Google, and Webex (tokens, recurrence, timezones)",
      "CRM + AI module integration with an existing AI disclosure engine",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "GraphQL"],
    links: {
      live: "https://www.wequity.app/",
      // TODO(abdul): is a public case study / LinkedIn post OK? your role attribution?
    },
    images: { cover: "/images/projects/wequity-cover.webp" },
    accent: "accent-violet",
  },

  // ---- OCR financial data extraction ----
  {
    slug: "ocr-finance",
    title: "OCR Financial Extraction",
    tagline: "Extracts & manages financial data from documents via OCR.",
    type: "Web App",
    featured: true,
    year: "2024",
    role: "Full-stack",
    summary:
      "An application that extracts financial data from images/documents with OCR and manages it for companies, stores, and individuals.",
    problem:
      "Financial records arrive as scans and photos. Manually keying them is slow and error-prone; this app extracts and structures the data automatically.",
    approach:
      "OCR pipeline to read documents, structured storage of the extracted financials, and dashboards to manage records per company / store / person.",
    architecture:
      "OCR extraction pipeline · structured financial data store · role-scoped management UI. // TODO(abdul): confirm OCR engine + stack + DB.",
    results: ["// TODO(abdul): accuracy, volume, live link, screenshots"],
    hardProblems: [
      "Reliable OCR extraction from varied document layouts",
      "Structuring messy financial data for multiple entity types",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    links: {},
    images: { cover: "/images/projects/ocr-cover.webp" },
    accent: "accent-5",
  },

  // ---- Flagship SaaS (private; confirm what's public) ----
  {
    slug: "veylohr",
    title: "Veylohr",
    tagline: "Multi-tenant HR SaaS serving Italian clients in production.",
    type: "SaaS",
    featured: true,
    year: "2024",
    role: "Solo full-stack + DevOps",
    summary:
      "A multi-tenant HR platform with deep ATS / Indeed integration, HMAC-verified webhooks, GDPR compliance, and role-based access across tenants.",
    problem:
      "HR teams needed to publish jobs to external boards (Indeed), receive applications reliably, and manage candidates across multiple companies — without leaking data between tenants or breaking GDPR.",
    approach:
      "A single multi-tenant NestJS API with tenant derived from the verified token (never trusted from the client), a Next.js SSR frontend so job pages are bot-readable, and a hardened integration layer for the Indeed feed and disposition sync.",
    architecture:
      "NestJS API with a TenantInterceptor deriving company from the JWT · PostgreSQL + Prisma with row-level tenant scoping · Next.js SSR for public job pages · Indeed XML feed generation + HMAC-SHA1 webhook verification · GraphQL disposition sync with exponential backoff · audit logging + 120-day dedupe. Deployed on a Linux VPS behind Nginx with GitHub Actions CI/CD.",
    results: [
      "Live, multi-tenant, serving Italian clients in production.",
      "ATS/Indeed pipeline with verified webhooks and dedupe.",
      "GDPR legal pages + Italian province mapping.",
      "// TODO(abdul): honest metrics (tenants, jobs, uptime)",
    ],
    hardProblems: [
      "Multi-tenant RBAC with tenant derived from token, not client input",
      "Indeed ATS integration: XML feed, HMAC-SHA1 webhook verification, GraphQL disposition sync, exponential backoff, 120-day dedupe, audit logging",
      "SSR bot-readable job pages for indexing",
      "GDPR compliance + Italian province mapping",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Docker", "Nginx", "GitHub Actions"],
    links: {
      caseStudy: "/work/veylohr",
      // TODO(abdul): live URL? which parts are public? add LinkedIn post if any.
    },
    images: {
      cover: "/images/projects/veylohr-cover.webp", // TODO(abdul): real screenshot
      diagram: "/images/projects/veylohr-architecture.svg",
    },
    accent: "accent",
  },
  {
    slug: "curantis",
    title: "Curantis",
    tagline: "Hospital management SaaS — 32 modules across a Turborepo.",
    type: "SaaS",
    featured: true,
    year: "2024",
    role: "Full-stack",
    summary:
      "A hospital management system built as a Turborepo monorepo — Next.js frontends, Prisma data layer, Supabase, spanning 32 functional modules.",
    problem:
      "Hospitals juggle dozens of workflows — patients, staff, scheduling, records — usually across disconnected tools. Curantis unifies them into one coherent, modular system.",
    approach:
      "A Turborepo monorepo to share types and UI across apps, a Prisma/Supabase data layer, and a modular architecture so each of the 32 domains can evolve independently.",
    architecture:
      "Turborepo (shared packages) · Next.js apps · Prisma ORM · Supabase (Postgres + auth) · modular domain boundaries.",
    results: [
      "32 modules across a shared monorepo.",
      "// TODO(abdul): status, live URL, screenshots",
    ],
    hardProblems: [
      "Structuring 32 modules in a shared Turborepo without coupling",
      "Consistent data + auth model across many domains",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    links: { caseStudy: "/work/curantis" },
    images: { cover: "/images/projects/curantis-cover.webp" },
    accent: "accent-3",
  },

  // ---- Real public repos (github.com/Dev-Logic-max) ----
  {
    slug: "collab-editor",
    title: "Notion-style Collaborative Editor",
    tagline: "Real-time rich-text editor with Tiptap + Hocuspocus (CRDT).",
    type: "Web App",
    featured: true,
    year: "2025",
    role: "Full-stack",
    summary:
      "A Notion-like real-time document editor: multiple users editing the same doc live, with presence and conflict-free sync using Tiptap, Hocuspocus (Yjs CRDT), and Liveblocks.",
    problem:
      "Real-time collaborative editing is hard: concurrent edits must merge without conflicts, cursors and presence must feel instant, and it all has to stay in sync across clients.",
    approach:
      "Tiptap for the rich-text editing surface, Hocuspocus + Yjs for CRDT-based real-time sync, and Liveblocks for presence — Next.js frontend and a NestJS backend, typed end to end.",
    architecture:
      "Tiptap editor (ProseMirror) · Hocuspocus server + Yjs CRDT for conflict-free real-time sync · Liveblocks presence/awareness · Next.js frontend · NestJS backend.",
    results: ["// TODO(abdul): live demo link, features list, screenshots"],
    hardProblems: [
      "Conflict-free real-time editing with Yjs CRDT + Hocuspocus",
      "Live presence & cursors with Liveblocks",
      "Rich-text schema with Tiptap / ProseMirror",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "Node.js"],
    links: {
      repo: "https://github.com/Dev-Logic-max/Editor-Frontend-Next",
      repoBackend: "https://github.com/Dev-Logic-max/Editor-Backend-Nest",
      // TODO(abdul): live URL + LinkedIn post if you have one
    },
    images: { cover: "/images/projects/editor-cover.webp" },
    accent: "accent-4",
  },
  {
    slug: "real-estate",
    title: "Real Estate Platform",
    tagline: "Property marketplace with a typed full-stack architecture.",
    type: "Web App",
    featured: false,
    year: "2024",
    role: "Full-stack",
    summary:
      "A property marketplace — browse, list, and manage real-estate listings — with separate typed frontend and backend.",
    problem:
      "A full marketplace CRUD product with search, listings, and management, cleanly split front/back.",
    approach: "TypeScript across a dedicated frontend and backend repo.",
    architecture:
      "Frontend + backend TypeScript repos. // TODO(abdul): stack details, DB, auth",
    results: ["// TODO(abdul): live link, features, screenshots"],
    hardProblems: ["Search + listing management", "Typed full-stack CRUD"],
    stack: ["React", "TypeScript", "Node.js"],
    links: {
      repo: "https://github.com/Dev-Logic-max/Real-Estate-Frontend",
      repoBackend: "https://github.com/Dev-Logic-max/Real-Estate-Backend",
    },
    images: { cover: "/images/projects/real-estate-cover.webp" },
    accent: "accent-5",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    tagline: "Full e-commerce app — storefront + server, in TypeScript.",
    type: "Web App",
    featured: false,
    year: "2024",
    role: "Full-stack",
    summary:
      "An e-commerce platform with a TypeScript storefront and a TypeScript backend server.",
    problem: "A complete commerce flow: catalog, cart, and server-side logic.",
    approach: "Typed frontend + backend split into dedicated repos.",
    architecture:
      "Frontend + backend TypeScript repos. // TODO(abdul): payments, DB, auth details",
    results: ["// TODO(abdul): live link, features, screenshots"],
    hardProblems: ["Catalog + cart flow", "Typed full-stack commerce"],
    stack: ["React", "TypeScript", "Node.js"],
    links: {
      repo: "https://github.com/Dev-Logic-max/ecommerce-frontend",
      repoBackend: "https://github.com/Dev-Logic-max/ecommerce-backend",
    },
    images: { cover: "/images/projects/ecommerce-cover.webp" },
    accent: "accent-6",
  },

  // ---- Vellora mobile (React Native) ----
  {
    slug: "vellora-mobile",
    title: "Vellora Mobile",
    tagline: "React Native mobile app for the Vellora platform.",
    type: "Web App",
    featured: false,
    year: "2025",
    role: "Mobile developer",
    summary:
      "A cross-platform mobile app (React Native) for Vellora — bringing the platform's workflows to iOS and Android.",
    problem:
      "The platform needed a native mobile experience, not just a responsive web view — real navigation, native performance, and offline-friendly UX.",
    approach:
      "React Native app talking to the existing backend API, with native navigation and a shared design language with the web product.",
    architecture:
      "React Native (Expo) · typed API client to the platform backend · native navigation. // TODO(abdul): confirm Expo vs bare, state lib, key features.",
    results: ["// TODO(abdul): stores/TestFlight link, features, screenshots"],
    hardProblems: [
      "Cross-platform native UX from one codebase",
      "Sharing the API contract with the web product",
    ],
    stack: ["React", "TypeScript", "Node.js"],
    links: {},
    images: { cover: "/images/projects/vellora-mobile-cover.webp" },
    accent: "accent-3",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
