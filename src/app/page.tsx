/**
 * sections:
 * - Hero
 * - Logos
 * - Services (heading + desc)
 *   - Service x6
 * - Thoughts (heading + desc)
 *   - Blog card x2
 *   - Read more cta
 * - Footer actions
 */
import { Hero } from "@/components/app/Hero"
import { LogoMarquee } from "@/components/app/LogoMarquee"

export default function Home() {
  return (
    <>
      <Hero
        isDisplay
        heading="Build Memorable Digital Experiences"
        description="Accessible, scalable, and design-driven web development"
      />
      <LogoMarquee />
    </>
  )
}
