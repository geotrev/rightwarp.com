import { Feather, Hammer, NotebookText } from "lucide-react"

import type {
  SkillCategoriesProps,
  CardGridProps,
  ActionListProps,
} from "@/components/app"
import { Routes } from "@/utils/helpers"

interface AboutPageProps {
  skillProps: SkillCategoriesProps
  blogProps: CardGridProps
  workProps: CardGridProps
  actionsProps: ActionListProps
}

export const staticProps: AboutPageProps = {
  skillProps: {
    heading: "Skills",
    icon: Feather,
    subheading:
      "Bringing a unique combination of skills & expertise to ensure project success",
  },
  blogProps: {
    heading: "Thoughts",
    subheading: "Ramblings about tech, web development, and design",
    actionLabel: "More Posts",
    actionHref: Routes.BLOG,
    icon: NotebookText,
  },
  workProps: {
    heading: "Work",
    subheading: "Previous work to inspire your next project, always updating",
    actionLabel: "More Work",
    actionHref: Routes.WORK,
    icon: Hammer,
  },
  actionsProps: {
    actions: [
      {
        heading: "Ready to build the future?",
        description:
          "Whether your project is brand new or needs some renewed attention",
        action: "button",
      },
      {
        heading: "Subscribe to the newsletter",
        description:
          "Get occasional emails about blog posts & industry happenings",
        action: "newsletter",
      },
    ],
  },
}
