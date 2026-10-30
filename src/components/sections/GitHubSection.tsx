"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GitHubSection() {
  const { github } = siteConfig;

  return (
    <section
      id="github"
      className="relative overflow-hidden py-28"
      aria-labelledby="github-heading"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2
                id="github-heading"
                className="text-4xl font-bold tracking-tight text-theme sm:text-5xl"
              >
                Código abierto
              </h2>
              <p className="mt-4 max-w-xl text-lg text-theme-muted">
                @{github.username} · {github.repos} repositorios.{" "}
                <em className="not-italic text-theme">{github.motto}</em>
              </p>
            </div>
            <Link
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-medium text-theme transition-colors hover:border-[#e08a48]/50 hover:text-[#e08a48]"
            >
              Ver GitHub
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ul className="space-y-3">
            {github.featured.map((repo) => (
              <li key={repo.name}>
                <Link
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-white/8 px-5 py-4 transition-colors hover:border-[#e08a48]/35 hover:bg-white/[0.03]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-medium text-theme">{repo.name}</p>
                    <p className="text-xs text-theme-muted">{repo.language}</p>
                  </div>
                  <p className="mt-1 text-sm text-theme-muted">{repo.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>

          <ScrollReveal delay={0.08}>
            <Link
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden rounded-2xl border border-white/8"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={github.image}
                  alt={`Perfil de GitHub de ${github.username}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141c] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-medium text-theme">{github.displayName}</p>
                <p className="text-sm text-theme-muted">
                  github.com/{github.username}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
