import { dark, light } from "daisyui/src/theming/themes"
import { CustomThemeConfig } from "tailwindcss/types/config"

import { tailwindTypography } from "./tailwind-typography"

// Tailwind Theme overrides & additions

export const TAILWIND_THEME: Partial<CustomThemeConfig> = {
  typography: ({ theme }: { theme: (path: string) => string }) => ({
    ...tailwindTypography(theme),
  }),
  keyframes: {
    "marquee-start": {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-100%)" },
    },
    "marquee-end": {
      "0%": { transform: "translateX(100%)" },
      "100%": { transform: "translateX(0%)" },
    },
    "overlay-show": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "content-show": {
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
    "overlay-show": "overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    "content-show": "content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
}

// DaisyUI custom themes

export const LIGHT_THEME = {
  ...light,
  primary: "#FF00F0",
  secondary: "#FF257C",
  accent: "#FF4518",
  "base-100": "#FFFCFC",
  "base-200": "#ECEFFF",
  "base-300": "#D3DAFF",
}

export const DARK_THEME = {
  ...dark,
  primary: "#FF4DF5",
  secondary: "#FF61A0",
  accent: "#FF7D5D",
  "base-100": "#180E0E",
  "base-200": "#131417",
  "base-300": "#1E2237",
}
