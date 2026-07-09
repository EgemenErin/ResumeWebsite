export const siteConfig = {
  name: "Egemen Erin",
  title: "Egemen Erin | Data Engineer & Analyst Portfolio",
  description:
    "I'm a data engineer and analyst with a computer science background, focused on building reliable data pipelines and turning messy, complex datasets into something teams can act on — from scheduled ETL that moves data from API to warehouse, to dashboards and models that make a trend visible before it becomes obvious.",
  shortDescription:
    "I'm a data engineer and analyst with a computer science background, focused on building reliable data pipelines and turning messy, complex datasets into something teams can act on — from scheduled ETL that moves data from API to warehouse, to dashboards and models that make a trend visible before it becomes obvious.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.egemenerin.com",
  locale: "en_US",
  email: "egemeneriin@protonmail.com",
  location: {
    city: "Poznan",
    country: "Poland",
    countryCode: "PL",
  },
  role: "Data Engineer & Analyst",
  keywords: [
    "Egemen Erin",
    "data engineer",
    "data engineer portfolio",
    "ETL pipelines",
    "data pipelines",
    "Python data engineer",
    "Azure SQL",
    "SQL",
    "GitHub Actions",
    "analytics engineering",
    "data analyst",
    "Power BI",
    "IBM Cognos",
    "machine learning",
    "Poznan data engineer",
    "data portfolio",
  ],
  links: {
    github: "https://github.com/EgemenErin",
    portfolio: "https://www.egemenerin.com/",
    email: "mailto:egemeneriin@protonmail.com",
    resumes: {
      dataAnalyst:
        "https://docs.google.com/document/d/1PEHj5fGe-lee5N6B_MOF-9GWNgpEa-iUPGELm1ZlsSE/edit?usp=sharing",
      dataEngineer:
        "https://docs.google.com/document/d/1kapZX03S8YXZKkciacFKUftLX7H1tIh3z8xF9B-iVuE/edit?usp=sharing",
    },
  },
  ogImage: "/images/pfp.png",
  logo: "/images/logo.png",
  favicon: "/images/favicon.png",
} as const;

export function absoluteUrl(path = ""): string {
  return new URL(path, siteConfig.url).toString();
}
