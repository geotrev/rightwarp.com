"use client"

import { useEffect, useState } from "react"

import { ThemeContext } from "@/utils/useThemeContext"

export const THEME_KEY = "__rw_theme__"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Default theme value, but will be overriden by the effect if localStorage has a value
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY)
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      localStorage.setItem(THEME_KEY, theme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
