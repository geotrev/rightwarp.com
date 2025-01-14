"use client"

import { Work, WorkQuery } from "@tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { workProps } from "@/app/_static/workPage"
import { ActionList, Hero, WorkEntry } from "@/components/app"
import { BrowseButtons } from "@/components/app/shared/BrowseButtons"

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

  return (
    <>
      <Hero heading={data.title} description={data.description} />
      <WorkEntry {...(data as Omit<Work, "values">)} />
      <BrowseButtons {...workProps.browseButtonsProps} />
      <ActionList {...workProps.actionsProps} />
    </>
  )
}
