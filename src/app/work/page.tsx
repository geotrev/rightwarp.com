import { ActionList, ActionListProps, Hero, HeroProps, WorkList } from "@/components/app"

import { workListProps } from "./constants"

export default function Work() {
  const heroProps: HeroProps = {
    variant: "display",
    heading: "Work",
    description:
      "From mockup to code, we focus on clear, accessible, and delightful digital design",
  }
  const actionsProps: ActionListProps = {
    actions: [
      {
        heading: "Need help on a project?",
        description: "Whether it’s a brand new or needs some renewed attention, we can help",
        action: "button",
      },
      {
        heading: "Subscribe to the newsletter",
        description: "Get occasional emails about blog posts & industry happenings",
        action: "newsletter",
      },
    ],
  }

  return (
    <>
      <Hero {...heroProps} />
      <WorkList {...workListProps} />
      <ActionList {...actionsProps} />
    </>
  )
}
