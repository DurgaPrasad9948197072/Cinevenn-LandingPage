import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  className?: string;
};

/** Eyebrow + display heading used at the top of every content section. */
export default function SectionHeading({ eyebrow, title, className = "mb-11 max-w-[640px]" }: Props) {
  return (
    <Reveal className={className}>
      <p className="mb-3.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="max-w-[22ch] font-display text-[clamp(28px,5.2vw,44px)] leading-[1.15] font-medium tracking-[-0.015em] text-balance">
        {title}
      </h2>
    </Reveal>
  );
}
