import { Button } from "@/components/core"
import { Menu } from "lucide-react"

export const MobileDialog = () => {
  return (
    <Button size="md" variant="ghost" className="text-purple-950 dark:text-white">
      <Menu />
    </Button>
  )
}
