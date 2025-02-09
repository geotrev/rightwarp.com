"use client"

import { Post as PostType, PostQuery } from "@tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import {
  ActionList,
  Post,
  BrowseButtons,
  Hero,
  PostProps,
} from "@/components/app"
import { Routes } from "@/utils/helpers"

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
      <article>
        <header>
          <Hero heading={data.title} description={data.description} />
        </header>
        <Post post={data as PostType} relatedPosts={relatedPosts} />
      </article>
      <BrowseButtons
        actions={[
          {
            type: "primary",
            label: "Browse More Posts",
            href: Routes.BLOG,
          },
          {
            type: "secondary",
            label: "View Work",
            href: Routes.WORK,
          },
        ]}
      />
      <ActionList actions={["button", "newsletter"]} />
    </>
  )
}
