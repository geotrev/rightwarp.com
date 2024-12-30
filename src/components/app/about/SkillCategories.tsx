import { Container } from "@/components/core"

import { SectionHeading } from "../shared/SectionHeading"

export interface SkillCategoriesProps {
  categories: {
    title: string
    items: string[]
  }[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SkillCategories = ({ categories }: SkillCategoriesProps) => {
  return (
    <Container tag="section">
      <SectionHeading size="standard">Skills</SectionHeading>
      <div className="grid gap-8 2xl:px-[15%]">
        {categories.map((category) => (
          <div className="card rounded-xl bg-base-300 p-8" key={category.title}>
            {category.title}
          </div>
        ))}
      </div>
    </Container>
  )
}
