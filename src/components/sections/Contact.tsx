"use client";

import { siteConfig } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-28"
      aria-labelledby="contact-heading"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal>
            <p className="whoami-eyebrow">05 / CONTACTO</p>
            <h2
              id="contact-heading"
              className="whoami-contact-heading text-theme"
            >
              De la idea a <span className="whoami-gradient">producción.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-theme-muted">
              Si tienes un backend, una web o una app que tiene que salir,
              escríbeme al {siteConfig.whatsapp.display}. Suelo responder en
              el día.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <p className="text-theme-muted">{siteConfig.location}</p>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-muted transition-colors hover:text-[#b9a6ff]"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-muted transition-colors hover:text-[#b9a6ff]"
              >
                GitHub
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm text-theme-muted">WhatsApp</p>
              <p className="mt-2 font-display text-3xl font-bold tracking-tight text-theme">
                {siteConfig.whatsapp.display}
              </p>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] py-3.5 text-sm font-semibold text-[#090910] transition-transform hover:scale-[1.01]"
              >
                Abrir WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
