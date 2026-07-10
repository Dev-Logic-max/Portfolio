import { marqueeTech } from "@/content/tech";
import { techColor } from "@/lib/tech-color";

/** Infinite tech marquee with real brand icons. Pauses on hover; static under reduced-motion. */
export function TrustMarquee() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <section
      aria-label="Technologies"
      className="relative border-y border-border bg-surface/40 py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bg to-transparent" />
      <div className="group flex overflow-hidden">
        <div className="flex shrink-0 items-center gap-10 pr-10 motion-safe:animate-marquee group-hover:[animation-play-state:paused]">
          {items.map((t, i) => {
            const Icon = t.icon;
            return (
              <span
                key={i}
                className="inline-flex items-center gap-2 font-mono text-sm font-medium text-fg-subtle transition-colors hover:text-fg"
              >
                <Icon
                  className="size-4 shrink-0"
                  style={{ color: techColor(t.color) }}
                  aria-hidden
                />
                {t.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
