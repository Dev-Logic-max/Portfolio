import { profile } from "@/content/profile";
import { socials } from "@/content/social";
import { projects } from "@/content/projects";
import { tech } from "@/content/tech";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://devlogicmax.com";

/**
 * JSON-LD structured data — the "source of truth" LLMs and search engines read
 * to verify who you are. Person + Organization + WebSite + a few CreativeWorks.
 * Rendered once in the root layout.
 */
export function StructuredData() {
  const sameAs = socials.map((s) => s.href);

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.name,
    jobTitle: "Senior Full-Stack & DevOps Engineer",
    description: profile.shortBio,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rahim Yar Khan",
      addressCountry: "PK",
    },
    sameAs,
    knowsAbout: tech.map((t) => t.name),
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: profile.brand,
    description:
      "Senior-led software studio building and operating production SaaS: multi-tenant architecture, integrations, and DevOps.",
    url: `${SITE_URL}/studio`,
    founder: { "@id": `${SITE_URL}/#person` },
    sameAs,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${profile.name} — Portfolio & ${profile.brand}`,
    description: profile.shortBio,
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };

  const works = projects.map((p) => ({
    "@type": "CreativeWork",
    name: p.title,
    description: p.tagline,
    about: p.stack,
    author: { "@id": `${SITE_URL}/#person` },
    ...(p.links.repo ? { codeRepository: p.links.repo } : {}),
    ...(p.links.live ? { url: p.links.live } : {}),
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, organization, website, ...works],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a raw string; content is fully controlled (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
