import { ActionListProps } from "@/components/app"

interface BlogProps {
  actionsProps: ActionListProps
}

// WIP should be block components

export const staticProps: BlogProps = {
  actionsProps: {
    actions: [
      {
        heading: "Need help on a project?",
        description: "Whether it's a brand new or needs some renewed attention, we can help",
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