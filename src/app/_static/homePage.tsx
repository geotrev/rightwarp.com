import Codecov from "@/app/_assets/logos/codecov.svg"
import Musicnotes from "@/app/_assets/logos/musicnotes.svg"
import Scribd from "@/app/_assets/logos/scribd.svg"
import ServiceNow from "@/app/_assets/logos/servicenow.svg"
import Zendesk from "@/app/_assets/logos/zendesk.svg"
import {
  HeroProps,
  LogoMarqueeProps,
  ExpertiseProps,
  BlogPreviewProps,
  ActionListProps,
} from "@/components/app"

interface HomeProps {
  heroProps: HeroProps
  logoMarqueeProps: LogoMarqueeProps
  expertiseProps: ExpertiseProps
  blogProps: BlogPreviewProps
  actionsProps: ActionListProps
}

export const homeProps: HomeProps = {
  heroProps: {
    variant: "display",
    heading: "Build Memorable Digital Experiences",
    description:
      "Accessible, scalable, and design-driven web development that brings your brand to life",
  },
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
    blogs: [
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        slug: "/blog/lorem-ipsum",
        title: "Lorem ipsum is placeholder text tool used in the print design days",
        description:
          "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
        categories: ["Design", "Development"],
      },
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        slug: "/blog/lorem-ipsum",
        title: "Lorem ipsum is a placeholder text used in the print design days",
        description:
          "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
        categories: ["Technology"],
      },
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        slug: "/blog/lorem-ipsum",
        title: "Lorem ipsum is a placeholder text tool used in the print design days",
        description:
          "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
        categories: ["Technology", "Development"],
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
