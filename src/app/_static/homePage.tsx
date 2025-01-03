import Codecov from "@/app/_assets/logos/codecov.svg"
import Musicnotes from "@/app/_assets/logos/musicnotes.svg"
import Scribd from "@/app/_assets/logos/scribd.svg"
import ServiceNow from "@/app/_assets/logos/servicenow.svg"
import Zendesk from "@/app/_assets/logos/zendesk.svg"
import {
  LogoMarqueeProps,
  ExpertiseProps,
  BlogPreviewProps,
  ActionListProps,
} from "@/components/app"

interface HomeProps {
  logoMarqueeProps: LogoMarqueeProps
  expertiseProps: ExpertiseProps
  blogProps: BlogPreviewProps
  actionsProps: ActionListProps
}

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
          "Expand revenue streams and market presence with inclusive experiences for people of all abilities",
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
