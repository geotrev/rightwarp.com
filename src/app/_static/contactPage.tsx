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
        description: "Share 30 minutes to discuss your project(s) and answer some questions.",
        action: "call",
      },
    ],
  },
  contactFormProps: {
    heading: "Message Us",
    subheading: "Share some details about your project—the more, the better!",
    icon: Send,
    contact: [
      {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Mario",
        required: true,
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "mario@bros.com",
        required: true,
      },
      {
        label: "Phone",
        name: "phone",
        type: "tel",
        placeholder: "555-123-4567",
      },
    ],
    topics: [
      { label: "Design", name: "topic-design" },
      { label: "Development", name: "topic-development" },
      { label: "UI / UX", name: "topic-ui-ux" },
      { label: "Design Systems", name: "topic-design-systems" },
      { label: "Accessibility", name: "topic-a11y" },
      { label: "Other", name: "topic-other" },
    ],
    details: {
      label: "Details",
      name: "details",
      type: "textarea",
      hint: "Share some more details about the project: problem, goals, timeline, etc.",
    },
  },
  endActionsProps: {
    actions: [
      {
        heading: "Subscribe to the newsletter",
        description: "Get occasional emails about blog posts & industry happenings",
        action: "newsletter",
      },
    ],
  },
}
