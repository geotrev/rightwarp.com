import { NotebookText } from "lucide-react"

import type { CardGridProps, ActionListProps } from "@/components/app"
import { Routes } from "@/utils/helpers"

interface CategoryPageProps {
  blogProps: CardGridProps
  actionsProps: ActionListProps
}

// WIP should be block components

export const staticProps: CategoryPageProps = {
  blogProps: {
    heading: "Thoughts",
    subheading: "Ramblings about tech, web development, and design",
    actionLabel: "More Posts",
    actionHref: Routes.BLOG,
    icon: NotebookText,
  },
  actionsProps: {
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
  },
}
