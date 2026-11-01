export const siteConfig = {
  name: "Luis Fernando Cunyas Pacheco",
  nameDisplay: {
    primary: "Luis Fernando",
    secondary: "Cunyas Pacheco",
  },
  initials: "LF",
  role: "Full Stack Developer",
  specialty: "Backend, web y mobile",
  headline: "Productos full stack que llegan a producción.",
  tagline:
    "Diseño el backend, la interfaz y el deploy. En línea ahora: La Casa del Accesorio, La Merced PyK, CRR Seguros y el blog WhoAmI — además del B2B de Industrias SP.",
  motto: "Eat bugs, ship code, repeat.",
  location: "Huancayo, Perú",
  availability: "Disponible para freelance",
  profileImage: "/images/profile.png",
  whatsapp: {
    display: "931 005 970",
    e164: "51931005970",
    url: "https://wa.me/51931005970?text=Hola%20Luis%2C%20vi%20tu%20portafolio%20y%20quiero%20hablar%20de%20un%20proyecto.",
  },
  social: {
    github: "https://github.com/whoami-next-code",
    linkedin:
      "https://www.linkedin.com/in/luis-fernando-cunyas-pacheco-9a286a3b5",
  },
  github: {
    url: "https://github.com/whoami-next-code",
    username: "whoami-next-code",
    displayName: "WhoAmI",
    image: "/images/github.png",
    motto: "Eat bugs, ship code, repeat.",
    repos: 22,
    featured: [
      {
        name: "casa-del-accesorio",
        language: "TypeScript",
        blurb: "La Casa del Accesorio — catálogo, 360° y cotización.",
        url: "https://github.com/whoami-next-code/casa-del-accesorio",
      },
      {
        name: "crr",
        language: "TypeScript",
        blurb: "CRR Corredores de Seguros, Huancayo.",
        url: "https://github.com/whoami-next-code/crr",
      },
      {
        name: "blog-whoami",
        language: "TypeScript",
        blurb: "Guías de Windows, Node y Next.js.",
        url: "https://github.com/whoami-next-code/blog-whoami",
      },
      {
        name: "OurStory",
        language: "Dart",
        blurb: "App mobile — el lado Flutter del stack.",
        url: "https://github.com/whoami-next-code/OurStory",
      },
    ],
  },
  stats: [
    { value: "5+", label: "Años construyendo" },
    { value: "22", label: "Repos públicos" },
    { value: "7", label: "Sitios en producción" },
    { value: "3", label: "Capas: API, web, mobile" },
  ],
  skillGroups: [
    {
      label: "Backend",
      items: ["TypeScript", "Node.js", "NestJS", "Python", "PostgreSQL", "Supabase"],
    },
    {
      label: "Web",
      items: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      label: "Mobile",
      items: ["Flutter", "Dart"],
    },
    {
      label: "Infra",
      items: ["Docker", "AWS", "Railway", "Vercel"],
    },
  ],
  about: {
    intro:
      "Soy Luis Fernando (WhoAmI). Trabajo desde Huancayo construyendo productos de punta a punta. En producción: La Casa del Accesorio, La Merced PyK con su panel, CRR Corredores de Seguros, el blog WhoAmI, y el e-commerce B2B de Industrias SP.",
    highlights: [
      {
        title: "Un producto, no una landing",
        description:
          "En Industrias SP no entregué solo la vitrina. El storefront y el backoffice viven juntos: catálogo, ventas y atención.",
      },
      {
        title: "Backend con criterio de producción",
        description:
          "NestJS, PostgreSQL y despliegue con Docker en Railway o AWS. El código tiene que arrancar fuera de mi laptop.",
      },
      {
        title: "Web y mobile en el mismo oficio",
        description:
          "Next.js cuando el producto es web. Flutter y Dart cuando tiene que vivir en el bolsillo.",
      },
    ],
  },
} as const;
