import cn from "classnames"
import { ButtonPropsBase, ButtonSizes, ButtonVariants } from "@/utils/constants"

interface ButtonProps
  extends ButtonPropsBase,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  children,
  className,
  variant,
  size,
  isOutline,
  isDisabled,
  isBlock,
  isCircle,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={cn("btn", {
        [className ?? ""]: className,
        [ButtonVariants[variant ?? ""]]: variant,
        [ButtonSizes[size ?? "md"]]: size,
        "btn-outline": isOutline,
        "btn-block": isBlock,
        "btn-circle": isCircle,
        "btn-disabled": isDisabled,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
