import { Page } from "@tina/__generated__/types"

import { queryBlogIndex } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./client-page"

export async function generateMetadata() {
  const query = await queryBlogIndex()
  const page = query.page.data.page

  return generatePageMeta(page as Page)
}

export default async function Blog() {
  const query = await queryBlogIndex()

  return <ClientPage {...query} />
}
