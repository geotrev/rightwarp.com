import type { Config } from "tailwindcss"
import TailwindTypography from "@tailwindcss/typography"
import TailwindForms from "@tailwindcss/forms"
import { PALETTE } from "./src/theme/palette"

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: PALETTE,
    },
  },
  plugins: [TailwindTypography, TailwindForms],
} satisfies Config
