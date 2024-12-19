import { LucideIcon } from "lucide-react"

export const SectionHeading = ({
  heading,
  icon: Icon,
  subheading,
}: {
  heading: string
  icon: LucideIcon
  subheading: string
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 lg:gap-4 xl:flex-row xl:items-center">
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <h2 className="display text-3xl text-black lg:text-4xl 2xl:text-6xl dark:text-white">
          {heading}
        </h2>
        <div className="flex w-full items-center gap-4">
          <hr
            className="w-full border-purple-950/25 dark:border-purple-100/25"
            aria-hidden="true"
          />
          <Icon size={24} className="flex-shrink-0" />
          <hr
            className="hidden w-full border-purple-950/25 xl:block dark:border-purple-100/25"
            aria-hidden="true"
          />
        </div>
      </div>
      <p className="sm:text-2xl xl:text-4xl">{subheading}</p>
    </div>
  )
}
