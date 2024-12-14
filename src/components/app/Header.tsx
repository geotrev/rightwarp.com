"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu, MoonStar, Sparkle } from "lucide-react"
import cn from "classnames"
import LogoDark from "@/app/_assets/logo-dark.svg"
import { Button } from "../core/Button"
import { useIsLarge } from "@/utils/useMediaQuery"
import { NavItems } from "@/utils/constants"

const lastNavItemLabel = NavItems[NavItems.length - 1].label

export const Header = () => {
  const isLarge = useIsLarge()

  return (
    <header className="sticky top-0 lg:px-24 lg:py-10 md:px-12 md:py-12 px-8 py-8">
      <div className="flex justify-between items-center relative">
        <div className="absolute lg:-rotate-90 lg:-left-[10.5rem] left-0 rotate-0">
          <Link
            href="/"
            className="btn !bg-transparent block w-[3.75rem] md:w-[5.3125rem] h-7 md:h-10 shadow-none border-none"
          >
            <Image src={LogoDark} alt="Right Warp logo" fill />
          </Link>
        </div>
        <div className="absolute hidden md:flex text-sm w-10 text-purple-600 dark:text-purple-400 lg:-left-36 left-[6.5rem] lg:top-24">
          Right Warp
        </div>
        <div className="flex ms-auto lg:ms-0 items-center lg:w-full gap-4 lg:justify-between justify-end">
          <div className="flex items-center">
            <Button
              className="md:me-2 lg:me-10"
              variant="primary"
              size={isLarge ? "lg" : "md"}
              endIcon={ArrowRight}
            >
              Warp Zone
            </Button>
            <div className="hidden xl:block text-sm me-3">
              inquire about a project or just say hi
            </div>
            <span className="hidden xl:block text-2xl">👋</span>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <div className="flex gap-4 items-center w-full">
              <span className="display text-primary uppercase text-[0.625rem]">
                Discover
              </span>
              <hr className="border-white/25 w-full" aria-hidden="true" />
            </div>
            <div className="flex gap-6">
              <nav>
                <ul>
                  {NavItems.map((item) => {
                    const isLastItem = lastNavItemLabel !== item.label
                    const marginClass = { "me-4": isLastItem }

                    return (
                      <li
                        className={cn("inline-block", marginClass)}
                        key={item.label}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "hover:shadow-[0_3px_0_black] dark:hover:shadow-[0_3px_0_white] pb-1 uppercase text-sm text-purple-950 dark:text-white font-bold",
                            marginClass,
                          )}
                        >
                          {item.label}
                        </Link>
                        {isLastItem && (
                          <Sparkle
                            aria-hidden="true"
                            size={12}
                            className="text-black/25 dark:text-white/50 inline-block"
                          />
                        )}
                      </li>
                    )
                  })}
                </ul>
              </nav>
              <MoonStar size={24} className="text-purple-950 dark:text-white" />
            </div>
          </div>
          <div className="md:hidden flex">
            <Button
              size="md"
              variant="ghost"
              className="dark:text-white text-purple-950"
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
