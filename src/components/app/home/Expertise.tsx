import { LucideIcon } from "lucide-react"

import BrowserBuildIcon from "@/app/_assets/skill-icons/browser-build.svg"
import DesktopCheckIcon from "@/app/_assets/skill-icons/desktop-check.svg"
import ModulePuzzleIcon from "@/app/_assets/skill-icons/module-puzzle.svg"
import SingleUserNeutralIcon from "@/app/_assets/skill-icons/single-user-neutral.svg"
import WheelchairIcon from "@/app/_assets/skill-icons/wheelchair.svg"
import WrenchIcon from "@/app/_assets/skill-icons/wrench.svg"
import { SectionHeading } from "@/components/app/shared/SectionHeading"
import { Container } from "@/components/core"

import { Skill } from "./Skill"

export interface ExpertiseProps {
  heading: string
  subheading: string
  icon: LucideIcon
}

const skillIcons: Record<string, React.FC> = {
  BrowserBuildIcon,
  DesktopCheckIcon,
  ModulePuzzleIcon,
  SingleUserNeutralIcon,
  WheelchairIcon,
  WrenchIcon,
}

const ExpertiseItems = [
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
    description:
      "Delight customers with an intuitive product and research-driven design",
    icon: "SingleUserNeutralIcon",
  },
  {
    isRaised: true,
    isReversed: true,
    heading: "Audits, Testing & Quality",
    description:
      "Temper your product development with stronger testing infrastructure.",
    icon: "DesktopCheckIcon",
  },
  {
    heading: "Support & Maintenance",
    description:
      "Support an ongoing content strategy, performance, search engine optimization (SEO), security, and more.",
    icon: "WrenchIcon",
  },
]

export const Expertise = ({ heading, icon, subheading }: ExpertiseProps) => {
  return (
    <section>
      <SectionHeading icon={icon} subheading={subheading}>
        {heading}
      </SectionHeading>
      {ExpertiseItems.map((item) => {
        const Icon = skillIcons[item.icon]

        return (
          <Container key={item.heading} isConstrained isRaised={item.isRaised}>
            <Skill
              isReversed={item.isReversed}
              heading={item.heading}
              description={item.description}
              icon={<Icon />}
            />
          </Container>
        )
      })}
    </section>
  )
}
