import { Hero } from "@/components/app"
import { queryBlogIndex } from "@/tina/queries"

export default async function Blog() {
  const query = await queryBlogIndex()

  return (
    <>
      <Hero {...query.page} variant="display" />
    </>
  )
}
