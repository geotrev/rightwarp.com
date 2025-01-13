import { queryBlogIndex } from "@/tina/queries"

import { ClientPage } from "./client-page"

export default async function Blog() {
  const query = await queryBlogIndex()

  return <ClientPage {...query} />
}
