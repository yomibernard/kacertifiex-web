import { siteUrl } from "@/lib/site-config";
import type { MetadataRoute } from "next";

const baseUrl = siteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/client-centre"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
