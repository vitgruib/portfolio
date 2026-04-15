"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  color: string;
  onComplete: () => void;
};

function LiquidFillInner({ color, onComplete }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onEnd = (e: AnimationEvent) => {
      if (e.animationName === "liquid-rise") {
        onComplete();
      }
    };

    el.addEventListener("animationend", onEnd);
    return () => el.removeEventListener("animationend", onEnd);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        height: "calc(100vh + 60px)",
        zIndex: 9999,
        pointerEvents: "none",
        animation: "liquid-rise 0.85s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      }}
    >
      {/* Wavy surface at the top */}
      <svg
        style={{
          display: "block",
          width: "100%",
          height: "60px",
          flexShrink: 0,
        }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill={color}>
          <animate
            attributeName="d"
            dur="0.45s"
            repeatCount="indefinite"
            values="
              M0,30 C120,55 240,5 360,30 C480,55 600,5 720,30 C840,55 960,5 1080,30 C1200,55 1320,5 1440,30 L1440,60 L0,60 Z;
              M0,30 C120,5 240,55 360,30 C480,5 600,55 720,30 C840,5 960,55 1080,30 C1200,5 1320,55 1440,30 L1440,60 L0,60 Z;
              M0,30 C120,55 240,5 360,30 C480,55 600,5 720,30 C840,55 960,5 1080,30 C1200,55 1320,5 1440,30 L1440,60 L0,60 Z
            "
          />
        </path>
      </svg>

      {/* Solid tea body below the wave */}
      <div
        style={{
          flex: 1,
          backgroundColor: color,
          width: "100%",
          height: "100vh",
        }}
      />
    </div>
  );
}

export function LiquidFill(props: Props) {
  return createPortal(<LiquidFillInner {...props} />, document.body);
}
