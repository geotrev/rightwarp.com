import { Post } from "@tina/__generated__/types"
import { notFound } from "next/navigation"

import { queryBlogPost, queryPostStaticParams } from "@/tina/queries"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./client-page"

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const query = await queryBlogPost(`${slug}`)
  const page = query?.post.data.post

  return generatePageMeta(page as Post)
}

export async function generateStaticParams() {
  return queryPostStaticParams()
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const query = await queryBlogPost(`${slug}`)

  if (!query) {
    notFound()
  }

  return <ClientPage {...query} />
}
