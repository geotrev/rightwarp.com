import { default as NextLink } from "next/link"
import cn from "classnames"
import { ButtonPropsBase, ButtonSizes, ButtonVariants } from "@/utils/constants"

interface LinkProps
  extends ButtonPropsBase,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string
  isBasic?: boolean
}

const asLinkVariant = (variant?: string) =>
  variant ? variant.replace("btn", "link") : ""

export const Link = ({
  href,
  children,
  className,
  variant,
  size,
  isOutline,
  isDisabled,
  isBlock,
  isCircle,
  isBasic = false,
  ...props
}: LinkProps) => {
  const variantCls = ButtonVariants[variant ?? ""]
  const basicVariant = asLinkVariant(variantCls)
  const buttonStyles = {
    btn: true,
    [ButtonVariants[variant ?? ""]]: variant,
    [ButtonSizes[size ?? "md"]]: size,
    "btn-outline": isOutline,
    "btn-block": isBlock,
    "btn-circle": isCircle,
    "btn-disabled": isDisabled,
  }

  return (
    <NextLink
      href={href}
      className={cn("shadow-none", {
        link: isBasic,
        [basicVariant]: isBasic && variant,
        ...(!isBasic && buttonStyles),
        [className ?? ""]: className,
      })}
      {...props}
    >
      {children}
    </NextLink>
  )
}
