"use client"

import { PageQuery } from "@tina/__generated__/types"

import { staticProps } from "@/app/_static/blogPage"
import { ActionList, BrowseButtons, Hero, MediaCardProps } from "@/components/app"
import { PostList } from "@/components/app/blog/PostList"
import { Container } from "@/components/core"

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
      <BrowseButtons {...staticProps.browseButtonsProps} />
      <ActionList {...staticProps.actionsProps} />
    </>
  )
}
