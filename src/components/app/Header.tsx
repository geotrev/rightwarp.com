"use client"

import Image from "next/image"
import { ThemeController } from "./ThemeSwitchButton"
import LogoLight from "@/assets/logo-light.svg"
import LogoDark from "@/assets/logo-dark.svg"
import { Themes, useThemeContext } from "@/context/ThemeContext"
import { WarpZoneButton } from "./WarpZoneButton"
import { HeaderLinks } from "./HeaderLinks"
import { Link } from "../core"

export const Header = () => {
  const { theme } = useThemeContext()
  const logo = theme === Themes.dark ? LogoDark : LogoLight

  return (
    <div className="pointer-events-none fixed inset-0 h-screen w-screen">
      <nav
        style={{ backdropFilter: "blur(12px)" }}
        className="navbar pointer-events-auto absolute left-1/2 top-4 z-50 flex min-h-12 w-[90vw] -translate-x-1/2 items-stretch gap-2 border border-black/10 bg-white/20 py-0 pe-0 ps-2 shadow-2xl shadow-black/15 dark:border-white/15 dark:bg-black/20 dark:shadow-black/25 sm:top-12 sm:w-[85vw]"
      >
        <div className="inline-flex items-center gap-8">
          <Link
            href="/"
            isGhost
            className="absolute ms-1 h-8 w-16 !bg-transparent p-0 transition-all lg:-inset-y-8 lg:h-28 lg:w-40"
          >
            <Image src={logo} alt="Right Warp Logo" fill />
          </Link>
        </div>
        <div className="ms-auto">
          <div className="hidden md:flex">
            <ThemeController />
          </div>
          <HeaderLinks />
          <WarpZoneButton className="h-full" />
        </div>
      </nav>
    </div>
  )
}
