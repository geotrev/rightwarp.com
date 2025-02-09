"use client"

import { ActionList, Hero } from "@/components/app"

export default function NotFound() {
  return (
    <>
      <Hero heading="Sorry, that page doesn't exist" />
      <ActionList actions={["button", "newsletter"]} />
    </>
  )
}
