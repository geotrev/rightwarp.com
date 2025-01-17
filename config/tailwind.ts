import { dark, light } from "daisyui/src/theming/themes"
import { CustomThemeConfig } from "tailwindcss/types/config"

// Tailwind Theme overrides & additions

export const TAILWIND_THEME: Partial<CustomThemeConfig> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typography: ({ theme }: Record<string, any>) => ({
    DEFAULT: {
      css: {
        maxWidth: "100%",
        "--tw-prose-body": theme("colors.purple[950]"),
        "--tw-prose-invert-body": theme("colors.purple[100]"),
      },
    },
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
