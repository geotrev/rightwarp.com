"use client"

import { useThemeContext } from "@/context/ThemeContext"
import { MoonStar, Sun } from "lucide-react"
import { useMemo } from "react"

export const ThemeController = () => {
  const { theme, changeTheme } = useThemeContext()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialTheme = useMemo(() => theme, [])

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={() =>
          changeTheme(theme === "bumblebee" ? "sunset" : "bumblebee")
        }
        value={theme}
      />
      {initialTheme === "sunset" ? (
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
    </label>
  )
}
