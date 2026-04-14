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
          background: "linear-gradient(145deg, #fdf8f3 0%, #f5ebe0 45%, #e6d5c3 100%)",
          color: "#1a1210",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            fontStyle: "italic",
            letterSpacing: -0.02,
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 28, color: "#7a6455", maxWidth: 720 }}>
          Projects, experiments & things I&apos;ve been brewing
        </div>
      </div>
    ),
    { ...size },
  );
}
