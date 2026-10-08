import { ImageResponse } from "next/og";

export const alt = "KACERTIFIEX — Clarity for Better Business Decisions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "#0B2A5B",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            color: "#C4B08A",
            letterSpacing: 4,
          }}
        >
          KFCS · KACERTIFIEX
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Clarity for Better Business Decisions
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 800,
          }}
        >
          Financial, tax & management advisory · Lagos, Nigeria
        </div>
      </div>
    ),
    { ...size },
  );
}
