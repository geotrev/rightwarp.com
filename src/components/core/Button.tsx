import cn from "classnames"
import { LucideIcon } from "lucide-react"
import { PropsWithChildren } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: "primary" | "secondary" | "accent" | "ghost"
  size?: "sm" | "md" | "lg"
  isCta?: boolean
  startIcon?: LucideIcon
  endIcon?: LucideIcon
}

const getVariant = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return "btn-primary dark:text-black text-white"
    case "secondary":
      return "btn-secondary dark:text-black text-white"
    case "accent":
      return "btn-accent dark:text-black text-white"
    case "ghost":
      return "btn-ghost dark:text-white text-black"
    default:
      return ""
  }
}

const getSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "lg":
      return "btn-lg"
    case "sm":
      return "btn-sm"
    default:
      return "btn-md"
  }
}

const getIconSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "lg":
      return "size-6"
    case "sm":
      return "size-4"
    default:
      return "size-5"
  }
}

export const Button = ({
  children,
  variant: _variant,
  size: _size = "md",
  startIcon: StartIcon,
  endIcon: EndIcon,
  className = "",
  ...props
}: ButtonProps) => {
  const variant = getVariant(_variant)
  const size = getSize(_size)
  const iconSize = getIconSize(_size)

  return (
    <button type="button" className={cn(`btn font-bold`, variant, size, className)} {...props}>
      {StartIcon && <StartIcon className={iconSize} />}
      {children}
      {EndIcon && <EndIcon className={iconSize} />}
    </button>
  )
}
