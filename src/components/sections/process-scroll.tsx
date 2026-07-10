"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, PencilRuler, Code2, Rocket, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    n: "01",
    title: "Discover",
    icon: Compass,
    accent: "accent-2",
    body: "Understand the real problem, the users, and the constraints before a line of code. Scope honestly.",
  },
  {
    n: "02",
    title: "Architect",
    icon: PencilRuler,
    accent: "accent",
    body: "Design the data model, tenancy, and boundaries up front — the decisions that are expensive to change later.",
  },
  {
    n: "03",
    title: "Build",
    icon: Code2,
    accent: "accent-3",
    body: "Typed end-to-end, tested where it matters, shipped in vertical slices you can actually see working.",
  },
  {
    n: "04",
    title: "Ship",
    icon: Rocket,
    accent: "accent-4",
    body: "Docker + Nginx + CI/CD to a VPS, or Vercel. Zero-downtime deploys, TLS, health checks.",
  },
  {
    n: "05",
    title: "Operate",
    icon: Activity,
    accent: "accent-5",
    body: "Keep it alive: monitoring, audit logs, backups, and the boring reliability work that earns trust.",
  },
];

/**
 * Pinned, scroll-scrubbed process story. The heading pins while step panels
 * cross-fade/rise as you scroll. Under reduced-motion, GSAP is skipped and the
 * steps render as a normal stacked list (accessible fallback).
 */
export function ProcessScroll() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return; // fallback: static list, no pinning

      const panels = gsap.utils.toArray<HTMLElement>(".process-panel");
      const progressBar = root.current?.querySelector(".process-progress");

      // Only when animating: stack panels absolutely on top of each other.
      panels.forEach((panel) => {
        panel.classList.add("lg:absolute", "lg:inset-0");
      });

      // Initial state: only the first panel visible & sharp; the rest hidden.
      panels.forEach((panel, i) => {
        gsap.set(panel, {
          autoAlpha: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 48,
          filter: i === 0 ? "blur(0px)" : "blur(10px)",
          scale: i === 0 ? 1 : 0.96,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${panels.length * 70}%`,
          pin: ".process-pin",
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Clean blur-crossfade between consecutive panels, with a hold so at rest
      // exactly one card is in focus (no mid-scroll "mixing").
      for (let i = 1; i < panels.length; i++) {
        const prev = panels[i - 1];
        const cur = panels[i];
        const label = `step-${i}`;
        tl.addLabel(label);
        // outgoing: blur up and out
        tl.to(
          prev,
          {
            autoAlpha: 0,
            y: -48,
            filter: "blur(10px)",
            scale: 0.96,
            duration: 0.5,
            ease: "power2.in",
          },
          label
        );
        // incoming: sharpen and rise in (slightly overlapped, then settle)
        tl.fromTo(
          cur,
          { autoAlpha: 0, y: 48, filter: "blur(10px)", scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          `${label}+=0.25`
        );
        // hold so the focused card lingers before the next transition
        tl.to({}, { duration: 0.5 });
      }

      if (progressBar) {
        gsap.fromTo(
          progressBar,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => `+=${panels.length * 60}%`,
              scrub: 0.6,
            },
          }
        );
      }
    },
    { scope: root }
  );

  return (
    <section
      id="process"
      ref={root}
      className="relative border-y border-border bg-surface-2/30"
    >
      <div className="process-pin flex min-h-screen items-center overflow-hidden">
        {/* fixed aurora backdrop */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(700px circle at 20% 30%, var(--aurora-a), transparent 55%), radial-gradient(600px circle at 85% 70%, var(--aurora-c), transparent 55%)",
            opacity: 0.5,
          }}
        />
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />

        <div className="container-page relative grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* left: pinned heading */}
          <div>
            <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden />
              How I work
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl md:leading-[1.05]">
              From an idea to a system that <span className="text-aurora">stays alive</span>.
            </h2>
            <p className="mt-4 max-w-md text-fg-muted">
              I don&apos;t just hand off code. I own the arc — architecture through
              operations — so what I build keeps running.
            </p>
            {/* progress bar */}
            <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-border">
              <div className="process-progress h-full origin-left rounded-full bg-linear-to-r from-accent-violet via-accent-2 to-accent-3" />
            </div>
          </div>

          {/* right: panels. GSAP overlaps + scrubs them; the reduced-motion
              fallback is this plain vertical stack. */}
          <div className="relative min-h-64 space-y-4 lg:space-y-0">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.n} className="process-panel will-change-transform">
                  <div
                    className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface p-8 shadow-elevated"
                    style={{
                      boxShadow:
                        "var(--shadow-lg), 0 0 0 1px color-mix(in oklab, var(--" +
                        s.accent +
                        ") 20%, transparent)",
                    }}
                  >
                    {/* accent glow corner */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-25 blur-3xl"
                      style={{ background: `var(--${s.accent})` }}
                    />
                    <div className="relative flex items-center gap-4">
                      <span
                        className="grid size-14 place-items-center rounded-2xl"
                        style={{
                          background: `color-mix(in oklab, var(--${s.accent}) 15%, transparent)`,
                          color: `var(--${s.accent})`,
                        }}
                      >
                        <Icon className="size-7" />
                      </span>
                      <span
                        className="font-mono text-5xl font-bold"
                        style={{ color: `color-mix(in oklab, var(--${s.accent}) 35%, transparent)` }}
                      >
                        {s.n}
                      </span>
                    </div>
                    <h3 className="relative mt-6 font-display text-2xl font-semibold text-fg">
                      {s.title}
                    </h3>
                    <p className="relative mt-2 text-lg leading-relaxed text-fg-muted">
                      {s.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
