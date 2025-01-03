import { ActionListProps } from "@/components/app"

interface WorkProps {
  actionsProps: ActionListProps
}

export const workProps: WorkProps = {
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
