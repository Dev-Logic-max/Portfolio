"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight animated "distributed systems" constellation on a 2D canvas.
 * No WebGL, tiny footprint. Pauses off-screen / when tab hidden, and stays
 * frozen under prefers-reduced-motion. Reads accent color from CSS vars so it
 * matches the active theme.
 */
export function ConstellationCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];

    function readAccent() {
      const s = getComputedStyle(document.documentElement);
      const raw = s.getPropertyValue("--glow").trim(); // "r g b"
      return raw || "123 123 255";
    }
    let rgb = readAccent();

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        70,
        Math.max(28, Math.floor((width * height) / 22000))
      );
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const maxDist = Math.min(160, width / 6);

      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.5;
            ctx!.strokeStyle = `rgba(${rgb} / ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      // nodes
      for (const n of nodes) {
        ctx!.fillStyle = `rgba(${rgb} / 0.9)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop() {
      if (!running) return;
      draw();
      if (!reduce) raf = requestAnimationFrame(loop);
    }

    resize();
    loop();

    const onResize = () => {
      rgb = readAccent();
      resize();
      if (reduce) draw();
    };
    window.addEventListener("resize", onResize);

    // pause when off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !reduce) loop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVis = () => {
      running = !document.hidden;
      if (running && !reduce) loop();
    };
    document.addEventListener("visibilitychange", onVis);

    // re-read accent when theme class flips
    const mo = new MutationObserver(() => {
      rgb = readAccent();
      if (reduce) draw();
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
