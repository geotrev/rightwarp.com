"use client"

import cn from "classnames"
import { ArrowRight, Sparkle } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

import LogoDark from "@/app/_assets/logo-dark.svg"
import LogoLight from "@/app/_assets/logo-light.svg"
import { NavItems, Routes } from "@/utils/helpers"
import { useIsLarge } from "@/utils/useMediaQuery"

import { MobileDialog } from "./MobileDialog"
import { ThemeSwitchButton } from "./ThemeSwitchButton"

const lastNavItemLabel = NavItems[NavItems.length - 1].label

export const Header = ({ theme }: { theme: string }) => {
  const ref = useRef<HTMLElement | null>(null)
  const isLarge = useIsLarge()

  useEffect(() => {
    let observer: IntersectionObserver

    if (isLarge && ref.current) {
      observer = new IntersectionObserver(
        ([e]) => {
          if (e.intersectionRatio < 1) {
            e.target.classList.remove("lg:rounded-t-3xl")
          } else {
            e.target.classList.add("lg:rounded-t-3xl")
          }
        },
        { threshold: [1] },
      )

      observer.observe(ref.current)
    }

    return () => {
      observer?.disconnect()
    }
  }, [ref, isLarge])

  return (
    <header
      ref={ref}
      className="sticky top-[-1px] z-30 bg-base-200/50 px-8 py-2 backdrop-blur-lg transition-colors sm:px-8 md:px-12 md:py-4 lg:rounded-t-3xl lg:px-24 lg:py-8"
    >
      <div className="relative flex items-center justify-between">
        <div className="left-0 rotate-0 transition-all ease-in-out md:absolute lg:-left-[10.25rem] lg:-rotate-90">
          <Link
            href={Routes.HOME}
            className="btn flex h-auto min-h-0 w-16 items-center border-none !bg-transparent p-0 shadow-none md:w-20"
          >
            {theme === "dark" ? <LogoDark /> : <LogoLight />}
          </Link>
        </div>
        <div className="ms-auto flex items-center justify-end gap-2 sm:gap-2 md:gap-4 lg:ms-0 lg:w-full lg:justify-between">
          <div className="flex items-center">
            <Link
              href={Routes.CONTACT}
              className={cn(
                "btn btn-primary btn-sm text-white sm:btn-md md:me-2 lg:me-10 dark:text-black",
              )}
            >
              Warp Zone <ArrowRight size={isLarge ? 24 : 20} />
            </Link>
            <div className="me-3 hidden text-sm xl:block">
              inquire about a project or just say hi
            </div>
            <span className="hidden text-2xl xl:block">👋</span>
          </div>
          <div className="hidden flex-col md:flex">
            <div className="flex w-full items-center gap-4">
              <span className="display text-[0.625rem] uppercase text-primary">Discover</span>
              <hr
                className="w-full border-purple-950/25 dark:border-purple-100/25"
                aria-hidden="true"
              />
            </div>
            <div className="flex gap-6">
              <nav className="flex items-end">
                <ul>
                  {NavItems.map((item) => {
                    const isLastItem = lastNavItemLabel !== item.label
                    const marginClass = { "me-4": isLastItem }

                    return (
                      <li className={cn("inline-block", marginClass)} key={item.label}>
                        <Link
                          href={item.href}
                          className={cn(
                            "link pb-1 text-sm font-bold uppercase text-purple-950 no-underline hover:shadow-[0_3px_0_black] focus:transition-none dark:text-white dark:hover:shadow-[0_3px_0_white]",
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
              <ThemeSwitchButton theme={theme} />
            </div>
          </div>
          <div className="flex md:hidden">
            <MobileDialog theme={theme} />
          </div>
        </div>
      </div>
    </header>
  )
}
