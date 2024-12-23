"use client"

import cn from "classnames"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button, Container } from "@/components/core"
import { Routes } from "@/utils/helpers"
import { useTheme } from "@/utils/useThemeContext"

import { Action } from "./Action"

export interface EndActionsProps {
  actions: {
    heading: string
    description: string
    action: "button" | "newsletter"
  }[]
}

export const EndActions = ({ actions }: EndActionsProps) => {
  const { theme } = useTheme()

  const actionChildren = {
    button: (
      <Link
        href={Routes.CONTACT}
        className={cn("btn btn-primary w-full text-white lg:btn-lg md:w-[75%] dark:text-black")}
      >
        Warp Zone <ArrowRight className="size-5 lg:size-6" />
      </Link>
    ),
    newsletter: (
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
    ),
  }

  return (
    <section>
      <Container theme={theme} isRaised className="gap-16 py-16 2xl:px-[15%]">
        {actions.map(({ heading, description, action }) => (
          <Action key={heading} {...{ heading, description }}>
            {actionChildren[action]}
          </Action>
        ))}
      </Container>
    </section>
  )
}
