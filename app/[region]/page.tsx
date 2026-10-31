import Landing from "@/components/Landing";
import type { Region } from "@/lib/site";

/**
 * Regional variants of `/`, prerendered at build time. Visitors never see these
 * URLs: proxy.ts rewrites `/` here by country and redirects direct hits back
 * to `/`. "intl" lives at app/page.tsx, so only these two are generated.
 */
const variants = ["gb", "in"] as const satisfies readonly Region[];

export const dynamicParams = false;

export function generateStaticParams() {
  return variants.map((region) => ({ region }));
}

export default async function RegionPage({ params }: PageProps<"/[region]">) {
  const { region } = await params;
  return <Landing region={region as Region} />;
}
