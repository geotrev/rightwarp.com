import { Page } from "@tina/__generated__/types"

import { queryHome } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./client-page"

export async function generateMetadata() {
  const query = await queryHome()
  const page = query.page.data.page

  return generatePageMeta(page as Page, { path: "" })
}

export default async function Home() {
  const query = await queryHome()

  return <ClientPage {...query} />
}
