import { default as NextLink } from "next/link"
import cn from "classnames"
import { ButtonPropsBase } from "@/utils/constants"

interface LinkProps
  extends ButtonPropsBase,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string
  isBasic?: boolean
}

export const Link = ({
  href,
  children,
  className,
  size = "md",
  isPrimary = false,
  isSecondary = false,
  isAccent = false,
  isGhost = false,
  isOutline = false,
  isDisabled = false,
  isBlock = false,
  isCircle = false,
  isBasic = false,
  ...props
}: LinkProps) => {
  const linkStyles = {
    link: true,
    "link-primary": isPrimary,
    "link-secondary": isSecondary,
    "link-accent": isAccent,
  }
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
    <NextLink
      href={href}
      className={cn({
        ...(isBasic && linkStyles),
        ...(!isBasic && buttonStyles),
        ...(className && { [className]: className }),
      })}
      {...props}
    >
      {children}
    </NextLink>
  )
}
