import { Rocket, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const phases = [
  {
    icon: Rocket,
    label: "Phase 1 — at launch",
    body: "Every tool is live from day one and open worldwide. We're focusing first on the UK, USA and India, but anyone, anywhere can join.",
    current: true,
  },
  {
    icon: Sparkles,
    label: "Phase 2 — AI and younger members",
    body: "AI features across Cinevenn, from smarter matching between roles and talent to faster discovery and new tools for writers and productions. Phase 2 also opens Cinevenn to members aged 13 and over, with extra protections for younger members.",
    current: false,
  },
];

export default function Phases() {
  return (
    <section id="phases" className="border-y border-line bg-[#0c0c0e] py-22 md:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-7">
        <SectionHeading
          eyebrow="Phase 1 and what's next"
          title="Phase 1 is the complete platform. Phase 2 brings AI."
          className="mb-11 max-w-[720px]"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:gap-4.5">
          {phases.map((p, i) => (
            <Reveal
              key={p.label}
              delay={60 * i}
              className={`rounded-2xl border p-7 sm:p-8 ${
                p.current
                  ? "border-accent/28 bg-[linear-gradient(160deg,rgba(245,158,11,.12),var(--card)_55%)]"
                  : "border-line bg-card"
              }`}
            >
              <span aria-hidden className="mb-4.5 inline-flex size-11 items-center justify-center rounded-xl border border-line-strong bg-accent/12 text-accent">
                <p.icon className="size-5.5" strokeWidth={1.6} />
              </span>
              <h3 className="mb-2.5 font-display text-[21px] leading-tight font-semibold">{p.label}</h3>
              <p className="text-[15.5px] leading-relaxed text-muted-fg">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
