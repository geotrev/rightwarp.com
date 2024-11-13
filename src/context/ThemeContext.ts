"use client"

import { createContext, useContext } from "react"

export const Themes = {
  light: "winter",
  dark: "dark",
}

export interface ThemeContextValue {
  theme: string
  changeTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
)

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
