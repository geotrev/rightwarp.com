"use client"

import cn from "classnames"
import { MoonStar, Sun } from "lucide-react"

import { useTheme } from "@/utils/useThemeContext"

export const ThemeSwitchButton = ({ isLarge }: { isLarge?: boolean; theme?: string }) => {
  const { theme, toggleTheme } = useTheme()
  const size = isLarge ? 32 : 24

  const handleClick = () => toggleTheme()

  return (
    <button
      type="button"
      className={cn(
        "btn h-auto min-h-0 border-none bg-transparent p-1 shadow-none hover:bg-transparent",
        {
          "p-1": !isLarge,
          "p-4": isLarge,
        },
      )}
      onClick={handleClick}
    >
      {theme === "dark" ? <MoonStar size={size} /> : <Sun size={size} />}
      <span className="sr-only">Toggle theme (current theme: {theme})</span>
    </button>
  )
}
