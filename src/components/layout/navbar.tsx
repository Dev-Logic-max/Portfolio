"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/social";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { ViewToggle } from "@/components/layout/view-toggle";
import { NavItem } from "@/components/layout/nav-mega";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 12);
    // hide on scroll down, reveal on scroll up (only past the hero)
    setHidden(y > prev && y > 240 && !open);
  });

  // lock body scroll when mobile sheet open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-110%" : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={cn(
          "container-page mt-3 flex h-14 items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5",
          scrolled
            ? "glass shadow-soft"
            : "border border-transparent bg-transparent"
        )}
      >
        {/* Monogram / wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${profile.name} — home`}
        >
          <span className="relative grid size-8 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-fg shadow-[0_4px_16px_-4px_rgb(var(--glow)/0.6)]">
            AR
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-fg sm:block">
            Abdul Rehman
          </span>
        </Link>

        <ViewToggle className="hidden md:inline-flex" />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavItem key={item.href} label={item.label} href={item.href} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink
            href="/#contact"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Let&apos;s talk
          </ButtonLink>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-border bg-surface/60 text-fg md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-page md:hidden"
          >
            <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 shadow-soft">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-fg transition-colors hover:bg-surface-2"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink
                href="/#contact"
                className="mt-1"
                onClick={() => setOpen(false)}
              >
                Let&apos;s talk
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
