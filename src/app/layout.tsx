import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { siteConfig } from "@/data/site";
import { buildJsonLd } from "@/lib/json-ld";
import { seo } from "@/lib/seo";
import { CANONICAL_SITE_URL, getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const siteUrl = getSiteUrl();
const canonicalUrl = `${CANONICAL_SITE_URL}/`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${seo.brand}`,
  },
  description: seo.description,
  applicationName: seo.brand,
  creator: seo.brand,
  publisher: seo.brand,
  authors: [{ name: siteConfig.name, url: canonicalUrl }],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: canonicalUrl,
    title: seo.title,
    description: seo.description,
    siteName: seo.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#10141c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="es" className={`${inter.variable} ${syne.variable} bg-[#10141c]`}>
      <body className="min-h-screen bg-[#10141c] font-sans text-[#e9eef6] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
