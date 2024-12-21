import classNames from "classnames"
import { HTMLAttributes, PropsWithChildren } from "react"

interface ActionProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  heading: string
  description: string
}

export const Action = async ({ children, heading, description, ...props }: ActionProps) => {
  return (
    <div {...props} className={classNames("flex flex-col gap-4", props.className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <h2 className="display sm:whitespace-nowrap tracking-tight text-xl leading-8 text-black sm:text-2xl sm:leading-10 dark:text-white">
          {heading}
        </h2>
        <hr className="w-full border-purple-950/25 dark:border-purple-100/25" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-12">
        <p className="sm:text-xl lg:basis-full">{description}</p>
        <div className="flex lg:basis-full lg:justify-end">{children}</div>
      </div>
    </div>
  )
}
