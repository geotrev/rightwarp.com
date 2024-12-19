import { PencilRuler } from "lucide-react"

// import BrowserBuildIcon from "@/app/_assets/skill-icons/browser-build.svg"
// import DesktopCheckIcon from "@/app/_assets/skill-icons/desktop-check.svg"
import ModulePuzzleIcon from "@/app/_assets/skill-icons/module-puzzle.svg"
// import SingleUserNeutralIcon from "@/app/_assets/skill-icons/single-user-neutral.svg"
import WheelchairIcon from "@/app/_assets/skill-icons/wheelchair.svg"
// import WrenchIcon from "@/app/_assets/skill-icons/wrench.svg"
import { Container, SectionHeading } from "@/components/core"

import { Skill } from "./Skill"

export const Expertise = () => {
  return (
    <section>
      <Container className="py-16 md:py-24 lg:py-32">
        <SectionHeading
          heading="Expertise"
          icon={PencilRuler}
          subheading="Ten years of hardened, design-minded web development experience at your finger-tips"
        />
      </Container>
      <Container isRaised>
        <Skill
          isReversed
          heading="Design Systems"
          description="Scale faster, impress users and developers alike with scalable design patterns, tokens, components, and consistent UX"
          icon={<ModulePuzzleIcon />}
        />
      </Container>
      <Container>
        <Skill
          heading="WCAG-Compliant Accessibility"
          description="Expand revenue streams and market presence with inclusive experiences for people of all abilities"
          icon={<WheelchairIcon />}
        />
      </Container>
    </section>
  )
}
