import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiLinux,
  SiGit,
  SiJsonwebtokens,
  SiVercel,
  SiHtml5,
  SiCss,
  SiFramer,
  SiDrizzle,
  SiRailway,
  SiNetlify,
  SiCloudinary,
  SiGitlab,
  SiPostman,
  SiTurborepo,
  SiKubernetes,
  SiPm2,
} from "react-icons/si";

export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps & Infra"
  | "Tools";

export type Tech = {
  name: string;
  icon: IconType;
  color: string; // official brand color (used in light; dark auto-brightens)
  category: TechCategory;
  /** core = mastered, strong = confident, working = familiar */
  level: "core" | "strong" | "working";
};

/**
 * Single source of truth for the stack. Real, current, and honest.
 * Edit levels/entries as your skills evolve. Icons are real brand logos.
 */
export const tech: Tech[] = [
  // Frontend
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend", level: "core" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend", level: "core" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend", level: "core" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend", level: "core" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend", level: "core" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC", category: "Frontend", level: "strong" },
  { name: "Zustand", icon: SiReact, color: "#8B5CF6", category: "Frontend", level: "strong" },
  { name: "Material UI", icon: SiMui, color: "#007FFF", category: "Frontend", level: "strong" },
  { name: "Framer / Motion", icon: SiFramer, color: "#0055FF", category: "Frontend", level: "strong" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend", level: "core" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", category: "Frontend", level: "core" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", category: "Backend", level: "core" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", category: "Backend", level: "core" },
  { name: "Express", icon: SiExpress, color: "#000000", category: "Backend", level: "strong" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098", category: "Backend", level: "strong" },
  { name: "JWT / Auth", icon: SiJsonwebtokens, color: "#000000", category: "Backend", level: "core" },

  // Database
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database", level: "core" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Database", level: "core" },
  { name: "Drizzle", icon: SiDrizzle, color: "#C5F74F", category: "Database", level: "strong" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E", category: "Database", level: "strong" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database", level: "strong" },
  { name: "Firebase", icon: SiFirebase, color: "#DD2C00", category: "Database", level: "working" },

  // DevOps & Infra
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "DevOps & Infra", level: "core" },
  { name: "Nginx", icon: SiNginx, color: "#009639", category: "DevOps & Infra", level: "core" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF", category: "DevOps & Infra", level: "core" },
  { name: "Linux (Ubuntu)", icon: SiLinux, color: "#FCC624", category: "DevOps & Infra", level: "core" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", category: "DevOps & Infra", level: "working" },
  { name: "Vercel", icon: SiVercel, color: "#000000", category: "DevOps & Infra", level: "strong" },
  { name: "Railway", icon: SiRailway, color: "#0B0D0E", category: "DevOps & Infra", level: "strong" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7", category: "DevOps & Infra", level: "strong" },
  { name: "PM2", icon: SiPm2, color: "#2B037A", category: "DevOps & Infra", level: "strong" },

  // Tools
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools", level: "core" },
  { name: "GitLab", icon: SiGitlab, color: "#FC6D26", category: "Tools", level: "strong" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools", level: "core" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5", category: "Tools", level: "strong" },
  { name: "Turborepo", icon: SiTurborepo, color: "#EF4444", category: "Tools", level: "strong" },
];

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Infra",
  "Tools",
];

export const techByCategory = (c: TechCategory) =>
  tech.filter((t) => t.category === c);

/** Ordered list for the hero marquee. */
export const marqueeTech = tech.filter((t) =>
  [
    "Next.js",
    "NestJS",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Prisma",
    "Node.js",
    "Docker",
    "Nginx",
    "GitHub Actions",
    "Tailwind CSS",
    "Supabase",
  ].includes(t.name)
);
