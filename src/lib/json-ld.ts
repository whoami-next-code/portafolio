import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { CANONICAL_SITE_URL } from "@/lib/site-url";
import { seo } from "@/lib/seo";

const personId = `${CANONICAL_SITE_URL}/#person`;
const websiteId = `${CANONICAL_SITE_URL}/#website`;
const projectsId = `${CANONICAL_SITE_URL}/#projects`;

export function buildJsonLd(): Record<string, unknown> {
  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    alternateName: [seo.brand, "WhoAmI"],
    url: `${CANONICAL_SITE_URL}/`,
    image: `${CANONICAL_SITE_URL}${siteConfig.profileImage}`,
    jobTitle: "Desarrollador Full Stack",
    description: seo.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Huancayo",
      addressRegion: "Junín",
      addressCountry: "PE",
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    telephone: `+${siteConfig.whatsapp.e164}`,
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${CANONICAL_SITE_URL}/`,
    name: seo.brand,
    alternateName: siteConfig.name,
    description: seo.description,
    inLanguage: "es-PE",
    publisher: { "@id": personId },
    author: { "@id": personId },
  };

  const itemList = {
    "@type": "ItemList",
    "@id": projectsId,
    name: "Proyectos de Luis Fernando (WhoAmI)",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.links.live ?? project.links.github,
        creator: { "@id": personId },
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, itemList],
  };
}
