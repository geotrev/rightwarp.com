import cn from "classnames"
import { ButtonPropsBase } from "@/utils/constants"

interface ButtonProps
  extends ButtonPropsBase,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  children,
  className,
  isPrimary,
  isSecondary,
  isAccent,
  isGhost,
  size,
  isOutline,
  isDisabled,
  isBlock,
  isCircle,
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    btn: true,
    [`btn-${size}`]: !!size,
    "btn-primary": isPrimary,
    "btn-secondary": isSecondary,
    "btn-accent": isAccent,
    "btn-ghost": isGhost,
    "btn-outline": isOutline,
    "btn-block": isBlock,
    "btn-circle": isCircle,
    "btn-disabled": isDisabled,
  }

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={cn("shadow-none", {
        ...buttonStyles,
        ...(className && { [className]: className }),
      })}
      {...props}
    >
      {children}
    </button>
  )
}
