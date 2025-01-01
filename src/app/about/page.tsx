import { staticProps } from "@/app/_static/aboutPage"
import {
  Hero,
  Intro,
  SkillCategories,
  LogoMarquee,
  BlogPreview,
  ActionList,
} from "@/components/app"

export default function About() {
  return (
    <>
      <Hero {...staticProps.heroProps} />
      <Intro {...staticProps.introProps} />
      <LogoMarquee {...staticProps.marqueeProps} />
      <SkillCategories {...staticProps.skillProps} />
      <BlogPreview {...staticProps.blogProps} />
      <ActionList {...staticProps.actionsProps} />
    </>
  )
}
