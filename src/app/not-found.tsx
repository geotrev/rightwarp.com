"use client"

import { ActionList, Hero } from "@/components/app"

import { homeProps } from "./_static/homePage"

export default function NotFound() {
  return (
    <>
      <Hero heading="Sorry, that page doesn't exist" />
      <ActionList {...homeProps.actionsProps} />
    </>
  )
}
