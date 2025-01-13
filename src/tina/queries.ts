import "server-only"

import { PostHistoryItem } from "@/components/app"

import client from "../../tina/__generated__/client"
import { PostAuthors, PostCategories, WorkCategories } from "../../tina/__generated__/types"

import {
  // getPostPreviews,
  toAuthors,
  toPublishDate,
  toSlug,
  toCategories,
  getWorkPreviews,
  PostVisibility,
  POST_PAGE_SIZE,
} from "./helpers"

// site settings

export const querySiteSettings = async () => {
  const settings = await client.queries.settings({ relativePath: "settings.json" })

  return settings
}

// home

export const queryHome = async () => {
  const page = await client.queries.page({ relativePath: "home.json" })
  // const posts = await getPostPreviews()
  const work = await getWorkPreviews()

  return {
    page,
    work,
    // posts
  }
}

// about

export const queryAbout = async () => {
  const page = await client.queries.page({ relativePath: "about.json" })
  // const posts = await getPostPreviews()
  const work = await getWorkPreviews()

  return {
    page,
    work,
    // posts
  }
}

// contact

export const queryContact = async () => {
  const page = await client.queries.page({ relativePath: "contact.json" })

  return { page }
}

// work index

export const queryWorkIndex = async () => {
  const page = await client.queries.page({ relativePath: "work.json" })
  const _entries = await client.queries.workConnection({
    sort: "date",
    filter: {
      visibility: { eq: PostVisibility.PUBLIC },
    },
  })

  const entries = _entries.data.workConnection.edges
    ?.map((edge) => {
      const entry = edge?.node
      return {
        title: entry!.title,
        description: entry!.description,
        categories: toCategories(entry!.categories as WorkCategories[]),
        image: {
          src: entry!.images[0].src,
          alt: entry!.images[0].alt,
        },
        slug: toSlug(entry!._sys.filename, "work"),
      }
    })
    .reverse()

  return { page, entries }
}

// work entry

export const queryWorkStaticParams = async () => {
  const pages = await client.queries.workConnection()
  const paths = pages.data?.workConnection?.edges?.map((edge) => ({
    slug: edge?.node?._sys.breadcrumbs,
  }))

  return paths || []
}

export const queryWorkEntry = async (slug: string) => {
  try {
    const page = await client.queries.work({ relativePath: `${slug}.mdx` })

    return { page }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return null
  }
}

// blog

const toMonth = (date: Date) => date.toLocaleString("en", { month: "long" })

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
  })
  const cursors = allPosts.data.postConnection.edges?.map((edge) => edge?.cursor)
  const pages = chunk(POST_PAGE_SIZE, cursors)

  // Info for visible pages & pagination

  const indexPostsResponse = await client.queries.postConnection({
    sort: "publishDate",
    last: POST_PAGE_SIZE,
    filter: {
      visibility: { eq: PostVisibility.PUBLIC },
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
  const pageInfo = indexPostsResponse.data.postConnection.pageInfo

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

  return { page, categories, pages, posts: pagePosts, pageInfo, history }
}

// blog post

export const queryPostStaticParams = async () => {
  const pages = await client.queries.postConnection()
  const paths = pages.data?.postConnection?.edges?.map((edge) => ({
    slug: edge?.node?._sys.breadcrumbs,
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
        visibility: { eq: PostVisibility.PUBLIC },
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
