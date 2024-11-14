import { Link } from "@/components/core"
import cn from "classnames"
import { Rocket } from "lucide-react"
import { AnchorHTMLAttributes } from "react"

export const WarpZoneButton = ({
  className,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      href="/contact"
      isPrimary
      className={cn("px-6 text-white dark:text-black", {
        ...(className && { [className]: true }),
      })}
    >
      <span className="hidden md:block">Warp Zone</span>
      <span className="md:hidden">
        <Rocket size={28} strokeWidth={1} />
        <span className="sr-only">Contact</span>
      </span>
    </Link>
  )
}
