"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { ArchitectureAnim } from "./architecture-anim";

const EASE = [0.22, 1, 0.36, 1] as const;

const proofPoints = [
  "Production SaaS, not prototypes",
  "Multi-tenant & integration-heavy",
  "We ship it and keep it alive",
];

/** Agency (Dev Logic Max) hero — client-facing. Same visual system, different message. */
export function StudioHero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-bg">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -right-[10%] top-[-10%] size-[46rem] rounded-full blur-3xl motion-safe:animate-aurora"
          style={{ background: "var(--aurora-b)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-8%] size-[40rem] rounded-full blur-3xl motion-safe:animate-aurora [animation-delay:-8s]"
          style={{ background: "var(--aurora-a)" }}
        />
      </div>

      <div className="container-page relative grid items-center gap-12 py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-fg-muted backdrop-blur"
          >
            <span className="grid size-5 place-items-center rounded bg-accent text-[10px] font-bold text-accent-fg">
              DLM
            </span>
            Dev Logic Max · a software studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            We build the software
            <br />
            <span className="text-aurora">you run in production.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted"
          >
            A senior-led studio for <strong className="text-fg">SaaS platforms</strong>,{" "}
            <strong className="text-fg">web &amp; mobile apps</strong>, and{" "}
            <strong className="text-fg">AI-powered products</strong> — architected, built,
            and operated end to end. You work directly with the engineer who ships it.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            {proofPoints.map((p) => (
              <motion.li
                key={p}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="inline-flex items-center gap-2 text-sm text-fg"
              >
                <CheckCircle2 className="size-4 text-accent-4" />
                {p}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.66 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/studio#contact" size="lg" className="w-full sm:w-auto">
              Start a project
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink
              href="/studio#services"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              See what we do
            </ButtonLink>
          </motion.div>
        </div>

        {/* right: animated system-architecture diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="rounded-3xl border border-border bg-surface/40 p-6 backdrop-blur sm:p-8">
            <ArchitectureAnim />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
