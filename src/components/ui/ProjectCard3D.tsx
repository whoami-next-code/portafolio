"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCard3DProps = {
  project: Project;
  index: number;
};

export function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      className="group perspective-[1200px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <motion.div
        ref={cardRef}
        className="relative h-[440px] w-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          rotateX: isFlipped ? 0 : rotateX,
          rotateY: isFlipped ? 0 : rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped((prev) => !prev);
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isFlipped}
        aria-label={`${project.title}. ${isFlipped ? "Mostrando detalles" : "Clic para ver detalles"}`}
      >
        <motion.div
          className={cn(
            "absolute -inset-1 rounded-3xl bg-gradient-to-br blur-xl transition-opacity duration-500",
            project.gradient,
            isHovered && !isFlipped ? "opacity-80" : "opacity-0",
          )}
          aria-hidden="true"
        />

        <motion.div
          className="absolute inset-0 rounded-2xl transition-transform duration-700"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div
            className="glass-card glow-border absolute inset-0 overflow-hidden rounded-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30", project.gradient)} />
            <div className="relative flex h-full flex-col p-6">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-black/20 ring-1 ring-white/10">
                <Image
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-theme">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-theme-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-medium text-indigo-400">
                Clic para ver detalles →
              </p>
            </div>
          </div>

          <div
            className="glass-card absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/90 to-violet-950/80 p-6 ring-2 ring-indigo-500/30"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h3 className="text-xl font-semibold text-theme">{project.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-theme-muted">
              {project.longDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 pt-8">
              {project.links.live && (
                <Link
                  href={project.links.live}
                  className="shimmer-btn rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/25"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo →
                </Link>
              )}
            </div>
            <p className="mt-6 text-xs text-theme-muted">Clic para volver</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
