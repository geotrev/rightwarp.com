"use client"

import { PageQuery } from "@tina/__generated__/types"
import {
  Feather,
  Hammer,
  // NotebookText
} from "lucide-react"
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
import { Routes } from "@/utils/helpers"

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
      <Intro />
      <LogoMarquee />
      <SkillCategories
        heading="Skills"
        icon={Feather}
        subheading="Bringing a unique combination of skills & expertise to ensure project success"
      />
      <CardGrid
        heading="Work"
        subheading="Previous work to inspire your next project, always updating"
        actionLabel="More Work"
        actionHref={Routes.WORK}
        icon={Hammer}
        entries={work}
      />
      {/* <CardGrid
        heading="Thoughts"
        subheading="Ramblings about tech, web development, and design"
        actionLabel="More Posts"
        actionHref={Routes.BLOG}
        icon={NotebookText}
        entries={posts}
      /> */}
      <ActionList actions={["button", "newsletter"]} />
    </>
  )
}
