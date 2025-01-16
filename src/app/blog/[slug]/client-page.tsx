"use client"

import { Post as PostType, PostQuery } from "@tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { staticProps } from "@/app/_static/blogPage"
import { ActionList, Post, BrowseButtons, Hero, PostProps } from "@/components/app"

interface PageProps {
  post: {
    data: PostQuery
    variables: {
      relativePath: string
    }
    query: string
  }
  relatedPosts?: PostProps["relatedPosts"]
}

export const ClientPage = ({ post, relatedPosts }: PageProps) => {
  const { data: _data } = useTina(post)
  const data = _data.post

  return (
    <>
      <Hero heading={data.title} description={data.description} />
      <Post post={data as PostType} relatedPosts={relatedPosts} />
      <BrowseButtons {...staticProps.browseButtonsProps} />
      <ActionList {...staticProps.actionsProps} />
    </>
  )
}
