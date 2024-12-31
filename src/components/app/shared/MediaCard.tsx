import Image from "next/image"

import { CategoryColors } from "@/utils/helpers"

export interface MediaCardProps {
  image: {
    href: string
    alt: string
  }
  slug: string
  title: string
  description: string
  categories: string[]
}

/**
 * 1. Uses an anchor to fill the size of the media card.
 */

export const MediaCard = ({ image, title, slug, description, categories }: MediaCardProps) => {
  const postId = title.toLowerCase().replace(/^[a-zA-Z][\w:_.-]*$/g, "-")

  return (
    <div className="media-card relative w-full">
      {/* [1] */}
      <a href={slug} aria-labelledby={postId} className="absolute inset-0 z-10"></a>
      <figure className="media-card-image">
        <Image
          src={image.href}
          alt={image.alt}
          style={{ objectFit: "cover", height: "100%" }}
          fill
        />
      </figure>
      <div className="media-card-body">
        <h2 className="media-card-title" id={postId}>
          {title}
        </h2>
        <p className="media-card-description">{description}</p>
        <div className="media-card-actions">
          {categories.map((category) => (
            <div key={category} className={`badge-category badge ${CategoryColors[category]}`}>
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
