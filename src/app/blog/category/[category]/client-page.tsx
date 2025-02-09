"use client"

import { PageQuery } from "@tina/__generated__/types"

import {
  ActionList,
  BrowseButtons,
  Hero,
  MediaCardProps,
} from "@/components/app"
import { PostList } from "@/components/app/blog/PostList"
import { Container } from "@/components/core"
import { Routes } from "@/utils/helpers"

interface PageProps {
  page: {
    data: PageQuery
    variables: {
      relativePath: string
    }
    query: string
  }
  posts?: MediaCardProps[]
  categoryName?: string
}

export const ClientPage = ({ page: _page, posts, categoryName }: PageProps) => {
  const page = _page.data.page

  return (
    <>
      <Hero heading={`${page.title} ${categoryName}`} />
      <Container>
        <PostList posts={posts} />
      </Container>
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
