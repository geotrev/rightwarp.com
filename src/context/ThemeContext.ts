"use client"

import { createContext, useContext } from "react"

export interface ThemeContextValue {
  theme: "bumblebee" | "sunset"
  changeTheme: (theme: "bumblebee" | "sunset") => void
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
