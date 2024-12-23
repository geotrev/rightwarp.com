"use client"

import cn from "classnames"
import { ArrowRight, Sparkle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

import LogoDark from "@/app/_assets/logo-dark.png"
import LogoLight from "@/app/_assets/logo-light.png"
import { NavItems, Routes } from "@/utils/helpers"
import { useIsLarge } from "@/utils/useMediaQuery"
import { useTheme } from "@/utils/useThemeContext"

import { MobileNav } from "./MobileNav"
import { ThemeSwitchButton } from "./ThemeSwitchButton"

const lastNavItemLabel = NavItems[NavItems.length - 1].label

export const Header = () => {
  const { theme } = useTheme()
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
      className="sticky top-[-1px] z-30 bg-base-200/50 px-6 py-2 backdrop-blur-lg transition-colors sm:px-8 md:px-12 md:py-4 lg:rounded-t-3xl lg:px-24 lg:py-8"
    >
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 rotate-0 transition-all ease-in-out lg:-left-[10.25rem] lg:-rotate-90">
          <Link
            href={Routes.HOME}
            className="btn relative flex h-9 min-h-0 w-16 items-center border-none !bg-transparent p-0 shadow-none md:w-20"
          >
            {theme === "dark" ? (
              <Image src={LogoDark} fill style={{ objectFit: "contain" }} alt="Right Warp, home" />
            ) : (
              <Image src={LogoLight} fill style={{ objectFit: "contain" }} alt="Right Warp, home" />
            )}
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
              Warp Zone <ArrowRight className="size-5 lg:size-6" />
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
                            "btn btn-ghost btn-xs !bg-transparent px-0 text-sm uppercase",
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
            <MobileNav theme={theme} />
          </div>
        </div>
      </div>
    </header>
  )
}
