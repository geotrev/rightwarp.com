import type { Config } from "tailwindcss"
import daisyui from "daisyui"
import themes from "daisyui/src/theming/themes"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        "300": "3",
      },
    },
  },
  daisyui: {
    darkTheme: "dark",
    themes: [
      {
        dark: {
          ...themes.dark,
          "base-100": "#111111",
        },
      },
      "winter",
    ],
  },
  plugins: [daisyui],
  darkMode: ["class", '[data-theme="dark"]'],
}

export default config
