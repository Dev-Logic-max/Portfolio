"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Briefcase, GraduationCap, Languages } from "lucide-react";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const quickFacts = [
  { icon: Briefcase, label: "Full-Stack Engineer @ Cure Logics" },
  { icon: MapPin, label: "Rahim Yar Khan, PK · open to relocate" },
  { icon: GraduationCap, label: "B.Sc. Computer Science" },
  { icon: Languages, label: "English · Urdu" },
];

/** Photo + short human intro, right under the hero strip. */
export function Intro() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          {/* glow */}
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
            style={{
              background:
                "linear-gradient(140deg, var(--accent-violet), var(--accent-2), var(--accent-3))",
            }}
          />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-border-strong bg-surface">
            <Image
              src={profile.portrait}
              alt={`${profile.name} — ${profile.roleLine}`}
              width={900}
              height={1342}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 768px) 80vw, 380px"
            />
            {/* subtle gradient scrim at bottom */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in oklab, var(--surface) 85%, transparent), transparent)",
              }}
              aria-hidden
            />
          </div>
          {/* floating name chip */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border-strong bg-surface/90 px-4 py-1.5 text-sm font-medium text-fg shadow-soft backdrop-blur">
            👋 {profile.name}
          </div>
        </motion.div>

        {/* intro copy */}
        <div>
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden />
              Hello
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              A senior full-stack engineer who <span className="text-aurora">ships and operates</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
              {profile.shortBio} I build multi-tenant SaaS used in production — and I own the
              release pipeline that keeps it running, from Linux and Nginx to CI/CD.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {quickFacts.map((f, i) => (
              <Reveal key={f.label} delay={0.15 + i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3 backdrop-blur">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-surface-2 text-accent">
                    <f.icon className="size-4" />
                  </span>
                  <span className="text-sm text-fg">{f.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
