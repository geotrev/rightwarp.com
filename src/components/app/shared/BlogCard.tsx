import Image from "next/image"

import { CategoryColors } from "@/utils/helpers"

export interface BlogCardProps {
  image: {
    href: string
    alt: string
  }
  href: string
  title: string
  description: string
  categories: string[]
}

/**
 * 1. Uses an anchor to fill the size of the blog card.
 */

export const BlogCard = ({ image, title, href, description, categories }: BlogCardProps) => {
  const postId = title.toLowerCase().replace(/^[a-zA-Z][\w:_.-]*$/g, "-")

  return (
    <div className="blog-card relative w-full">
      {/* [1] */}
      <a href={href} aria-labelledby={postId} className="absolute inset-0 z-10"></a>
      <figure className="blog-card-image">
        <Image
          src={image.href}
          alt={image.alt}
          style={{ objectFit: "cover", height: "100%" }}
          fill
        />
      </figure>
      <div className="blog-card-body">
        <h2 className="blog-card-title" id={postId}>
          {title}
        </h2>
        <p className="blog-card-description">{description}</p>
        <div className="blog-card-actions">
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
