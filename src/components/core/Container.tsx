import cn from "classnames"
import { PropsWithChildren } from "react"

/**
 * 1. Valid tags can be strings or React components, use `any` to allow both
 */
export type ContainerProps = PropsWithChildren<{
  className?: string
  isStretched?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag?: any // [1]
}>

export const Container = ({
  children,
  className = "",
  isStretched,
  tag: Tag = "div",
}: ContainerProps) => {
  return (
    <Tag
      className={cn("mx-auto", {
        "w-[80vw]": !isStretched,
        "w-full": isStretched,
        [className]: className,
      })}
    >
      {children}
    </Tag>
  )
}
