export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  gradient: string;
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "industrias-sp",
    title: "Industrias SP — Refricentro",
    description:
      "Plataforma industrial con catálogo de productos, carrito de compras, autenticación y despliegue en Railway.",
    longDescription:
      "E-commerce B2B para soluciones industriales: landing con hero animado, catálogo de equipos, gestión de pedidos, secciones de servicios y contacto. Interfaz moderna con glassmorphism, diseño responsive y optimizada para producción en Railway.",
    tags: ["Next.js", "React", "Tailwind CSS", "Railway"],
    image: "/images/refricentro.png",
    gradient: "from-orange-300/60 to-amber-200/40",
    links: {
      live: "https://frontend-production-cacc.up.railway.app/",
    },
    featured: true,
  },
  {
    id: "industrias-sp-admin",
    title: "Industrias SP — Panel Admin",
    description:
      "Dashboard analítico con gestión de productos, pedidos, clientes, cotizaciones y reportes en tiempo real.",
    longDescription:
      "Panel de administración completo: métricas de negocio, sidebar con módulos de gestión, catálogo, ventas y atención al cliente. Tarjetas KPI, gráficos analíticos y UI clara orientada a productividad. Desplegado en Railway.",
    tags: ["React", "Next.js", "Tailwind CSS", "Railway"],
    image: "/images/admin.png",
    gradient: "from-sky-300/60 to-indigo-200/40",
    links: {
      live: "https://admin-production-53c5.up.railway.app/",
    },
    featured: true,
  },
];
