import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cozy: {
          paper: "#f0e6dc",
          cream: "#fffcf7",
          foam: "#faf6f0",
          latte: "#e5d9ce",
          wood: "#c4a574",
          espresso: "#1c1410",
          mocha: "#4a3f36",
          muted: "#6e5f54",
          accent: "#a84a2d",
          "accent-hover": "#8f3d24",
          leaf: "#5c6b4a",
          border: "#d4c4b5",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        cozy:
          "0 4px 28px -6px rgb(28 20 16 / 0.12), 0 2px 8px -4px rgb(28 20 16 / 0.08)",
        "cozy-sm":
          "0 2px 14px -4px rgb(28 20 16 / 0.1), 0 1px 4px -2px rgb(28 20 16 / 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
