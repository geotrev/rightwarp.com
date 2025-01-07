import { CSSProperties } from "react"

export const CategoryList = ({
  asLinks = false,
  categories,
}: {
  asLinks?: boolean
  categories?: {
    name: string
    slug?: string
    color: string
  }[]
}) => {
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

  const categoryButtons = categories?.map(({ color, slug, name }) => {
    return (
      <li key={name}>
        <a
          href={slug}
          style={
            color
              ? ({
                  borderColor: color,
                } as CSSProperties)
              : undefined
          }
          className="btn btn-sm text-black dark:text-white"
        >
          {name}
        </a>
      </li>
    )
  })

  if (!categories) {
    return null
  }

  return <ul className="flex flex-wrap gap-2">{asLinks ? categoryButtons : categoryListItems}</ul>
}
