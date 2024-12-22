"use client"

import { ArrowRight, NotebookText } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/core"
import { Routes } from "@/utils/helpers"
import { useIs2XLarge } from "@/utils/useMediaQuery"

import { BlogCard } from "./BlogCard"
import { SectionHeading } from "./SectionHeading"

export const BlogPreview = () => {
  const is2XLarge = useIs2XLarge()

  const blogPosts = [
    {
      image: {
        href: "https://picsum.photos/500/300",
        alt: "image",
      },
      title: "Lorem ipsum is placeholder text tool used in the print design days",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      categories: ["Design", "Web Dev"],
    },
    {
      image: {
        href: "https://picsum.photos/500/300",
        alt: "image",
      },
      title: "Lorem ipsum is a placeholder text used in the print design days",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      categories: ["Technology"],
    },
    {
      image: {
        href: "https://picsum.photos/500/300",
        alt: "image",
      },
      title: "Lorem ipsum is a placeholder text tool used in the print design days",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      categories: ["Technology", "Web Dev"],
    },
  ]

  const renderPosts = is2XLarge ? blogPosts : blogPosts.slice(0, 2)

  return (
    <section className="pb-16">
      <Container className="py-16 md:py-24 lg:py-32">
        <SectionHeading
          heading="Thoughts"
          icon={NotebookText}
          subheading="Ramblings about tech, web development, and design"
        />
      </Container>
      <Container className="grid gap-8 pb-8 md:grid-cols-2 2xl:grid-cols-3">
        {renderPosts.map((post) => (
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
