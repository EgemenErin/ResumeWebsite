import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1e8",
    theme_color: "#1f341c",
    lang: "en",
    icons: [
      {
        src: siteConfig.ogImage,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
