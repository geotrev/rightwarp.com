import { BlogPreview, EndActions, Hero, LogoMarquee, Expertise } from "@/components/app"
import { getTheme } from "@/server/utils"

export default async function Home() {
  const theme = await getTheme()

  return (
    <>
      <Hero
        isDisplay
        heading="Build Memorable Digital Experiences"
        description="Accessible, scalable, and design-driven web development that brings your brand to life"
      />
      <LogoMarquee />
      <Expertise />
      <BlogPreview />
      <EndActions theme={theme} />
    </>
  )
}
