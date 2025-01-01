import TailwindForms from "@tailwindcss/forms"
import TailwindTypography from "@tailwindcss/typography"
import DaisyUI from "daisyui"
import type { Config } from "tailwindcss"

import { DARK_THEME, LIGHT_THEME, TAILWIND_THEME } from "./config/tailwind"

export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: TAILWIND_THEME,
  },
  plugins: [TailwindTypography, TailwindForms, DaisyUI],
  daisyui: {
    themes: [{ dark: DARK_THEME }, { light: LIGHT_THEME }],
  },
} satisfies Config
