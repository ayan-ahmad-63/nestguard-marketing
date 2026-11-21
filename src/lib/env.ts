/**
 * Returns the URL that login / CTA buttons point to.
 *   production  → https://app.nestguard.live/login
 *   development → ${NEXT_PUBLIC_APP_URL}/login
 */
export function getLoginUrl(): string {
  return `${getAppUrl()}/login`;
}

export function getAppUrl(): string {
  if (process.env.NODE_ENV === "production") {
    return "https://app.nestguard.live";
  }
  return process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "http://localhost:5000";
}
