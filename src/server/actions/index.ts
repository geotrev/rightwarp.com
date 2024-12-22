"use server"

import { setThemeCookie } from "@/server/utils"

export const handleThemeAction = async (theme: string) => {
  await setThemeCookie(theme)
}
