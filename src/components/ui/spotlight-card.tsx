"use client";

import { cn } from "@/lib/utils";
import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Premium glass card with a cursor-following radial spotlight and hover lift.
 * The spotlight uses CSS vars updated on pointer move (no re-render).
 */
export function SpotlightCard({
  children,
  className,
  accent = "accent",
}: {
  children: ReactNode;
  className?: string;
  /** an --accent-* token, e.g. "accent-3" */
  accent?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-elevated",
        className
      )}
    >
      {/* cursor spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(340px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--${accent}) 22%, transparent), transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
