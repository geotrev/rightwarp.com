"use client"

import cn from "classnames"
import { MoonStar, Sun } from "lucide-react"
import { useEffect, useState } from "react"

import { useTheme } from "@/utils/useThemeContext"

export const ThemeSwitchButton = ({ isLarge }: { isLarge?: boolean; theme?: string }) => {
  const { theme, toggleTheme } = useTheme()
  const size = isLarge ? 32 : 24
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClick = () => toggleTheme()

  return (
    <button
      type="button"
      className={cn(
        "btn h-auto min-h-0 border-none bg-transparent p-1 shadow-none hover:bg-transparent",
        {
          "p-0": !isLarge,
          "p-4": isLarge,
        },
      )}
      onClick={handleClick}
    >
      <span
        className={cn("size-6 opacity-0 transition-opacity", {
          "opacity-100": isMounted,
        })}
      >
        {isMounted && (theme === "dark" ? <MoonStar size={size} /> : <Sun size={size} />)}
      </span>
      <span className="sr-only">Toggle theme (current theme: {theme})</span>
    </button>
  )
}
