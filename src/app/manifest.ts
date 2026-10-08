import { brand } from "@/lib/site-config";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brand.name} ${brand.tagline}`,
    short_name: brand.shortName,
    description: brand.heroSubtext,
    start_url: "/",
    display: "standalone",
    background_color: "#0B2A5B",
    theme_color: "#0B2A5B",
    lang: "en-NG",
  };
}
