"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard3D } from "@/components/ui/ProjectCard3D";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="proyectos"
      ref={ref}
      className="relative overflow-hidden py-32"
      aria-labelledby="projects-heading"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.15),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Portafolio
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-theme sm:text-5xl"
          >
            Proyectos destacados
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-theme-muted">
            Trabajos reales desplegados en producción. Haz clic en cada tarjeta
            para explorar los detalles con efecto 3D.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard3D key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
