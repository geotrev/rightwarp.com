import * as Dialog from "@radix-ui/react-dialog"
import { ArrowRight, ChevronRight, X } from "lucide-react"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import LogoDark from "@/app/_assets/logo-dark.svg"
import LogoLight from "@/app/_assets/logo-light.svg"
import { Button } from "@/components/core"
import { NavItems } from "@/utils/helpers"

import { ThemeSwitchButton } from "./ThemeSwitchButton"

export const MobileDialog = ({ theme }: { theme: string }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="btn btn-ghost btn-sm text-purple-950 sm:btn-md dark:text-white"
        >
          <Menu size={24} />
          <span className="sr-only">Open navigation</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-white/75 p-5 backdrop-blur-md focus:outline-none data-[state=open]:animate-contentShow dark:bg-slate-950/50">
          <Dialog.Title className="sr-only">Navigation Dialog</Dialog.Title>

          <div className="mb-4 flex justify-between">
            <div className="block">
              <Dialog.Close asChild>
                <Link
                  href="/"
                  className="btn relative block h-7 w-[3.75rem] border-none !bg-transparent p-0 shadow-none"
                >
                  <Image src={theme === "dark" ? LogoDark : LogoLight} alt="Right Warp logo" fill />
                </Link>
              </Dialog.Close>
            </div>

            <Dialog.Close asChild>
              <Button
                className="text-purple-950 dark:text-purple-100"
                variant="ghost"
                aria-label="Close"
              >
                <X size={24} />
                <span className="sr-only">Close dialog</span>
              </Button>
            </Dialog.Close>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-8 flex flex-col gap-2">
              <ThemeSwitchButton theme={theme} isLarge />
              <span className="text-xs uppercase">Current theme: {theme}</span>
            </div>

            <div className="mb-4 flex w-full items-center gap-4">
              <hr
                className="w-full border-purple-950/25 dark:border-purple-100/25"
                aria-hidden="true"
              />
              <span className="display text-xs uppercase text-primary">Discover</span>
              <hr
                className="w-full border-purple-950/25 dark:border-purple-100/25"
                aria-hidden="true"
              />
            </div>

            <nav className="mb-8 w-full">
              <ul className="grid grid-cols-2 gap-4">
                {NavItems.map((item) => {
                  return (
                    <li className="flex" key={item.label}>
                      <Dialog.Close asChild>
                        <Link
                          href={item.href}
                          className="btn btn-block bg-purple-100 text-purple-950 hover:bg-purple-300 active:bg-purple-300 dark:bg-purple-950 dark:text-white dark:hover:bg-purple-800 dark:active:bg-purple-800"
                        >
                          {item.label}
                          <ChevronRight
                            aria-hidden="true"
                            size={20}
                            className="inline-flex text-black/50 dark:text-white"
                          />
                        </Link>
                      </Dialog.Close>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <Link href="/contact" className="btn btn-primary btn-block text-white dark:text-black">
              Warp Zone <ArrowRight size={20} />
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
