import cn from "classnames"
import React, { HTMLAttributes, PropsWithChildren } from "react"

interface ContainerProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag?: any
  isRaised?: boolean
  isConstrained?: boolean
  collapseHorizontalPadding?: boolean
  children: React.ReactNode
}

export const Container = ({
  children,
  tag: Tag = "div",
  className,
  isRaised,
  isConstrained,
  collapseHorizontalPadding,
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
        className={cn("flex flex-col transition-[colors,padding]", className, {
          "gap-16 bg-base-300 py-16 lg:py-24": isRaised,
          "2xl:px-[15%]": isConstrained && !collapseHorizontalPadding,
          "px-6 md:px-12 lg:px-24": !collapseHorizontalPadding,
        })}
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

// used within a collapsed outer Container to ensure content has horizontal spacing

export const SubContainer = ({
  children,
  isConstrained,
  className,
}: {
  children: React.ReactNode
  isConstrained?: boolean
  className?: string
}) => {
  return (
    <div
      className={cn("px-6 transition-[padding] md:px-12 lg:px-24", className, {
        "2xl:px-[15%]": isConstrained,
      })}
    >
      {children}
    </div>
  )
}
