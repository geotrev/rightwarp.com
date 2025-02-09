import { BrowseButtonsProps } from "@/components/app"
import { Routes } from "@/utils/helpers"

interface WorkProps {
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
}
