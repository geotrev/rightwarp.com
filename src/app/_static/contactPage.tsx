import { Send } from "lucide-react"

import { ActionListProps, ContactFormProps } from "@/components/app"

interface ContactProps {
  scheduleActionsProps: ActionListProps
  contactFormProps: ContactFormProps
  endActionsProps: ActionListProps
}

// WIP should be block components

export const contactProps: ContactProps = {
  scheduleActionsProps: {
    actions: [
      {
        heading: "Schedule a call",
        description:
          "Share 30 minutes to discuss your project(s) and answer some questions.",
        action: "call",
      },
    ],
  },
  contactFormProps: {
    heading: "Message Us",
    subheading: "Share some details about your project—the more, the better!",
    icon: Send,
  },
  endActionsProps: {
    actions: [
      {
        heading: "Subscribe to the newsletter",
        description:
          "Get occasional emails about blog posts & industry happenings",
        action: "newsletter",
      },
    ],
  },
}
