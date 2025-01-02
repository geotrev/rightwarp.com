import { homeProps } from "@/app/_static/homePage"
import { BlogPreview, ActionList, Hero, LogoMarquee, Expertise } from "@/components/app"
import { queryHome } from "@/tina/queries"

import { PostConnectionEdges } from "../../tina/__generated__/types"

export default async function Home() {
  const query = await queryHome()

  return (
    <>
      <Hero
        heading={query.page.pageTitle}
        description={query.page.pageDescription}
        variant="display"
      />
      <LogoMarquee {...homeProps.logoMarqueeProps} />
      <Expertise {...homeProps.expertiseProps} />
      <BlogPreview {...homeProps.blogProps} posts={query.posts as PostConnectionEdges["node"][]} />
      <ActionList {...homeProps.actionsProps} />
    </>
  )
}
