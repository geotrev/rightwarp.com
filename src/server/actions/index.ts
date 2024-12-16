"use server"

import { toggleTheme } from "@/server/utils"

export const handleThemeAction = async () => {
  await toggleTheme()
}
