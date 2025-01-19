import { Work } from "@tina/__generated__/types"
import { notFound } from "next/navigation"

import { queryWorkEntry, queryWorkStaticParams } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./client-page"

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const query = await queryWorkEntry(`${slug}`)
  const page = query?.page.data.work

  return generatePageMeta(page as Work)
}

export async function generateStaticParams() {
  return queryWorkStaticParams()
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const query = await queryWorkEntry(`${slug}`)

  if (!query) {
    notFound()
  }

  return <ClientPage {...query.page} />
}
