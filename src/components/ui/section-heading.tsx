import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import type { ReactNode } from "react";

/** Consistent section eyebrow + title + optional lead paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  accent = "accent",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  accent?: string;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
          style={{ color: `var(--${accent})` }}
        >
          <span
            className="h-px w-6"
            style={{ background: `var(--${accent})` }}
            aria-hidden
          />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
