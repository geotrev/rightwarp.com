import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/core"

export interface BrowseButtonsProps {
  actions: {
    type: "primary" | "secondary"
    label: string
    href: string
  }[]
}

export const BrowseButtons = ({ actions }: BrowseButtonsProps) => {
  const styles = {
    primary: "btn btn-secondary lg:btn-lg",
    secondary: "btn btn-secondary btn-outline lg:btn-lg",
  }

  return (
    <Container tag="section">
      <div className="mx-auto flex w-fit flex-col gap-4 sm:flex-row lg:gap-8">
        {actions.map(({ type, label, href }) => (
          <Link key={label} href={href} className={styles[type]}>
            {type === "primary" && <ArrowLeft className="size-4 lg:size-5" />} {label}
          </Link>
        ))}
      </div>
    </Container>
  )
}
