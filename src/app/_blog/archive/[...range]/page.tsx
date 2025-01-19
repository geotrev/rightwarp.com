import { Page as PageType } from "@tina/__generated__/types"
import { notFound } from "next/navigation"

import { queryArchive, queryArchiveStaticParams } from "@/tina/queries/blog-archive"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./client-page"

export async function generateMetadata({ params }: { params: Promise<{ range: string[] }> }) {
  const { range } = await params
  const query = await queryArchive(range)
  const page = query?.page.data.page
  const year = range[0]
  const month = range[1].charAt(0).toUpperCase() + range[1].slice(1)
  const urlBase = page?.seo?.url

  const options = {
    title: `${page?.title} ${month} ${year}`,
    url: `${urlBase}/${year}/${range[1]}`,
  }

  return generatePageMeta(page as PageType, options)
}

export async function generateStaticParams() {
  return queryArchiveStaticParams()
}

export default async function Page({ params }: { params: Promise<{ range: string[] }> }) {
  const { range } = await params
  const query = await queryArchive(range)

  if (!query) {
    return notFound()
  }

  return <ClientPage {...query} />
}
