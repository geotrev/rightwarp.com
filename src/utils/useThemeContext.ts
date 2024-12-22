"use client"

import { createContext, use } from "react"

export const ThemeContext = createContext<
  | {
      theme: string
      toggleTheme: () => void
    }
  | undefined
>(undefined)

export const useTheme = () => {
  const context = use(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
