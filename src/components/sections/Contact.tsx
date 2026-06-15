"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setFormState("success");
      form.reset();
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Error inesperado. Intenta de nuevo.",
      );
    }
  }

  return (
    <section
      id="contacto"
      className="relative py-32"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
              Contacto
            </p>
            <h2
              id="contact-heading"
              className="mt-3 text-4xl font-bold tracking-tight text-theme sm:text-5xl"
            >
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-4 text-lg text-theme-muted">
              Cuéntame sobre tu idea y trabajemos juntos para hacerla realidad.
              Respondo normalmente en 24–48 horas.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass-card glass-card-hover glow-border flex items-center gap-4 rounded-2xl p-4 text-theme-muted transition-colors hover:text-indigo-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-lg">
                  ✉
                </span>
                {siteConfig.email}
              </a>
              <div className="glass-card flex items-center gap-4 rounded-2xl p-4 text-theme-muted">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-lg">
                  📍
                </span>
                {siteConfig.location}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card glow-border rounded-2xl p-8 shadow-xl shadow-indigo-500/5"
              initial={false}
              animate={formState === "success" ? { scale: [1, 1.01, 1] } : {}}
              transition={{ duration: 0.4 }}
              noValidate
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-theme-muted">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-theme placeholder-white/30 outline-none transition-all focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-theme-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-theme placeholder-white/30 outline-none transition-all focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-theme-muted">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-theme placeholder-white/30 outline-none transition-all focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
              </div>

              {formState === "error" && (
                <p className="mt-4 text-sm text-red-400" role="alert">
                  {errorMessage}
                </p>
              )}

              {formState === "success" && (
                <p className="mt-4 text-sm text-emerald-400" role="status">
                  ¡Mensaje enviado! Te responderé pronto.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="shimmer-btn mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/35 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formState === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
