"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"
import LogoDark from "@/app/_assets/logo-dark.svg"
import { Button } from "../core/Button"
import { useIsMedium } from "@/utils/useMediaQuery"

export const Header = () => {
  const isMedium = useIsMedium()

  return (
    <header className="sticky top-0 lg:px-24 lg:py-10 md:px-12 md:py-12 px-8 py-8">
      <nav className="flex justify-between items-center relative">
        <div className="absolute lg:-rotate-90 lg:-left-[10.5rem] left-0 rotate-0">
          <Link
            href="/"
            className="btn !bg-transparent block w-[60px] md:w-[85px] h-7 md:h-10 shadow-none border-none"
          >
            <Image src={LogoDark} alt="Right Warp logo" fill />
          </Link>
        </div>
        <div className="absolute hidden md:flex text-sm w-10 text-purple-400 lg:-left-36 left-[6.5rem] lg:top-24">
          Right Warp
        </div>
        <div className="flex ms-auto lg:ms-0 items-center lg:w-full gap-4 lg:justify-between justify-end">
          <div className="flex items-center">
            <Button
              className="xl:me-8"
              variant="primary"
              size={isMedium ? "lg" : "sm"}
              endIcon={ArrowRight}
            >
              Warp Zone
            </Button>
            <div className="hidden xl:block text-sm me-3">
              inquire about a project or just say hi
            </div>
            <span className="hidden xl:block text-2xl">👋</span>
          </div>
          <div className="hidden md:flex">Wide nav</div>
          <div className="md:hidden flex">
            <Button size="sm" variant="ghost" className="text-white">
              <Menu />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
