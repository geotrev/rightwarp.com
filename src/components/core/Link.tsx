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

  return (
    <NextLink
      href={href}
      className={cn("shadow-none", {
        btn: !isBasic,
        link: isBasic,
        [basicVariant]: isBasic && variant,
        [ButtonVariants[variant ?? ""]]: variant && !isBasic,
        [ButtonSizes[size ?? "md"]]: size && !isBasic,
        "btn-outline": isOutline && !isBasic,
        "btn-block": isBlock && !isBasic,
        "btn-circle": isCircle && !isBasic,
        "btn-disabled": isDisabled && !isBasic,
        [className ?? ""]: className,
      })}
      {...props}
    >
      {children}
    </NextLink>
  )
}
