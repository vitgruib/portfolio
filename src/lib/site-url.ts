/**
 * Canonical site URL for metadata (metadataBase, Open Graph).
 *
 * On Vercel, `VERCEL_URL` is set automatically (hostname only, no protocol).
 * Optionally set `NEXT_PUBLIC_SITE_URL` for a custom domain or a local tunnel URL.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}
