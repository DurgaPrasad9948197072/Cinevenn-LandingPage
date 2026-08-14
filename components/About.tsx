import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-22 md:py-28">
      <div className="mx-auto grid w-full max-w-[1140px] gap-8 px-5 sm:px-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
        <Reveal className="lg:sticky lg:top-26 lg:self-start">
          <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            About
          </p>
          <h2 className="max-w-[20ch] font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em]">
            Most tools solve one problem. Cinevenn solves the whole thing.
          </h2>
        </Reveal>

        <div className="grid max-w-[66ch] gap-5 text-muted-fg">
          <Reveal as="p" delay={60}>
            Most tools for the film industry solve one problem — casting, or scripts, or crew
            hiring. Cinevenn solves the whole thing. It&apos;s a single platform for directors,
            producers, writers, crew, and every professional the industry runs on, built the way
            LinkedIn connects professionals — but designed specifically for how film actually
            gets made.
          </Reveal>
          <Reveal as="p" delay={120}>
            Phase 1 launches in India, the world&apos;s largest film market by volume, before
            expanding globally. From there, Cinevenn becomes what the industry has never had:
            real digital infrastructure for cinema collaboration, worldwide.
          </Reveal>
          <Reveal as="p" delay={180}>
            It started inside FourSix46®, built by Stack46 with the same discipline as
            everything else we build.{" "}
            <strong className="font-semibold text-foreground">
              Every profile is verified. Every script is protected. Every connection means
              something.
            </strong>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
