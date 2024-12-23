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
  ...props
}: ContainerProps) => {
  return (
    <div className="transform-all">
      {isRaised && (
        <div
          className="h-[0.875rem] rotate-180 bg-base-300 bg-repeat-x"
          style={{ mask: `url('/divider.svg') center/auto 100%` }}
        />
      )}
      <Tag
        className={cn(
          "flex flex-col px-6 transition-[padding,colors] md:px-12 lg:px-24",
          className,
          {
            "bg-base-300": isRaised,
          },
        )}
        {...props}
      >
        {children}
      </Tag>
      {isRaised && (
        <div
          className="h-[0.875rem] bg-base-300 bg-repeat-x"
          style={{ mask: `url('/divider.svg') center/auto 100%` }}
        />
      )}
    </div>
  )
}
