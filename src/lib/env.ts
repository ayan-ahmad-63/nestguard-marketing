/**
 * Returns the absolute URL to the login page on the app deployment.
 *
 * All marketing entry-points that link to login (Navbar, CTABand,
 * Footer, Hero) pull from this single helper.
 *
 * Configured via NEXT_PUBLIC_APP_URL in .env.local:
 *   - Local dev:  http://localhost:3000
 *   - Production: https://app.nestguard.live
 */
export function getLoginUrl(): string {
  const defaultUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://app.nestguard.live";
  const base = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || defaultUrl;
  return `${base}/login`;
}

export function getAppUrl(): string {
  const defaultUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://app.nestguard.live";
  return process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || defaultUrl;
}

