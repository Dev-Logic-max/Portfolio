import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { WorkGrid } from "@/components/work/work-grid";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Work — Projects & Case Studies",
  description:
    "Selected work by Abdul Rehman: multi-tenant SaaS, real-time apps, integrations, and more — with case studies and live links.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}>
      <section className="container-page py-12 sm:py-16">
        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            Selected <span className="text-aurora">work</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-fg-muted">
            Production SaaS, real-time apps, and integration-heavy systems. Each one
            architected, built, and — where it counts — operated in production.
          </p>
        </Reveal>

        <div className="mt-12">
          <WorkGrid />
        </div>
      </section>
    </PageShell>
  );
}
