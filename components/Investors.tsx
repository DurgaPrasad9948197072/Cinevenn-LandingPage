import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Investors() {
  return (
    <section id="investors" className="border-y border-line bg-[#0c0c0e] py-16 md:py-20">
      <Reveal className="mx-auto flex w-full max-w-[1140px] flex-col gap-3 px-5 sm:px-7 md:flex-row md:items-baseline md:justify-between md:gap-10">
        <h2 className="font-display text-[clamp(24px,3.6vw,32px)] leading-tight font-medium">
          Investors and partners
        </h2>
        <p className="text-muted-fg">
          For investment, partnership or press enquiries, email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-foreground underline decoration-line-strong underline-offset-4 transition-colors duration-160 hover:text-accent hover:decoration-accent"
          >
            {site.email}
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
