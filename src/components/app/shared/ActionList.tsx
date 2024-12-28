"use client"

import cn from "classnames"
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"

import { Button, Container } from "@/components/core"
import { Routes } from "@/utils/helpers"

import { Action } from "./Action"

export interface ActionListProps {
  actions: {
    heading: string
    description: string
    action: "button" | "newsletter" | "call"
  }[]
}

export const actionTypes = {
  call: (
    <Link
      href="https://cal.com/rightwarp/30min"
      className={cn("btn btn-primary w-full text-white lg:btn-lg md:w-[75%] dark:text-black")}
      target="_blank"
      rel="noopener noreferrer"
    >
      Schedule Now <SquareArrowOutUpRight className="size-5 lg:size-6" />
    </Link>
  ),
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

export const ActionList = ({ actions }: ActionListProps) => {
  return (
    <section>
      <Container isRaised>
        {actions.map(({ heading, description, action }) => (
          <Action key={heading} {...{ heading, description }}>
            {actionTypes[action]}
          </Action>
        ))}
      </Container>
    </section>
  )
}
