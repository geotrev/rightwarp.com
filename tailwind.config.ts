import TailwindForms from "@tailwindcss/forms"
import TailwindTypography from "@tailwindcss/typography"
import DaisyUI from "daisyui"
import { dark, light } from "daisyui/src/theming/themes"
import type { Config } from "tailwindcss"

export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
      keyframes: {
        "marquee-start": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-end": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        "marquee-start": "marquee-start 30s linear infinite",
        "marquee-end": "marquee-end 30s linear infinite",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [TailwindTypography, TailwindForms, DaisyUI],
  daisyui: {
    themes: [
      {
        dark: {
          ...dark,
          primary: "#FF4DF5",
          secondary: "#FF61A0",
          accent: "#FF7D5D",
          "base-100": "#180E0E",
          "base-200": "#131417",
          "base-300": "#1E2237",
        },
      },
      {
        light: {
          ...light,
          primary: "#FF00F0",
          secondary: "#FF257C",
          accent: "#FF4518",
          "base-100": "#FFFCFC",
          "base-200": "#ECEFFF",
          "base-300": "#D3DAFF",
        },
      },
    ],
  },
} satisfies Config
