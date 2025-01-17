import { MotionConfig } from "motion/react"
import * as motion from "motion/react-client"
import Image from "next/image"

import { Author } from "./Author"
import { CategoryList } from "./CategoryList"
import { ServiceList } from "./ServiceList"

export type MediaCardProps = {
  image?: {
    src: string
    alt: string
  }
  authors?: {
    name: string
    image: string
  }[]
  date?: string
  title: string
  description: string
  categories?: {
    name: string
    color: string
  }[]
  services?: {
    name: string
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
  services,
  slug,
  headingTag: HeadingTag = "h3",
}: MediaCardProps) => {
  const postId = title.toLowerCase().replace(/^[a-zA-Z][\w:_.-]*$/g, "-")

  return (
    <MotionConfig transition={{ duration: 0.2 }}>
      <motion.div className="media-card relative w-full" whileHover={{ y: -10 }}>
        {/* [1] */}
        <a
          href={slug}
          aria-labelledby={postId}
          className="absolute inset-0 z-10 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-800 md:rounded-3xl dark:focus-visible:ring-purple-100"
        ></a>
        {image && (
          <figure className="media-card-image">
            <Image
              src={image.src}
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
            <ul className="mb-2 flex flex-row flex-wrap gap-4">
              {authors.map((author) => (
                <li key={author.name}>
                  <Author name={author.name} image={author.image} />
                </li>
              ))}
            </ul>
          )}
          <div className="media-card-actions">
            {categories?.length && <CategoryList categories={categories} />}
            {services?.length && <ServiceList services={services} />}
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  )
}
