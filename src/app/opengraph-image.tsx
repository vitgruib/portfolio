import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0c0c0f",
          color: "#f4f4f5",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: -0.02,
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 28, color: "#a1a1aa", maxWidth: 720 }}>
          Projects, stack, and links—built with Next.js
        </div>
      </div>
    ),
    { ...size },
  );
}
