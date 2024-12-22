"use server"

import { cookies } from "next/headers"

export const getThemeCookie = async () => {
  const theme = (await cookies()).get("__rw_theme__")?.value ?? "dark"
  return theme
}

export const setThemeCookie = async (theme: string) => {
  return (await cookies()).set("__rw_theme__", theme, {
    maxAge: 60 * 60 * 24 * 365,
  })
}
