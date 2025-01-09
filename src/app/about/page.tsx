import { queryAbout } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { Page } from "../../../tina/__generated__/types"

import { ClientPage } from "./client-page"

export async function generateMetadata() {
  const query = await queryAbout()
  const page = query.page.data.page

  return generatePageMeta(page as Page)
}

export default async function About() {
  const query = await queryAbout()

  return <ClientPage {...query} />
}
