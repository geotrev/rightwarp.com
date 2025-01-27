"use client"

import { PageQuery } from "@tina/__generated__/types"
import cn from "classnames"
import { Handshake } from "lucide-react"
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
import { Testimonials, TestimonialsProps } from "@/components/app/shared/Testimonials"
import { Routes } from "@/utils/helpers"

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
            className={cn("btn btn-primary w-fit !px-20 text-white lg:btn-lg dark:text-black")}
          >
            Book A Call <Handshake className="size-5 lg:size-6" />
          </Link>
        }
      />
      <LogoMarquee {...homeProps.logoMarqueeProps} />
      <CardGrid {...homeProps.workProps} entries={work} />
      <Expertise {...homeProps.expertiseProps} />
      <Testimonials {...homeProps.testimonialProps} testimonials={testimonials} />
      {/* <CardGrid {...homeProps.blogProps} entries={posts} /> */}
      <ActionList {...homeProps.actionsProps} />
    </>
  )
}
