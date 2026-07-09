import { credentials, projects, skillGroups } from "@/data/portfolio";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function StructuredData() {
  const skills = skillGroups.flatMap((group) => group.skills);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "en",
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#person`,
        },
        mainEntity: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        jobTitle: siteConfig.role,
        description: siteConfig.shortDescription,
        image: absoluteUrl(siteConfig.ogImage),
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressCountry: siteConfig.location.countryCode,
        },
        knowsAbout: skills,
        sameAs: [siteConfig.links.github, siteConfig.links.portfolio],
        hasCredential: credentials.map((credential) => ({
          "@type": "EducationalOccupationalCredential",
          name: credential.name,
          credentialCategory: "Professional certification",
          recognizedBy: {
            "@type": "Organization",
            name: credential.issuer,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#projects`,
        name: "Selected data engineering and analytics projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.summary,
            url: project.href ?? siteConfig.url,
            keywords: project.tools.join(", "),
            author: {
              "@id": `${siteConfig.url}/#person`,
            },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
