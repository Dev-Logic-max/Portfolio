import { profile } from "./profile";

export type SocialLink = {
  label: string;
  href: string;
  icon: string; // key into brandIcons (Github, Linkedin, X, WhatsApp, ...) or lucide
  scope?: "personal" | "studio" | "both"; // where to show it
};

/**
 * All the ways to reach Abdul / Dev Logic Max. `scope` controls where each
 * appears (personal portfolio vs studio agency page vs both).
 * TODO(abdul): fill the hrefs marked below and I'll light them up.
 */
export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Dev-Logic-max", icon: "Github", scope: "both" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdul-dev-logic-max",
    icon: "Linkedin",
    scope: "both",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
      "Hi Abdul — I found your portfolio."
    )}`,
    icon: "WhatsApp",
    scope: "both",
  },
  { label: "Email", href: `mailto:${profile.email}`, icon: "Mail", scope: "both" },

  // Studio / freelance marketplaces (client-facing) — TODO(abdul): add URLs
  { label: "Fiverr", href: "#", icon: "Fiverr", scope: "studio" }, // TODO(abdul): Fiverr profile URL
  { label: "Upwork", href: "#", icon: "Upwork", scope: "studio" }, // TODO(abdul): Upwork profile URL

  // Optional extras — TODO(abdul): add if you want them shown
  // { label: "Indeed", href: "#", icon: "Link", scope: "personal" },
  // { label: "Facebook", href: "#", icon: "Facebook", scope: "studio" },
  // { label: "X", href: "#", icon: "X", scope: "both" },
];

export const personalSocials = socials.filter(
  (s) => s.scope === "personal" || s.scope === "both"
);
export const studioSocials = socials.filter(
  (s) => s.scope === "studio" || s.scope === "both"
);

/** Primary nav for the portfolio view. */
export const nav = [
  { label: "Work", href: "/work" },
  { label: "Stack", href: "/stack" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/#contact" },
];

/** Nav for the studio (agency) view. */
export const studioNav = [
  { label: "Services", href: "/studio#services" },
  { label: "Process", href: "/studio#process" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/studio#contact" },
];
