"use client"

import { useTina } from "tinacms/dist/react"

import {
  ActionList,
  CardGrid,
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
  work?: MediaCardProps[]
}

export const ClientPage = ({
  page,
  work,
  // posts
}: PageProps) => {
  const { data: _data } = useTina(page)
  const data = _data.page

  return (
    <>
      <Hero heading={data.title} description={data.description} />
      <Intro {...staticProps.introProps} />
      <LogoMarquee {...staticProps.marqueeProps} />
      <SkillCategories {...staticProps.skillProps} />
      <CardGrid {...staticProps.workProps} entries={work} />
      {/* <CardGrid {...staticProps.blogProps} entries={posts} /> */}
      <ActionList {...staticProps.actionsProps} />
    </>
  )
}
