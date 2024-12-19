import cn from "classnames"
import React, { HTMLAttributes, PropsWithChildren } from "react"

interface ContainerProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag?: any
}

export const Container = ({ children, tag: Tag = "div", className, ...props }: ContainerProps) => {
  return (
    <Tag
      className={cn("flex flex-col px-8 transition-[padding] duration-300 md:px-12 lg:px-24", {
        ...(className && { [className]: true }),
      })}
      {...props}
    >
      {children}
    </Tag>
  )
}
