"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** "Me / Studio" pill that switches between the portfolio (/) and agency (/studio). */
export function ViewToggle({ className }: { className?: string }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  const items = [
    { label: "Me", href: "/", active: !isStudio },
    { label: "Studio", href: "/studio", active: isStudio },
  ];

  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-full border border-border bg-surface/60 p-0.5 backdrop-blur",
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative z-10 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors"
          style={{ color: item.active ? "var(--accent-fg)" : "var(--fg-muted)" }}
        >
          {item.active && (
            <motion.span
              layoutId="view-toggle-pill"
              className="absolute inset-0 -z-10 rounded-full bg-accent"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
          {item.label}
        </Link>
      ))}
    </div>
  );
}
