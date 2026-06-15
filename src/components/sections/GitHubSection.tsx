"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GitHubSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 180,
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

  const { github } = siteConfig;

  return (
    <section
      id="github"
      className="relative overflow-hidden py-32"
      aria-labelledby="github-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            GitHub
          </p>
          <h2
            id="github-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-theme sm:text-5xl"
          >
            Mi perfil de desarrollo
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-theme-muted">
            Explora mi código abierto, proyectos y actividad en GitHub como{" "}
            <span className="font-medium text-indigo-300">@{github.username}</span>.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="glass-card glow-border inline-flex items-center gap-3 rounded-2xl px-5 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-lg">
                  👾
                </span>
                <div>
                  <p className="font-semibold text-theme">{github.displayName}</p>
                  <p className="text-sm text-theme-muted">@{github.username}</p>
                </div>
              </div>

              <p className="text-lg italic text-theme-muted">
                &ldquo;{github.motto}&rdquo;
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="glass-card rounded-2xl px-6 py-4">
                  <p className="text-3xl font-bold gradient-text">{github.repos}+</p>
                  <p className="mt-1 text-sm text-theme-muted">Repositorios</p>
                </div>
                <div className="glass-card rounded-2xl px-6 py-4">
                  <p className="text-3xl font-bold gradient-text">Full Stack</p>
                  <p className="mt-1 text-sm text-theme-muted">Backend • Web • Mobile</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {siteConfig.skills.slice(0, 8).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-indigo-200/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn glow-border inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/40"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Ver perfil en GitHub
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <motion.div
              ref={cardRef}
              className="perspective-[1200px] relative mx-auto max-w-lg"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-sky-500/20 blur-2xl glow-pulse" />
              <Link
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-border glass-card glass-card-hover relative block overflow-hidden rounded-2xl ring-1 ring-white/10"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={github.image}
                    alt={`Perfil de GitHub de ${github.username}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 512px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161b26]/90 via-[#161b26]/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                  <div>
                    <p className="font-semibold text-theme">{github.displayName}</p>
                    <p className="text-sm text-indigo-300">github.com/{github.username}</p>
                  </div>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">
                    Abrir →
                  </span>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
