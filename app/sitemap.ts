import type { MetadataRoute } from "next";
import { contentUpdated, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
