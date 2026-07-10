export type Availability = "open" | "selective" | "unavailable";

export type Profile = {
  name: string;
  brand: string;
  headline: string; // hero H1
  roleLine: string; // hero sub / title
  location: string;
  availability: Availability;
  availabilityLabel: string;
  shortBio: string;
  longBio: string;
  email: string;
  emailAlt?: string;
  whatsapp: string; // E.164 digits only, e.g. 923350805204
  whatsappDisplay: string; // human formatted
  cvUrl: string;
  stats: { label: string; value: string; icon: string; note?: string }[]; // icon = lucide name
  portrait: string; // square-ish clean portrait
  portraitOffice: string; // environmental / office shot
  avatar: string; // small circular avatar
};

export const profile: Profile = {
  name: "Abdul Rehman",
  brand: "Dev Logic Max",
  headline: "I build SaaS that companies run in production.",
  roleLine:
    "Full-stack engineer — multi-tenant SaaS, Next.js/NestJS, and the DevOps to ship it. Founder of Dev Logic Max.",
  location: "Rahim Yar Khan, Pakistan",
  availability: "open",
  availabilityLabel: "Open to relocate · Lahore / Islamabad · remote",
  shortBio:
    "Multi-tenant SaaS, integration-heavy, self-hosted. I own the whole lifecycle — schema and RBAC to Linux VPS, CI/CD, and keeping it alive.",
  longBio:
    "I'm a full-stack engineer who builds and operates production multi-tenant SaaS end to end — from database schema and role-based access control to Linux VPS deployment and CI/CD. At Cure Logics I build Veylohr, an HR platform used by companies in Italy, where I designed tenant isolation and RBAC and delivered a full Indeed ATS integration (GraphQL disposition sync, exponential-backoff retries, duplicate-detection and audit logging) that cleared partner review. I own the release pipeline too — Linux, Nginx, GitHub Actions, SSL/DNS. Before that I delivered 30+ freelance projects on Upwork and Fiverr across e-commerce, real estate, and real-time collaborative editing. On the side I run Dev Logic Max, my software studio. I care about the boring parts that make software trustworthy: tenant isolation, audit logs, observable, reliable deployments.",
  email: "ar3991492@gmail.com",
  emailAlt: "devlogicmax@gmail.com",
  whatsapp: "923350805204",
  whatsappDisplay: "+92 335 0805204",
  cvUrl: "/cv.pdf", // drop your real CV at web/public/cv.pdf — TODO(abdul)
  stats: [
    { label: "Client projects delivered", value: "30+", icon: "Rocket" },
    { label: "Years shipping software", value: "2+", icon: "CalendarClock" },
    { label: "Multi-tenant SaaS in production", value: "2", icon: "Network", note: "Veylohr + Curantis" },
    { label: "Modules in Curantis", value: "32", icon: "Boxes" },
  ],
  portrait: "/images/portrait.webp",
  portraitOffice: "/images/portrait-office.webp",
  avatar: "/images/avatar.webp",
};
