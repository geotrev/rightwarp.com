"use client"

import { useTina } from "tinacms/dist/react"

import { CategoryList, Hero, WorkEntry } from "@/components/app"

import { Work, WorkQuery } from "../../../../tina/__generated__/types"

interface PageProps {
  data: WorkQuery
  variables: {
    relativePath: string
  }
  query: string
}

export const ClientPage = (props: PageProps) => {
  const { data: _data } = useTina(props)
  const { work: data } = _data

  const categoryProps = data.categories?.map((category) => ({
    name: category!.categoryRef.name!,
    color: category!.categoryRef.color!,
  }))

  return (
    <>
      <Hero
        heading={data.title}
        description={data.description}
        details={categoryProps && <CategoryList categories={categoryProps} />}
      />
      <WorkEntry {...(data as Omit<Work, "values">)} />
    </>
  )
}
