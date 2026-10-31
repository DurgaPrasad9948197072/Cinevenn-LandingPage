import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

/** Text wordmarks stand in until the official FourSix46® and Stack46 logo files are added. */
export default function Venture() {
  return (
    <section id="venture" className="border-y border-line bg-[#0c0c0e] py-22 md:py-28">
      <div className="mx-auto grid w-full max-w-[1140px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <div>
          <Reveal>
            <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              A {site.ecosystem.name} venture
            </p>
            <h2 className="mb-6 max-w-[22ch] font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em] text-balance">
              A {site.ecosystem.name} venture. Built by {site.builder.name}.
            </h2>
          </Reveal>
          <Reveal as="p" delay={60} className="mb-7 max-w-[60ch] text-muted-fg">
            Cinevenn is part of the {site.ecosystem.name} ecosystem: {site.ecosystem.tagline}.
            FourSix46 builds the technology, systems and structure that industries scale on.
            Cinevenn is its platform for film and entertainment, engineered by {site.builder.name}.
          </Reveal>
          <Reveal delay={120}>
            <a
              href={site.ecosystem.url}
              rel="noopener"
              target="_blank"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-line-strong px-6 text-[15px] font-semibold transition-colors duration-160 hover:border-white/28 hover:bg-card-hover"
            >
              Explore FourSix46
              <ArrowUpRight className="size-4 transition-transform duration-240 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          <a
            href={site.ecosystem.url}
            rel="noopener"
            target="_blank"
            className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-line bg-card font-display text-[clamp(22px,3.4vw,30px)] font-semibold transition-colors duration-160 hover:border-line-strong hover:bg-card-hover"
          >
            {site.ecosystem.name}
          </a>
          <a
            href={site.builder.url}
            rel="noopener"
            target="_blank"
            className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-line bg-card text-[clamp(20px,3vw,27px)] font-semibold tracking-[0.06em] uppercase transition-colors duration-160 hover:border-line-strong hover:bg-card-hover"
          >
            {site.builder.name}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
