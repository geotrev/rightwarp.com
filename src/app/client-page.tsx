"use client"

import { PageQuery } from "@tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import {
  ActionList,
  CardGrid,
  Expertise,
  Hero,
  LogoMarquee,
  MediaCardProps,
} from "@/components/app"

import { homeProps } from "./_static/homePage"

interface PageProps {
  page: {
    data: PageQuery
    variables: {
      relativePath: string
    }
    query: string
  }
  work?: MediaCardProps[]
  posts?: MediaCardProps[]
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
      <Hero heading={data.title} description={data.description} variant="display" />
      <LogoMarquee {...homeProps.logoMarqueeProps} />
      <CardGrid {...homeProps.workProps} entries={work} />
      <Expertise {...homeProps.expertiseProps} />
      {/* <CardGrid {...homeProps.blogProps} entries={posts} /> */}
      <ActionList {...homeProps.actionsProps} />
    </>
  )
}
