import cn from "classnames"
import { Brain, CodeXml, LucideIcon, PaintRoller } from "lucide-react"
import React from "react"

import { Container } from "@/components/core"

import { SectionHeading } from "../shared/SectionHeading"

export interface SkillCategoriesProps {
  heading: string
  subheading: string
  icon: LucideIcon
}

const Categories = [
  {
    title: "Strategy",
    icon: Brain,
    items: [
      "Project Management",
      "User Research",
      "Content Planning",
      "Agile",
      "Scrum",
      "Technical Design",
    ],
  },
  {
    title: "Development",
    icon: CodeXml,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Unit & E2E Testing",
      "Bash",
      "Ruby",
      "Search Engine Optimization",
      "Performance",
      "Open Source",
      "Monorepos",
      "Content Management Systems",
      "React",
      "Ruby on Rails",
      "Tailwind",
      "Styled Components",
      "Node",
      "Next JS",
      "VCS / Git",
      "Headless CMS",
    ],
  },
  {
    title: "Design",
    icon: PaintRoller,
    items: [
      "User Experience",
      "User Interface Design",
      "Design Systems",
      "Branding & Graphic Design",
      "Quality Assurance",
      "Iconography",
      "Typography",
      "Layout Design",
      "Theming",
    ],
  },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SkillCategories = ({
  heading,
  icon,
  subheading,
}: SkillCategoriesProps) => {
  return (
    <>
      <SectionHeading icon={icon} subheading={subheading}>
        {heading}
      </SectionHeading>
      <Container tag="section" isConstrained>
        <div className="grid gap-8">
          {Categories.map((category) => {
            const Icon = category.icon

            return (
              <div
                className="card gap-4 rounded-xl bg-base-300 p-8"
                key={category.title}
              >
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
