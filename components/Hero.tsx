import Link from "next/link";
import { site, stats } from "@/lib/site";
import Reveal from "./Reveal";
import SignupForm from "./SignupForm";

const link =
  "text-muted-fg underline decoration-line-strong underline-offset-4 transition-colors duration-160 hover:text-accent hover:decoration-accent";

export default function Hero({ value }: { value: string }) {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-33 pb-19 md:pt-42 md:pb-24">
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
          <Reveal as="p" className="mb-6.5 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-accent/12 py-1.75 pr-4 pl-3 text-[13px] font-medium text-accent-hover">
            <span aria-hidden className="animate-pulse-gold size-1.75 shrink-0 rounded-full bg-accent" />
            Phase 1 · Open worldwide · UK · USA · India
          </Reveal>

          <Reveal as="h1" delay={60} className="mb-6 font-display text-[clamp(40px,8.6vw,82px)] leading-[1.04] font-medium tracking-[-0.025em]">
            Get seen. Get hired.{" "}
            <em className="text-gradient-gold italic sm:block">Get credit.</em>
          </Reveal>

          <Reveal as="p" delay={120} className="mb-8.5 max-w-[60ch] text-[clamp(16.5px,2.1vw,19px)] text-muted-fg">
            A home for cinema. Verified profiles, Call Sheet for casting and crew, Script Seal for
            writers, and every tool in between. Open to the world from day one.
          </Reveal>

          <Reveal delay={180} className="mb-6 max-w-[560px]">
            <SignupForm
              id="claim"
              source="hero"
              note={
                <>
                  Founding Members get {value} of Cinevenn free for 12 months. No card needed.{" "}
                  <Link href="/founding-terms" className={link}>
                    Terms apply
                  </Link>
                  .
                </>
              }
            />
          </Reveal>

          <Reveal as="p" delay={220} className="mb-14 text-sm text-dim">
            A{" "}
            <a href={site.ecosystem.url} rel="noopener" target="_blank" className={link}>
              {site.ecosystem.name}
            </a>{" "}
            venture · Founded by{" "}
            <a href={site.founder.url} rel="noopener" target="_blank" className={link}>
              {site.founder.name} ({site.founder.alternateName})
            </a>
          </Reveal>

          <Reveal delay={240} as="ul" className="grid gap-6 border-t border-line pt-8 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">
            {stats.map((s) => (
              <li key={s.label} className="flex flex-col gap-1.5">
                <strong className="font-display text-[26px] leading-none font-semibold text-accent">
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
