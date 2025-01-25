import { ActionListProps, BrowseButtonsProps } from "@/components/app"
import { Routes } from "@/utils/helpers"

interface WorkProps {
  actionsProps: ActionListProps
  browseButtonsProps: BrowseButtonsProps
}

// WIP should be block components

export const workProps: WorkProps = {
  browseButtonsProps: {
    actions: [
      {
        type: "primary",
        label: "Browse More Work",
        href: Routes.WORK,
      },
      // {
      //   type: "secondary",
      //   label: "Browse Blog",
      //   href: Routes.BLOG,
      // },
    ],
  },
  actionsProps: {
    actions: [
      {
        heading: "Ready to build the future?",
        description: "Whether your project is brand new or needs some renewed attention",
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
