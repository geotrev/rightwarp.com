"use client"

import { handleThemeAction } from "@/actions/theme"
import { MoonStar, Sun } from "lucide-react"

export const ThemeSwitchButton = ({ theme }: { theme?: string }) => {
  return (
    <button type="button" onClick={() => handleThemeAction()}>
      {theme === "dark" ? <MoonStar size={24} /> : <Sun size={24} />}
    </button>
  )
}
