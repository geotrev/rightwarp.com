import { homeProps } from "@/app/_static/homePage"
import { BlogPreview, ActionList, Hero, LogoMarquee, Expertise } from "@/components/app"
import { queryHome } from "@/tina/queries"

export default async function Home() {
  const query = await queryHome()

  return (
    <>
      <Hero {...query.page} variant="display" />
      <LogoMarquee {...homeProps.logoMarqueeProps} />
      <Expertise {...homeProps.expertiseProps} />
      <BlogPreview {...homeProps.blogProps} posts={query.posts} />
      <ActionList {...homeProps.actionsProps} />
    </>
  )
}
