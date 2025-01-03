import { CSSProperties } from "react"

export const CategoryList = ({
  categories,
}: {
  categories: {
    name: string
    color?: string
  }[]
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const color = category.color
        return (
          <div
            key={category.name}
            style={
              color
                ? ({
                    backgroundColor: color,
                  } as CSSProperties)
                : undefined
            }
            className={`badge-category badge`}
          >
            {category.name}
          </div>
        )
      })}
    </div>
  )
}
