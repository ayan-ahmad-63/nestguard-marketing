/**
 * Returns the absolute URL to the login page on the app deployment.
 *
 * All three marketing entry-points that link to login (Navbar, CTABand,
 * Footer) pull from this single helper — one place to change if the login
 * path or param structure ever changes.
 *
 * Configured via NEXT_PUBLIC_APP_URL in .env.local:
 *   - Local dev:  http://localhost:3000
 *   - Production: https://app.nestguard.ai
 */
export function getLoginUrl(): string {
  const base =
    process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ??
    "http://localhost:3000";
  return `${base}/login`;
}
