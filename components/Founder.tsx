import { site } from "@/lib/site";
import FounderPortrait from "./FounderPortrait";
import Reveal from "./Reveal";

const link =
  "border-b border-line-strong text-muted-fg transition-colors duration-160 hover:border-accent hover:text-accent";

export default function Founder() {
  const handle = site.founder.handle.replace(/^@/, "");
  return (
    <section id="founder" className="py-22 md:py-28">
      <div className="mx-auto grid w-full max-w-[1140px] items-center gap-10 px-5 sm:px-7 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14">
        <Reveal>
          <FounderPortrait className="size-40 md:size-64" monogramClassName="text-5xl md:text-7xl" />
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Founder
            </p>
            <h2 className="mb-6 max-w-[20ch] font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em] text-balance">
              Built by someone who loves cinema.
            </h2>
          </Reveal>
          <Reveal as="p" delay={60} className="mb-6 max-w-[60ch] text-muted-fg">
            {site.founder.name}, known as {site.founder.alternateName}, is the founder of{" "}
            {site.ecosystem.name} and Cinevenn. He&apos;s building Cinevenn so the people who make film
            can be seen, hired and credited.
          </Reveal>
          <Reveal as="p" delay={120} className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px]">
            <a href={site.founder.url} rel="noopener" target="_blank" className={link}>
              46dc.com
            </a>
            <span aria-hidden className="text-line-strong">·</span>
            <a href={site.founder.linkedin} rel="noopener" target="_blank" className={link}>
              LinkedIn
            </a>
            <span aria-hidden className="text-line-strong">·</span>
            <a href={`https://x.com/${handle}`} rel="noopener" target="_blank" className={link}>
              {site.founder.handle}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
