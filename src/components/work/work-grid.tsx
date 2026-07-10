"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "SaaS", "Web App", "Tool", "OSS"] as const;

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const shown = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.type === filter),
    [filter]
  );

  return (
    <div>
      {/* filter pills */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = f === filter;
          const count =
            f === "All"
              ? projects.length
              : projects.filter((p) => p.type === f).length;
          if (count === 0 && f !== "All") return null;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-all",
                active
                  ? "border-transparent bg-accent text-accent-fg"
                  : "border-border bg-surface/50 text-fg-muted hover:border-accent/50 hover:text-fg"
              )}
            >
              {f}
              <span className={cn("font-mono text-xs", active ? "opacity-80" : "text-fg-subtle")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* grid */}
      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
