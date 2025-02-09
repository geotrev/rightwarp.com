import { Feather, Hammer, NotebookText } from "lucide-react"

import SelfImage from "@/app/_assets/its-a-me.jpg"
import type {
  SkillCategoriesProps,
  CardGridProps,
  ActionListProps,
  IntroProps,
} from "@/components/app"
import { Routes } from "@/utils/helpers"

interface AboutPageProps {
  introProps: IntroProps
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
  },
  skillProps: {
    heading: "Skills",
    icon: Feather,
    subheading:
      "Bringing a unique combination of skills & expertise to ensure project success",
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
