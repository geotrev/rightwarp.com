import { queryContact } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { Page } from "../../../tina/__generated__/types"

import { ClientPage } from "./client-page"

export async function generateMetadata() {
  const query = await queryContact()
  const page = query.page.data.page

  return generatePageMeta(page as Page)
}

export default async function Contact() {
  const query = await queryContact()

  return <ClientPage {...query} />
}
