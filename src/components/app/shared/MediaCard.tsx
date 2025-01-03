import Image from "next/image"
import { CSSProperties } from "react"

export type MediaCardProps = {
  image?: {
    href: string
    alt: string
  }
  authors?: {
    name: string
    image: string
  }[]
  date?: string
  title: string
  description: string
  categories: {
    name: string
    color?: string
  }[]
  slug: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headingTag?: any
}

/**
 * 1. Uses an anchor to fill the size of the media card.
 */

export const MediaCard = ({
  image,
  authors,
  date,
  title,
  description,
  categories,
  slug,
  headingTag: HeadingTag = "h3",
}: MediaCardProps) => {
  const postId = title.toLowerCase().replace(/^[a-zA-Z][\w:_.-]*$/g, "-")

  return (
    <div className="media-card relative w-full">
      {/* [1] */}
      <a href={slug} aria-labelledby={postId} className="absolute inset-0 z-10"></a>
      {image && (
        <figure className="media-card-image">
          <Image
            src={image.href}
            alt={image.alt}
            style={{ objectFit: "cover", height: "100%" }}
            fill
          />
        </figure>
      )}
      <div className="media-card-body">
        {date && <span className="tracking-wider">{date}</span>}
        <HeadingTag className="media-card-title" id={postId}>
          {title}
        </HeadingTag>
        <p className="media-card-description">{description}</p>
        {authors && (
          <div className="flex flex-row flex-wrap gap-4">
            {authors.map((author) => (
              <div className="avatar flex items-center gap-2" key={author.name}>
                <div className="mask mask-squircle relative size-10">
                  <Image src={author.image} fill alt="" />
                </div>
                <span className="text-black dark:text-white">{author.name}</span>
              </div>
            ))}
          </div>
        )}
        <div className="media-card-actions">
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
      </div>
    </div>
  )
}
