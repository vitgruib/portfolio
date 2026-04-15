"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  color: string;
  onComplete: () => void;
};

function LiquidFillInner({ color, onComplete }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onEnd = (e: AnimationEvent) => {
      if (e.target === el) onComplete();
    };

    el.addEventListener("animationend", onEnd);
    return () => el.removeEventListener("animationend", onEnd);
  }, [onComplete]);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        height: 0,
        zIndex: 9999,
        pointerEvents: "none",
        animation: "liquid-fill 2s ease-in-out forwards",
      }}
    >
      {/* Solid tea body — always fills from bottom */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50px",
          bottom: 0,
          backgroundColor: color,
        }}
      />

      {/* Wave surface at the top edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200%",
          height: "60px",
          animation: "wave-scroll 1.8s linear infinite",
        }}
      >
        <svg
          viewBox="0 0 2880 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <path
            d={
              "M0,30 C180,55 360,5 540,30 C720,55 900,5 1080,30 " +
              "C1260,55 1440,5 1620,30 C1800,55 1980,5 2160,30 " +
              "C2340,55 2520,5 2700,30 C2880,55 2880,60 2880,60 L0,60 Z"
            }
            fill={color}
          />
        </svg>
      </div>

      {/* Second wave layer for depth */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: 0,
          width: "200%",
          height: "55px",
          animation: "wave-scroll-reverse 2.2s linear infinite",
          opacity: 0.6,
        }}
      >
        <svg
          viewBox="0 0 2880 55"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <path
            d={
              "M0,28 C200,50 400,6 600,28 C800,50 1000,6 1200,28 " +
              "C1400,50 1600,6 1800,28 C2000,50 2200,6 2400,28 " +
              "C2600,50 2880,6 2880,28 L2880,55 L0,55 Z"
            }
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
}

export function LiquidFill(props: Props) {
  return createPortal(<LiquidFillInner {...props} />, document.body);
}
