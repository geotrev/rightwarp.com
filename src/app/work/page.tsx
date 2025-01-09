import { queryWorkIndex } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { Page } from "../../../tina/__generated__/types"

import { ClientPage } from "./client-page"

export async function generateMetadata() {
  const query = await queryWorkIndex()
  const page = query.page.data.page

  return generatePageMeta(page as Page)
}

export default async function Work() {
  const query = await queryWorkIndex()

  return <ClientPage {...query} />
}
