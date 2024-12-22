"use client"

import cn from "classnames"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Routes } from "@/utils/helpers"
import { useTheme } from "@/utils/useThemeContext"

import { Button, Container } from "../core"

import { Action } from "./Action"

export const EndActions = () => {
  const { theme } = useTheme()

  return (
    <section>
      <Container theme={theme} isRaised className="gap-16 py-16 2xl:px-[15%]">
        <Action
          heading="Need help on a project?"
          description="Whether it’s a brand new or needs some renewed attention, we can help"
        >
          <Link
            href={Routes.CONTACT}
            className={cn("btn btn-primary w-full text-white lg:btn-lg md:w-[75%] dark:text-black")}
          >
            Warp Zone <ArrowRight className="size-5 lg:size-6" />
          </Link>
        </Action>
        <Action
          heading="Subscribe to the newsletter"
          description="Get occasional emails about blog posts & industry happenings"
        >
          <form className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
            <input
              type="email"
              placeholder="mario@world.com"
              className="input input-secondary sm:flex-grow md:w-[50%] md:flex-grow-0 lg:w-[unset] lg:flex-grow"
            />
            <Button type="submit" variant="secondary" className="btn-outline">
              Subscribe
            </Button>
          </form>
        </Action>
      </Container>
    </section>
  )
}
