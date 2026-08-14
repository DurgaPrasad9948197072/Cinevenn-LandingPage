import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { organizationSchema, faqSchema, site, twitterHandle } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Stack46", url: site.parent.url }],
  creator: "Stack46",
  publisher: site.parent.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.ogTitle,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: twitterHandle,
    title: site.ogTitle,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body className="font-sans text-[17px] leading-relaxed antialiased">
        {/* Structured data — generated from lib/site.ts so it can't drift
            out of sync with the copy rendered on the page. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Reveal animations are JS-driven; without JS the content must still
            be visible. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:font-semibold focus:text-[#0a0a0a]"
        >
          Skip to content
        </a>

        <div
          aria-hidden
          className="grain pointer-events-none fixed -inset-1/2 z-60 opacity-[0.05]"
        />

        {children}
      </body>
    </html>
  );
}
