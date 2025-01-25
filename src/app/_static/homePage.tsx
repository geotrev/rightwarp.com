import { Hammer, NotebookText, PencilRuler, UserPen } from "lucide-react"

import Codecov from "@/app/_assets/logos/codecov.svg"
import Musicnotes from "@/app/_assets/logos/musicnotes.svg"
import Scribd from "@/app/_assets/logos/scribd.svg"
import ServiceNow from "@/app/_assets/logos/servicenow.svg"
import Zendesk from "@/app/_assets/logos/zendesk.svg"
import type {
  LogoMarqueeProps,
  ExpertiseProps,
  CardGridProps,
  ActionListProps,
} from "@/components/app"
import { TestimonialsProps } from "@/components/app/shared/Testimonials"
import { Routes } from "@/utils/helpers"

interface HomeProps {
  logoMarqueeProps: LogoMarqueeProps
  expertiseProps: ExpertiseProps
  blogProps: CardGridProps
  workProps: CardGridProps
  testimonialProps: Omit<TestimonialsProps, "testimonials">
  actionsProps: ActionListProps
}

// WIP should be block components

export const homeProps: HomeProps = {
  logoMarqueeProps: {
    logos: [
      { name: "Codecov", Logo: Codecov },
      { name: "Musicnotes", Logo: Musicnotes },
      { name: "Scribd", Logo: Scribd },
      { name: "ServiceNow", Logo: ServiceNow },
      { name: "Zendesk", Logo: Zendesk },
    ],
  },
  expertiseProps: {
    heading: "Expertise",
    subheading:
      "10+ years of hardened, design-minded web development experience at your finger-tips",
    icon: PencilRuler,
    items: [
      {
        isRaised: true,
        isReversed: true,
        heading: "Design Systems",
        description:
          "Scale faster, impress users and developers alike with scalable design patterns, tokens, components, and consistent UX",
        icon: "ModulePuzzleIcon",
      },
      {
        heading: "WCAG-Compliant Accessibility",
        description:
          "Enshrine customer trust and market presence with inclusive experiences for people of all abilities",
        icon: "WheelchairIcon",
      },
      {
        isRaised: true,
        isReversed: true,
        heading: "Business Websites",
        description:
          "Expand your reach or breathe new life into your digital footprint with a renewed & modernized digital experience for customers",
        icon: "BrowserBuildIcon",
      },
      {
        heading: "User Experience",
        description: "Delight customers with an intuitive product and research-driven design",
        icon: "SingleUserNeutralIcon",
      },
      {
        isRaised: true,
        isReversed: true,
        heading: "Audits, Testing & Quality",
        description: "Temper your product development with stronger testing infrastructure.",
        icon: "DesktopCheckIcon",
      },
      {
        heading: "Support & Maintenance",
        description:
          "Support an ongoing content strategy, performance, search engine optimization (SEO), security, and more.",
        icon: "WrenchIcon",
      },
    ],
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
