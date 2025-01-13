"use client"

import { useTina } from "tinacms/dist/react"

import { ActionList, Hero, MediaCardProps, PostHistoryProps } from "@/components/app"
import { PostIndex } from "@/components/app/blog/PostIndex"

import { PageQuery } from "../../../tina/__generated__/types"
import { blogProps } from "../_static/blogProps"

interface PageProps {
  page: {
    data: PageQuery
    variables: {
      relativePath: string
    }
    query: string
  }
  categories?: {
    name: string
    color: string
    slug: string
  }[]
  posts?: MediaCardProps[]
  history?: PostHistoryProps["history"]
  pages?: number
}

export const ClientPage = ({ page, pages, posts, categories, history }: PageProps) => {
  const { data: _data } = useTina(page)
  const data = _data.page

  return (
    <>
      <Hero heading={data.title} description={data.description} variant="display" />
      <PostIndex posts={posts} categories={categories} history={history} pages={pages} />
      <ActionList {...blogProps.actionsProps} />
    </>
  )
}
