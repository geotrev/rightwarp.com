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
      className={cn(
        "flex flex-col items-center gap-8 py-16 transition-[padding] duration-300 sm:gap-12 lg:justify-center lg:gap-32 2xl:px-[15%]",
        {
          "sm:flex-row-reverse": isReversed,
          "sm:flex-row": !isReversed,
        },
      )}
    >
      <div className="flex h-16 w-16 flex-grow-0 justify-center sm:h-20 sm:w-20 lg:h-32 lg:w-32">
        {icon}
      </div>
      <div className="flex-grow text-center sm:text-start">
        <h3 className="display mb-4 text-lg tracking-tight text-black sm:text-3xl dark:text-white">
          {heading}
        </h3>
        <p className="leading-7 sm:text-lg lg:text-xl lg:leading-8">{description}</p>
      </div>
    </div>
  )
}
