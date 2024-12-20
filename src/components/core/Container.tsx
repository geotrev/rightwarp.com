import cn from "classnames"
import React, { HTMLAttributes, PropsWithChildren } from "react"

interface ContainerProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag?: any
  isRaised?: boolean
  theme?: string
  children: React.ReactNode
}

export const Container = ({
  children,
  tag: Tag = "div",
  className,
  isRaised,
  theme,
  ...props
}: ContainerProps) => {
  const divider = isRaised && (theme === "dark" ? "divider-dark.svg" : "divider-light.svg")

  return (
    <div className="transform-all">
      {isRaised && (
        <div className="text-base-300">
          <div
            className="h-[0.875rem] rotate-180 bg-repeat-x"
            style={{ background: `url('/${divider}') center/auto 100%` }}
          />
        </div>
      )}
      <Tag
        className={cn("flex flex-col px-8 transition-[padding,colors] md:px-12 lg:px-24", {
          "bg-base-300": isRaised,
          ...(className && { [className]: true }),
        })}
        {...props}
      >
        {children}
      </Tag>
      {isRaised && (
        <div className="text-base-300">
          <div
            className="h-[0.875rem] bg-repeat-x"
            style={{ background: `url('/${divider}') center/auto 100%` }}
          />
        </div>
      )}
    </div>
  )
}
