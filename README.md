# Cinevenn — Landing Page

Single-page marketing site for **cinevenn.com**, built on the same stack as the
Cinevenn app: Next.js 16 (App Router) + React 19 + Tailwind v4 + TypeScript.

```bash
npm install
npm run dev      # http://localhost:3001
npm run build && npm run start
```

## Brand theme

Colours are mirrored **exactly** from the app (`frontend/src/app/globals.css`) and
live at the top of [`app/globals.css`](app/globals.css):

| Token | Value | |
|---|---|---|
| `--background` | `#09090b` | page base |
| `--foreground` | `#fafafa` | primary text |
| `--card` / `--card-hover` | `#111113` / `#1a1a1f` | surfaces |
| `--border` / `--border-subtle` | `#27272a` / `#1f1f23` | lines |
| `--accent` / `--accent-hover` | `#f59e0b` / `#fbbf24` | amber CTA + highlights |
| `--muted-foreground` | `#a1a1aa` | body copy |

They're exposed to Tailwind through `@theme inline`, so `bg-card`, `text-accent`,
`border-line` etc. all resolve from these. The app's `.glass`, `.text-gradient-gold`,
`pulse-gold` and custom-scrollbar treatments are carried over too.

If the app's palette changes, update that one block and the whole page follows.

**Type:** Geist (matches the app) for UI/body, Playfair Display for editorial
headlines — both via `next/font/google`, self-hosted at build time, no layout shift.
To go Geist-only, point `--font-display` at `var(--font-geist-sans)`.

## Why this is worth having over the static version

- **[`lib/site.ts`](lib/site.ts) is the single source of truth.** The FAQ array renders
  the on-page accordion *and* generates the `FAQPage` JSON-LD, so the two can't drift.
  Same for features, audience, socials and the `Organization` schema.
- **Metadata API** generates every OG/Twitter/canonical/robots tag. Icons and the
  social card use Next's file conventions (`app/icon.ico`, `app/opengraph-image.png`),
  so they're content-hashed and cached automatically.
- **`app/sitemap.ts` / `app/robots.ts`** are typed and generated at build time.
- Everything is statically prerendered (`○ (Static)` for all routes).

## Before you publish

1. **Confirm the social handles** in `lib/site.ts` — they feed both the footer links
   and the schema `sameAs` array.
2. **Point `site.url`** at the production domain if it ever changes; `metadataBase`,
   canonical, sitemap and robots all derive from it.
3. **Submit the sitemap** to Google Search Console, then check the FAQ rich result:
   https://search.google.com/test/rich-results

## Layout

```
app/
  layout.tsx           metadata, fonts, JSON-LD, skip link, grain overlay
  page.tsx             section composition
  globals.css          brand tokens + Tailwind theme
  sitemap.ts robots.ts
  icon.ico  apple-icon.png  opengraph-image.png  twitter-image.png
components/            Nav, Hero, FounderQuote, About, Features,
                       Audience, Faq, Join, Footer, Reveal
lib/site.ts            all copy, FAQ data, structured data
public/                logo assets
```

## Accessibility & motion

Skip link, visible focus rings, 44px touch targets, and labelled icon-only links.
`prefers-reduced-motion` disables the reveal animations and
film grain; a `<noscript>` rule keeps all content visible if JS never runs.
