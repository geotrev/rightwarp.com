import cn from "classnames"
import { X } from "lucide-react"
import { CSSProperties, MouseEventHandler, useCallback } from "react"

export const CategoryList = ({
  isSelectable = false,
  onClick,
  categories,
}: {
  isSelectable?: boolean
  onClick?: (category: string) => void
  categories?: {
    name: string
    color?: string
    isSelected?: boolean
  }[]
}) => {
  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault()

      if (onClick) onClick(e.currentTarget.innerText)
    },
    [onClick],
  )

  const categoryListItems = categories?.map(({ name, color }) => {
    return (
      <li
        key={name}
        style={
          color
            ? ({
                backgroundColor: color,
              } as CSSProperties)
            : undefined
        }
        className={`badge badge-lg rounded-md text-xs font-bold uppercase text-white dark:text-black`}
      >
        {name}
      </li>
    )
  })

  const categoryButtons = categories?.map(({ color, isSelected, name }) => {
    return (
      <li key={name}>
        <button
          aria-pressed={isSelected}
          onClick={handleClick}
          style={
            color
              ? ({
                  borderColor: color,
                  ...(isSelected && { backgroundColor: color }),
                } as CSSProperties)
              : undefined
          }
          className={cn("btn btn-sm", {
            "text-black dark:text-white": !isSelected,
            "text-white dark:text-black": isSelected,
          })}
        >
          {name} {isSelected && <X size={16} />}
        </button>
      </li>
    )
  })

  if (!categories) {
    return null
  }

  return (
    <ul className="flex flex-wrap gap-2">{isSelectable ? categoryButtons : categoryListItems}</ul>
  )
}
