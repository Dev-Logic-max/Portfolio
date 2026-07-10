"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Typewriter that cycles through phrases (type → hold → delete → next).
 * Under reduced-motion it shows the first phrase statically.
 * The caret is a thin accent bar.
 */
export function TypingText({
  phrases,
  className,
  typingSpeed = 65,
  deletingSpeed = 32,
  holdTime = 1600,
}: {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  holdTime?: number;
}) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(reduce ? phrases[0] : "");
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (reduce) return;
    const current = phrases[index % phrases.length];
    let deleting = false;
    let char = 0;

    function tick() {
      if (!deleting) {
        char++;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer.current = setTimeout(tick, holdTime);
          return;
        }
        timer.current = setTimeout(tick, typingSpeed);
      } else {
        char--;
        setText(current.slice(0, char));
        if (char === 0) {
          setIndex((v) => v + 1);
          return; // effect re-runs for next phrase
        }
        timer.current = setTimeout(tick, deletingSpeed);
      }
    }

    timer.current = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer.current);
  }, [index, phrases, reduce, typingSpeed, deletingSpeed, holdTime]);

  // Reserve space for the LONGEST phrase so the layout never shifts as it types.
  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      {/* invisible sizer keeps height/width stable */}
      <span className="invisible" aria-hidden>
        {longest}
      </span>
      {/* animated text overlaid */}
      <span className="absolute inset-0 whitespace-nowrap">
        <span className="text-aurora">{text}</span>
        {!reduce && (
          <span
            className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] animate-pulse rounded-full align-middle"
            style={{ background: "var(--accent)" }}
            aria-hidden
          />
        )}
      </span>
    </span>
  );
}
