import type { IconType } from "react-icons";
import {
  SiDocker,
  SiNginx,
  SiKubernetes,
  SiGithubactions,
  SiLinux,
  SiVercel,
  SiRailway,
  SiNetlify,
} from "react-icons/si";

/** Platforms Abdul deploys & operates on. Icons render in brand color. */
export type Platform = {
  name: string;
  icon?: IconType;
  lucide?: string; // fallback lucide icon name when no brand icon
  color: string;
  note: string;
};

export const platforms: Platform[] = [
  { name: "Linux VPS", icon: SiLinux, color: "#FCC624", note: "Ubuntu servers, provisioned & hardened" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", note: "Multi-stage builds, compose" },
  { name: "Nginx", icon: SiNginx, color: "#009639", note: "Reverse proxy, SSL/TLS" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF", note: "CI/CD pipelines" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", note: "Container orchestration" },
  { name: "AWS", lucide: "Cloud", color: "#FF9900", note: "Cloud infrastructure" },
  { name: "Hostinger", lucide: "Server", color: "#673DE6", note: "Managed hosting / VPS" },
  { name: "Vercel", icon: SiVercel, color: "#000000", note: "Edge deployments" },
  { name: "Railway", icon: SiRailway, color: "#8b5cf6", note: "Backend hosting" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7", note: "Static + serverless" },
];

/** The deploy pipeline stages shown as an animated flow. */
export const pipeline = [
  { step: "Commit", desc: "Push to main", icon: "GitCommit", accent: "accent-2" },
  { step: "Build", desc: "Docker image", icon: "Package", accent: "accent" },
  { step: "Test", desc: "Automated checks", icon: "FlaskConical", accent: "accent-3" },
  { step: "Deploy", desc: "Zero-downtime", icon: "Rocket", accent: "accent-4" },
  { step: "Operate", desc: "Monitor & heal", icon: "Activity", accent: "accent-5" },
];

export const devopsHighlights = [
  "Provision & harden Linux (Ubuntu) VPS from scratch",
  "Dockerize apps with multi-stage builds",
  "Nginx reverse proxy + Let's Encrypt SSL/TLS",
  "GitHub Actions CI/CD with automated deploys",
  "Zero-downtime releases with PM2 / health checks",
  "DNS, domains, and environment management",
];
