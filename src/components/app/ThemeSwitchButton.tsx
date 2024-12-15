"use client"

import { MoonStar, Sun } from "lucide-react"

import { handleThemeAction } from "@/actions/theme"

export const ThemeSwitchButton = ({ theme }: { theme?: string }) => {
  return (
    <button
      type="button"
      className="btn h-auto min-h-0 border-none bg-transparent p-1 shadow-none hover:border-none hover:bg-transparent"
      onClick={() => handleThemeAction()}
    >
      {theme === "dark" ? <MoonStar size={24} /> : <Sun size={24} />}
    </button>
  )
}
