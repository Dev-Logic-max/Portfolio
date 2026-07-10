"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/content/projects";
import { techCategories } from "@/content/tech";

type MegaKind = "work" | "stack" | null;

function megaFor(href: string): MegaKind {
  if (href === "/work") return "work";
  if (href === "/stack") return "stack";
  return null;
}

/** A nav link that, for /work and /stack, reveals a rich hover panel. */
export function NavItem({ label, href }: { label: string; href: string }) {
  const kind = megaFor(href);
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  if (!kind) {
    return (
      <Link
        href={href}
        className="rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
      >
        {label}
      </Link>
    );
  }

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <Link
        href={href}
        className="inline-flex items-center rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
      >
        {label}
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 mt-2 w-[min(92vw,32rem)] -translate-x-1/2"
          >
            <div className="glass rounded-2xl p-4 shadow-elevated">
              {kind === "work" ? (
                <div>
                  <div className="mb-2 flex items-center justify-between px-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                      Featured work
                    </span>
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                      All projects <ArrowRight className="size-3" />
                    </Link>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-2">
                    {featuredProjects.slice(0, 4).map((p) => (
                      <Link
                        key={p.slug}
                        href={p.links.caseStudy ?? `/work/${p.slug}`}
                        className="group rounded-xl p-3 transition-colors hover:bg-surface-2"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="size-2 rounded-full"
                            style={{ background: `var(--${p.accent ?? "accent"})` }}
                          />
                          <span className="text-sm font-medium text-fg group-hover:text-accent">
                            {p.title}
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-1 pl-4 text-xs text-fg-subtle">
                          {p.tagline}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-2 flex items-center justify-between px-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                      My stack
                    </span>
                    <Link
                      href="/stack"
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                      Full stack <ArrowRight className="size-3" />
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2 p-2">
                    {techCategories.map((c) => (
                      <Link
                        key={c}
                        href="/stack"
                        className="rounded-lg border border-border bg-surface/60 px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
                      >
                        {c}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
