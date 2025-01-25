import cn from "classnames"
import { LucideIcon } from "lucide-react"
import React from "react"

import { Container } from "@/components/core"

import { SectionHeading } from "../shared/SectionHeading"

export interface SkillCategoriesProps {
  heading: string
  subheading: string
  icon: LucideIcon
  categories: {
    title: string
    icon: LucideIcon
    items: string[]
  }[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SkillCategories = ({
  heading,
  icon,
  subheading,
  categories,
}: SkillCategoriesProps) => {
  return (
    <>
      <SectionHeading icon={icon} subheading={subheading}>
        {heading}
      </SectionHeading>
      <Container tag="section" isConstrained>
        <div className="grid gap-8">
          {categories.map((category) => {
            const Icon = category.icon

            return (
              <div className="card gap-4 rounded-xl bg-base-300 p-8" key={category.title}>
                <div className="flex w-full items-center gap-4">
                  <h3 className="display text-xl tracking-tight text-black md:text-2xl dark:text-white">
                    {category.title}
                  </h3>
                  <hr
                    className="w-full border-purple-950/25 dark:border-purple-100/25"
                    aria-hidden="true"
                  />
                  <Icon size={24} className="flex-shrink-0" />
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "border-1 badge badge-outline badge-lg rounded-md border-black/20 px-4 py-4 dark:border-white/20",
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}
