import Image from "next/image";
import Link from "next/link";
import { site, socials } from "@/lib/site";

/** Brand glyphs — lucide has no brand icons, so these are the official marks. */
const paths: Record<string, string> = {
  LinkedIn:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.3 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.03 0-2.34 1.58-2.34 3.21V21H9z",
  Facebook:
    "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94",
  X: "M17.53 3h3.13l-6.84 7.82L22 21h-6.3l-4.93-6.44L5.13 21H2l7.32-8.37L2.3 3h6.46l4.46 5.89zm-1.1 16.13h1.73L7.66 4.78H5.8z",
  Instagram:
    "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9s.68.82.9 1.38c.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38s-.82.68-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9s-.68-.82-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68 1.38-.9c.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2m0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.71.31-.43.17-.74.37-1.06.69s-.52.63-.69 1.06c-.12.33-.27.81-.31 1.71C3.43 8.5 3.42 8.85 3.42 12s.01 3.5.07 4.74c.4.9.19 1.38.31 1.71.17.43.37.74.69 1.06s.63.52 1.06.69c.33.12.81.27 1.71.31 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.71-.31.43-.17.74-.37 1.06-.69s.52-.63.69-1.06c.12-.33.27-.81.31-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.71a2.9 2.9 0 0 0-.69-1.06 2.9 2.9 0 0 0-1.06-.69c-.33-.12-.81-.27-1.71-.31C15.5 4.01 15.15 4 12 4m0 3.03a4.97 4.97 0 1 1 0 9.94 4.97 4.97 0 0 1 0-9.94m0 8.2a3.23 3.23 0 1 0 0-6.46 3.23 3.23 0 0 0 0 6.46m6.34-8.4a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0",
  TikTok:
    "M16.5 2h-3v13.2a2.7 2.7 0 1 1-2.3-2.67V9.4a5.9 5.9 0 1 0 5.3 5.87V9.05a6.6 6.6 0 0 0 3.9 1.26V7.2a3.72 3.72 0 0 1-3.9-3.6z",
  YouTube:
    "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8M10 15.1V8.9l5.2 3.1z",
};

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#0c0c0e] py-14 pb-11">
      <div className="mx-auto grid w-full max-w-[1140px] gap-8 px-5 sm:px-7 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <Link href="#top" aria-label="Cinevenn home" className="mb-4 inline-flex items-center gap-2.5">
            <Image
              src="/cinevenn-logo.png"
              alt=""
              width={302}
              height={396}
              className="h-10 w-auto"
            />
            <span className="font-display text-xl font-semibold">Cinevenn</span>
          </Link>

          <p className="max-w-[44ch] text-[15.5px] text-muted-fg">
            Cinevenn is part of the FourSix46® ecosystem, built by Stack46.
          </p>

          <p className="mt-3 text-[13.5px] leading-7 text-dim">
            {site.parent.name} — Company No. {site.parent.companyNo} — Registered in England
            &amp; Wales.
            <br />
            <a
              href={site.parent.url}
              rel="noopener"
              className="border-b border-line-strong text-muted-fg transition-colors duration-160 hover:border-accent hover:text-accent"
            >
              foursix46.com
            </a>
            <span aria-hidden className="mx-2 text-line-strong">
              ·
            </span>
            <a
              href={`mailto:${site.email}`}
              className="border-b border-line-strong text-muted-fg transition-colors duration-160 hover:border-accent hover:text-accent"
            >
              {site.email}
            </a>
          </p>
        </div>

        <nav aria-label="Cinevenn on social media" className="flex flex-wrap gap-2.5 lg:justify-end">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={`Cinevenn on ${s.name}`}
              rel="noopener me"
              target="_blank"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-muted-fg transition-colors duration-160 hover:border-accent hover:bg-accent/12 hover:text-accent"
            >
              <svg viewBox="0 0 24 24" className="size-4.5" fill="currentColor" aria-hidden>
                <path d={paths[s.name]} />
              </svg>
            </a>
          ))}
        </nav>

        <p className="text-[13px] text-dim lg:col-span-2">
          © {new Date().getFullYear()} Cinevenn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
