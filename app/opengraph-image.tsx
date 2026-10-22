import { ImageResponse } from "next/og";

// Generates the social-share preview (LinkedIn, WhatsApp, X) at build time,
// so no binary og-image.png has to be maintained by hand.
export const alt = "Besong Oscar: Full-Stack JavaScript Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0b0b14 0%, #1e1b4b 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 30, color: "#a78bfa", marginBottom: 16 }}>Portfolio</div>
        <div style={{ fontSize: 84, fontWeight: 700 }}>Besong Oscar</div>
        <div style={{ fontSize: 40, marginTop: 12 }}>Full-Stack JavaScript Developer</div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#c4b5fd" }}>
          Next.js · React Native · NestJS · PostgreSQL
        </div>
        <div style={{ fontSize: 26, marginTop: 12, color: "#9ca3af" }}>Douala, Cameroon</div>
      </div>
    ),
    size
  );
}
