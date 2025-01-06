"use client"

import { useTina } from "tinacms/dist/react"

import {
  ActionList,
  BlogPreview,
  Hero,
  Intro,
  LogoMarquee,
  MediaCardProps,
  SkillCategories,
} from "@/components/app"

import { PageQuery } from "../../../tina/__generated__/types"
import { staticProps } from "../_static/aboutPage"

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
      <Intro {...staticProps.introProps} />
      <LogoMarquee {...staticProps.marqueeProps} />
      <SkillCategories {...staticProps.skillProps} />
      <BlogPreview {...staticProps.blogProps} posts={posts} />
      <ActionList {...staticProps.actionsProps} />
    </>
  )
}
