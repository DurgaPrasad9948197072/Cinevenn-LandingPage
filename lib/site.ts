/**
 * Single source of truth for site copy, metadata and structured data.
 * The FAQ array below drives BOTH the rendered accordion and the FAQPage
 * JSON-LD, so the two can never drift apart.
 */

/**
 * Canonical origin. MUST be the host that actually serves a 200 — cinevenn.com
 * 308-redirects to www.cinevenn.com, so pointing canonical/sitemap/og:url at the
 * bare domain made every URL we published redirect, which is a conflicting
 * signal for crawlers. Override per-environment with NEXT_PUBLIC_SITE_URL.
 */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cinevenn.com"
).replace(/\/+$/, "");

/**
 * Date the page content last meaningfully changed — bump it when you edit copy.
 * Deliberately NOT `new Date()`: a build-time stamp tells Google the page
 * changed on every deploy even when nothing did, which devalues the signal.
 */
export const contentUpdated = new Date("2026-08-16");

export const site = {
  name: "Cinevenn",
  url: SITE_URL,
  email: "contact@cinevenn.com",
  title: "Cinevenn — Digital Infrastructure for Film & Entertainment",
  description:
    "Cinevenn connects verified talent, auditions, protected scripts & a film industry marketplace. Phase 1 launches in India. Coming soon.",
  ogTitle:
    "Cinevenn — Verified Profiles, Auditions, Script Seal & Marketplace",
  parent: {
    name: "FourSix46 Global Ltd",
    url: "https://foursix46.com",
    companyNo: "16712658",
  },
  founder: {
    name: "Dinesh Koyyalamudi",
    alternateName: "46DC",
    url: "https://46dc.com",
  },
} as const;

/** Double-check these against the handles you actually registered. */
export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/cinevenn" },
  { name: "Facebook", href: "https://www.facebook.com/cinevenn" },
  { name: "X", href: "https://x.com/cinevenn" },
  { name: "Instagram", href: "https://www.instagram.com/cinevenn" },
  { name: "TikTok", href: "https://www.tiktok.com/@cinevenn" },
  { name: "YouTube", href: "https://www.youtube.com/@cinevennhq" },
] as const;

/**
 * X handle for the twitter:site card tag, derived from the X entry above so
 * the meta tag, the footer link and the schema sameAs can never disagree.
 */
export const twitterHandle = `@${
  socials.find((s) => s.name === "X")!.href.split("/").filter(Boolean).pop()
}`;

export type Feature = {
  id: string;
  title: string;
  body: string;
  /** lucide-react icon name, resolved in components/Features.tsx */
  icon: "ShieldCheck" | "Clapperboard" | "FileLock2" | "Store" | "Trophy";
  /** Highlighted card treatment */
  featured?: boolean;
};

export const features: Feature[] = [
  {
    id: "verified-profiles",
    title: "Verified Profiles",
    icon: "ShieldCheck",
    body: "Real credits, checked before they're published. No fabricated résumés, no dead-end messages — everyone on Cinevenn is exactly who they say they are.",
  },
  {
    id: "auditions",
    title: "Auditions",
    icon: "Clapperboard",
    body: "Casting calls and audition submissions in one place. Directors and casting directors reach real talent directly — no agencies required, no opportunities lost in inboxes.",
  },
  {
    id: "script-seal",
    title: "Script Seal",
    icon: "FileLock2",
    featured: true,
    body: "Protect your work before you pitch it. Script Seal gives every script a verified timestamp of authorship — proof it was yours first, before it ever leaves your hands.",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    icon: "Store",
    body: "Hire and get hired. Crew, equipment, post-production, services — everything a production needs, in one searchable, verified marketplace.",
  },
  {
    id: "challenges",
    title: "Challenges",
    icon: "Trophy",
    body: "Open competitions that reward merit, not connections. Writing challenges, short film contests, and talent showcases give new voices a real way to get discovered.",
  },
];

export const audience = [
  {
    title: "Actors",
    body: "Get discovered through real auditions, not just connections.",
  },
  {
    title: "Directors & Producers",
    body: "Find verified talent, crew, and scripts, faster.",
  },
  {
    title: "Writers",
    body: "Protect your work with Script Seal, then get it in front of people who can greenlight it.",
  },
  {
    title: "Crew & Service Providers",
    body: "List your work in the Marketplace and build a verified reputation that follows you from project to project.",
  },
];

export type Faq = {
  q: string;
  /** Rendered on the page. */
  a: string;
  /** Schema.org answer, when it should read differently from the on-page copy. */
  schemaAnswer?: string;
};

export const faqs: Faq[] = [
  {
    q: "What is Cinevenn?",
    a: "Cinevenn is a technology and media platform for the film industry — connecting directors, producers, writers, and crew through verified profiles, auditions, a script protection system called Script Seal, a professional marketplace, and talent challenges, all in one place.",
  },
  {
    q: "Where does Cinevenn launch first?",
    a: "Cinevenn's Phase 1 launches in India, the world's largest film market by volume, before expanding globally.",
  },
  {
    q: "What is Script Seal?",
    a: "Script Seal is Cinevenn's script protection feature. It gives writers a verified timestamp of authorship, so their work is provably theirs before they pitch it to anyone.",
  },
  {
    q: "Who is Cinevenn for?",
    a: "Everyone who makes film happen — actors, directors, producers, writers, crew, and industry service providers — in one connected platform.",
  },
  {
    q: "Is Cinevenn part of FourSix46?",
    a: "Yes. Cinevenn is a venture built by Stack46 under FourSix46 Global Ltd, a UK-registered parent brand.",
  },
  {
    q: "When does Cinevenn launch?",
    a: "Cinevenn is currently in the final stages of development. Phase 1 launches in India, the world's largest film market by volume, before expanding globally.",
  },
];

/* ── Structured data ────────────────────────────────────────────────────── */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  description:
    "Cinevenn is a technology and media platform for the film industry — connecting directors, producers, writers, and crew through verified profiles, auditions, Script Seal, a marketplace, and challenges. Phase 1 launches in India before expanding globally.",
  email: site.email,
  sameAs: socials.map((s) => s.href),
  parentOrganization: {
    "@type": "Organization",
    name: site.parent.name,
    url: site.parent.url,
  },
  founder: {
    "@type": "Person",
    name: site.founder.name,
    alternateName: site.founder.alternateName,
    url: site.founder.url,
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.schemaAnswer ?? f.a },
  })),
};
