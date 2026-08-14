import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { value: "5", label: "Core pillars, one platform" },
  { value: "100%", label: "Verified profiles & credits" },
  { value: "India", label: "Phase 1 launch market" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-19 md:pt-34 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-30%] left-1/2 -z-10 aspect-square w-[min(1100px,150vw)] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(245,158,11,.16) 0%, rgba(245,158,11,.05) 32%, rgba(245,158,11,0) 62%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-7">
        <div className="max-w-[900px]">
          {/* Brand mark leads the hero. `priority` because it is the LCP element. */}
          <Reveal className="mb-8 md:mb-9">
            <span className="relative inline-block">
              <span
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[240%] -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,158,11,.22) 0%, rgba(245,158,11,.06) 45%, transparent 70%)",
                }}
              />
              <Image
                src="/cinevenn-logo.png"
                alt="Cinevenn"
                width={302}
                height={396}
                priority
                className="h-24 w-auto drop-shadow-[0_0_28px_rgba(245,158,11,.35)] sm:h-28 lg:h-32"
              />
            </span>
          </Reveal>

          <Reveal as="p" delay={60} className="mb-6.5 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-accent/12 py-1.75 pr-4 pl-3 text-[13px] font-medium text-accent-hover">
            <span aria-hidden className="animate-pulse-gold size-1.75 shrink-0 rounded-full bg-accent" />
            Phase 1 — India · Coming soon
          </Reveal>

          <Reveal as="h1" delay={120} className="mb-6 font-display text-[clamp(38px,8.2vw,76px)] leading-[1.06] font-medium tracking-[-0.025em] text-balance">
            Cinevenn is the{" "}
            <em className="text-gradient-gold italic">digital infrastructure</em>{" "}
            for the global film industry.
          </Reveal>

          <Reveal as="p" delay={180} className="mb-8.5 max-w-[60ch] text-[clamp(16.5px,2.1vw,19px)] text-muted-fg">
            Verified profiles, real auditions, protected scripts, a working marketplace, and
            open challenges — one platform for everyone who makes film happen. Phase 1
            launches in India, the world&apos;s largest film market by volume, before
            expanding globally.
          </Reveal>

          <Reveal delay={240} className="mb-14 flex flex-wrap gap-3">
            <a
              href="#join"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-accent px-6 text-[15px] font-semibold text-[#0a0a0a] transition-all duration-160 hover:bg-accent-hover hover:shadow-[0_0_26px_-6px_rgba(245,158,11,.5)]"
            >
              Be First to Join
            </a>
            <a
              href="#features"
              className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-line-strong px-6 text-[15px] font-semibold transition-colors duration-160 hover:border-white/28 hover:bg-card-hover"
            >
              How It Works
              <ArrowDown className="size-4 transition-transform duration-240 group-hover:translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal delay={300} as="ul" className="grid gap-5 border-t border-line pt-8 sm:grid-cols-3 sm:gap-7">
            {stats.map((s) => (
              <li key={s.label} className="flex flex-col gap-1">
                <strong className="font-display text-3xl leading-none font-semibold text-accent">
                  {s.value}
                </strong>
                <span className="text-sm text-dim">{s.label}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-30 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
}
