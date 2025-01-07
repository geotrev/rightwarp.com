"use client"

import { ArrowRight, NotebookText } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/core"
import { Routes } from "@/utils/helpers"

import { MediaCard, MediaCardProps } from "./MediaCard"
import { SectionHeading } from "./SectionHeading"

export interface BlogPreviewProps {
  heading: string
  subheading: string
  posts?: MediaCardProps[]
}

export const BlogPreview = ({ heading, subheading, posts }: BlogPreviewProps) => {
  return (
    <section className="pb-16">
      <Container>
        <SectionHeading icon={NotebookText} subheading={subheading}>
          {heading}
        </SectionHeading>
      </Container>
      <Container isConstrained>
        <div className="grid gap-8 pb-8 md:grid-cols-2">
          {posts?.map((post) => post && <MediaCard key={post.title} {...post!} />)}
        </div>
        <Link href={Routes.BLOG} className="btn btn-outline btn-secondary mx-auto max-w-56">
          More Posts <ArrowRight size="20" />
        </Link>
      </Container>
    </section>
  )
}
