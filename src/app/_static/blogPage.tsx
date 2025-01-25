import { ActionListProps, BrowseButtonsProps } from "@/components/app"
import { Routes } from "@/utils/helpers"

interface BlogProps {
  browseButtonsProps: BrowseButtonsProps
  actionsProps: ActionListProps
}

// WIP should be block components

export const staticProps: BlogProps = {
  browseButtonsProps: {
    actions: [
      {
        type: "primary",
        label: "Browse More Posts",
        href: Routes.BLOG,
      },
      {
        type: "secondary",
        label: "Browse Work",
        href: Routes.WORK,
      },
    ],
  },
  actionsProps: {
    actions: [
      {
        heading: "Ready to build the future?",
        description:
          "Whether your project is brand new or needs some renewed attention, we can help",
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
