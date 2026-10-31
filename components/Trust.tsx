import { BadgeCheck, BriefcaseBusiness, IdCard, LockKeyhole, ShieldCheck } from "lucide-react";
import { trustPoints } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Same order as trustPoints in lib/site.ts. */
const icons = [IdCard, BadgeCheck, BriefcaseBusiness, LockKeyhole, ShieldCheck];

export default function Trust() {
  return (
    <section id="trust" className="border-y border-line bg-[#0c0c0e] py-22 md:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-7">
        <SectionHeading eyebrow="Trust & Safety" title="Built for trust from the first screen." />

        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((t, i) => {
            const Icon = icons[i];
            return (
              <Reveal as="li" key={t.title} delay={60 * (i % 3)} className="flex gap-4 border-t border-line py-6.5">
                <Icon aria-hidden className="mt-0.5 size-5.5 shrink-0 text-accent" strokeWidth={1.6} />
                <div>
                  <h3 className="mb-1.5 font-semibold">{t.title}</h3>
                  <p className="text-[15.5px] text-muted-fg">{t.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
