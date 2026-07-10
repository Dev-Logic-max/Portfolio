"use client";

import { motion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { personalSocials } from "@/content/social";
import { ButtonLink } from "@/components/ui/button";
import { brandIcons } from "@/components/ui/brand-icons";
import { TypingText } from "./typing-text";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADLINE_PHRASES = [
  "production SaaS.",
  "multi-tenant platforms.",
  "integrations that hold.",
  "and I keep it alive.",
];

/** The foreground copy for the "Me" hero. */
export function HeroContent() {
  return (
    <div className="relative z-10 mx-auto max-w-3xl text-center">
      {/* availability pill */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-fg-muted backdrop-blur"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-4 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-accent-4" />
        </span>
        {profile.availabilityLabel}
      </motion.div>

      {/* headline: static line + typing line */}
      <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl">
        <motion.span
          className="block"
          initial={{ opacity: 0, y: "40%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        >
          I build
        </motion.span>
        <motion.span
          className="mt-1 block min-h-[1.15em]"
          initial={{ opacity: 0, y: "40%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
        >
          <TypingText phrases={HEADLINE_PHRASES} />
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-fg-muted sm:text-lg"
      >
        {profile.roleLine}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.62 }}
        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <ButtonLink href="/work" size="lg" className="w-full sm:w-auto">
          View work
          <ArrowRight className="size-4" />
        </ButtonLink>
        <ButtonLink
          href={profile.cvUrl}
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto"
        >
          <Download className="size-4" />
          Download CV
        </ButtonLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4 text-fg-subtle sm:gap-5"
      >
        <span className="inline-flex items-center gap-1.5 text-sm">
          <MapPin className="size-4" />
          {profile.location}
        </span>
        <span className="hidden h-4 w-px bg-border-strong sm:block" aria-hidden />
        <div className="flex items-center gap-3">
          {personalSocials.map((s) => {
            const Icon = brandIcons[s.icon];
            if (!Icon) return null;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                aria-label={s.label}
                className="transition-colors hover:text-fg"
              >
                <Icon className="size-4.5" />
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
