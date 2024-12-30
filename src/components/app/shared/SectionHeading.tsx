import cn from "classnames"
import { LucideIcon } from "lucide-react"

export const SectionHeading = ({
  children,
  size = "display",
  icon: Icon,
  subheading,
  heading = children,
}: {
  heading?: string | React.ReactNode
  size?: "standard" | "display"
  icon?: LucideIcon
  subheading?: string
  children?: React.ReactNode
}) => {
  const sizeStyles: Record<"standard" | "display", string> = {
    standard: "py-16 md:py-20 lg:py-24",
    display: " py-16 md:py-32 lg:py-40",
  }

  return (
    <div
      className={cn("flex flex-col gap-4 md:gap-8 lg:gap-4 xl:flex-row xl:items-center", {
        [sizeStyles[size]]: true,
      })}
    >
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <h2 className="display whitespace-nowrap text-3xl tracking-tight text-black sm:text-4xl xl:tracking-tighter 2xl:text-6xl dark:text-white">
          {heading}
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
      <p className="sm:text-2xl xl:text-4xl">{subheading}</p>
    </div>
  )
}
