export type SkillLevel = "core" | "strong" | "working";

export type SkillGroup = {
  category: "Frontend" | "Backend" | "DevOps & Infra" | "Data" | "Practices";
  accent: string; // maps to an --accent-* token for section color variety
  items: { name: string; level?: SkillLevel }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    accent: "accent-2",
    items: [
      { name: "Next.js", level: "core" },
      { name: "React", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "Motion / Framer", level: "strong" },
    ],
  },
  {
    category: "Backend",
    accent: "accent",
    items: [
      { name: "NestJS", level: "core" },
      { name: "Node.js", level: "core" },
      { name: "REST APIs", level: "core" },
      { name: "GraphQL", level: "strong" },
      { name: "Auth / JWT / RBAC", level: "core" },
    ],
  },
  {
    category: "DevOps & Infra",
    accent: "accent-4",
    items: [
      { name: "Linux VPS", level: "core" },
      { name: "Docker", level: "core" },
      { name: "Nginx", level: "core" },
      { name: "GitHub Actions CI/CD", level: "core" },
      { name: "Multi-tenant architecture", level: "core" },
    ],
  },
  {
    category: "Data",
    accent: "accent-3",
    items: [
      { name: "PostgreSQL", level: "core" },
      { name: "Prisma", level: "core" },
      { name: "Supabase", level: "strong" },
    ],
  },
  {
    category: "Practices",
    accent: "accent-5",
    items: [
      { name: "System design", level: "strong" },
      { name: "Integrations (ATS, webhooks)", level: "strong" },
      { name: "GDPR-aware compliance", level: "working" },
      { name: "Audit logging", level: "strong" },
    ],
  },
];

/** The moving band under the hero. */
export const techMarquee = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Docker",
  "Nginx",
  "GitHub Actions",
  "Linux VPS",
  "GraphQL",
  "Tailwind",
];
