"use client"

import { useTina } from "tinacms/dist/react"

import {
  ActionList,
  BlogPreview,
  Expertise,
  Hero,
  LogoMarquee,
  MediaCardProps,
} from "@/components/app"

import { PageQuery } from "../../tina/__generated__/types"

import { homeProps } from "./_static/homePage"

interface PageProps {
  page: {
    data: PageQuery
    variables: {
      relativePath: string
    }
    query: string
  }
  posts?: MediaCardProps[]
}

export const ClientPage = ({ page, posts }: PageProps) => {
  const { data: _data } = useTina(page)
  const data = _data.page

  return (
    <>
      <Hero heading={data.title} description={data.description} variant="display" />
      <LogoMarquee {...homeProps.logoMarqueeProps} />
      <Expertise {...homeProps.expertiseProps} />
      <BlogPreview {...homeProps.blogProps} posts={posts} />
      <ActionList {...homeProps.actionsProps} />
    </>
  )
}
