import { Link } from "@/components/core"
import { ArrowBigRight } from "lucide-react"

export const WarpZoneButton = () => {
  return (
    <Link href="/contact" isPrimary className="px-3 text-white dark:text-black">
      <span className="hidden md:block">Enter Warp Zone</span>
      <span className="md:hidden">
        <ArrowBigRight size={28} strokeWidth={1} />
      </span>
    </Link>
  )
}
