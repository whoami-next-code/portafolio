"use client";

import { useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard3D } from "@/components/ui/ProjectCard3D";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rail = useRef<HTMLDivElement>(null);
  function move(direction: number) {
    const element = rail.current;
    if (!element) return;
    const width = element.firstElementChild?.getBoundingClientRect().width ?? element.clientWidth;
    element.scrollBy({ left: direction * (width + 24), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden py-28"
      aria-labelledby="projects-heading"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="whoami-eyebrow">01 / PROYECTOS DESTACADOS</p>
          <h2
            id="projects-heading"
            className="text-4xl font-bold tracking-tight text-theme sm:text-5xl"
          >
            Software para el mundo real.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-theme-muted">
            Sitios en línea ahora: catálogo de accesorios, La Merced PyK,
            corredor de seguros y blog técnico. Industrias SP y La Merced
            son pares storefront + admin.
          </p>
        </ScrollReveal>

        <div className="whoami-rail-controls mt-8"><span>Explora los proyectos en producción</span><div><button type="button" aria-label="Proyecto anterior" onClick={() => move(-1)}>←</button><button type="button" aria-label="Proyecto siguiente" onClick={() => move(1)}>→</button></div></div>
        <div ref={rail} className="whoami-rail" role="region" aria-label="Proyectos destacados" tabIndex={0} data-lenis-prevent>
          {featured.map((project, index) => (
            <ProjectCard3D key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
