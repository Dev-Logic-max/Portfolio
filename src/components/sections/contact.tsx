"use client";

import { useState } from "react";
import { Copy, Check, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";
import { personalSocials } from "@/content/social";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ConstellationCanvas } from "@/components/hero/constellation-canvas";
import { brandIcons, WhatsappIcon } from "@/components/ui/brand-icons";
import { ContactForm } from "./contact-form";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 px-6 py-16 backdrop-blur sm:px-12 md:py-20">
          {/* constellation (repurposed from the canvas hero) */}
          <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
            <ConstellationCanvas className="size-full" />
          </div>
          {/* aurora glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            aria-hidden
            style={{
              background:
                "radial-gradient(600px circle at 80% 0%, var(--aurora-a), transparent 60%), radial-gradient(500px circle at 10% 100%, var(--aurora-c), transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Contact"
              title={<>Let&apos;s build something <span className="text-aurora">that ships</span></>}
              lead="Hiring, or have a product to build? I read every message. Currently open to remote roles and Gulf opportunities."
              accent="accent-3"
              className="mx-auto"
            />

            <Reveal delay={0.08}>
              <div className="mx-auto mt-10 max-w-xl">
                <ContactForm />
              </div>
            </Reveal>

            <div className="mx-auto mt-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs text-fg-subtle">or reach me directly</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink
                  href={`mailto:${profile.email}`}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Mail className="size-4" />
                  Email me
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink
                  href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
                    "Hi Abdul — I found your portfolio."
                  )}`}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <WhatsappIcon className="size-4" style={{ color: "#25D366" }} />
                  WhatsApp
                  <span className="ml-0.5" aria-hidden>🇵🇰</span>
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <button
                type="button"
                onClick={copyEmail}
                className="mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs text-fg-subtle transition-colors hover:text-fg"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-accent-4" /> Copied {profile.email}
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" /> {profile.email}
                  </>
                )}
              </button>

              {/* socials row */}
              <div className="mt-6 flex items-center justify-center gap-3">
                {personalSocials.map((s) => {
                  const Icon = brandIcons[s.icon] ?? Mail;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="grid size-10 place-items-center rounded-xl border border-border bg-surface/60 text-fg-muted backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-fg"
                    >
                      <Icon className="size-4.5" />
                    </a>
                  );
                })}
              </div>
            </Reveal>
            {/* TODO(abdul): a real form (Web3Forms → your Gmail) comes in the contact slice. */}
          </div>
        </div>
      </div>
    </section>
  );
}
