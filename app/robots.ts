import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * AI and search crawlers we explicitly welcome.
 *
 * `User-Agent: *` already allows everything, so these groups are technically
 * redundant. They are listed anyway because several are opt-in/opt-out controls
 * for AI training and retrieval (Google-Extended, Applebot-Extended), where
 * naming them records the intent unambiguously rather than leaving it implied.
 *
 * robots.txt matching picks the single most specific matching group, so a bot
 * listed here ignores the `*` group entirely — every group must stay `allow: "/"`
 * or that crawler's access changes.
 */
const crawlers = [
  "GPTBot",             // OpenAI, training
  "OAI-SearchBot",      // OpenAI, search index
  "ChatGPT-User",       // OpenAI, user-triggered fetch
  "ClaudeBot",          // Anthropic
  "Claude-Web",         // Anthropic
  "anthropic-ai",       // Anthropic
  "PerplexityBot",      // Perplexity index
  "Perplexity-User",    // Perplexity, user-triggered fetch
  "Google-Extended",    // Google, Gemini/Vertex training opt-in
  "Applebot-Extended",  // Apple Intelligence training opt-in
  "CCBot",              // Common Crawl
  "Bytespider",         // ByteDance
  "Meta-ExternalAgent", // Meta
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...crawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
