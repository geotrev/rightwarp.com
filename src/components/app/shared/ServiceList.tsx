import { MouseEventHandler, useCallback } from "react"

import { Button } from "@/components/core"

export type ServiceListProps = {
  asButtons?: boolean
  onClick?: (name: string) => void
  services?: {
    name: string
    isSelected?: boolean
  }[]
}

export const ServiceList = ({ asButtons = false, onClick, services }: ServiceListProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      if (typeof onClick === "function") {
        onClick((e.target as HTMLButtonElement).dataset.name!)
      }
    },
    [onClick],
  )

  const serviceListItems = services?.map(({ name }) => {
    return (
      <li
        key={name}
        className={`badge badge-neutral badge-lg h-fit rounded-md border-0 bg-black/10 py-1 text-xs font-bold uppercase text-black/80 dark:bg-white/10 dark:text-white/80`}
      >
        {name}
      </li>
    )
  })

  const serviceButtons = services?.map(({ isSelected, name }) => {
    return (
      <li key={name}>
        <Button
          aria-pressed={isSelected}
          onClick={handleClick}
          data-name={name}
          size="sm"
          variant={isSelected ? "secondary" : "outline"}
        >
          {name}
        </Button>
      </li>
    )
  })

  if (!services) {
    return null
  }

  return <ul className="flex flex-wrap gap-2">{asButtons ? serviceButtons : serviceListItems}</ul>
}
