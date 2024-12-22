"use client"

import { PencilRuler } from "lucide-react"

import BrowserBuildIcon from "@/app/_assets/skill-icons/browser-build.svg"
import DesktopCheckIcon from "@/app/_assets/skill-icons/desktop-check.svg"
import ModulePuzzleIcon from "@/app/_assets/skill-icons/module-puzzle.svg"
import SingleUserNeutralIcon from "@/app/_assets/skill-icons/single-user-neutral.svg"
import WheelchairIcon from "@/app/_assets/skill-icons/wheelchair.svg"
import WrenchIcon from "@/app/_assets/skill-icons/wrench.svg"
import { SectionHeading } from "@/components/app/shared/SectionHeading"
import { Container } from "@/components/core"
import { useTheme } from "@/utils/useThemeContext"

import { Skill } from "./Skill"

export const Expertise = () => {
  const { theme } = useTheme()

  return (
    <section>
      <Container className="py-16 md:py-24 lg:py-32">
        <SectionHeading
          heading="Expertise"
          icon={PencilRuler}
          subheading="10+ years of hardened, design-minded web development experience at your finger-tips"
        />
      </Container>
      <Container theme={theme} isRaised>
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
      <Container theme={theme} isRaised>
        <Skill
          isReversed
          heading="Business Websites"
          description="Expand your reach or breathe new life into your digital footprint with a renewed & modernized digital experience for customers"
          icon={<BrowserBuildIcon />}
        />
      </Container>
      <Container>
        <Skill
          heading="User Experience"
          description="Delight customers with an intuitive product and research-driven design"
          icon={<SingleUserNeutralIcon />}
        />
      </Container>
      <Container theme={theme} isRaised>
        <Skill
          isReversed
          heading="Audits, Testing & Quality"
          description="Temper your product development with stronger testing infrastructure."
          icon={<DesktopCheckIcon />}
        />
      </Container>
      <Container>
        <Skill
          heading="Support & Maintenance"
          description="Support an ongoing content strategy, performance, search engine optimization (SEO), security, and more."
          icon={<WrenchIcon />}
        />
      </Container>
    </section>
  )
}
