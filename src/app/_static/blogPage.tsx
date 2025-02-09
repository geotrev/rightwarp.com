import { BrowseButtonsProps } from "@/components/app"
import { Routes } from "@/utils/helpers"

interface BlogProps {
  browseButtonsProps: BrowseButtonsProps
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
}
