import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            width: 22,
            height: 22,
            background: "#F5B301",
            borderRadius: 4,
            color: "#0B2A5B",
            fontSize: 11,
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
