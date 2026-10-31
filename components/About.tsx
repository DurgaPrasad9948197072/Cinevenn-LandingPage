import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-[#0c0c0e] py-22 md:py-28">
      <div className="mx-auto grid w-full max-w-[1140px] gap-8 px-5 sm:px-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
        <Reveal className="lg:sticky lg:top-26 lg:self-start">
          <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Why Cinevenn
          </p>
          <h2 className="max-w-[20ch] font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em]">
            Most tools solve one problem. Cinevenn solves the whole thing.
          </h2>
        </Reveal>

        <div className="grid max-w-[66ch] gap-5 text-muted-fg">
          <Reveal as="p" delay={60}>
            Film runs on people finding each other: the right actor, the right crew, the right
            script, at the right time. Today that happens across scattered apps, agencies, inboxes
            and favours.
          </Reveal>
          <Reveal as="p" delay={120}>
            Cinevenn brings it all into one place. Build your profile, grow your Circle, hire or get
            hired through Call Sheet, protect your scripts with Script Seal, and get discovered on
            merit.
          </Reveal>
          <Reveal as="p" delay={180}>
            It&apos;s built for how film actually gets made, in every language and every film
            industry, not just the biggest ones.
          </Reveal>
          <Reveal as="p" delay={240} className="mt-2 border-l-2 border-accent pl-5 font-display text-[clamp(21px,2.8vw,26px)] leading-snug text-foreground italic">
            Film still runs on who you know. Cinevenn runs on what you can do.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
