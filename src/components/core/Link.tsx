import cn from "classnames"
import { ExternalLinkIcon } from "lucide-react"
import { default as NextLink } from "next/link"
import { AnchorHTMLAttributes, PropsWithChildren } from "react"

export interface LinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  isExternal?: boolean
}

export const Link = ({ children, className, isExternal = false, ...props }: LinkProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isExternal ? NextLink : "a"
  const linkProps = isExternal ? { ...props, rel: "noreferrer noopener", target: "_blank" } : props

  return (
    <Tag {...linkProps} className={cn("link inline-flex items-center gap-1", className)}>
      {children}{" "}
      {isExternal && (
        <>
          <ExternalLinkIcon size={12} className="inline" />
          <span className="sr-only">(opens in a new tab)</span>
        </>
      )}
    </Tag>
  )
}
