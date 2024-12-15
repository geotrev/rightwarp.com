"use server"

import { toggleTheme } from "@/utils/theme"

export const handleThemeAction = async () => {
  await toggleTheme()
}
