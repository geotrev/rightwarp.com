import Image from "next/image"

import { CategoryColors } from "@/utils/helpers"

interface BlogCardProps {
  image: {
    href: string
    alt: string
  }
  title: string
  description: string
  categories: string[]
}

export const BlogCard = ({ image, title, description, categories }: BlogCardProps) => {
  return (
    <div className="blog-card w-full">
      <figure className="blog-card-image">
        <Image
          src={image.href}
          alt={image.alt}
          style={{ objectFit: "cover", height: "100%" }}
          fill
        />
      </figure>
      <div className="blog-card-body">
        <h2 className="blog-card-title">{title}</h2>
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
