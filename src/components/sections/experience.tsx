import { Briefcase, GraduationCap, Rocket } from "lucide-react";
import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const kindMeta = {
  work: { icon: Briefcase, accent: "accent" },
  studio: { icon: Rocket, accent: "accent-violet" },
  education: { icon: GraduationCap, accent: "accent-3" },
} as const;

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border bg-surface-2/40 py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="The path so far"
          lead="Building production SaaS at Cure Logics, running my studio, and 30+ freelance projects before that."
          accent="accent-5"
        />

        <div className="relative mt-14 max-w-3xl">
          {/* vertical line */}
          <div
            className="absolute bottom-0 left-[13px] top-2 w-px sm:left-[15px]"
            style={{
              background:
                "linear-gradient(var(--accent), color-mix(in oklab, var(--accent) 15%, transparent))",
            }}
            aria-hidden
          />
          <div className="space-y-8">
            {experience.map((job, i) => {
              const meta = kindMeta[job.kind ?? "work"];
              const Icon = meta.icon;
              return (
                <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
                  <div className="relative pl-12 sm:pl-14">
                    <span
                      className="absolute left-0 top-0.5 grid size-[27px] place-items-center rounded-xl border sm:size-[31px]"
                      style={{
                        borderColor: `color-mix(in oklab, var(--${meta.accent}) 40%, transparent)`,
                        background: `color-mix(in oklab, var(--${meta.accent}) 12%, var(--bg-raw))`,
                        color: `var(--${meta.accent})`,
                      }}
                      aria-hidden
                    >
                      <Icon className="size-4" />
                    </span>
                    <div className="rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur transition-colors hover:border-border-strong">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="font-display text-lg font-semibold text-fg">
                          {job.role}
                        </h3>
                        <span className="font-mono text-xs text-fg-subtle">
                          {job.start} — {job.end}
                        </span>
                      </div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: `var(--${meta.accent})` }}
                      >
                        {job.company}
                        {job.location && (
                          <span className="text-fg-subtle"> · {job.location}</span>
                        )}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                        {job.summary}
                      </p>
                      {job.impact.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {job.impact.map((point, j) => (
                            <li key={j} className="flex gap-2 text-sm text-fg-muted">
                              <span
                                className="mt-2 size-1 shrink-0 rounded-full"
                                style={{ background: `var(--${meta.accent})` }}
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                      {job.stack && job.stack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {job.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-border bg-surface-2/60 px-2 py-0.5 font-mono text-[11px] text-fg-subtle"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
