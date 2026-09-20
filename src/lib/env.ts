/**
 * Returns the URL that login / CTA buttons point to.
 *
 * While the app is under construction this points to /construction on the
 * marketing site so users see the "coming soon" page instead of the app.
 *
 * When the app is ready to go live, swap this back to:
 *   production  → https://app.nestguard.live/login
 *   development → ${NEXT_PUBLIC_APP_URL}/login
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
