export type Service = {
  title: string;
  outcome: string; // what the client gets
  description: string;
  icon: string; // lucide-react icon name
  accent: string; // --accent-* token
  deliverables?: string[];
};

// TODO(abdul): confirm exact services + any engagement/pricing model to hint at.
export const services: Service[] = [
  {
    title: "Full product builds",
    outcome: "A production SaaS, shipped and running — not a prototype.",
    description:
      "End-to-end product delivery: architecture, frontend, backend, and the infrastructure to keep it alive.",
    icon: "Boxes",
    accent: "accent",
    deliverables: ["Architecture", "Next.js + NestJS build", "Deploy + handover"],
  },
  {
    title: "SaaS architecture & multi-tenancy",
    outcome: "A codebase that scales to many tenants without leaking data.",
    description:
      "Multi-tenant data modeling, RBAC, audit logging, and the patterns that keep a SaaS trustworthy as it grows.",
    icon: "Network",
    accent: "accent-3",
    deliverables: ["Tenant model", "RBAC", "Audit + compliance review"],
  },
  {
    title: "DevOps & deployment",
    outcome: "Zero-downtime deploys on infrastructure you own.",
    description:
      "Dockerized apps, Nginx reverse proxy, TLS, and GitHub Actions CI/CD to a Linux VPS — the whole pipeline.",
    icon: "ServerCog",
    accent: "accent-4",
    deliverables: ["Docker + Nginx", "CI/CD pipeline", "Monitoring + TLS"],
  },
  {
    title: "Integrations & compliance",
    outcome: "Reliable third-party integrations that don't break in production.",
    description:
      "ATS/webhook integrations with signature verification, retries, dedupe, and GDPR-aware data handling.",
    icon: "Webhook",
    accent: "accent-5",
    deliverables: ["Integration layer", "Webhook verification", "GDPR pages"],
  },
];
