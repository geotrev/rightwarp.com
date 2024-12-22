import { BlogPreview, EndActions, Hero, LogoMarquee, Expertise } from "@/components/app"

export default function Home() {
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
      <EndActions />
    </>
  )
}
