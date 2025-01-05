import cn from "classnames"
import { PencilRuler } from "lucide-react"

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
  items: {
    isRaised?: boolean
    isReversed?: boolean
    heading: string
    description: string
    icon: string
  }[]
}

const skillIcons: Record<string, React.FC> = {
  BrowserBuildIcon,
  DesktopCheckIcon,
  ModulePuzzleIcon,
  SingleUserNeutralIcon,
  WheelchairIcon,
  WrenchIcon,
}

export const Expertise = ({ heading, subheading, items }: ExpertiseProps) => {
  return (
    <section>
      <Container>
        <SectionHeading icon={PencilRuler} subheading={subheading}>
          {heading}
        </SectionHeading>
      </Container>
      {items.map((item) => {
        const Icon = skillIcons[item.icon]

        return (
          <Container
            key={item.heading}
            isConstrained
            isRaised={item.isRaised}
            className={cn({ "py-16 lg:py-24": !item.isRaised })}
          >
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
