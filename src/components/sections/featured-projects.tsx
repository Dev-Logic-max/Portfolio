"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, PlayCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { featuredProjects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Chip } from "@/components/ui/chip";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedProjects() {
  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title={<>Products companies <span className="text-aurora">run in production</span></>}
          lead="Not demos. Multi-tenant SaaS, integration-heavy systems, self-hosted and kept alive."
          accent="accent"
        />

        <div className="mt-14 space-y-6">
          {featuredProjects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <SpotlightCard
                accent={p.accent ?? "accent"}
                className="grid gap-8 p-8 md:grid-cols-[1fr_1.1fr] md:items-center lg:p-10"
              >
                {/* text */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: `var(--${p.accent ?? "accent"})` }}
                    >
                      {p.type}
                    </span>
                    <span className="text-fg-subtle">·</span>
                    <span className="font-mono text-xs text-fg-subtle">{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-fg sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-pretty text-base text-fg-muted">
                    {p.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-subtle">
                    {p.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.slice(0, 6).map((s) => (
                      <Chip key={s} accent={p.accent}>
                        {s}
                      </Chip>
                    ))}
                    {p.stack.length > 6 && (
                      <Chip>+{p.stack.length - 6}</Chip>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    {p.links.caseStudy && (
                      <Link
                        href={p.links.caseStudy}
                        className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                      >
                        Read case study
                        <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    )}
                    {p.links.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        <ExternalLink className="size-4" /> Live
                      </a>
                    )}
                    {p.links.repo && (
                      <a
                        href={p.links.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        <GithubIcon className="size-4" />
                        {p.links.repoBackend ? "Frontend" : "Repo"}
                      </a>
                    )}
                    {p.links.repoBackend && (
                      <a
                        href={p.links.repoBackend}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        <GithubIcon className="size-4" /> Backend
                      </a>
                    )}
                    {p.links.linkedin && (
                      <a
                        href={p.links.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        <LinkedinIcon className="size-4" /> Post
                      </a>
                    )}
                    {p.links.video && (
                      <a
                        href={p.links.video}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        <PlayCircle className="size-4" /> Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* visual placeholder (real cover image goes here) */}
                <div
                  className={`relative aspect-16/10 overflow-hidden rounded-xl border border-border ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, color-mix(in oklab, var(--${
                      p.accent ?? "accent"
                    }) 30%, var(--surface-2)), var(--surface-3))`,
                  }}
                >
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-5xl font-bold text-fg/10">
                      {p.title}
                    </span>
                  </div>
                  {/* TODO(abdul): replace with next/image cover screenshot */}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/work" variant="secondary" size="lg">
              View all projects
              <ArrowUpRight className="size-4" />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
