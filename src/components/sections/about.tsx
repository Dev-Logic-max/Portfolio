"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

/**
 * Smooth count-up using Motion's `animate` on a MotionValue (no setInterval →
 * no flicker, no effect-restart loop). Runs once when in view; respects
 * reduced-motion by showing the final value immediately.
 */
function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!match) return;
    if (!inView) return;
    if (reduce) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, reduce, target, match, count]);

  if (!match) return <span ref={ref}>{value}</span>;
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const accents = ["accent-2", "accent", "accent-3", "accent-4"];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                I ship, and then I <span className="text-aurora">operate</span>.
              </>
            }
            accent="accent-2"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
              {profile.longBio}
            </p>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 gap-4"
        >
          {profile.stats.map((s, i) => {
            const accent = accents[i % accents.length];
            const Icon = (Icons[s.icon as keyof typeof Icons] ??
              Icons.Sparkles) as LucideIcon;
            return (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur transition-colors hover:border-border-strong"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -top-4 size-16 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
                  style={{ background: `var(--${accent})` }}
                />
                <div
                  className="mb-3 grid size-9 place-items-center rounded-lg"
                  style={{
                    background: `color-mix(in oklab, var(--${accent}) 14%, transparent)`,
                    color: `var(--${accent})`,
                  }}
                >
                  <Icon className="size-4.5" />
                </div>
                <div className="font-display text-4xl font-bold text-fg">
                  <StatValue value={s.value} />
                </div>
                <p className="mt-1 text-sm text-fg-muted">{s.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
