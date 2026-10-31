import Image from "next/image";
import { site } from "@/lib/site";

type Props = {
  /** Sizing for the frame, e.g. "size-16". */
  className?: string;
  /** Text size for the monogram fallback. */
  monogramClassName?: string;
};

/**
 * Founder photo, or a 46DC monogram until the press-shoot portrait is set in
 * site.founder.photo.
 */
export default function FounderPortrait({ className = "", monogramClassName = "text-lg" }: Props) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border border-accent/30 bg-[radial-gradient(circle_at_30%_25%,rgba(245,158,11,.22),var(--card)_70%)] ${className}`}
    >
      {site.founder.photo ? (
        <Image
          src={site.founder.photo}
          alt={`${site.founder.name} (${site.founder.alternateName})`}
          fill
          sizes="(min-width: 1024px) 320px, 160px"
          className="object-cover"
        />
      ) : (
        <span
          aria-hidden
          className={`absolute inset-0 flex items-center justify-center font-display font-semibold text-accent ${monogramClassName}`}
        >
          46DC
        </span>
      )}
    </span>
  );
}
