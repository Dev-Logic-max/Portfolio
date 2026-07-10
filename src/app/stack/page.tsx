import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Stack & Expertise — Abdul Rehman",
  description:
    "The full toolbox: frontend, backend, databases, and the DevOps stack Abdul Rehman uses to build and operate production SaaS.",
  alternates: { canonical: "/stack" },
};

export default function StackPage() {
  return (
    <PageShell crumbs={[{ label: "Home", href: "/" }, { label: "Stack" }]}>
      <section className="container-page py-12 sm:py-16">
        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            My <span className="text-aurora">stack</span> &amp; expertise
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-fg-muted">
            Front to back to infrastructure — the tools I build production software
            with, honestly rated and kept current.
          </p>
        </Reveal>
      </section>

      <TechStack />
      <Contact />
    </PageShell>
  );
}
