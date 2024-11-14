import type { Config } from "tailwindcss"
import daisyui from "daisyui"
import themes from "daisyui/src/theming/themes"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  daisyui: {
    darkTheme: "dark",
    themes: [
      {
        dark: {
          ...themes.dark,
          primary: themes.dark.secondary,
          secondary: themes.dark.primary,
          "base-100": "#111111",
          "--rounded-box": "0",
          "--rounded-btn": "0",
        },
      },
      {
        winter: {
          ...themes.winter,
          primary: themes.winter.accent,
          accent: themes.winter.primary,
          "--rounded-box": "0",
          "--rounded-btn": "0",
        },
      },
    ],
  },
  plugins: [daisyui],
  darkMode: ["class", '[data-theme="dark"]'],
}

export default config
