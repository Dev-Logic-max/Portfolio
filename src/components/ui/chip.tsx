import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Mono tech tag / pill. Optional accent tint for section color variety. */
export function Chip({
  children,
  className,
  accent,
}: {
  children: ReactNode;
  className?: string;
  /** an --accent-* token name, e.g. "accent-3" */
  accent?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-2/70 px-3 py-1 font-mono text-xs text-fg-muted",
        className
      )}
      style={
        accent
          ? {
              borderColor: `color-mix(in oklab, var(--${accent}) 40%, transparent)`,
              color: `var(--${accent})`,
              backgroundColor: `color-mix(in oklab, var(--${accent}) 8%, transparent)`,
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}
