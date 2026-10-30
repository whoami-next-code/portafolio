import type { MetadataRoute } from "next";
import { CANONICAL_SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${CANONICAL_SITE_URL}/`,
      lastModified: new Date(),
    },
  ];
}
