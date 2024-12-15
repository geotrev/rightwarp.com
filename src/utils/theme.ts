"use server"

import { cookies } from "next/headers"

export const getTheme = async () => {
  const theme = (await cookies()).get("theme")?.value ?? "dark"
  return theme
}

export const toggleTheme = async () => {
  const theme = await getTheme()
  return (await cookies()).set("theme", theme === "dark" ? "light" : "dark", {
    maxAge: 60 * 60 * 24 * 365,
  })
}
