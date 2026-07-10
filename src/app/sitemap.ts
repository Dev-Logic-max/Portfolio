import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://devlogicmax.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/studio"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const caseStudies = projects
    .filter((p) => p.links.caseStudy)
    .map((p) => ({
      url: `${SITE_URL}${p.links.caseStudy}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...routes, ...caseStudies];
}
