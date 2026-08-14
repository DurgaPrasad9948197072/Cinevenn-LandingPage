"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Platform" },
  { href: "#audience", label: "Who It's For" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-3.5 sm:px-7">
      <div
        className={`mx-auto flex max-w-[1140px] items-center gap-4 rounded-full border py-2.5 pr-3 pl-4 transition-all duration-240 ${
          stuck ? "glass" : "border-transparent"
        }`}
      >
        <Link href="#top" aria-label="Cinevenn home" className="inline-flex items-center gap-2.5">
          <Image
            src="/cinevenn-logo.png"
            alt=""
            width={302}
            height={396}
            priority
            className="h-[34px] w-auto"
          />
          <span className="font-display text-xl font-semibold">Cinevenn</span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden gap-6.5 text-[14.5px] lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-fg underline-offset-6 transition-colors duration-160 hover:text-foreground hover:underline hover:decoration-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#join"
          className="ml-auto inline-flex min-h-10 cursor-pointer items-center justify-center rounded-full bg-accent px-[18px] text-sm font-semibold whitespace-nowrap text-[#0a0a0a] transition-colors duration-160 hover:bg-accent-hover lg:ml-0"
        >
          Be First to Join
        </a>
      </div>
    </header>
  );
}
