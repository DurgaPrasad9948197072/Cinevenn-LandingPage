import { NextResponse, type NextRequest } from "next/server";

/**
 * Picks the Founding Member value's currency from the visitor's country.
 *
 * The country comes from the host's geo header (Vercel, or Cloudflare if it
 * ever sits in front). Per the privacy policy, the IP-derived country is used
 * only for this choice — nothing is logged, stored or set as a cookie.
 */
const variantFor: Record<string, string> = { GB: "/gb", IN: "/in" };

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The variants are implementation detail; keep `/` the only public URL.
  if (pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  const country = (
    request.headers.get("x-vercel-ip-country") ?? request.headers.get("cf-ipcountry")
  )?.toUpperCase();
  const variant = country && variantFor[country];

  return variant
    ? NextResponse.rewrite(new URL(variant, request.url))
    : NextResponse.next();
}

export const config = { matcher: ["/", "/gb", "/in"] };
