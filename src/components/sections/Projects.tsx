"use client";

import { projects } from "@/data/projects";
import { ProjectCard3D } from "@/components/ui/ProjectCard3D";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden py-28"
      aria-labelledby="projects-heading"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2
            id="projects-heading"
            className="text-4xl font-bold tracking-tight text-theme sm:text-5xl"
          >
            Trabajo en producción
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-theme-muted">
            Sitios en línea ahora: catálogo de accesorios, La Merced PyK,
            corredor de seguros y blog técnico. Industrias SP y La Merced
            son pares storefront + admin.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard3D key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
