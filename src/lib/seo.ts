import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function buildPageMetadata(overrides?: Partial<Metadata>): Metadata {
  const ogImage = {
    url: absoluteUrl(siteConfig.ogImage),
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} — ${siteConfig.role} portfolio`,
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    alternates: {
      canonical: siteConfig.url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.shortDescription,
      images: [ogImage.url],
    },
    icons: {
      icon: siteConfig.logo,
      apple: siteConfig.logo,
    },
    ...overrides,
  };
}
