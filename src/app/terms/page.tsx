import { Page, SettingsTerms } from "@tina/__generated__/types"

import { queryPolicy } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./client-page"

export async function generateMetadata() {
  const query = await queryPolicy("terms")
  const page = query.page.data.page

  return generatePageMeta(page as Page, { path: "/terms" })
}

export default async function Terms() {
  const query = await queryPolicy("terms")

  return <ClientPage policy={query.policy as SettingsTerms} />
}
