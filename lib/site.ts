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
export const contentUpdated = new Date("2026-10-31");

/** "Last updated" date of /privacy, /terms and /founding-terms. */
export const legalUpdated = new Date("2026-10-27");

/**
 * Founding Member sign-up. `consentVersion` is saved with every sign-up as the
 * proof of what the person ticked — bump it whenever the checkbox wording
 * changes, and keep the old wording on file in the backend.
 */
export const signup = {
  /** Saves the sign-up and sends the thank-you email. Swap to production at launch. */
  endpoint: "https://staging.cinevenn.com/api/founding-members",
  consentVersion: "v1",
  sources: ["hero", "offer", "final_cta"] as const,
  terms: "I'm 18 or over and I accept the Founding Member Terms.",
  updates: "Email me about Cinevenn's launch. I can unsubscribe anytime.",
};

export type SignupSource = (typeof signup.sources)[number];

export const site = {
  name: "Cinevenn",
  url: SITE_URL,
  email: "contact@cinevenn.com",
  title: "Cinevenn — Casting, Crew & Scripts | A Home for Cinema",
  description:
    "Get seen. Get hired. Get credit. Cinevenn is a home for cinema: casting, crew and script protection in one place. Founding Members get 12 months free.",
  ogTitle: "Cinevenn — Get seen. Get hired. Get credit.",
  ogDescription:
    "Join as a Founding Member and get up to £400+ of Cinevenn free for your first year. A FourSix46® venture by Dinesh Koyyalamudi (46DC).",
  ogAlt: "Cinevenn — a home for cinema: casting, crew and scripts",
  /** The operator. Cinevenn Ltd — never FourSix46 Global Ltd. */
  company: {
    name: "Cinevenn Ltd",
    companyNo: "17543857",
    street: "66 Paul Street",
    city: "London",
    postcode: "EC2A 4NA",
    country: "GB",
    /** ICO data protection registration. */
    icoNumber: "ZC285603",
  },
  /**
   * Brand relationship only. FourSix46 is NOT the parent organisation in law,
   * so it must never appear as parentOrganization in the schema.
   */
  ecosystem: {
    name: "FourSix46®",
    url: "https://foursix46.com",
    owner: "FourSix46 Global Ltd",
    tagline: "One Identity, Infinite Industries",
  },
  builder: { name: "Stack46", url: "https://stack46.com" },
  founder: {
    name: "Dinesh Koyyalamudi",
    alternateName: "46DC",
    url: "https://46dc.com",
    linkedin: "https://www.linkedin.com/in/the46dc",
    handle: "@the46dc",
    /** 3:4 crop for the Founder section, and a square head crop for avatars. */
    photo: { portrait: "/founder-46dc.webp", avatar: "/founder-46dc-avatar.webp" },
  },
} as const;

/** Order matches the footer spec. Feeds the footer icons and schema sameAs. */
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/cinevenn" },
  { name: "X", href: "https://x.com/cinevenn" },
  { name: "TikTok", href: "https://www.tiktok.com/@cinevenn" },
  { name: "YouTube", href: "https://www.youtube.com/@cinevennhq" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/cinevenn" },
  { name: "Facebook", href: "https://www.facebook.com/cinevenn" },
] as const;

/**
 * X handle for the twitter:site card tag, derived from the X entry above so
 * the meta tag, the footer link and the schema sameAs can never disagree.
 */
export const twitterHandle = `@${
  socials.find((s) => s.name === "X")!.href.split("/").filter(Boolean).pop()
}`;

/* ── Founding Member value, by visitor location ─────────────────────────── */

/**
 * proxy.ts maps the visitor's country to one of these and rewrites `/` to the
 * matching prerendered page. The IP is used for nothing else and never stored.
 */
export const regions = ["gb", "in", "intl"] as const;
export type Region = (typeof regions)[number];

export const offerValue: Record<Region, string> = {
  gb: "up to £400+",
  in: "up to ₹11,000+",
  intl: "up to $400+",
};

export const stats = [
  { value: "9 tools", label: "One platform, all live at launch" },
  { value: "Worldwide", label: "Open to anyone, anywhere" },
  { value: "UK · USA · India", label: "Phase 1 focus markets" },
  { value: "12 months free", label: "For Founding Members" },
];

export const roleUnlocks = [
  { role: "Actors & crew", unlocks: "Industry Talent verification badge" },
  { role: "Writers", unlocks: "Industry Talent verification badge + unlimited Script Seal" },
  { role: "Media & reviewers", unlocks: "Media & Reviewer verification badge" },
  { role: "Notable professionals", unlocks: "Notable Professional verification badge" },
  {
    role: "Directors, producers, production companies, casting & agencies",
    unlocks: "Hiring Professional verification badge + unlimited Script Seal",
  },
];

export const callSheetSteps = [
  {
    title: "Post",
    body: "A director, producer or casting team posts a project with the roles they need, cast or crew.",
  },
  {
    title: "Set the day rate",
    body: "Every role shows a per-day rate in the poster's chosen currency, so pay is clear upfront.",
  },
  {
    title: "Apply",
    body: "Talent and crew apply with their Cinevenn profile, showreel and details, including height for acting roles.",
  },
  {
    title: "Shortlist",
    body: "Posters save their picks to Selects and share them with their team.",
  },
  {
    title: "Connect and hire",
    body: "Message shortlisted people directly and lock in your cast and crew.",
  },
];

export const scriptSealFeatures = [
  "A timestamped certificate under your pen name. Your legal name is never printed.",
  "Watermarked viewing for anyone you share your script with.",
  "Screen-share detection and auto-blur while your script is being read.",
  "Co-authors can be invited and shown on the certificate.",
];

export type Feature = {
  id: string;
  title: string;
  body: string;
  /** lucide-react icon name, resolved in components/Features.tsx */
  icon:
    | "UserCheck"
    | "Clapperboard"
    | "FileLock2"
    | "Search"
    | "Newspaper"
    | "Trophy"
    | "Star"
    | "MessagesSquare"
    | "ChartColumn";
  /** Highlighted card treatment */
  featured?: boolean;
};

export const features: Feature[] = [
  {
    id: "profiles-circle",
    title: "Profiles & Circle",
    icon: "UserCheck",
    body: "Your professional profile with credits and work. Build your Circle and see who knows you. Add an optional verified badge.",
  },
  {
    id: "call-sheet",
    title: "Call Sheet",
    icon: "Clapperboard",
    featured: true,
    body: "Casting calls, auditions, crew jobs and production services, with day rates shown upfront.",
  },
  {
    id: "script-seal",
    title: "Script Seal",
    icon: "FileLock2",
    featured: true,
    body: "Timestamped certificates of authorship, with protected viewing.",
  },
  {
    id: "discover",
    title: "Discover",
    icon: "Search",
    body: "Search talent, crew, projects and scripts by role, skill, language and city.",
  },
  {
    id: "feed",
    title: "Feed",
    icon: "Newspaper",
    body: "Behind-the-scenes clips, project updates and announcements from people who make film.",
  },
  {
    id: "challenges",
    title: "Challenges",
    icon: "Trophy",
    body: "Open writing, short film and talent contests that reward merit, not connections.",
  },
  {
    id: "reviews-hub",
    title: "Reviews Hub",
    icon: "Star",
    body: "Industry reviews and audience polls, organised by release week and language.",
  },
  {
    id: "messages",
    title: "Messages",
    icon: "MessagesSquare",
    body: "Request-based, end-to-end encrypted messaging. No cold inboxes, no spam.",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: "ChartColumn",
    body: "See your reach, audience mix and script performance.",
  },
];

export const trustPoints = [
  {
    title: "18+ only",
    body: "Every new member passes an age check at sign-up. Anyone under 18 can't create an account.",
  },
  {
    title: "Optional verified badge",
    body: "Confirm your identity with your passport and a live face check to earn the verified badge.",
  },
  {
    title: "Hiring badge",
    body: "Companies posting on Call Sheet can verify too, so applicants know who's hiring.",
  },
  {
    title: "Private by design",
    body: "Messages are end-to-end encrypted and start with a request, never a cold message.",
  },
  {
    title: "Moderated",
    body: "Uploads and posts are moderated to keep Cinevenn safe for everyone.",
  },
];

export const audience = [
  { title: "Actors", body: "Get discovered through Call Sheet, not just connections." },
  { title: "Directors & producers", body: "Find cast, crew and scripts, faster." },
  {
    title: "Casting directors",
    body: "Post roles, shortlist with Selects and reach talent directly.",
  },
  {
    title: "Writers",
    body: "Seal your script, then put it in front of people who can greenlight it.",
  },
  { title: "Crew", body: "Build a reputation that follows you from project to project." },
  {
    title: "Studios & service providers",
    body: "List equipment, post-production and services where productions are looking.",
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
    a: "A home for cinema. Actors, directors, producers, writers, crew and studios use it to build profiles, hire through Call Sheet, protect scripts with Script Seal and get discovered.",
  },
  {
    q: "Where is Cinevenn available?",
    a: "Worldwide. Anyone, anywhere can join. In Phase 1 we're focusing on the UK, USA and India.",
  },
  {
    q: "What is Call Sheet?",
    a: "Cinevenn's hiring tool for casting, crew and services. Posters list roles with a day rate, talent applies with their profile, and posters shortlist in Selects and hire.",
  },
  {
    q: "What is Script Seal?",
    a: "It gives your script a timestamped certificate of authorship before you share it, with protected viewing for anyone who reads it.",
  },
  {
    q: "Is Cinevenn free?",
    a: "Joining is free. Founding Members get every paid feature for their role free for 12 months from launch day. After that, standard pricing applies.",
  },
  {
    q: "How do I become a Founding Member?",
    a: "Enter your email on this page before launch. Every paid feature for your role is then free for 12 months from launch day, with no caps.",
  },
  {
    q: "Who can join?",
    a: "At launch, anyone aged 18 or over. Every member passes an age check at sign-up. Phase 2 opens Cinevenn to members aged 13 and over, with extra protections.",
  },
  {
    q: "Do I have to get verified?",
    a: "No. The verified badge is optional. It confirms your identity with your passport and a live face check.",
  },
  {
    q: "Who is behind Cinevenn?",
    a: "Cinevenn was founded by Dinesh Koyyalamudi (46DC). It's operated by Cinevenn Ltd, a UK company, and is a FourSix46® venture built by Stack46.",
  },
  {
    q: "When does Cinevenn launch?",
    a: "Cinevenn is in the final stages before launch. Founding Members hear first.",
  },
];

/* ── Structured data ────────────────────────────────────────────────────── */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.company.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  description:
    "Cinevenn is a home for cinema: verified profiles, Call Sheet for casting and crew, Script Seal for writers, and every tool in between. Open worldwide, with a Phase 1 focus on the UK, USA and India.",
  email: site.email,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Companies House",
    value: site.company.companyNo,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.company.street,
    addressLocality: site.company.city,
    postalCode: site.company.postcode,
    addressCountry: site.company.country,
  },
  sameAs: socials.map((s) => s.href),
  founder: {
    "@type": "Person",
    name: site.founder.name,
    alternateName: site.founder.alternateName,
    url: site.founder.url,
    image: `${site.url}${site.founder.photo.portrait}`,
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
