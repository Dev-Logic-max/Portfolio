"use client";

import dynamic from "next/dynamic";
import { HeroContent } from "./hero-content";
import { useMounted } from "@/lib/use-mounted";

// Lazy-load Three.js off the critical path; never SSR WebGL.
const ParticleField = dynamic(
  () => import("./particle-field").then((m) => m.ParticleField),
  { ssr: false }
);

/** One-shot capability probe (client only): capable GPU, not reduced-motion, not touch/small. */
function detectWebGL() {
  if (typeof window === "undefined") return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const smallOrCoarse = window.matchMedia(
    "(max-width: 640px), (pointer: coarse)"
  ).matches;
  if (reduce || smallOrCoarse) return false;
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

function useCanRenderWebGL() {
  const mounted = useMounted();
  // Only truthy after mount, so SSR + first paint show the CSS fallback.
  return mounted && detectWebGL();
}

/**
 * Hero Variant B — WebGL signature (Three.js particle cloud).
 * Guarded: renders the 3D field only on capable, non-reduced-motion, non-touch
 * devices. Everyone else gets the same beautiful CSS aurora fallback, so the
 * hero looks premium with zero WebGL.
 */
export function HeroWebGL() {
  const canWebGL = useCanRenderWebGL();

  return (
    <section className="relative isolate flex h-svh min-h-160 items-center overflow-hidden bg-bg">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />

      {/* CSS aurora — full strength as the fallback; dimmed when planets render. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute left-1/2 top-1/2 size-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-1000 motion-safe:animate-aurora"
          style={{
            background:
              "conic-gradient(from 0deg, var(--aurora-a), var(--aurora-b), var(--aurora-c), var(--aurora-a))",
            opacity: canWebGL ? 0.22 : 0.5,
          }}
        />
      </div>

      {canWebGL && (
        <div className="absolute inset-0" aria-hidden>
          <ParticleField />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 45%, transparent, color-mix(in oklab, var(--bg-raw) 78%, transparent))",
        }}
      />

      <div className="container-page relative py-28">
        <HeroContent />
      </div>
    </section>
  );
}
