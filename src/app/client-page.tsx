"use client"

import { PageQuery } from "@tina/__generated__/types"
import cn from "classnames"
import {
  Hammer,
  Handshake,
  // NotebookText,
  PencilRuler,
  UserPen,
} from "lucide-react"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"

import {
  ActionList,
  CardGrid,
  Expertise,
  Hero,
  LogoMarquee,
  MediaCardProps,
} from "@/components/app"
import {
  Testimonials,
  TestimonialsProps,
} from "@/components/app/shared/Testimonials"
import { Routes } from "@/utils/helpers"

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
  testimonials?: TestimonialsProps["testimonials"]
}

export const ClientPage = ({
  page,
  work,
  testimonials,
  // posts
}: PageProps) => {
  const { data: _data } = useTina(page)
  const data = _data.page

  return (
    <>
      <Hero
        heading={data.title}
        description={data.description}
        variant="display"
        details={
          <Link
            href={Routes.CONTACT}
            className={cn(
              "btn btn-primary w-fit !px-20 text-white lg:btn-lg dark:text-black",
            )}
          >
            Book A Call <Handshake className="size-5 lg:size-6" />
          </Link>
        }
      />
      <LogoMarquee />
      <CardGrid
        heading="Work"
        subheading="Always updating work samples to inspire your next project"
        actionLabel="More Work"
        actionHref={Routes.WORK}
        icon={Hammer}
        entries={work}
      />
      <Expertise
        heading="Expertise"
        subheading="10+ years of hardened, design-minded web development experience at your finger-tips"
        icon={PencilRuler}
      />
      <Testimonials
        heading="Testimonials"
        subheading="What former colleagues and clients have to say"
        icon={UserPen}
        testimonials={testimonials}
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
