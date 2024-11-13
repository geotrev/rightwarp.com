"use client"

import Image from "next/image"
import { Container } from "../core/Container"
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
    <Container
      tag="header"
      innerProps={{
        className:
          "sticky top-0 z-50 flex items-center justify-between gap-4 bg-base-100 py-2 md:py-5",
      }}
    >
      <div className="me-auto inline-flex items-center gap-4">
        <Link href="/" isGhost className="!bg-transparent p-0">
          <Image src={logo} alt="Logo" width={75} height={50} />
        </Link>
        <div className="hidden md:inline-flex">
          <ThemeController />
        </div>
      </div>
      <HeaderLinks />
      <WarpZoneButton />
    </Container>
  )
}
