"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/content/projects";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Chip } from "@/components/ui/chip";
import { SpotlightCard } from "@/components/ui/spotlight-card";

/** Compact project card used on /work and the studio. */
export function ProjectCard({ project: p }: { project: Project }) {
  const accent = p.accent ?? "accent";
  const href = p.links.caseStudy ?? `/work/${p.slug}`;

  return (
    <SpotlightCard accent={accent} className="flex h-full flex-col p-0">
      {/* cover */}
      <Link
        href={href}
        className="relative block aspect-16/10 overflow-hidden rounded-t-2xl"
        style={{
          background: `linear-gradient(135deg, color-mix(in oklab, var(--${accent}) 30%, var(--surface-2)), var(--surface-3))`,
        }}
      >
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-3xl font-bold text-fg/10">
            {p.title}
          </span>
        </div>
        <span
          className="absolute left-3 top-3 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest"
          style={{
            background: `color-mix(in oklab, var(--${accent}) 18%, var(--surface))`,
            color: `var(--${accent})`,
          }}
        >
          {p.type}
        </span>
        {/* TODO(abdul): drop a screenshot at public/images/projects/{slug}-cover.webp */}
      </Link>

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-fg">{p.title}</h3>
          <span className="mt-1 shrink-0 font-mono text-xs text-fg-subtle">
            {p.year}
          </span>
        </div>
        <p className="mt-2 text-sm text-fg-muted">{p.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map((s) => (
            <Chip key={s} accent={accent}>
              {s}
            </Chip>
          ))}
          {p.stack.length > 4 && <Chip>+{p.stack.length - 4}</Chip>}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-5">
          <Link
            href={href}
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            Case study
            <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
          {p.links.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${p.title} live`}
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <ExternalLink className="size-4" />
            </a>
          )}
          {p.links.repo && (
            <a
              href={p.links.repo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${p.title} repository`}
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
