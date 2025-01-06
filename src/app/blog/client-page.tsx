"use client"

import { useTina } from "tinacms/dist/react"

import { Hero, MediaCardProps } from "@/components/app"
import { PostIndex } from "@/components/app/blog/PostIndex"

import { PageQuery } from "../../../tina/__generated__/types"

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
  }[]
  posts?: MediaCardProps[]
}

export const ClientPage = ({ page, posts, categories }: PageProps) => {
  const { data: _data } = useTina(page)
  const data = _data.page

  return (
    <>
      <Hero heading={data.title} description={data.description} variant="display" />
      <PostIndex posts={posts} categories={categories} />
    </>
  )
}
