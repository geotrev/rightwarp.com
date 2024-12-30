import cn from "classnames"
import React, { HTMLAttributes, PropsWithChildren } from "react"

interface ContainerProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag?: any
  isRaised?: boolean
  isConstrained?: boolean
  children: React.ReactNode
}

export const Container = ({
  children,
  tag: Tag = "div",
  className,
  isRaised,
  isConstrained,
  ...props
}: ContainerProps) => {
  return (
    <>
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
            "gap-16 bg-base-300 py-16": isRaised,
            "2xl:px-[15%]": isConstrained,
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
    </>
  )
}
