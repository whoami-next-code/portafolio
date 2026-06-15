export const siteConfig = {
  name: "Luis Fernando Cunyas Pacheco",
  nameDisplay: {
    primary: "Luis Fernando",
    secondary: "Cunyas Pacheco",
  },
  role: "Full Stack Developer | Backend • Web • Mobile",
  tagline:
    "Eat bugs, ship code, repeat. Construyo sistemas escalables con enfoque en rendimiento y despliegue en producción.",
  email: "whoaminode@gmail.com",
  location: "Perú",
  availability: "Disponible para proyectos freelance",
  profileImage: "/images/luis fernando cp.png",
  social: {
    github: "https://github.com/whoami-next-code",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  github: {
    url: "https://github.com/whoami-next-code",
    username: "whoami-next-code",
    displayName: "WhoAmI",
    image: "/images/github.png",
    motto: "Eat bugs, ship code, repeat.",
    repos: 16,
  },
  skills: [
    "TypeScript",
    "Next.js",
    "Node.js",
    "NestJS",
    "React",
    "Python",
    "Flutter",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "Railway",
  ],
  about: {
    intro:
      "Soy desarrollador full stack (WhoAmI) apasionado por crear soluciones digitales que resuelven problemas reales. Me especializo en backend, web y mobile, con experiencia en interfaces modernas, arquitecturas escalables y despliegues en Railway — como el e-commerce y panel admin de Industrias SP.",
    highlights: [
      {
        title: "Backend • Web • Mobile",
        description:
          "Stack completo con TypeScript, NestJS, Next.js, Flutter y bases de datos relacionales para productos end-to-end.",
      },
      {
        title: "Diseño + código",
        description:
          "Combino criterio visual con buenas prácticas de ingeniería para entregar productos pulidos y fáciles de usar.",
      },
      {
        title: "Despliegue en producción",
        description:
          "Configuro builds optimizados, Docker, CI/CD y despliegues en Railway, AWS y entornos cloud.",
      },
    ],
  },
} as const;
