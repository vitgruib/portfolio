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
        boba: {
          paper: "#f5ebe0",
          cream: "#fdf8f3",
          foam: "#faf3eb",
          latte: "#e6d5c3",
          wood: "#b8956a",
          espresso: "#1a1210",
          mocha: "#4e3b2f",
          muted: "#7a6455",
          accent: "#7b5ea7",
          "accent-hover": "#654b8a",
          taro: "#9b7fc4",
          tapioca: "#2c1e14",
          border: "#dcc9b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        boba: "0 4px 28px -6px rgb(28 20 16 / 0.12), 0 2px 8px -4px rgb(28 20 16 / 0.08)",
        "boba-sm":
          "0 2px 14px -4px rgb(28 20 16 / 0.1), 0 1px 4px -2px rgb(28 20 16 / 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
