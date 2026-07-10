"use client";

import { motion } from "motion/react";
import { Smartphone, Zap, Bell, Wifi } from "lucide-react";
import { SiReact, SiExpo, SiTypescript } from "react-icons/si";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const features = [
  { icon: Zap, label: "Native performance", accent: "accent-3" },
  { icon: Bell, label: "Push notifications", accent: "accent-5" },
  { icon: Wifi, label: "Offline-friendly", accent: "accent-4" },
  { icon: Smartphone, label: "iOS + Android", accent: "accent-2" },
];

export function Mobile() {
  return (
    <section id="mobile" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <SectionHeading
            eyebrow="Mobile"
            title={
              <>
                Cross-platform apps with <span className="text-aurora">React Native</span>
              </>
            }
            lead="One codebase, native iOS + Android. I built the Vellora mobile app in React Native / Expo, sharing the API contract with the web product."
            accent="accent-3"
          />

          <div className="mt-8 grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3 backdrop-blur">
                  <span
                    className="grid size-8 shrink-0 place-items-center rounded-lg"
                    style={{
                      background: `color-mix(in oklab, var(--${f.accent}) 14%, transparent)`,
                      color: `var(--${f.accent})`,
                    }}
                  >
                    <f.icon className="size-4" />
                  </span>
                  <span className="text-sm text-fg">{f.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { Icon: SiReact, name: "React Native", color: "#61DAFB" },
                { Icon: SiExpo, name: "Expo", color: "var(--fg)" },
                { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
              ].map(({ Icon, name, color }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3 py-1.5 text-sm text-fg-muted"
                >
                  <Icon className="size-4" style={{ color }} />
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* phone mockup */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-[240px]">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[3rem] opacity-40 blur-3xl"
              style={{
                background: "linear-gradient(160deg, var(--accent-3), var(--accent-violet))",
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative aspect-[9/19] rounded-[2.2rem] border-[6px] border-border-strong bg-surface p-2 shadow-elevated"
            >
              {/* notch */}
              <div className="absolute left-1/2 top-2.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-border-strong" />
              {/* screen */}
              <div
                className="h-full w-full overflow-hidden rounded-[1.7rem]"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--accent-3) 22%, var(--surface-2)), var(--surface-3))",
                }}
              >
                <div className="bg-grid absolute inset-2 rounded-[1.7rem] opacity-30" />
                <div className="relative flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
                  <span className="grid size-14 place-items-center rounded-2xl bg-surface/80 text-accent-3 backdrop-blur">
                    <Smartphone className="size-7" />
                  </span>
                  <p className="font-display text-sm font-semibold text-fg">
                    Vellora Mobile
                  </p>
                  <p className="text-xs text-fg-subtle">React Native · Expo</p>
                </div>
              </div>
              {/* TODO(abdul): drop a real app screenshot to composite here */}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
