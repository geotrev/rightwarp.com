import cn from "classnames"
import { HTMLAttributes } from "react"

interface SkillProps extends HTMLAttributes<HTMLDivElement> {
  isReversed?: boolean
  heading: string
  description: string
  icon: React.ReactNode
}

export const Skill = ({ isReversed, heading, description, icon }: SkillProps) => {
  return (
    <div
      className={cn("flex flex-col gap-4 py-16 sm:gap-8 lg:gap-32", {
        "sm:flex-row-reverse": isReversed,
        "sm:flex-row": !isReversed,
      })}
    >
      <div className="flex flex-grow-0 justify-center">{icon}</div>
      <div className="flex-grow">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
