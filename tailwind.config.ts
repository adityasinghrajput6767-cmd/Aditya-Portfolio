import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0f0e0d",
          2: "#4a4640",
          3: "#9a9490",
        },
        paper: {
          DEFAULT: "#faf9f7",
          2: "#f2f0ec",
          3: "#e8e5e0",
        },
        orange: {
          DEFAULT: "#c84b0f",
          light: "#fdf0ea",
        },
        green: {
          DEFAULT: "#1a6b47",
          light: "#eaf4ee",
        },
      },
      borderColor: {
        line: "rgba(15,14,13,0.10)",
        "line-2": "rgba(15,14,13,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
