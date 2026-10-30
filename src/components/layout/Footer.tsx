import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-theme-muted">
          © {year} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={siteConfig.social.github}
            className="text-sm text-theme-muted transition-colors hover:text-[#e08a48]"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.social.linkedin}
            className="text-sm text-theme-muted transition-colors hover:text-[#e08a48]"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.whatsapp.url}
            className="text-sm text-theme-muted transition-colors hover:text-[#25D366]"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Link>
          <Link
            href="#inicio"
            className="text-sm text-theme-muted transition-colors hover:text-[#e08a48]"
          >
            Arriba
          </Link>
        </div>
      </div>
    </footer>
  );
}
