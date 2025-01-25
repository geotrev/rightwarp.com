"use client"

import cn from "classnames"
import { Mail, SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/core"
import { Routes } from "@/utils/helpers"

import { Action } from "./Action"
import { SubscribeForm } from "./Subscribe"

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
      className={cn(
        "btn btn-primary w-full text-white lg:btn-lg md:w-[50%] lg:w-full dark:text-black",
      )}
    >
      Book A Call <Mail className="size-5 lg:size-6" />
    </Link>
  ),
  newsletter: <SubscribeForm />,
}

export const ActionList = ({ actions }: ActionListProps) => {
  return (
    <Container isRaised isConstrained tag="section">
      {actions.map(({ heading, description, action }) => (
        <Action key={heading} {...{ heading, description }}>
          {actionTypes[action]}
        </Action>
      ))}
    </Container>
  )
}
