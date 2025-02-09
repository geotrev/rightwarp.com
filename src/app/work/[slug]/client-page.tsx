"use client"

import { Work, WorkQuery } from "@tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { ActionList, Hero, WorkEntry } from "@/components/app"
import { BrowseButtons } from "@/components/app/shared/BrowseButtons"
import { Routes } from "@/utils/helpers"

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
      <article>
        <header>
          <Hero heading={data.title} description={data.description} />
        </header>
        <WorkEntry {...(data as Omit<Work, "values">)} />
      </article>
      <BrowseButtons
        actions={[
          {
            type: "primary",
            label: "Browse More Work",
            href: Routes.WORK,
          },
          // {
          //   type: "secondary",
          //   label: "View Blog",
          //   href: Routes.BLOG,
          // },
        ]}
      />
      <ActionList actions={["button", "newsletter"]} />
    </>
  )
}
