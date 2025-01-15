import client from "@tina/__generated__/client"
import { PostAuthors, PostCategories } from "@tina/__generated__/types"

import { PostVisibility, toAuthors, toCategories, toMonth, toPublishDate, toSlug } from "../helpers"

export const queryArchiveStaticParams = async () => {
  const posts = await client.queries.postConnection({
    sort: "publishDate",
    filter: {
      visibility: { eq: PostVisibility.PUBLIC },
    },
  })
  const paths = posts.data?.postConnection?.edges?.reduce<{ slug: (string | number)[] }[]>(
    (entries, edge) => {
      const post = edge!.node!
      const publishDate = new Date(post.publishDate)
      const year = publishDate.getFullYear()
      const monthName = toMonth(publishDate).toLowerCase()
      const path = [year, monthName]

      if (!entries.find((entry) => entry.slug[0] === year && entry.slug[1] === monthName)) {
        entries.push({ slug: path })
      }

      return entries
    },
    [],
  )

  return paths || []
}

export const queryArchive = async (range: string[]) => {
  const page = await client.queries.page({ relativePath: "archive.json" })
  const postsResponse = await client.queries.postConnection({
    sort: "publishDate",
    filter: {
      visibility: { eq: PostVisibility.PUBLIC },
    },
  })
  const posts = postsResponse.data?.postConnection?.edges
    ?.filter((edge) => {
      const post = edge!.node!
      const publishDate = new Date(post.publishDate)
      const _year = publishDate.getFullYear()
      const postMonth = toMonth(publishDate).toLowerCase()

      return _year === parseInt(range[0]) && postMonth === range[1]
    })
    .map((edge) => {
      const post = edge!.node!
      return {
        title: post!.title,
        description: post!.description,
        authors: toAuthors(post!.authors as PostAuthors[]),
        date: toPublishDate(post!.publishDate),
        categories: toCategories(post!.categories as PostCategories[]),
        slug: toSlug(post!._sys.filename, "blog"),
      }
    })

  if (!posts?.length) {
    return null
  }

  return { page, range, posts }
}
