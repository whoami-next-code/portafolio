"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { siteConfig } from "@/data/site";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="relative overflow-hidden py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              Sobre mí
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-4xl font-bold tracking-tight text-theme sm:text-5xl"
            >
              Pasión por crear productos digitales excepcionales
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-theme-muted">
              {siteConfig.about.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {siteConfig.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card glass-card-hover rounded-xl px-3 py-1.5 text-sm font-medium text-indigo-200/90"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4">
              <div className="glass-card glow-border rounded-2xl p-4">
                <dt className="text-sm text-theme-muted">Ubicación</dt>
                <dd className="mt-1 font-semibold text-theme">{siteConfig.location}</dd>
              </div>
              <div className="glass-card glow-border rounded-2xl p-4">
                <dt className="text-sm text-theme-muted">Email</dt>
                <dd className="mt-1 font-semibold text-theme">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-indigo-300"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </dl>
          </ScrollReveal>

          <div className="relative">
            <motion.div
              style={{ y: imageY, rotate: imageRotate }}
              className="relative mx-auto aspect-square max-w-md lg:mx-0"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-500/25 via-violet-500/15 to-sky-500/20 blur-2xl glow-pulse" />
              <div
                className="glow-border glass-card relative overflow-hidden rounded-3xl shadow-2xl shadow-indigo-500/15 ring-1 ring-white/10"
                style={{ transform: "perspective(1000px) rotateY(-4deg)" }}
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={siteConfig.profileImage}
                    alt={`Foto de perfil de ${siteConfig.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 80vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161b26]/95 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-xl font-semibold text-theme">{siteConfig.name}</p>
                  <p className="mt-1 text-indigo-300">{siteConfig.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <StaggerContainer className="mt-24 grid gap-6 md:grid-cols-3" stagger={0.15}>
          {siteConfig.about.highlights.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-card glass-card-hover glow-border group h-full rounded-2xl p-8">
                <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-300 group-hover:w-20" />
                <h3 className="text-lg font-semibold text-theme">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-theme-muted">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
