import { homeProps } from "@/app/_static/homePage"
import { BlogPreview, ActionList, Hero, LogoMarquee, Expertise } from "@/components/app"

export default function Home() {
  return (
    <>
      <Hero {...homeProps.heroProps} />
      <LogoMarquee {...homeProps.logoMarqueeProps} />
      <Expertise {...homeProps.expertiseProps} />
      <BlogPreview {...homeProps.blogProps} />
      <ActionList {...homeProps.actionsProps} />
    </>
  )
}
