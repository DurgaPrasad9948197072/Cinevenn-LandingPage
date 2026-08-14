"use client";

import { Clapperboard, FileLock2, ShieldCheck, Store, Trophy } from "lucide-react";
import type { MouseEvent } from "react";
import { features } from "@/lib/site";
import Reveal from "./Reveal";

const icons = { ShieldCheck, Clapperboard, FileLock2, Store, Trophy } as const;

export default function Features() {
  /** Pointer-tracked glow — the CSS reads --mx/--my in .card-glow::after */
  const track = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section id="features" className="border-y border-line bg-[#0c0c0e] py-22 md:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-7">
        <Reveal className="mb-11 max-w-[640px]">
          <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            The Platform
          </p>
          <h2 className="max-w-[20ch] font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em]">
            Five pillars. One place the industry can actually work.
          </h2>
        </Reveal>

        {/* Bento: row 1 = two halves, row 2 = three thirds. Always fills the row. */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4.5">
          {features.map((f, i) => {
            const Icon = icons[f.icon];
            const half = i < 2;
            return (
              <Reveal
                key={f.id}
                as="li"
                delay={half ? 0 : 60 * (i - 1)}
                className={half ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <article
                  onMouseMove={track}
                  className={`card-glow relative h-full overflow-hidden rounded-2xl border p-7 transition-colors duration-240 ${
                    f.featured
                      ? "border-accent/28 bg-[linear-gradient(160deg,rgba(245,158,11,.12),var(--card)_55%)]"
                      : "border-line bg-card hover:border-line-strong hover:bg-card-hover"
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute top-5 right-5.5 font-display text-[13px] tracking-[0.1em] text-dim/55"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden
                    className="mb-4.5 inline-flex size-11 items-center justify-center rounded-xl border border-line-strong bg-accent/12 text-accent"
                  >
                    <Icon className="size-5.5" strokeWidth={1.6} />
                  </span>

                  <h3 className="mb-2.5 font-display text-[21px] leading-tight font-semibold">
                    {f.title}
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-muted-fg">{f.body}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
