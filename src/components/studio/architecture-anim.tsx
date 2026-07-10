"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Users,
  Server,
  Database,
  GitBranch,
  Container,
  Activity,
  Globe,
} from "lucide-react";

/**
 * Animated system-architecture diagram for the Studio hero. SVG edges draw in,
 * a data pulse flows along them, and nodes pop with a soft glow. Pure Motion/SVG
 * (no WebGL) so it's light and works everywhere. Reduced-motion → static diagram.
 */

type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: typeof Server;
  accent: string;
};

// coordinates on a 0–100 viewBox grid
const NODES: Node[] = [
  { id: "client", x: 12, y: 30, label: "Client", icon: Users, accent: "accent-2" },
  { id: "cdn", x: 12, y: 70, label: "Edge / CDN", icon: Globe, accent: "accent-3" },
  { id: "api", x: 45, y: 50, label: "API", icon: Server, accent: "accent" },
  { id: "db", x: 78, y: 30, label: "Postgres", icon: Database, accent: "accent-4" },
  { id: "ci", x: 78, y: 70, label: "CI/CD", icon: GitBranch, accent: "accent-5" },
  { id: "docker", x: 45, y: 12, label: "Docker", icon: Container, accent: "accent-violet" },
  { id: "monitor", x: 45, y: 88, label: "Monitoring", icon: Activity, accent: "accent-6" },
];

const EDGES: [string, string][] = [
  ["client", "api"],
  ["cdn", "api"],
  ["api", "db"],
  ["api", "ci"],
  ["docker", "api"],
  ["api", "monitor"],
];

const nodeById = (id: string) => NODES.find((n) => n.id === id)!;

export function ArchitectureAnim() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-4/3 w-full">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full overflow-visible"
        aria-hidden
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent-violet)" />
            <stop offset="50%" stopColor="var(--accent-2)" />
            <stop offset="100%" stopColor="var(--accent-3)" />
          </linearGradient>
        </defs>

        {EDGES.map(([a, b], i) => {
          const from = nodeById(a);
          const to = nodeById(b);
          return (
            <g key={`${a}-${b}`}>
              <motion.line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#edge)"
                strokeWidth={0.5}
                strokeLinecap="round"
                initial={reduce ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.55 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: "easeInOut" }}
              />
              {/* data pulse */}
              {!reduce && (
                <motion.circle
                  r={0.8}
                  fill="var(--accent-3)"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: [0, 1, 1, 0],
                    cx: [from.x, to.x],
                    cy: [from.y, to.y],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.6,
                    delay: 1 + i * 0.25,
                    repeat: Infinity,
                    repeatDelay: 1.4,
                    ease: "easeInOut",
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* nodes */}
      {NODES.map((n, i) => (
        <motion.div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="relative grid size-11 place-items-center rounded-xl border bg-surface/90 backdrop-blur sm:size-13"
              style={{
                borderColor: `color-mix(in oklab, var(--${n.accent}) 45%, transparent)`,
                color: `var(--${n.accent})`,
                boxShadow: `0 0 20px -6px var(--${n.accent})`,
              }}
            >
              <n.icon className="size-5 sm:size-6" />
              {!reduce && (
                <motion.span
                  className="absolute inset-0 rounded-xl"
                  style={{ border: `1px solid var(--${n.accent})` }}
                  animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.35, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.3 }}
                />
              )}
            </div>
            <span className="whitespace-nowrap font-mono text-[10px] text-fg-muted sm:text-xs">
              {n.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
