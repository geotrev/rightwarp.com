import { Page as PageType } from "@tina/__generated__/types"
import { notFound } from "next/navigation"

import { queryCategory, queryCategoryStaticParams } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./client-page"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const query = await queryCategory(`${category}`)
  const page = query?.page.data.page
  const categoryName = query?.categoryName

  const options = {
    title: `${page?.title} ${categoryName}`,
    path: `/blog/category/${category}`,
  }

  return generatePageMeta(page as PageType, options)
}

export async function generateStaticParams() {
  return queryCategoryStaticParams()
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const query = await queryCategory(`${category}`)

  if (!query) {
    notFound()
  }

  return <ClientPage {...query} />
}
