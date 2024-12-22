"use client"

import { useState } from "react"

import { handleThemeAction } from "@/server/actions"
import { ThemeContext } from "@/utils/useThemeContext"

export const THEME_KEY = "__theme__"

export const ThemeProvider = ({
  children,
  initialTheme,
}: {
  children: React.ReactNode
  initialTheme: string
}) => {
  // Default theme value, but will be overriden by the effect if localStorage has a value
  const [theme, setTheme] = useState(initialTheme || "dark")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    handleThemeAction(newTheme)
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
