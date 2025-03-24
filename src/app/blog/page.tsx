import { Page } from "@tina/__generated__/types"

import { queryBlogIndex } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"
import generateRssFeed from "@/utils/rss"

import { ClientPage } from "./client-page"

export async function generateMetadata() {
  const query = await queryBlogIndex()
  const page = query.page.data.page

  if (query.posts) {
    generateRssFeed(query.posts)
  }

  return generatePageMeta(page as Page, { path: "/blog" })
}

export default async function Blog() {
  const query = await queryBlogIndex()

  return <ClientPage {...query} />
}
