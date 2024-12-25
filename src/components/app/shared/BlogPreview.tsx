"use client"

import { ArrowRight, NotebookText } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/core"
import { Routes } from "@/utils/helpers"
import { useIs2XLarge } from "@/utils/useMediaQuery"

import { BlogCard, BlogCardProps } from "./BlogCard"
import { SectionHeading } from "./SectionHeading"

export interface BlogPreviewProps {
  heading: string
  subheading: string
  blogs: BlogCardProps[]
}

export const BlogPreview = ({ heading, subheading, blogs }: BlogPreviewProps) => {
  const is2XLarge = useIs2XLarge()

  const previews = is2XLarge ? blogs : blogs.slice(0, 2)

  return (
    <section className="pb-16">
      <Container className="py-16 md:py-24 lg:py-32">
        <SectionHeading heading={heading} icon={NotebookText} subheading={subheading} />
      </Container>
      <Container className="grid gap-8 pb-8 md:grid-cols-2 2xl:grid-cols-3">
        {previews.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </Container>
      <Container>
        <Link href={Routes.BLOG} className="btn btn-outline btn-secondary mx-auto max-w-56">
          More Posts <ArrowRight size="20" />
        </Link>
      </Container>
    </section>
  )
}
