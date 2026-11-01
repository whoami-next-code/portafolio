export type Project = {
  id: string;
  title: string;
  kind: string;
  description: string;
  problem: string;
  built: string;
  outcome: string;
  tags: string[];
  image: string;
  imagePosition: "top" | "left";
  accent: "warm" | "cool";
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "lca",
    title: "La Casa del Accesorio",
    kind: "Catálogo + cotización",
    description:
      "Vitrina de piezas aftermarket con fotos 360°, catálogo filtrable y cotización por WhatsApp.",
    problem:
      "Un taller de accesorios no puede prometer que una pieza calce sin año, versión y una foto del auto.",
    built:
      "Landing con auto interactivo, catálogo paginado, admin y flujo de cotización a WhatsApp. Next.js + Supabase.",
    outcome:
      "En producción en lca.whoami.business: el cliente toca la pieza, filtra y abre el mensaje listo.",
    tags: ["Next.js", "Supabase", "WhatsApp", "Vercel"],
    image: "/images/lca.png",
    imagePosition: "top",
    accent: "warm",
    links: {
      live: "https://lca.whoami.business/",
      github: "https://github.com/whoami-next-code/casa-del-accesorio",
    },
    featured: true,
  },
  {
    id: "la-merced",
    title: "La Merced PyK",
    kind: "E-commerce",
    description:
      "Tienda online de calzado, ropa y accesorios: catálogo, carrito, chat y promociones. En producción en Railway.",
    problem:
      "Multiservicios La Merced PyK necesitaba vender en línea con la misma cara de la tienda: catálogo, pedidos y atención.",
    built:
      "Storefront Next.js con catálogo filtrable, cuenta de cliente, carrito y chat. Desplegado en Railway.",
    outcome:
      "En rare-growth-production.up.railway.app: el visitante recorre el catálogo y compra sin pasar por un brochure.",
    tags: ["Next.js", "React", "Tailwind CSS", "Railway"],
    image: "/images/la-merced.png",
    imagePosition: "top",
    accent: "warm",
    links: {
      live: "https://rare-growth-production.up.railway.app/",
      github: "https://github.com/whoami-next-code/la_merced",
    },
    featured: true,
  },
  {
    id: "la-merced-admin",
    title: "La Merced PyK — Panel Admin",
    kind: "Backoffice",
    description:
      "El mismo sistema, visto desde adentro: acceso autorizado para operar el catálogo y el día a día.",
    problem:
      "La vitrina no alcanza si nadie carga productos, pedidos y atención desde un panel propio.",
    built:
      "Panel administrativo con login restringido y dashboard. Misma stack, otro trabajo. En Railway.",
    outcome:
      "Un backoffice protegido: overflowing-analysis-production-0c04.up.railway.app/dashboard.",
    tags: ["Next.js", "React", "Tailwind CSS", "Railway"],
    image: "/images/la-merced-admin.png",
    imagePosition: "top",
    accent: "cool",
    links: {
      live: "https://overflowing-analysis-production-0c04.up.railway.app/dashboard",
    },
    featured: true,
  },
  {
    id: "crr",
    title: "CRR Corredores de Seguros",
    kind: "Sitio institucional",
    description:
      "Web de un corredor en Huancayo: personas, empresas y microseguros, con formulario de asesoría.",
    problem:
      "CRR necesitaba una cara pública seria: no vender primas en la web, sí orientar y captar el caso.",
    built:
      "Sitio Next.js con soluciones por rubro, registro SBS visible, contacto y políticas. Desplegado en Vercel.",
    outcome:
      "En crr-blue.vercel.app: un visitante elige qué proteger y pide asesoría sin que la página calcule coberturas.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    image: "/images/crr.png",
    imagePosition: "top",
    accent: "cool",
    links: {
      live: "https://crr-blue.vercel.app/",
      github: "https://github.com/whoami-next-code/crr",
    },
    featured: true,
  },
  {
    id: "blog-whoami",
    title: "Blog WhoAmI",
    kind: "Contenido técnico",
    description:
      "Guías prácticas de Windows, Node, npm, Docker y Next.js. Tema claro/oscuro y categorías.",
    problem:
      "Quería un canal propio de tutoriales accionables, no un dump de posts genéricos.",
    built:
      "Blog en Next.js con artículos, categorías, modo claro/oscuro y SEO. Publicado en Vercel.",
    outcome:
      "En blog-whoami.vercel.app: lecturas cortas para resolver un problema y seguir.",
    tags: ["Next.js", "MDX", "Vercel"],
    image: "/images/blog-whoami.png",
    imagePosition: "top",
    accent: "cool",
    links: {
      live: "https://blog-whoami.vercel.app/",
      github: "https://github.com/whoami-next-code/blog-whoami",
    },
    featured: true,
  },
  {
    id: "industrias-sp",
    title: "Industrias SP — Refricentro",
    kind: "Storefront B2B",
    description:
      "La cara pública del negocio: catálogo industrial, pedidos y contacto, desplegada en Railway.",
    problem:
      "Una empresa industrial necesitaba vender equipos en la web, no una brochure.",
    built:
      "Landing, catálogo, carrito, autenticación y secciones de servicios. Next.js + Tailwind, responsive, listo para producción.",
    outcome:
      "Un canal B2B en línea, con la misma identidad visual naranja del negocio.",
    tags: ["Next.js", "React", "Tailwind CSS", "Railway"],
    image: "/images/refricentro.png",
    imagePosition: "top",
    accent: "warm",
    links: {
      live: "https://frontend-production-cacc.up.railway.app/",
      github: "https://github.com/whoami-next-code/industriaSP",
    },
    featured: true,
  },
  {
    id: "industrias-sp-admin",
    title: "Industrias SP — Panel Admin",
    kind: "Backoffice",
    description:
      "El mismo sistema, visto desde adentro: productos, pedidos, clientes, cotizaciones y reportes.",
    problem:
      "El storefront no sirve si nadie opera el catálogo, las ventas y la atención.",
    built:
      "Dashboard con sidebar por módulos, KPIs, catálogo, cotizaciones, pedidos y contactos. Misma stack, otro trabajo.",
    outcome:
      "Un backoffice para correr el negocio día a día, no solo para mostrarlo.",
    tags: ["Next.js", "React", "Tailwind CSS", "Railway"],
    image: "/images/admin.png",
    imagePosition: "left",
    accent: "cool",
    links: {
      live: "https://admin-production-53c5.up.railway.app/",
      github: "https://github.com/whoami-next-code/backendSP",
    },
    featured: true,
  },
];
