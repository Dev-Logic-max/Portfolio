"use client";

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { platforms, pipeline, devopsHighlights } from "@/content/devops";
import { techColor } from "@/lib/tech-color";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function DevOps() {
  return (
    <section
      id="devops"
      className="scroll-mt-24 border-y border-border bg-surface-2/40 py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="DevOps & Infrastructure"
          title={
            <>
              I don&apos;t just build it — I <span className="text-aurora">ship &amp; run</span> it
            </>
          }
          lead="From an empty Linux box to a live, monitored, zero-downtime deployment. I own the pipeline end to end."
          accent="accent-4"
        />

        {/* animated CI/CD pipeline */}
        <Reveal>
          <div className="mt-12 rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur sm:p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-fg-subtle">
              Deploy pipeline
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
              {pipeline.map((s, i) => {
                const Icon = (Icons[s.icon as keyof typeof Icons] ??
                  Icons.Circle) as LucideIcon;
                return (
                  <div key={s.step} className="flex flex-1 items-center gap-4 md:flex-col md:gap-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12, ease: EASE }}
                      className="relative grid size-14 shrink-0 place-items-center rounded-2xl border md:size-16"
                      style={{
                        borderColor: `color-mix(in oklab, var(--${s.accent}) 40%, transparent)`,
                        background: `color-mix(in oklab, var(--${s.accent}) 10%, var(--surface))`,
                        color: `var(--${s.accent})`,
                      }}
                    >
                      <Icon className="size-6" />
                      {/* pulse */}
                      <motion.span
                        className="absolute inset-0 rounded-2xl"
                        style={{ border: `1px solid var(--${s.accent})` }}
                        animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.3, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                      />
                    </motion.div>
                    <div className="md:text-center">
                      <p className="font-display text-sm font-semibold text-fg">
                        {s.step}
                      </p>
                      <p className="text-xs text-fg-subtle">{s.desc}</p>
                    </div>
                    {/* connector */}
                    {i < pipeline.length - 1 && (
                      <div className="hidden flex-1 md:block" aria-hidden>
                        <div className="mt-8 h-px w-full bg-linear-to-r from-border-strong to-transparent" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* platforms grid */}
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur sm:p-8">
              <p className="mb-5 font-mono text-xs uppercase tracking-widest text-fg-subtle">
                Deployed &amp; operated on
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {platforms.map((pl) => {
                  const Icon = pl.icon;
                  const Lucide = pl.lucide
                    ? ((Icons[pl.lucide as keyof typeof Icons] ??
                        Icons.Server) as LucideIcon)
                    : null;
                  return (
                    <div
                      key={pl.name}
                      className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface/60 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-border-strong"
                    >
                      {Icon ? (
                        <Icon
                          className="size-5 shrink-0"
                          style={{ color: techColor(pl.color) }}
                        />
                      ) : Lucide ? (
                        <Lucide
                          className="size-5 shrink-0"
                          style={{ color: pl.color }}
                        />
                      ) : null}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-fg">
                          {pl.name}
                        </p>
                        <p className="truncate text-[11px] text-fg-subtle">
                          {pl.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* highlights */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur sm:p-8">
              <p className="mb-5 font-mono text-xs uppercase tracking-widest text-fg-subtle">
                What I do
              </p>
              <ul className="space-y-3">
                {devopsHighlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-fg-muted">
                    <Icons.CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-4" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
