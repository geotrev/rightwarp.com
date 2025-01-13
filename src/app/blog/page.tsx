import { queryBlogIndex } from "@/tina/queries"

import { ClientPage } from "./client-page"

export default async function Blog() {
  const { posts: _posts, ...query } = await queryBlogIndex()

  const posts = _posts?.slice(0, 4)
  const pages = _posts ? Math.ceil(_posts?.length / 4) : 0

  return <ClientPage {...query} posts={posts} pages={pages} />
}
