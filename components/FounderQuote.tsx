import { Quote } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function FounderQuote() {
  return (
    <section aria-label="Founder statement" className="border-y border-line bg-card py-19 md:py-26">
      <Reveal className="mx-auto w-full max-w-[860px] px-5 text-center sm:px-7">
        <Quote aria-hidden className="mx-auto mb-5.5 size-11 fill-accent/35 text-accent/35" />
        <blockquote className="font-display text-[clamp(23px,4.4vw,38px)] leading-[1.3] font-medium tracking-[-0.01em] text-balance italic">
          This is my love for cinema. This is why I&apos;m building it — we need cinema to
          feel alive.
        </blockquote>
        {/* Attribution links to the founder URL asserted in the Organization
            schema, so the structured data is backed by a visible link. */}
        <p className="mt-6.5 inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.16em] text-dim uppercase">
          <span aria-hidden className="block h-px w-8.5 bg-line-strong" />
          <span>
            <a
              href={site.founder.url}
              rel="noopener"
              target="_blank"
              className="text-muted-fg underline decoration-dim decoration-from-font underline-offset-4 transition-colors duration-160 hover:text-accent hover:decoration-accent"
            >
              {site.founder.alternateName}
            </a>{", Founder"}
          </span>
        </p>
      </Reveal>
    </section>
  );
}
