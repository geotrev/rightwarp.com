import { staticProps } from "@/app/_static/aboutPage"
import {
  Hero,
  Intro,
  SkillCategories,
  LogoMarquee,
  BlogPreview,
  ActionList,
} from "@/components/app"
import { queryAbout } from "@/tina/queries"

export default async function About() {
  const query = await queryAbout()

  return (
    <>
      <Hero
        variant="display"
        heading={query.page.pageTitle}
        description={query.page.pageDescription}
      />
      <Intro {...staticProps.introProps} />
      <LogoMarquee {...staticProps.marqueeProps} />
      <SkillCategories {...staticProps.skillProps} />
      <BlogPreview {...staticProps.blogProps} posts={query.posts} />
      <ActionList {...staticProps.actionsProps} />
    </>
  )
}
