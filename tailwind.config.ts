import type { Config } from "tailwindcss"
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  daisyui: {
    darkTheme: "synthwave",
    themes: ["synthwave", "winter"],
  },
  plugins: [daisyui],
  darkMode: ["class", '[data-theme="synthwave"]'],
}

export default config
