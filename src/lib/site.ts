export const siteConfig = {
  name: "Egemen Erin",
  title: "Egemen Erin | Data Analyst Portfolio",
  description:
    "Data analyst portfolio for Egemen Erin — product analytics, geospatial research tooling, IBM Cognos dashboards, Python, SQL, Power BI, and machine learning projects based in Poznan, Poland.",
  shortDescription:
    "Data analyst turning complex datasets into product metrics, dashboards, and research-ready insights.",
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
} as const;

export function absoluteUrl(path = ""): string {
  return new URL(path, siteConfig.url).toString();
}
