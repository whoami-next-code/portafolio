import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#12151f]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-theme-muted">
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={siteConfig.social.github}
            className="text-sm text-theme-muted transition-colors hover:text-indigo-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.social.linkedin}
            className="text-sm text-theme-muted transition-colors hover:text-indigo-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="#inicio"
            className="text-sm text-theme-muted transition-colors hover:text-indigo-300"
          >
            Volver arriba
          </Link>
        </div>
      </div>
    </footer>
  );
}
