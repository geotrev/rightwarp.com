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
    <header className="sticky top-0 px-8 py-8 md:px-12 md:py-12 lg:px-24 lg:py-10">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 rotate-0 lg:-left-[10.5rem] lg:-rotate-90">
          <Link
            href="/"
            className="btn block h-7 w-[3.75rem] border-none !bg-transparent shadow-none md:h-10 md:w-[5.3125rem]"
          >
            <Image src={LogoDark} alt="Right Warp logo" fill />
          </Link>
        </div>
        <div className="absolute left-[6.5rem] hidden w-10 text-sm text-purple-600 md:flex lg:-left-36 lg:top-24 dark:text-purple-400">
          Right Warp
        </div>
        <div className="ms-auto flex items-center justify-end gap-4 lg:ms-0 lg:w-full lg:justify-between">
          <div className="flex items-center">
            <Button
              className="md:me-2 lg:me-10"
              variant="primary"
              size={isLarge ? "lg" : "md"}
              endIcon={ArrowRight}
            >
              Warp Zone
            </Button>
            <div className="me-3 hidden text-sm xl:block">
              inquire about a project or just say hi
            </div>
            <span className="hidden text-2xl xl:block">👋</span>
          </div>
          <div className="hidden flex-col gap-4 md:flex">
            <div className="flex w-full items-center gap-4">
              <span className="display text-[0.625rem] uppercase text-primary">Discover</span>
              <hr className="w-full border-white/25" aria-hidden="true" />
            </div>
            <div className="flex gap-6">
              <nav>
                <ul>
                  {NavItems.map((item) => {
                    const isLastItem = lastNavItemLabel !== item.label
                    const marginClass = { "me-4": isLastItem }

                    return (
                      <li className={cn("inline-block", marginClass)} key={item.label}>
                        <Link
                          href={item.href}
                          className={cn(
                            "pb-1 text-sm font-bold uppercase text-purple-950 hover:shadow-[0_3px_0_black] dark:text-white dark:hover:shadow-[0_3px_0_white]",
                            marginClass,
                          )}
                        >
                          {item.label}
                        </Link>
                        {isLastItem && (
                          <Sparkle
                            aria-hidden="true"
                            size={12}
                            className="inline-block text-black/25 dark:text-white/50"
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
          <div className="flex md:hidden">
            <Button size="md" variant="ghost" className="text-purple-950 dark:text-white">
              <Menu />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
