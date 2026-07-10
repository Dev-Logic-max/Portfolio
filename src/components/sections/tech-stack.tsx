"use client";

import { motion } from "motion/react";
import { techCategories, techByCategory } from "@/content/tech";
import { techColor } from "@/lib/tech-color";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const categoryAccent: Record<string, string> = {
  Frontend: "accent-2",
  Backend: "accent",
  Database: "accent-3",
  "DevOps & Infra": "accent-4",
  Tools: "accent-5",
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Toolbox"
          title={
            <>
              The stack I <span className="text-aurora">build &amp; ship</span> with
            </>
          }
          lead="Real tools, honestly rated. Solid = I build production work with it daily; the rest I'm strong or working in."
          accent="accent-2"
        />

        <div className="mt-14 space-y-10">
          {techCategories.map((cat, ci) => {
            const items = techByCategory(cat);
            if (items.length === 0) return null;
            const accent = categoryAccent[cat] ?? "accent";
            return (
              <Reveal key={cat} delay={ci * 0.04}>
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ background: `var(--${accent})` }}
                    />
                    <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-fg-muted">
                      {cat}
                    </h3>
                    <span className="h-px flex-1 bg-border" />
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.03 } },
                    }}
                    className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
                  >
                    {items.map((t) => {
                      const Icon = t.icon;
                      return (
                        <motion.div
                          key={t.name}
                          variants={{
                            hidden: { opacity: 0, y: 14 },
                            show: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.4, ease: EASE },
                            },
                          }}
                          className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-border bg-surface/60 px-4 py-3.5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-soft"
                        >
                          {/* brand glow on hover */}
                          <span
                            aria-hidden
                            className="pointer-events-none absolute -left-6 top-1/2 size-16 -translate-y-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                            style={{ background: t.color }}
                          />
                          <Icon
                            className="relative size-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: techColor(t.color) }}
                            aria-hidden
                          />
                          <span className="relative min-w-0 flex-1 truncate text-sm font-medium text-fg">
                            {t.name}
                          </span>
                          {t.level === "core" && (
                            <span
                              className="relative size-1.5 shrink-0 rounded-full"
                              style={{ background: `var(--${accent})` }}
                              title="Core"
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-fg-subtle">
          <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent align-middle" />
          Core = daily production tool
          <span className="mx-2">·</span>
          {/* TODO(abdul): keep this list current as your skills grow (edit content/tech.ts) */}
          Updated regularly
        </p>
      </div>
    </section>
  );
}
