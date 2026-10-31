import type { MetadataRoute } from "next";
import { contentUpdated, legalUpdated, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Legal pages share the date printed at the top of each ("Last updated").
    ...["/privacy", "/terms", "/founding-terms"].map((path) => ({
      url: `${site.url}${path}`,
      lastModified: legalUpdated,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
