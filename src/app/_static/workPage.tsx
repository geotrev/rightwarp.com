import { ActionListProps, CallToActionProps } from "@/components/app"

interface WorkProps {
  actionsProps: ActionListProps
  callToActionProps: CallToActionProps
}

export const workProps: WorkProps = {
  callToActionProps: {
    actions: [
      {
        type: "primary",
        label: "Browse More Work",
        href: "/work",
      },
      {
        type: "secondary",
        label: "Browse Blog",
        href: "/blog",
      },
    ],
  },
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
