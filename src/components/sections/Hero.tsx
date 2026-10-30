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

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <HeroScene />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-24 lg:grid-cols-[minmax(0,1fr)_300px]"
      >
        <div>
          <p className="mb-6 text-sm text-[#b4becd]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
            {siteConfig.availability}
            <span className="mx-2 text-white/20">·</span>
            {siteConfig.location}
          </p>

          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-theme sm:text-6xl lg:text-[4.25rem]"
          >
            {siteConfig.headline}
          </h1>

          <p className="mt-4 text-lg font-medium text-[#e08a48] sm:text-xl">
            {siteConfig.name}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-theme-muted sm:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#proyectos"
              className="shimmer-btn rounded-full bg-[#e08a48] px-7 py-3 text-sm font-semibold text-[#10141c] transition-transform hover:scale-[1.02]"
            >
              Ver trabajo
            </Link>
            <Link
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/12 px-7 py-3 text-sm font-semibold text-theme transition-colors hover:border-[#25D366]/50 hover:text-[#25D366]"
            >
              WhatsApp
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-theme-muted">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl font-bold tracking-tight text-theme">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-[200px] lg:w-[280px]">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-orange-400/25 via-indigo-500/20 to-violet-500/10 blur-2xl" />
          <div className="relative h-[280px] w-[200px] overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/5 shadow-2xl shadow-indigo-950/40 lg:h-[420px] lg:w-[280px]">
            <Image
              src={siteConfig.profileImage}
              alt={`Foto de ${siteConfig.name}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 200px, 280px"
              preload
            />
          </div>
          <p className="mt-4 text-sm leading-snug text-theme-muted">
            {siteConfig.role}
            <br />
            {siteConfig.specialty}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
