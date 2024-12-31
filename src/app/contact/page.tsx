import {
  ActionList,
  ActionListProps,
  ContactForm,
  ContactFormProps,
  Hero,
  HeroProps,
} from "@/components/app"

export default function Contact() {
  const heroProps: HeroProps = {
    variant: "display",
    heading: "Let's Chat",
    description: "Start your next project on the right foot",
  }
  const scheduleActionsProps: ActionListProps = {
    actions: [
      {
        heading: "Schedule a call",
        description:
          "Share 30 minutes to discuss your project(s). Fair warning: we'll ask a lot of questions.",
        action: "call",
      },
    ],
  }
  const contactFormProps: ContactFormProps = {
    heading: "Message Us",
    subheading:
      "Once we receive your message, we'll review the project and be in touch within a few days",
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
  }
  const endActionsProps: ActionListProps = {
    actions: [
      {
        heading: "Subscribe to the newsletter",
        description: "Get occasional emails about blog posts & industry happenings",
        action: "newsletter",
      },
    ],
  }

  return (
    <>
      <Hero {...heroProps} />
      <ActionList {...scheduleActionsProps} />
      <ContactForm {...contactFormProps} />
      <ActionList {...endActionsProps} />
    </>
  )
}
