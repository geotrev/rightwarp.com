"use client"

import { createContext, useContext } from "react"

export const ThemeContext = createContext<
  | {
      theme: string
      toggleTheme: () => void
    }
  | undefined
>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
