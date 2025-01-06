"use client"

import { useTina } from "tinacms/dist/react"

import { Hero, MediaCardProps } from "@/components/app"

import { PageQuery } from "../../../tina/__generated__/types"

interface PageProps {
  page: {
    data: PageQuery
    variables: {
      relativePath: string
    }
    query: string
  }
  categories?: {
    name?: string | null
    color?: string | null
  }[]
  posts?: MediaCardProps[]
}

export const ClientPage = ({ page }: PageProps) => {
  const { data: _data } = useTina(page)
  const data = _data.page

  return (
    <>
      <Hero heading={data.title} description={data.description} variant="display" />
    </>
  )
}
