import Link from "next/link";
import { ArrowUp, Download, Mail, MapPin, Link as LinkIcon } from "lucide-react";
import { profile } from "@/content/profile";
import { socials, nav, studioNav } from "@/content/social";
import { brandIcons } from "@/components/ui/brand-icons";
import { ButtonLink } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/40">
      {/* aurora glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, var(--aurora-a), transparent 70%)",
        }}
      />

      <div className="container-page relative py-16">
        {/* top CTA band */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-border pb-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">
              Let&apos;s build something that ships.
            </h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-fg-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-4 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-4" />
              </span>
              {profile.availabilityLabel}
            </p>
          </div>
          <div className="flex gap-3">
            <ButtonLink href="/#contact" size="md">
              Get in touch
            </ButtonLink>
            <ButtonLink href="/cv" variant="secondary" size="md">
              <Download className="size-4" /> CV
            </ButtonLink>
          </div>
        </div>

        {/* columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-fg">
                AR
              </span>
              <span className="font-display text-sm font-semibold text-fg">
                {profile.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              {profile.shortBio}
            </p>
            <div className="mt-4 space-y-1.5 text-xs text-fg-subtle">
              <p className="flex items-center gap-1.5">
                <MapPin className="size-3.5" /> {profile.location}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-fg"
              >
                <Mail className="size-3.5" /> {profile.email}
              </a>
            </div>
          </div>

          {/* portfolio nav */}
          <nav aria-label="Portfolio">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-subtle">
              Portfolio
            </p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* studio nav */}
          <nav aria-label="Studio">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-subtle">
              Dev Logic Max
            </p>
            <ul className="space-y-2.5">
              {studioNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* connect */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-subtle">
              Connect
            </p>
            <ul className="space-y-2.5">
              {socials.map((s) => {
                const Icon = brandIcons[s.icon] ?? LinkIcon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      <Icon className="size-4" />
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-fg-subtle sm:flex-row">
          <p>
            © {year} {profile.name}. Built with Next.js &amp; Tailwind.
          </p>
          <a
            href="#main"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
