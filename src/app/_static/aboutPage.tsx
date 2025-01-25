import { Brain, CodeXml, Feather, Hammer, NotebookText, PaintRoller } from "lucide-react"

import SelfImage from "@/app/_assets/its-a-me.jpg"
import Codecov from "@/app/_assets/logos/codecov.svg"
import Musicnotes from "@/app/_assets/logos/musicnotes.svg"
import Scribd from "@/app/_assets/logos/scribd.svg"
import ServiceNow from "@/app/_assets/logos/servicenow.svg"
import Zendesk from "@/app/_assets/logos/zendesk.svg"
import type {
  SkillCategoriesProps,
  LogoMarqueeProps,
  CardGridProps,
  ActionListProps,
  IntroProps,
} from "@/components/app"
import { Link } from "@/components/core"
import { Routes } from "@/utils/helpers"

interface AboutPageProps {
  introProps: IntroProps
  marqueeProps: LogoMarqueeProps
  skillProps: SkillCategoriesProps
  blogProps: CardGridProps
  workProps: CardGridProps
  actionsProps: ActionListProps
}

// WIP should be block components

export const staticProps: AboutPageProps = {
  introProps: {
    bioImage: {
      src: SelfImage,
      alt: "George Treviranus",
    },
    heading: "Hello from Wisconsin!",
    textStart:
      "Welcome to Right Warp, a boutique design & development studio currently operated by me: George Treviranus. I've been designing and building digital products for a little over 10 years (longer if you count excessive photoshopping in high school). I've worked at and helped scale some pretty cool websites and tools, including:",
    textEnd:
      "Right Warp is guided by principles of empathy, inclusivity, and sustainability. All projects are approached with a focus on user experience. Every project is unique, ensuring brand recognition and attention to detail, without sacrificing standards-based development practices of accessibility and research-driven interface design.",
    experienceItems: [
      {
        id: "zendesk",
        content: (
          <>
            Zendesk&apos;s{" "}
            <Link isExternal href="https://garden.zendesk.com/">
              Garden design system
            </Link>
          </>
        ),
      },
      {
        id: "servicenow",
        content: (
          <>
            ServiceNow&apos;s{" "}
            <Link isExternal href="https://horizon.servicenow.com/">
              Horizon design system
            </Link>
          </>
        ),
      },
      {
        id: "scribd",
        content: (
          <>
            Scribd&apos;s{" "}
            <Link isExternal href="https://www.scribd.com/">
              Ruby on Rails web app
            </Link>
          </>
        ),
      },
      {
        id: "codecov",
        content: (
          <>
            Codecov&apos;s{" "}
            <Link isExternal href="https://about.codecov.io/">
              visual identity & logo design
            </Link>
          </>
        ),
      },
      {
        id: "musicnotes",
        content: (
          <>
            Musicnotes&apos;{" "}
            <Link isExternal href="https://www.musicnotes.com/">
              web and mobile app design
            </Link>
          </>
        ),
      },
    ],
  },
  marqueeProps: {
    logos: [
      { name: "Codecov", Logo: Codecov },
      { name: "Musicnotes", Logo: Musicnotes },
      { name: "Scribd", Logo: Scribd },
      { name: "ServiceNow", Logo: ServiceNow },
      { name: "Zendesk", Logo: Zendesk },
    ],
  },
  skillProps: {
    heading: "Skills",
    icon: Feather,
    subheading: "Bringing a unique combination of skills & expertise to ensure project success",
    categories: [
      {
        title: "Strategy",
        icon: Brain,
        items: [
          "Project Management",
          "User Research",
          "Content Planning",
          "Agile",
          "Scrum",
          "Technical Design",
        ],
      },
      {
        title: "Development",
        icon: CodeXml,
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "Unit & E2E Testing",
          "Bash",
          "Ruby",
          "Search Engine Optimization",
          "Performance",
          "Open Source",
          "Monorepos",
          "Content Management Systems",
          "React",
          "Ruby on Rails",
          "Tailwind",
          "Styled Components",
          "Node",
          "Next JS",
          "VCS / Git",
        ],
      },
      {
        title: "Design",
        icon: PaintRoller,
        items: [
          "User Experience",
          "User Interface Design",
          "Design Systems",
          "Branding & Graphic Design",
          "Quality Assurance",
          "Iconography",
          "Typography",
          "Layout Design",
          "Theming",
        ],
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
