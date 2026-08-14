"use client";

import { useRef } from "react";
import { faqs } from "@/lib/site";
import Reveal from "./Reveal";

export default function Faq() {
  const listRef = useRef<HTMLDivElement>(null);

  /** Accordion behaviour: opening one answer closes the rest. */
  const closeOthers = (current: HTMLDetailsElement) => {
    if (!current.open) return;
    listRef.current
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((el) => {
        if (el !== current) el.open = false;
      });
  };

  return (
    <section id="faq" className="border-y border-line bg-[#0c0c0e] py-22 md:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-7">
        <Reveal className="mb-11 max-w-[640px]">
          <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            FAQ
          </p>
          <h2 className="max-w-[20ch] font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em]">
            Short answers, straight up.
          </h2>
        </Reveal>

        {/* Native <details> keeps every answer in the DOM for crawlers and
            AI answer engines, even while collapsed. */}
        <div ref={listRef} className="max-w-[820px] border-t border-line">
          {faqs.map((f, i) => (
            <Reveal key={f.q} as="div" delay={i < 3 ? 60 * i : 0}>
              <details
                open={i === 0}
                onToggle={(e) => closeOthers(e.currentTarget)}
                className="group border-b border-line"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-5 py-5.5 text-[17px] leading-snug font-medium transition-colors duration-160 hover:text-accent group-open:text-accent">
                  <span>{f.q}</span>
                  <span aria-hidden className="relative size-5 shrink-0">
                    <span className="absolute top-1/2 left-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 rounded bg-current" />
                    <span className="absolute top-1/2 left-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-90 rounded bg-current transition-all duration-240 group-open:rotate-0 group-open:opacity-0" />
                  </span>
                </summary>
                <div className="pb-6">
                  <p className="max-w-[70ch] text-base text-muted-fg">{f.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
