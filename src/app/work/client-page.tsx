"use client"

import { useTina } from "tinacms/dist/react"

import { ActionList, Hero, MediaCardProps, WorkList } from "@/components/app"

import { PageQuery } from "../../../tina/__generated__/types"
import { workProps } from "../_static/workPage"

interface PageProps {
  page: {
    data: PageQuery
    variables: {
      relativePath: string
    }
    query: string
  }
  entries?: MediaCardProps[]
}

export const ClientPage = ({ page, entries }: PageProps) => {
  const { data: _data } = useTina(page)
  const data = _data.page

  return (
    <>
      <Hero heading={data.title} description={data.description} />
      <WorkList items={entries} />
      <ActionList {...workProps.actionsProps} />
    </>
  )
}
