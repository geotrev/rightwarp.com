import Image from "next/image"
import { CSSProperties } from "react"

import { Post } from "../../../../tina/__generated__/types"

export type MediaCardProps = Post

/**
 * 1. Uses an anchor to fill the size of the media card.
 */

export const MediaCard = (props: MediaCardProps) => {
  const title = props!.postTitle
  const description = props!.postDescription
  const categories = props!.postCategories
  const slug = `/${props?._sys.filename}`
  const authors = props!.postAuthors
  const date = props?.postPublishDate && new Date(props.postPublishDate).toLocaleDateString()
  const postId = title.toLowerCase().replace(/^[a-zA-Z][\w:_.-]*$/g, "-")

  return (
    <div className="media-card relative w-full">
      {/* [1] */}
      <a href={slug} aria-labelledby={postId} className="absolute inset-0 z-10"></a>
      {/* <figure className="media-card-image">
        <Image
          src={image.href}
          alt={image.alt}
          style={{ objectFit: "cover", height: "100%" }}
          fill
        />
      </figure> */}
      <div className="media-card-body">
        {date && <span className="tracking-wider">{date}</span>}
        <h2 className="media-card-title" id={postId}>
          {title}
        </h2>
        <p className="media-card-description">{description}</p>
        <div className="flex flex-row flex-wrap gap-4">
          {authors.map((author) => (
            <div className="avatar flex items-center gap-2" key={author.postAuthorName.authorName}>
              <div className="mask mask-squircle relative size-10">
                <Image src={author.postAuthorName.authorImage} fill alt="" />
              </div>
              <span className="author-name">{author.postAuthorName.authorName}</span>
            </div>
          ))}
        </div>
        <div className="media-card-actions">
          {categories.map((category) => {
            const categoryColor = category.postCategoryName.categoryColor
            return (
              <div
                key={category.postCategoryName.categoryName}
                style={
                  categoryColor
                    ? ({
                        backgroundColor: category.postCategoryName.categoryColor,
                      } as CSSProperties)
                    : undefined
                }
                className={`badge-category badge`}
              >
                {category.postCategoryName.categoryName}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
