"use client";

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";

export function PortfolioShell() {
  return (
    <SmoothScroll>
      <BackgroundOrbs />
      <ScrollProgress />
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-[#e08a48] focus:px-4 focus:py-2 focus:text-[#10141c]"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <div className="section-divider mx-auto max-w-6xl" />
        <Projects />
        <div className="section-divider mx-auto max-w-6xl" />
        <GitHubSection />
        <div className="section-divider mx-auto max-w-6xl" />
        <About />
        <div className="section-divider mx-auto max-w-6xl" />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
