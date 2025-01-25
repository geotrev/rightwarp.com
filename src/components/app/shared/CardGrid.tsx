"use client"

import { ArrowRight, LucideIcon } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/core"

import { MediaCard, MediaCardProps } from "./MediaCard"
import { SectionHeading } from "./SectionHeading"

export interface CardGridProps {
  heading: string
  subheading: string
  actionLabel: string
  actionHref: string
  icon: LucideIcon
  entries?: MediaCardProps[]
}

export const CardGrid = ({
  heading,
  subheading,
  entries,
  icon,
  actionLabel,
  actionHref,
}: CardGridProps) => {
  if (!entries) return null

  return (
    <section>
      <SectionHeading icon={icon} subheading={subheading}>
        {heading}
      </SectionHeading>
      <Container isConstrained>
        <div className="grid gap-8 pb-8 md:grid-cols-2">
          {entries.map((entry) => entry && <MediaCard key={entry.title} {...entry} />)}
        </div>
        <Link href={actionHref} className="btn btn-outline btn-secondary mx-auto max-w-56">
          {actionLabel || "More Items"} <ArrowRight size="20" />
        </Link>
      </Container>
    </section>
  )
}
