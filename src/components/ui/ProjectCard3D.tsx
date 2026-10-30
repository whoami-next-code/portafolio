"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCard3DProps = {
  project: Project;
  index: number;
};

export function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 200,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 200,
    damping: 22,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isWarm = project.accent === "warm";

  return (
    <motion.article
      className="perspective-[1200px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <motion.div
        ref={cardRef}
        className={cn(
          "overflow-hidden rounded-2xl border bg-[#141a24]/80",
          isWarm ? "border-[#e08a48]/25" : "border-indigo-400/20",
        )}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
          <Image
            src={project.image}
            alt={`Captura de ${project.title}`}
            fill
            className={cn(
              "object-cover transition-transform duration-700 group-hover:scale-[1.02]",
              project.imagePosition === "left"
                ? "object-left-top"
                : "object-top",
            )}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col p-6">
          <p
            className={cn(
              "text-xs font-medium",
              isWarm ? "text-[#e08a48]" : "text-indigo-300",
            )}
          >
            {project.kind}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-theme">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-theme-muted">
            {project.description}
          </p>

          <dl className="mt-5 space-y-3 border-t border-white/8 pt-5 text-sm">
            <div>
              <dt className="text-theme-muted">Problema</dt>
              <dd className="mt-0.5 text-theme">{project.problem}</dd>
            </div>
            <div>
              <dt className="text-theme-muted">Qué construí</dt>
              <dd className="mt-0.5 text-theme">{project.built}</dd>
            </div>
            <div>
              <dt className="text-theme-muted">Resultado</dt>
              <dd className="mt-0.5 text-theme">{project.outcome}</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-theme-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live && (
              <Link
                href={project.links.live}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium",
                  isWarm
                    ? "bg-[#e08a48] text-[#10141c]"
                    : "bg-indigo-400 text-[#10141c]",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver demo
              </Link>
            )}
            {project.links.github && (
              <Link
                href={project.links.github}
                className="rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-theme transition-colors hover:border-white/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
