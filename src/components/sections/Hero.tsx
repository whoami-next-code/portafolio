"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { siteConfig } from "@/data/site";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null },
);

const stats = [
  { value: "5+", label: "Años de experiencia", color: "from-indigo-400 to-violet-400" },
  { value: "16+", label: "Repos en GitHub", color: "from-sky-400 to-cyan-400" },
  { value: "2", label: "Proyectos en Railway", color: "from-violet-400 to-fuchsia-400" },
  { value: "100%", label: "Compromiso", color: "from-emerald-400 to-teal-400" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <HeroScene />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-24 lg:grid-cols-[1fr_auto]"
      >
        <div>
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm text-theme-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {siteConfig.availability}
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-theme sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            {siteConfig.nameDisplay.primary}{" "}
            <span className="gradient-text">{siteConfig.nameDisplay.secondary}</span>
          </motion.h1>

          <motion.p
            className="mt-2 text-xl font-medium text-indigo-300 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-theme-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href="#proyectos"
              className="shimmer-btn rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-500/40"
            >
              Ver proyectos
            </Link>
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-border rounded-full glass-card px-8 py-3.5 text-sm font-semibold text-theme transition-all hover:text-indigo-300 hover:shadow-md"
            >
              GitHub →
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card glass-card-hover glow-border rounded-2xl p-4 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-theme-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-sky-500/20 blur-2xl glow-pulse" />
          <div className="glow-border relative h-[420px] w-[320px] overflow-hidden rounded-3xl glass-card shadow-2xl shadow-indigo-500/20 ring-1 ring-white/10">
            <Image
              src={siteConfig.profileImage}
              alt={`Foto de ${siteConfig.name}`}
              fill
              className="object-cover object-top"
              sizes="320px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161b26]/95 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-semibold text-theme">{siteConfig.name}</p>
              <p className="text-sm text-indigo-300">{siteConfig.role}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-indigo-400" />
        </div>
      </motion.div>
    </section>
  );
}
