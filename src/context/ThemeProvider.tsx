"use client"

import { PropsWithChildren, useCallback, useEffect, useState } from "react"
import { ThemeContext, ThemeContextValue, Themes } from "./ThemeContext"

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeContextValue["theme"]>(Themes.light)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)")
    const detectedTheme = darkTheme ? Themes.dark : Themes.light
    const localTheme = localStorage.getItem("theme") || detectedTheme
    setTheme(localTheme as ThemeContextValue["theme"])
  }, [])

  const changeTheme = useCallback((theme: ThemeContextValue["theme"]) => {
    setTheme(theme)
    localStorage.setItem("theme", theme)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
