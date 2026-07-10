import type { Metadata } from "next";
import { Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "CV / Résumé — Abdul Rehman",
  description:
    "View and download Abdul Rehman's CV — full-stack engineer specializing in multi-tenant SaaS and DevOps.",
  alternates: { canonical: "/cv" },
};

export default function CvPage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "CV" }]}>
      <section className="container-page py-12 sm:py-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg text-fg-muted">{profile.roleLine}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-fg-subtle">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4" /> {profile.location}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
                >
                  <Mail className="size-4" /> {profile.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <ButtonLink href={profile.cvUrl} size="md">
                <Download className="size-4" /> Download PDF
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        {/* embedded PDF */}
        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-soft">
            <object
              data={`${profile.cvUrl}#view=FitH`}
              type="application/pdf"
              className="h-[80vh] w-full"
              aria-label={`${profile.name} CV`}
            >
              {/* fallback for browsers that can't inline PDFs */}
              <div className="grid place-items-center gap-4 p-16 text-center">
                <p className="text-fg-muted">
                  Your browser can&apos;t display the PDF inline.
                </p>
                <ButtonLink href={profile.cvUrl} size="md">
                  <Download className="size-4" /> Download the CV
                </ButtonLink>
              </div>
            </object>
          </div>
        </Reveal>
        {/* TODO(abdul): want a Gulf + Pakistan variant? Drop cv-gulf.pdf and I'll add a switcher. */}
      </section>
    </PageShell>
  );
}
