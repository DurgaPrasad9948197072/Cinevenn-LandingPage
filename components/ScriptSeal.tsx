import { Check, FileLock2 } from "lucide-react";
import { scriptSealFeatures } from "@/lib/site";
import Reveal from "./Reveal";

export default function ScriptSeal() {
  return (
    <section id="script-seal" className="border-y border-line bg-[#0c0c0e] py-22 md:py-28">
      <div className="mx-auto grid w-full max-w-[1140px] gap-10 px-5 sm:px-7 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <Reveal>
            <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Script Seal
            </p>
            <h2 className="mb-6 max-w-[20ch] font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em] text-balance">
              Script Seal: protect your script before you pitch it.
            </h2>
          </Reveal>
          <Reveal as="p" delay={60} className="max-w-[56ch] text-muted-fg">
            Seal your script on Cinevenn and get a timestamped certificate of authorship, issued the
            moment you seal it. It&apos;s dated evidence the work was yours, before it ever leaves
            your hands.
          </Reveal>
        </div>

        <Reveal delay={120} className="rounded-2xl border border-accent/28 bg-[linear-gradient(160deg,rgba(245,158,11,.12),var(--card)_55%)] p-7 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden className="inline-flex size-11 items-center justify-center rounded-xl border border-line-strong bg-accent/12 text-accent">
              <FileLock2 className="size-5.5" strokeWidth={1.6} />
            </span>
            <h3 className="font-display text-[21px] font-semibold">Features</h3>
          </div>
          <ul className="grid gap-3.5">
            {scriptSealFeatures.map((f) => (
              <li key={f} className="flex gap-3 text-[15.5px] text-muted-fg">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2.2} />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-[13px] leading-6 text-dim">
            Script Seal provides timestamped evidence of authorship. It is not a copyright
            registration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
