"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function readAccentColor() {
  if (typeof window === "undefined") return new THREE.Color("#7b7bff");
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--glow")
    .trim(); // "r g b"
  const [r, g, b] = raw.split(/\s+/).map((n) => Number(n) / 255);
  if ([r, g, b].some((n) => Number.isNaN(n))) return new THREE.Color("#7b7bff");
  return new THREE.Color(r, g, b);
}

function isDarkTheme() {
  if (typeof document === "undefined") return true;
  return document.documentElement.classList.contains("dark");
}

/* ---------------------------------------------------------------------------
   Galaxy — a colored logarithmic-spiral of stars. Particles are distributed
   along 3 spiral arms and tinted from a hot core (gold-white) through violet
   arms to a cool cyan rim, the way a real galaxy grades. Per-vertex colors +
   additive blending give the glowing nebula feel. Gentle rotation + a subtle
   pointer parallax; the whole tint drifts slowly toward the live theme accent.
--------------------------------------------------------------------------- */
function Galaxy({ count = 6000 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const mat = useRef<THREE.PointsMaterial>(null);
  const dark = isDarkTheme();

  const { positions, colors } = useMemo(() => {
    // deterministic PRNG so SSR/first-frame are stable
    let seed = 0x9e3779b9;
    const rand = () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    const arms = 3;
    const armAngle = (Math.PI * 2) / arms;
    const radiusMax = 9;
    const spin = 1.1; // how tightly the arms wind
    const spread = 0.55; // scatter off the arm line

    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    // Galaxy color grade: hot core -> mid -> cool rim (theme-tuned).
    const cCore = dark ? new THREE.Color("#fff2d6") : new THREE.Color("#ffd9a8");
    const cMid = dark ? new THREE.Color("#7b6bff") : new THREE.Color("#6a5cf0");
    const cRim = dark ? new THREE.Color("#38bdf8") : new THREE.Color("#3aa0e8");

    for (let i = 0; i < count; i++) {
      const r = Math.pow(rand(), 0.55) * radiusMax; // denser toward center
      const branch = (i % arms) * armAngle;
      const spinAngle = r * spin;

      // cubic scatter so stars cluster near the arm centerline
      const jitter = () =>
        Math.pow(rand(), 3) * (rand() < 0.5 ? 1 : -1) * spread * r;
      const angle = branch + spinAngle;
      pos[i * 3] = Math.cos(angle) * r + jitter();
      pos[i * 3 + 1] = jitter() * 0.35; // flatter disk
      pos[i * 3 + 2] = Math.sin(angle) * r + jitter();

      // color by normalized radius, with a little randomness
      const tRaw = Math.min(1, r / radiusMax + (rand() - 0.5) * 0.15);
      const mixed = new THREE.Color();
      if (tRaw < 0.5) mixed.copy(cCore).lerp(cMid, tRaw / 0.5);
      else mixed.copy(cMid).lerp(cRim, (tRaw - 0.5) / 0.5);
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return { positions: pos, colors: col };
  }, [count, dark]);

  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.04;
      pointer.current.x += (state.pointer.x - pointer.current.x) * 0.03;
      pointer.current.y += (state.pointer.y - pointer.current.y) * 0.03;
      points.current.rotation.x = 0.35 + pointer.current.y * 0.18;
      points.current.rotation.z = pointer.current.x * 0.08;
    }
    // Subtly bias the whole galaxy toward the live theme accent so it stays on-brand.
    if (mat.current) mat.current.color.lerp(readAccentColor(), 0.02);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={mat}
        size={0.04}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ---------------------------------------------------------------------------
   Distant starfield — faint spherical shell of stars for depth behind the disk.
--------------------------------------------------------------------------- */
function BackgroundStars({ count = 1400 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    let seed = 0x1234abcd;
    const rand = () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 14 + rand() * 10;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y -= delta * 0.008;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation
        color={isDarkTheme() ? "#cbd5ff" : "#9fb0e0"}
        transparent
        opacity={isDarkTheme() ? 0.5 : 0.35}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Three.js scene behind the hero: a colored spiral galaxy + distant starfield. */
export function ParticleField() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 3, 12], fov: 60 }}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      frameloop="always"
    >
      <BackgroundStars />
      <Galaxy />
    </Canvas>
  );
}
