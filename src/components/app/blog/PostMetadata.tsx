import { Post, PostAuthors } from "@tina/__generated__/types"
import Link from "next/link"

import { Author } from "../shared/Author"

interface PostMetadataProps {
  relatedPosts?: {
    title: string
    slug: string
    date: string
  }[]
  authors: PostAuthors[]
  publishDate: Post["publishDate"]
}

export const PostMetadata = ({
  relatedPosts,
  publishDate: _publishDate,
  authors,
}: PostMetadataProps) => {
  const publishDate = new Date(_publishDate).toLocaleDateString().replaceAll("/", "-")
  const publishDateLong = new Date(_publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <hr className="my-6 block w-full border-solid border-purple-950/25 lg:hidden dark:border-purple-100/25" />
      <h2 className="display mb-4 text-xl text-black lg:text-2xl dark:text-white">Published</h2>
      <time dateTime={publishDate}>{publishDateLong}</time>
      <hr className="my-6 block w-full border-dashed border-purple-950/25 lg:my-10 dark:border-purple-100/25" />
      <h2 className="sr-only">Authors</h2>
      {authors && (
        <>
          <h2 className="display mb-4 text-xl text-black lg:text-2xl dark:text-white">
            Written by
          </h2>
          <ul className="flex flex-col flex-wrap gap-2">
            {authors.map((author) => (
              <li key={author.authorRef._sys.filename}>
                <Author name={author.authorRef.name} image={author.authorRef.image} />
              </li>
            ))}
          </ul>
        </>
      )}
      {relatedPosts && (
        <>
          <hr className="my-6 block w-full border-dashed border-purple-950/25 lg:my-10 dark:border-purple-100/25" />
          <aside>
            <h2 className="display mb-4 text-xl text-black lg:text-2xl dark:text-white">
              Related Posts
            </h2>

            <ul className="flex flex-col gap-6">
              {relatedPosts.map((post) => {
                const date = new Date(post.date).toLocaleDateString()
                const longDate = new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })

                return (
                  <li key={post.slug} className="flex flex-col gap-2">
                    <Link
                      href={post.slug}
                      className="link text-lg font-bold text-black no-underline hover:underline dark:text-white"
                    >
                      {post.title}
                    </Link>
                    <time className="text-sm" dateTime={date.replaceAll("/", "-")}>
                      {longDate}
                    </time>
                  </li>
                )
              })}
            </ul>
          </aside>
        </>
      )}
    </>
  )
}
