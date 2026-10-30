"use client";

import { siteConfig } from "@/data/site";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal>
            <h2
              id="about-heading"
              className="text-4xl font-bold tracking-tight text-theme sm:text-5xl"
            >
              Un oficio, tres capas
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-theme-muted">
              {siteConfig.about.intro}
            </p>

            <dl className="mt-8 flex flex-wrap gap-8">
              <div>
                <dt className="text-xs text-theme-muted">Base</dt>
                <dd className="mt-1 font-medium text-theme">{siteConfig.location}</dd>
              </div>
              <div>
                <dt className="text-xs text-theme-muted">WhatsApp</dt>
                <dd className="mt-1 font-medium text-theme">
                  <a
                    href={siteConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#25D366]"
                  >
                    {siteConfig.whatsapp.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-theme-muted">LinkedIn</dt>
                <dd className="mt-1 font-medium text-theme">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#e08a48]"
                  >
                    Ver perfil
                  </a>
                </dd>
              </div>
            </dl>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="space-y-6">
              {siteConfig.skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs text-theme-muted">{group.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-theme">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <StaggerContainer className="mt-20 grid gap-6 md:grid-cols-3">
          {siteConfig.about.highlights.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full border-t border-[#e08a48]/40 pt-6">
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
