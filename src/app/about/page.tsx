import type { Metadata } from "next";
import Image from "next/image";
import { Heart, ShieldCheck, GitBranch, Gauge } from "lucide-react";
import { profile } from "@/content/profile";
import { PageShell } from "@/components/layout/page-shell";
import { ExperienceTimeline } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About — Abdul Rehman",
  description:
    "The full story: how Abdul Rehman builds and operates production SaaS, his principles, and the studio Dev Logic Max.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: ShieldCheck,
    accent: "accent",
    title: "Tenancy & trust first",
    body: "Multi-tenant isolation, RBAC, and audit logs aren't afterthoughts — they're the foundation a SaaS is built on.",
  },
  {
    icon: GitBranch,
    accent: "accent-4",
    title: "Own the whole pipeline",
    body: "Architecture → code → CI/CD → VPS → operations. I don't hand off and hope; I keep it running.",
  },
  {
    icon: Gauge,
    accent: "accent-3",
    title: "Observable & reliable",
    body: "Zero-downtime deploys, health checks, and honest monitoring. Boring reliability is a feature.",
  },
  {
    icon: Heart,
    accent: "accent-6",
    title: "Clear communication",
    body: "Plain, specific, on time. 30+ freelance clients stayed because they always knew where things stood.",
  },
];

export default function AboutPage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}>
      {/* intro */}
      <section className="container-page grid items-center gap-10 py-12 sm:py-16 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <h1 className="font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
              I build software that <span className="text-aurora">companies run</span> — and keep it alive.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-fg-muted">
              {profile.longBio}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/cv" size="md">
                View CV
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" size="md">
                See my work
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl"
              style={{
                background:
                  "linear-gradient(140deg, var(--accent-violet), var(--accent-3))",
              }}
            />
            <Image
              src={profile.portraitOffice}
              alt={`${profile.name} at work`}
              width={1100}
              height={1467}
              className="relative h-auto w-full rounded-[1.6rem] border border-border-strong object-cover"
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </div>
        </Reveal>
      </section>

      {/* principles */}
      <section className="container-page py-12 sm:py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            How I <span className="text-aurora">work</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {principles.map((pr, i) => (
            <Reveal key={pr.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur">
                <span
                  className="mb-4 grid size-11 place-items-center rounded-xl"
                  style={{
                    background: `color-mix(in oklab, var(--${pr.accent}) 14%, transparent)`,
                    color: `var(--${pr.accent})`,
                  }}
                >
                  <pr.icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-fg">
                  {pr.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {pr.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ExperienceTimeline />
      <Contact />
    </PageShell>
  );
}
