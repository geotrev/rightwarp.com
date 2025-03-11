"use client"

import cn from "classnames"
import { Handshake, SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/core"
import { Routes } from "@/utils/helpers"

import { Action, ButtonAction, CallAction, NewsletterAction } from "./Action"
import { SubscribeForm } from "./Subscribe"

export interface ActionListProps {
  actions: ("button" | "newsletter" | "call")[]
}

const Actions = {
  button: ButtonAction,
  newsletter: NewsletterAction,
  call: CallAction,
}

export const ActionTriggers = {
  call: (
    <Link
      href="https://right-warp.moxieapp.com/public/right-warp/30-minute-meeting"
      className={cn(
        "btn btn-primary w-full text-white lg:btn-lg md:w-[75%] dark:text-black",
      )}
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
      Book A Call <Handshake className="size-5 lg:size-6" />
    </Link>
  ),
  newsletter: <SubscribeForm />,
}

export const ActionList = ({ actions }: ActionListProps) => {
  return (
    <Container isRaised isConstrained tag="section">
      {actions.map((action) => (
        <Action key={action} {...Actions[action]}>
          {ActionTriggers[action]}
        </Action>
      ))}
    </Container>
  )
}
