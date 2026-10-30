export const CANONICAL_SITE_URL = "https://whoami.business";

function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

function isLocalhost(url: string): boolean {
  return /localhost|127\.0\.0\.1/i.test(url);
}

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (fromEnv) {
    const normalized = stripTrailingSlash(fromEnv);
    if (process.env.NODE_ENV === "production" && isLocalhost(normalized)) {
      return CANONICAL_SITE_URL;
    }
    return normalized;
  }

  if (
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
  ) {
    return CANONICAL_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (path === "/" || path === "") {
    return `${base}/`;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
