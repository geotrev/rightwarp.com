import cn from "classnames"
import { PropsWithChildren } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  isCta?: boolean
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
    case "outline":
      return "btn-outline dark:text-white text-black"
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

export const Button = ({
  children,
  variant: _variant,
  size: _size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const variant = getVariant(_variant)
  const size = getSize(_size)

  return (
    <button type="button" className={cn(`btn font-bold`, variant, size, className)} {...props}>
      {children}
    </button>
  )
}
