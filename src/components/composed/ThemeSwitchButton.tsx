"use client"

import { Themes, useThemeContext } from "@/context/ThemeContext"
import { MoonStar, Sun } from "lucide-react"
import { useMemo } from "react"

export const ThemeController = () => {
  const { theme, changeTheme } = useThemeContext()
  // Preserve initial theme state; see JSX below
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialTheme = useMemo(() => theme, [])

  return (
    <label className="swap swap-rotate p-1 hover:bg-base-200">
      <input
        type="checkbox"
        className="theme-controller rounded-md"
        onChange={() =>
          changeTheme(theme === Themes.light ? Themes.dark : Themes.light)
        }
        value={theme}
      />
      {initialTheme === Themes.dark ? (
        <>
          <Sun size={24} className="swap-on" />
          <MoonStar size={24} className="swap-off" />
        </>
      ) : (
        <>
          <Sun size={24} className="swap-off" />
          <MoonStar size={24} className="swap-on" />
        </>
      )}
      <span className="sr-only">Toggle theme</span>
    </label>
  )
}
