import client from "@tina/__generated__/client"

import { getPostByCategory } from "../helpers"

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
