import cn from "classnames"
import { PropsWithChildren } from "react"

/**
 * 1. Valid tags can be strings or React components, use `any` to allow both
 */
export type ContainerProps = PropsWithChildren<{
  className?: string
  isStretched?: boolean
  innerClassName?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  innerProps?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag?: any // [1]
}>

export const Container = ({
  children,
  className = "",
  isStretched,
  tag: Tag = "div",
  innerProps = {},
  ...props
}: ContainerProps) => {
  return (
    <div
      {...props}
      className={cn("w-full", {
        [className]: className,
      })}
    >
      <Tag
        {...innerProps}
        className={cn("mx-auto", {
          "w-[80vw]": !isStretched,
          "w-full": isStretched,
          [innerProps.className]: innerProps.className,
        })}
      >
        {children}
      </Tag>
    </div>
  )
}
