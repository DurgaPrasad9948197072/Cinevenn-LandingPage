import Link from "next/link";
import { roleUnlocks, site } from "@/lib/site";
import FounderPortrait from "./FounderPortrait";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SignupForm from "./SignupForm";

export default function FoundingMembers({ value }: { value: string }) {
  return (
    <section id="founding-members" className="py-22 md:py-28">
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-7">
        <SectionHeading
          eyebrow="Founding Members"
          title={<>Be a Founding Member. Get {value} of Cinevenn free.</>}
          className="mb-6 max-w-[760px]"
        />
        <Reveal as="p" delay={60} className="mb-12 max-w-[62ch] text-muted-fg">
          Join before launch and every paid feature for the role you choose at sign-up is free for
          12 months from launch day. No card, no caps, no catch.
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <Reveal as="h3" className="mb-4 font-display text-xl font-semibold">
              What your role unlocks
            </Reveal>
            <Reveal delay={60} className="overflow-hidden rounded-2xl border border-line bg-card">
              <table className="w-full text-left text-[15px]">
                <thead className="text-xs tracking-[0.12em] text-dim uppercase">
                  <tr className="border-b border-line">
                    <th scope="col" className="px-5 py-3.5 font-semibold">Role you choose at sign-up</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Free for 12 months</th>
                  </tr>
                </thead>
                <tbody>
                  {roleUnlocks.map((r) => (
                    <tr key={r.role} className="border-b border-line align-top last:border-0">
                      <th scope="row" className="w-[45%] px-5 py-4 font-medium">{r.role}</th>
                      <td className="px-5 py-4 text-muted-fg">{r.unlocks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            <Reveal as="p" delay={100} className="mt-5 text-[15px] text-muted-fg">
              <strong className="font-semibold text-foreground">Verification:</strong> Verification
              is free for Founding Members. If your identity can&apos;t be verified, no badge is
              issued, and no payment, refund or discount is given in its place.
            </Reveal>
            <Reveal delay={120} className="mt-7">
              <SignupForm source="offer" />
            </Reveal>
            <Reveal as="p" delay={140} className="mt-6 text-[13px] leading-6 text-dim">
              Free for 12 months from launch day, for everyone who joins before launch. No caps on
              included features. Values are based on Cinevenn&apos;s standard yearly prices and
              depend on your role. Full terms at{" "}
              <Link
                href="/founding-terms"
                className="text-muted-fg underline decoration-line-strong underline-offset-4 transition-colors duration-160 hover:text-accent hover:decoration-accent"
              >
                cinevenn.com/founding-terms
              </Link>
              .
            </Reveal>
          </div>

          <Reveal delay={120} as="aside" aria-labelledby="founder-note" className="lg:pt-11">
            <div className="relative overflow-hidden rounded-2xl border border-accent/28 bg-[linear-gradient(160deg,rgba(245,158,11,.10),var(--card)_55%)] p-7 sm:p-8">
              <div className="mb-5 flex items-center gap-4">
                <FounderPortrait className="size-16" />
                <h3 id="founder-note" className="font-display text-2xl font-semibold">
                  Why a year free?
                </h3>
              </div>
              <div className="grid gap-4 text-[15.5px] text-muted-fg">
                <p>
                  Every film starts with someone who believes in it before anyone else does. For
                  Cinevenn, that someone is you.
                </p>
                <p>
                  You&apos;re trusting us before launch, before the reviews, before most people even
                  know our name. There&apos;s no price for that kind of trust, so we won&apos;t try to
                  put one on it.
                </p>
                <p>
                  Instead, we&apos;re giving something back: a full year of Cinevenn, free. I call it
                  a small gift, because your being here is worth far more than anything we could
                  offer.
                </p>
                <p>Thank you for believing in this early. I won&apos;t forget it.</p>
              </div>
              <p aria-hidden className="mt-6 font-display text-[32px] leading-none text-accent italic">
                {site.founder.name}
              </p>
              <p className="mt-2.5 text-[13.5px] text-dim">
                — {site.founder.name} ({site.founder.alternateName}), Founder, Cinevenn
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
