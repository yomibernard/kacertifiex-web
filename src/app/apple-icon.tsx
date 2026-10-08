import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B2A5B",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            background: "#F5B301",
            borderRadius: 16,
            color: "#0B2A5B",
            fontSize: 48,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          KF
        </div>
      </div>
    ),
    { ...size },
  );
}
