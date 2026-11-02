import Image from "next/image";
import { site } from "@/lib/site";

type Props = {
  /** "card" is the 3:4 Founder-section portrait; "avatar" is a round head crop. */
  variant?: "card" | "avatar";
  /** Sizing for the frame, e.g. "size-16" or "w-64". */
  className?: string;
};

const alt = `${site.founder.name} (${site.founder.alternateName})`;

export default function FounderPortrait({ variant = "avatar", className = "" }: Props) {
  if (variant === "card") {
    return (
      <span
        className={`relative block aspect-[3/4] shrink-0 overflow-hidden rounded-2xl border border-line bg-card shadow-[0_24px_60px_-28px_rgba(0,0,0,.8)] ${className}`}
      >
        <Image
          src={site.founder.photo.portrait}
          alt={alt}
          fill
          sizes="(min-width: 768px) 320px, 80vw"
          className="object-cover"
        />
      </span>
    );
  }

  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border border-accent/30 bg-card ${className}`}
    >
      <Image src={site.founder.photo.avatar} alt={alt} fill sizes="128px" className="object-cover" />
    </span>
  );
}
