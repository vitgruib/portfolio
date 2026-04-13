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
          background: "linear-gradient(145deg, #f7f0e8 0%, #e8ddd2 45%, #dccdbf 100%)",
          color: "#1c1410",
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
        <div style={{ fontSize: 28, color: "#5e4d42", maxWidth: 720 }}>
          Cozy corner of the internet — projects & links
        </div>
      </div>
    ),
    { ...size },
  );
}
