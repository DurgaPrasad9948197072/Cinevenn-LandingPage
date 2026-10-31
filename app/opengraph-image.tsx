import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/*
 * Social share card, rendered once at build time. Generated from code rather
 * than a static PNG so the copy can't drift from lib/site.ts.
 */
export const alt = site.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (...p: string[]) => readFile(path.join(process.cwd(), ...p));

export default async function Image() {
  const [logo, playfair, playfairItalic, geist] = await Promise.all([
    asset("public", "cinevenn-logo.png"),
    asset("assets", "fonts", "PlayfairDisplay-Medium.ttf"),
    asset("assets", "fonts", "PlayfairDisplay-MediumItalic.ttf"),
    asset("assets", "fonts", "Geist-Regular.ttf"),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "84px 96px 72px",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 50% 12%, rgba(245,158,11,.20) 0%, rgba(245,158,11,0) 46%)",
          color: "#fafafa",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} width={46} height={60} alt="" />
          <span style={{ fontFamily: "Playfair", fontSize: 42 }}>Cinevenn</span>
        </div>

        <div style={{ display: "flex", marginTop: 66, fontFamily: "Playfair", fontSize: 76, letterSpacing: -1.5 }}>
          <span>Get seen. Get hired.&nbsp;</span>
          <span style={{ fontStyle: "italic", color: "#fbbf24" }}>Get credit.</span>
        </div>

        <div style={{ display: "flex", marginTop: 28, fontSize: 27, color: "#a1a1aa" }}>
          A home for cinema · Call Sheet · Script Seal · Founding Members get 12 months free
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: 28,
            borderTop: "1px solid #27272a",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <span>Open worldwide · cinevenn.com</span>
          <span>A FourSix46® venture · Built by Stack46</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair", data: playfair, style: "normal", weight: 500 },
        { name: "Playfair", data: playfairItalic, style: "italic", weight: 500 },
        { name: "Geist", data: geist, style: "normal", weight: 400 },
      ],
    },
  );
}
