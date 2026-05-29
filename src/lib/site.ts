export const siteConfig = {
  name: "Egemen Erin",
  title: "Egemen Erin | Data Analyst Portfolio",
  description:
    "I'm a data analyst with a computer science background, focused on turning messy, complex datasets into something actually useful, whether that's a geospatial model for academic researchers, a product metric that changed how a team built their app, or a dashboard that makes a trend visible before it becomes obvious.",
  shortDescription:
    "I'm a data analyst with a computer science background, focused on turning messy, complex datasets into something actually useful, whether that's a geospatial model for academic researchers, a product metric that changed how a team built their app, or a dashboard that makes a trend visible before it becomes obvious.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.egemenerin.com",
  locale: "en_US",
  email: "egemeneriin@protonmail.com",
  location: {
    city: "Poznan",
    country: "Poland",
    countryCode: "PL",
  },
  role: "Data Analyst",
  keywords: [
    "Egemen Erin",
    "data analyst",
    "data analyst portfolio",
    "Python data analyst",
    "SQL analyst",
    "Power BI",
    "IBM Cognos",
    "product analytics",
    "dashboard design",
    "geospatial analysis",
    "machine learning",
    "Poznan data analyst",
    "analytics portfolio",
  ],
  links: {
    github: "https://github.com/EgemenErin",
    portfolio: "https://www.egemenerin.com/",
    email: "mailto:egemeneriin@protonmail.com",
  },
  ogImage: "/images/pfp.png",
  logo: "/images/logo.png",
  favicon: "/images/favicon.png",
} as const;

export function absoluteUrl(path = ""): string {
  return new URL(path, siteConfig.url).toString();
}
