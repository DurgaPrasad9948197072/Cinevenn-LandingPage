import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import Footer from "./Footer";

type Props = {
  title: string;
  /** e.g. "27 October 2026" */
  updated: string;
  children: ReactNode;
};

/**
 * Shell for /privacy, /terms and /founding-terms. Body copy is plain JSX —
 * the descendant selectors below style it, so pages stay pure content.
 */
export default function LegalPage({ title, updated, children }: Props) {
  return (
    <>
      <header className="px-4 pt-3.5 sm:px-7">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 py-2.5 pl-4">
          <Link href="/" aria-label="Cinevenn home" className="inline-flex items-center gap-2.5">
            <Image src="/cinevenn-logo.png" alt="" width={302} height={396} priority className="h-[34px] w-auto" />
            <span className="font-display text-xl font-semibold">Cinevenn</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-fg transition-colors duration-160 hover:text-accent"
          >
            <ArrowLeft className="size-4" />
            Back to {site.name}
          </Link>
        </div>
      </header>

      <main id="main" className="py-16 md:py-22">
        <article
          className="mx-auto w-full max-w-[760px] px-5 text-muted-fg sm:px-7
            [&_a]:text-foreground [&_a]:underline [&_a]:decoration-line-strong [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-accent [&_a:hover]:decoration-accent
            [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-[26px] [&_h2]:leading-tight [&_h2]:font-medium [&_h2]:text-foreground
            [&_li]:pl-1 [&_p]:mb-4 [&_strong]:font-semibold [&_strong]:text-foreground
            [&_table]:mb-5 [&_table]:w-full [&_table]:text-left [&_table]:text-[15px]
            [&_td]:border-t [&_td]:border-line [&_td]:px-4 [&_td]:py-3 [&_td]:align-top
            [&_th]:px-4 [&_th]:py-3 [&_th]:text-xs [&_th]:font-semibold [&_th]:tracking-[0.12em] [&_th]:text-dim [&_th]:uppercase
            [&_ul]:mb-5 [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:marker:text-accent"
        >
          <h1 className="mb-3 font-display text-[clamp(34px,6vw,52px)] leading-[1.1] font-medium tracking-[-0.02em] text-foreground">
            {title}
          </h1>
          <p className="!mb-10 text-sm text-dim">Last updated: {updated}</p>
          {children}
        </article>
      </main>

      <Footer />
    </>
  );
}

/** Bordered wrapper so legal tables match the landing page's card style. */
export function LegalTable({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 overflow-x-auto rounded-2xl border border-line bg-card">
      <table className="!mb-0">{children}</table>
    </div>
  );
}
