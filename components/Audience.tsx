import { audience } from "@/lib/site";
import Reveal from "./Reveal";

export default function Audience() {
  return (
    <section id="audience" className="py-22 md:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-7">
        <Reveal className="mb-11 max-w-[640px]">
          <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Who It&apos;s For
          </p>
          <h2 className="max-w-[20ch] font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em]">
            Everyone who makes film happen.
          </h2>
        </Reveal>

        <ul className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-7">
          {audience.map((a, i) => (
            <Reveal as="li" key={a.title} delay={60 * i} className="border-t border-line py-6.5">
              <h3 className="mb-2 font-display text-xl font-semibold">{a.title}</h3>
              <p className="max-w-[44ch] text-[15.5px] text-muted-fg lg:max-w-none">{a.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
