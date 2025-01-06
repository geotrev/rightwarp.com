import client from "../../tina/__generated__/client"
import { PostAuthors, PostCategories, WorkCategories } from "../../tina/__generated__/types"

import {
  getPageData,
  getPostPreviews,
  toAuthors,
  toPostCategories,
  toPublishDate,
  toSlug,
  toWorkCategories,
} from "./helpers"

// home

export const queryHome = async () => {
  const page = await client.queries.page({ relativePath: "home.json" })
  const posts = await getPostPreviews()

  return { page, posts }
}

// about

export const queryAbout = async () => {
  const page = await client.queries.page({ relativePath: "about.json" })
  const posts = await getPostPreviews()

  return { page, posts }
}

// contact

export const queryContact = async () => {
  const _page = await client.queries.page({ relativePath: "contact.json" })
  const page = getPageData(_page.data.page)

  return { page }
}

// work index

export const queryWorkIndex = async () => {
  const page = await client.queries.page({ relativePath: "work.json" })
  const _entries = await client.queries.workConnection({
    sort: "date",
  })

  const entries = _entries.data.workConnection.edges
    ?.map((edge) => {
      const entry = edge?.node
      return {
        title: entry!.title,
        description: entry!.description,
        categories: toWorkCategories(entry!.categories as WorkCategories[]),
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
    const page = await client.queries.work({ relativePath: `${slug}.md` })

    return { page }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return null
  }
}

// blog

export const queryBlogIndex = async () => {
  const _page = await client.queries.page({ relativePath: "blog.json" })
  const page = getPageData(_page.data.page)

  const categoriesResponse = await client.queries.categoryConnection()
  const categories = categoriesResponse.data.categoryConnection.edges?.map((edge) => ({
    name: edge?.node?.name,
    color: edge?.node?.color,
  }))

  const postsResponse = await client.queries.postConnection({
    sort: "publishDate",
  })
  const posts = postsResponse.data.postConnection.edges
    ?.map((edge) => {
      const entry = edge?.node
      return {
        title: entry?.title,
        description: entry?.description,
        authors: toAuthors(entry!.authors as PostAuthors[]),
        date: toPublishDate(entry!.publishDate),
        categories: toPostCategories(entry!.categories as PostCategories[]),
        slug: toSlug(entry!._sys.filename, "blog"),
      }
    })
    .reverse()

  return { page, categories, posts }
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

    const posts = await client.queries.postConnection({
      sort: "publishDate",
    })
    const categories = post.data.post.categories.map((category) => category.categoryRef.name)
    const relatedPosts = posts.data.postConnection.edges
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
