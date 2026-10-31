import { audience } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Audience() {
  return (
    <section id="audience" className="py-22 md:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-7">
        <SectionHeading eyebrow="Who It's For" title="Everyone who makes film happen." />

        <ul className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-7">
          {audience.map((a, i) => (
            <Reveal as="li" key={a.title} delay={60 * (i % 3)} className="border-t border-line py-6.5">
              <h3 className="mb-2 font-display text-xl font-semibold">{a.title}</h3>
              <p className="max-w-[44ch] text-[15.5px] text-muted-fg lg:max-w-none">{a.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
