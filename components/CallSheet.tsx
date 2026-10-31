import { BadgeCheck, Wrench } from "lucide-react";
import { callSheetSteps } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function CallSheet() {
  return (
    <section id="call-sheet" className="py-22 md:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-7">
        <SectionHeading
          eyebrow="Call Sheet"
          title="Call Sheet: casting, crew and services in one place."
          className="mb-6 max-w-[720px]"
        />
        <Reveal as="p" delay={60} className="mb-12 max-w-[64ch] text-muted-fg">
          On a film set, the call sheet tells everyone who&apos;s needed, where and when.
          Cinevenn&apos;s Call Sheet does the same for hiring. Auditions, casting calls, crew jobs
          and production services all live here.
        </Reveal>

        <Reveal as="h3" className="mb-5 font-display text-xl font-semibold">
          How it works
        </Reveal>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {callSheetSteps.map((s, i) => (
            <Reveal
              key={s.title}
              as="li"
              delay={60 * i}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <span className="mb-4 inline-flex size-9 items-center justify-center rounded-full border border-accent/40 font-display text-[15px] font-semibold text-accent">
                {i + 1}
              </span>
              <h4 className="mb-2 font-semibold">{s.title}</h4>
              <p className="text-[15px] leading-relaxed text-muted-fg">{s.body}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal className="flex gap-4 rounded-2xl border border-line p-6">
            <BadgeCheck aria-hidden className="mt-0.5 size-5.5 shrink-0 text-accent" strokeWidth={1.6} />
            <p className="text-[15px] text-muted-fg">
              <strong className="font-semibold text-foreground">Trust: </strong>
              Posts from companies with the Hiring badge are verified, so applicants know a real
              production is behind them.
            </p>
          </Reveal>
          <Reveal delay={60} className="flex gap-4 rounded-2xl border border-line p-6">
            <Wrench aria-hidden className="mt-0.5 size-5.5 shrink-0 text-accent" strokeWidth={1.6} />
            <p className="text-[15px] text-muted-fg">
              <strong className="font-semibold text-foreground">Services and equipment: </strong>
              Equipment hire, post-production, studios and other production services can list and
              be found on Call Sheet too.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
