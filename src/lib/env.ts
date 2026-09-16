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
  return "/construction";
}

export function getAppUrl(): string {
  if (process.env.NODE_ENV === "production") {
    return "https://app.nestguard.live";
  }
  return process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "http://localhost:3000";
}
