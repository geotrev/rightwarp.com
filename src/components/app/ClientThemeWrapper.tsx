"use client"

import { useThemeContext } from "@/context/ThemeContext"

export const ClientThemeWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { theme } = useThemeContext()

  return <div data-theme={theme}>{children}</div>
}
