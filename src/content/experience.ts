export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string | "Present";
  location?: string;
  summary: string;
  impact: string[];
  stack?: string[];
  kind?: "work" | "education" | "studio";
};

export const experience: Experience[] = [
  {
    company: "Cure Logics",
    role: "Full-Stack Engineer",
    start: "Oct 2024",
    end: "Present",
    location: "Rahim Yar Khan, PK",
    kind: "work",
    summary:
      "Building and operating Veylohr, a multi-tenant HR SaaS used by companies in Italy — end to end, from schema to CI/CD.",
    impact: [
      "Build & maintain Veylohr (employee management, attendance, role-based workflows) on Next.js + NestJS + PostgreSQL.",
      "Designed tenant isolation and RBAC keeping each company's data segregated in a shared database.",
      "Delivered a full Indeed ATS integration: job publishing, GraphQL disposition sync, exponential-backoff retries, duplicate-detection windows, and audit logging — resolving crawler / SSR / SEO blockers that had failed partner review.",
      "Own deployment to a Linux VPS behind Nginx with SSL, environment management, and automated CI/CD via GitHub Actions.",
      "Built a 107-item Italian province-code mapping utility to correct faulty third-party geo data.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "Nginx", "GitHub Actions"],
  },
  {
    company: "Dev Logic Max",
    role: "Founder · Software Studio",
    start: "2024",
    end: "Present",
    location: "Remote",
    kind: "studio",
    summary:
      "My software studio — building and operating production SaaS for clients, senior-led.",
    impact: [
      "Positioning Dev Logic Max as a studio that ships and operates production SaaS, not prototypes.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    company: "Upwork & Fiverr",
    role: "Full-Stack / Freelance Developer",
    start: "2023",
    end: "2024",
    location: "Remote",
    kind: "work",
    summary:
      "30+ client projects across e-commerce, real estate, and real-time collaborative editing.",
    impact: [
      "Delivered 30+ client projects (Next.js, NestJS, Supabase, Tiptap / Hocuspocus), deployed on Vercel, Railway, and Netlify.",
      "Grew repeat clients through on-time delivery and clear communication in English.",
    ],
    stack: ["Next.js", "NestJS", "Supabase", "React"],
  },
  {
    company: "NCBA&E",
    role: "B.Sc. Computer Science",
    start: "2022",
    end: "2026",
    location: "National College of Business Administration & Economics",
    kind: "education",
    summary: "Bachelor of Science in Computer Science.",
    impact: [],
  },
];
