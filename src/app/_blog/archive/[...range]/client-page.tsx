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
  range: string[]
}

export const ClientPage = ({ page: _page, posts, range }: PageProps) => {
  const page = _page.data.page
  const year = range[0]
  const month = range[1].charAt(0).toUpperCase() + range[1].slice(1)

  return (
    <>
      <Hero heading={`${page.title} ${month} ${year}`} />
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
