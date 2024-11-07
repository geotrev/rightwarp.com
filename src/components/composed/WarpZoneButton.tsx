import { Link } from "@/components/core"
import { Shell } from "lucide-react"

export const WarpZoneButton = () => {
  return (
    <Link href="/contact" variant="primary">
      <span className="hidden md:block">Enter Warp Zone</span>
      <span className="md:hidden">
        <Shell size={20} />
      </span>
    </Link>
  )
}
