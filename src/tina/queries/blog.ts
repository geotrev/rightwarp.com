import client from "@tina/__generated__/client"
import { PostAuthors, PostCategories } from "@tina/__generated__/types"
import "server-only"

import { PostHistoryItem } from "@/components/app"

import {
  POST_PAGE_SIZE,
  Visibility,
  toAuthors,
  toCategories,
  toMonth,
  toPublishDate,
  toSlug,
} from "../helpers"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chunk = (size: number, arr?: any[]) =>
  arr
    ? Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size),
      )
    : []

export const queryBlogIndex = async () => {
  const page = await client.queries.page({ relativePath: "blog.json" })

  // All categories

  const categoriesResponse = await client.queries.categoryConnection()
  const categories = categoriesResponse.data.categoryConnection.edges?.map((edge) => ({
    name: edge!.node!.name,
    color: edge!.node!.color!,
    slug: toSlug(edge!.node!._sys.filename, "blog/category"),
  }))

  // Info for all posts

  const allPosts = await client.queries.postConnection({
    sort: "publishDate",
    filter: {
      visibility: { eq: Visibility.PUBLIC },
    },
  })
  const cursors = allPosts.data.postConnection.edges?.map((edge) => edge?.cursor).reverse()
  const pages = chunk(POST_PAGE_SIZE, cursors).map((group) => {
    return { start: group[0], end: group[group.length - 1] }
  })

  // Info for visible pages & pagination

  const indexPostsResponse = await client.queries.postConnection({
    sort: "publishDate",
    last: POST_PAGE_SIZE,
    filter: {
      visibility: { eq: Visibility.PUBLIC },
    },
  })
  const pagePosts = indexPostsResponse.data.postConnection.edges?.map((edge) => {
    const entry = edge?.node
    return {
      title: entry!.title,
      description: entry!.description,
      authors: toAuthors(entry!.authors as PostAuthors[]),
      date: toPublishDate(entry!.publishDate),
      categories: toCategories(entry!.categories as PostCategories[]),
      slug: toSlug(entry!._sys.filename, "blog"),
    }
  })

  // History & archive data

  const history = allPosts.data.postConnection.edges
    ?.reduce<PostHistoryItem[]>((entries, edge) => {
      const entry = edge?.node
      const entryDate = new Date(entry!.publishDate)
      const entryYear = entryDate.getFullYear()
      const entryMonth = entryDate.getMonth()
      const entryMonthLabel = toMonth(entryDate)

      const match = entries.find((item) => item.year === entryYear)

      if (match) {
        const matchMonth = match.months.find((item) => item.month === entryMonth)

        if (!matchMonth) {
          match.months.push({
            label: entryMonthLabel,
            month: entryMonth,
            count: 1,
          })
        } else {
          matchMonth.count++
        }
      } else {
        entries.push({
          year: entryYear,
          months: [
            {
              label: entryMonthLabel,
              month: entryMonth,
              count: 1,
            },
          ],
        })
      }

      return entries
    }, [])
    // sort year
    .sort((prev, next) => next.year - prev.year)
    // sort month
    .map((entry) => ({
      ...entry,
      months: entry.months.sort((prev, next) => next.month - prev.month),
    }))

  return { page, categories, pages, posts: pagePosts, history }
}

// blog post

export const queryPostStaticParams = async () => {
  // DO NOT filter this by visibility – drafts need to be accessible, but not navigable
  const pages = await client.queries.postConnection()
  const paths = pages.data?.postConnection?.edges?.map((edge) => ({
    slug: edge?.node?._sys.filename,
  }))

  return paths || []
}

export const queryBlogPost = async (slug: string, relatedPostLimit = 3) => {
  try {
    const post = await client.queries.post({ relativePath: `${slug}.md` })
    const postFilename = post.data.post._sys.filename

    // Related posts

    const allPosts = await client.queries.postConnection({
      sort: "publishDate",
      filter: {
        visibility: { eq: Visibility.PUBLIC },
      },
    })
    const categories = post.data.post.categories.map((category) => category.categoryRef.name)
    const relatedPosts = allPosts.data.postConnection.edges
      ?.filter((edge) => {
        const _post = edge?.node

        // Ignore the current post
        if (_post?._sys.filename === postFilename) {
          return false
        }

        // Compare other post categories to current post categories
        if (_post?.categories?.length) {
          for (let i = 0; i < _post.categories.length; i++) {
            const category = _post.categories[i].categoryRef.name

            if (categories.includes(category)) {
              return true
            }

            return false
          }
        } else {
          return false
        }
      })
      .slice(0, relatedPostLimit)
      .map((edge) => {
        const _post = edge?.node

        return {
          title: _post!.title,
          slug: toSlug(_post!._sys.filename, "blog"),
          date: toPublishDate(_post!.publishDate),
        }
      })
      .reverse()

    return { post, relatedPosts }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return null
  }
}
