import { Page, SettingsPrivacy } from "@tina/__generated__/types"

import { queryPolicy } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./client-page"

export async function generateMetadata() {
  const query = await queryPolicy("privacy")
  const page = query.page.data.page

  return generatePageMeta(page as Page)
}

export default async function Privacy() {
  const query = await queryPolicy("privacy")

  return <ClientPage policy={query.policy as SettingsPrivacy} />
}
