import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Target,
  Route,
  Boxes,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { PageShell } from "@/components/layout/page-shell";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Chip } from "@/components/ui/chip";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Case study not found" };
  return {
    title: `${p.title} — Case Study`,
    description: p.tagline,
    alternates: { canonical: `/work/${p.slug}` },
  };
}

function Block({
  icon: Icon,
  title,
  accent,
  children,
}: {
  icon: typeof Target;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="grid size-9 place-items-center rounded-lg"
            style={{
              background: `color-mix(in oklab, var(--${accent}) 14%, transparent)`,
              color: `var(--${accent})`,
            }}
          >
            <Icon className="size-5" />
          </span>
          <h2 className="font-display text-xl font-semibold text-fg">{title}</h2>
        </div>
        {children}
      </div>
    </Reveal>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const accent = p.accent ?? "accent";
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <PageShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Work", href: "/work" },
        { label: p.title },
      ]}
    >
      {/* hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
          style={{
            background: `radial-gradient(600px circle at 80% -10%, color-mix(in oklab, var(--${accent}) 30%, transparent), transparent 60%)`,
          }}
        />
        <div className="container-page relative py-12 sm:py-16">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span
                className="uppercase tracking-widest"
                style={{ color: `var(--${accent})` }}
              >
                {p.type}
              </span>
              <span className="text-fg-subtle">·</span>
              <span className="text-fg-subtle">{p.year}</span>
              <span className="text-fg-subtle">·</span>
              <span className="text-fg-subtle">{p.role}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-fg sm:text-6xl">
              {p.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-fg-muted">{p.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Chip key={s} accent={accent}>
                  {s}
                </Chip>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {p.links.live && (
                <ButtonLink href={p.links.live} size="md">
                  <ExternalLink className="size-4" /> Visit live
                </ButtonLink>
              )}
              {p.links.repo && (
                <ButtonLink href={p.links.repo} variant="secondary" size="md">
                  <GithubIcon className="size-4" />
                  {p.links.repoBackend ? "Frontend repo" : "Repository"}
                </ButtonLink>
              )}
              {p.links.repoBackend && (
                <ButtonLink href={p.links.repoBackend} variant="secondary" size="md">
                  <GithubIcon className="size-4" /> Backend repo
                </ButtonLink>
              )}
              {p.links.linkedin && (
                <ButtonLink href={p.links.linkedin} variant="ghost" size="md">
                  <LinkedinIcon className="size-4" /> Post
                </ButtonLink>
              )}
            </div>
          </Reveal>

          {/* cover placeholder */}
          <Reveal delay={0.1}>
            <div
              className="relative mt-10 aspect-21/9 w-full overflow-hidden rounded-2xl border border-border"
              style={{
                background: `linear-gradient(135deg, color-mix(in oklab, var(--${accent}) 25%, var(--surface-2)), var(--surface-3))`,
              }}
            >
              <div className="bg-grid absolute inset-0 opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-6xl font-bold text-fg/10">
                  {p.title}
                </span>
              </div>
              {/* TODO(abdul): drop a hero screenshot at public/images/projects/{slug}-cover.webp */}
            </div>
          </Reveal>
        </div>
      </section>

      {/* body */}
      <section className="container-page space-y-6 py-8 sm:py-12">
        <Block icon={Target} title="The problem" accent="accent-6">
          <p className="leading-relaxed text-fg-muted">{p.problem}</p>
        </Block>
        <Block icon={Route} title="The approach" accent="accent-2">
          <p className="leading-relaxed text-fg-muted">{p.approach}</p>
        </Block>
        <Block icon={Boxes} title="Architecture" accent={accent}>
          <p className="leading-relaxed text-fg-muted">{p.architecture}</p>
          {/* TODO(abdul): add an accurate architecture diagram (SVG) at
              public/images/projects/{slug}-architecture.svg */}
        </Block>

        {p.hardProblems.length > 0 && (
          <Block icon={Zap} title="Hard problems solved" accent="accent-5">
            <ul className="space-y-3">
              {p.hardProblems.map((hp, i) => (
                <li key={i} className="flex gap-3 text-fg-muted">
                  <Zap
                    className="mt-0.5 size-4 shrink-0"
                    style={{ color: "var(--accent-5)" }}
                  />
                  <span>{hp}</span>
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block icon={CheckCircle2} title="Results" accent="accent-4">
          <ul className="space-y-3">
            {p.results.map((r, i) => (
              <li key={i} className="flex gap-3 text-fg-muted">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0"
                  style={{ color: "var(--accent-4)" }}
                />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Block>
      </section>

      {/* prev / next */}
      <section className="container-page border-t border-border py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href={prev.links.caseStudy ?? `/work/${prev.slug}`}
            className="group rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-border-strong"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-fg-subtle">
              <ArrowLeft className="size-3.5" /> Previous
            </span>
            <p className="mt-1 font-display text-lg font-semibold text-fg group-hover:text-accent">
              {prev.title}
            </p>
          </Link>
          <Link
            href={next.links.caseStudy ?? `/work/${next.slug}`}
            className="group rounded-2xl border border-border bg-surface/50 p-6 text-right transition-colors hover:border-border-strong"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-fg-subtle">
              Next <ArrowRight className="size-3.5" />
            </span>
            <p className="mt-1 font-display text-lg font-semibold text-fg group-hover:text-accent">
              {next.title}
            </p>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
