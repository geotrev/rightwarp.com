import { LucideIcon } from "lucide-react"

export const SectionHeading = ({
  icon: Icon,
  subheading,
  children,
}: {
  icon?: LucideIcon
  subheading?: string
  children?: React.ReactNode
}) => {
  return (
    <div className="flex flex-col gap-4 py-16 md:gap-8 md:py-32 lg:gap-4 lg:py-40 xl:flex-row xl:items-center">
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <h2 className="display whitespace-nowrap text-2xl tracking-tight text-black sm:text-4xl xl:tracking-tighter 2xl:text-6xl dark:text-white">
          {children}
        </h2>
        {Icon && subheading && (
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
        )}
      </div>
      <p className="tracking-tight sm:text-2xl xl:text-4xl">{subheading}</p>
    </div>
  )
}
