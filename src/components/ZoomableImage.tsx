"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  /** Classes for the inline (thumbnail) image. */
  className?: string;
  width?: number;
  height?: number;
};

export function ZoomableImage({
  src,
  alt,
  className,
  width = 600,
  height = 300,
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Zoom image: ${alt}`}
        className="block h-full w-full cursor-zoom-in focus-visible:focus-ring"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          unoptimized
        />
      </button>

      {mounted && open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={close}
              className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-boba-espresso/80 p-6 backdrop-blur-sm animate-fade-up"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-5 top-5 rounded-full bg-boba-cream/90 px-3 py-1 font-mono text-sm font-semibold text-boba-espresso shadow-boba-sm transition-transform duration-200 hover:scale-110 focus-visible:focus-ring"
              >
                ✕
              </button>
              <Image
                src={src}
                alt={alt}
                width={width * 3}
                height={height * 3}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] w-auto max-w-[95vw] cursor-default rounded-lg object-contain shadow-boba"
                unoptimized
              />
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
