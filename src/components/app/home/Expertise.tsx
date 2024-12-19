import { PencilRuler } from "lucide-react"

import { Container, SectionHeading } from "@/components/core"

export const Expertise = () => {
  return (
    <Container className="py-16 md:py-24 lg:py-32">
      <SectionHeading
        heading="Expertise"
        icon={PencilRuler}
        subheading="Ten years of hardened, design-minded web development experience at your finger-tips"
      />
    </Container>
  )
}
