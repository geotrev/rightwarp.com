import { Hammer, NotebookText, PencilRuler, UserPen } from "lucide-react"

import type {
  ExpertiseProps,
  CardGridProps,
  ActionListProps,
} from "@/components/app"
import { TestimonialsProps } from "@/components/app/shared/Testimonials"
import { Routes } from "@/utils/helpers"

interface HomeProps {
  expertiseProps: ExpertiseProps
  blogProps: CardGridProps
  workProps: CardGridProps
  testimonialProps: Omit<TestimonialsProps, "testimonials">
  actionsProps: ActionListProps
}

// WIP should be block components

export const homeProps: HomeProps = {
  expertiseProps: {
    heading: "Expertise",
    subheading:
      "10+ years of hardened, design-minded web development experience at your finger-tips",
    icon: PencilRuler,
  },
  blogProps: {
    heading: "Thoughts",
    subheading: "Ramblings about tech, web development, and design",
    actionLabel: "More Posts",
    actionHref: Routes.BLOG,
    icon: NotebookText,
  },
  workProps: {
    heading: "Work",
    subheading: "Previous work to inspire your next project, always updating",
    actionLabel: "More Work",
    actionHref: Routes.WORK,
    icon: Hammer,
  },
  testimonialProps: {
    heading: "Testimonials",
    subheading: "What former colleagues and clients have to say",
    icon: UserPen,
  },
  actionsProps: {
    actions: [
      {
        heading: "Ready to build the future?",
        description:
          "Whether your project is brand new or needs some renewed attention",
        action: "button",
      },
      {
        heading: "Subscribe to the newsletter",
        description:
          "Get occasional emails about blog posts & industry happenings",
        action: "newsletter",
      },
    ],
  },
}
