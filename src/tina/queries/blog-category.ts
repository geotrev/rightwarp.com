import client from "@tina/__generated__/client"
import { PostAuthors, PostCategories } from "@tina/__generated__/types"

import { toAuthors, toCategories, toPublishDate, toSlug, Visibility } from "./helpers"

const getPostByCategory = async (category: string) => {
  const posts = await client.queries.postConnection({
    sort: "publishDate",
    filter: {
      visibility: { eq: Visibility.PUBLIC },
    },
  })

  return posts.data.postConnection.edges
    ?.filter((edge) => {
      const categories = edge?.node?.categories

      if (categories) {
        for (const _category of categories) {
          if (_category.categoryRef._sys.filename === category) {
            return true
          }
        }
      }

      return false
    })
    .map((edge) => {
      const post = edge?.node

      return {
        title: post!.title,
        description: post!.description,
        categories: toCategories(post!.categories as PostCategories[]),
        slug: toSlug(post!._sys.filename, "blog"),
        authors: toAuthors(post!.authors as PostAuthors[]),
        date: toPublishDate(post!.publishDate),
      }
    })
    .reverse()
}

export const queryCategoryStaticParams = async () => {
  const pages = await client.queries.categoryConnection()
  const paths = pages.data?.categoryConnection?.edges?.map((edge) => ({
    slug: edge?.node?._sys.breadcrumbs,
  }))

  return paths || []
}

export const queryCategory = async (category: string) => {
  const page = await client.queries.page({ relativePath: "category.json" })
  const categoryResponse = await client.queries.category({ relativePath: `${category}.json` })
  const categoriesResponse = await client.queries.categoryConnection()
  const categories = categoriesResponse.data?.categoryConnection?.edges?.map(
    (edge) => edge?.node?._sys.filename,
  )

  const categoryName = categoryResponse.data?.category?.name

  if (!categories?.includes(category)) {
    return null
  }

  const posts = await getPostByCategory(category)

  return { page, posts, categoryName }
}
