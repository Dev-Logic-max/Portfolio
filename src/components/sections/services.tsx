"use client";

import * as Icons from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ButtonLink } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { LucideIcon } from "lucide-react";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-border bg-surface-2/40 py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Dev Logic Max"
            title={<>The studio behind the <span className="text-aurora">work</span></>}
            lead="A senior-led studio, not an agency factory. You work with the person who architects and ships it."
            accent="accent-violet"
          />
          <ButtonLink href="/#contact" variant="secondary" size="md">
            Start a project
            <Icons.ArrowRight className="size-4" />
          </ButtonLink>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = (Icons[s.icon as keyof typeof Icons] ??
              Icons.Boxes) as LucideIcon;
            return (
              <RevealItem key={s.title}>
                <SpotlightCard accent={s.accent} className="h-full">
                  <div
                    className="mb-5 grid size-11 place-items-center rounded-xl"
                    style={{
                      background: `color-mix(in oklab, var(--${s.accent}) 15%, transparent)`,
                      color: `var(--${s.accent})`,
                    }}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {s.title}
                  </h3>
                  <p
                    className="mt-1.5 text-sm font-medium"
                    style={{ color: `var(--${s.accent})` }}
                  >
                    {s.outcome}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {s.description}
                  </p>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
