import type { Config } from "tailwindcss"
import TailwindTypography from "@tailwindcss/typography"
import TailwindForms from "@tailwindcss/forms"
import DaisyUI from "daisyui"
import { dark, light } from "daisyui/src/theming/themes"

export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
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
