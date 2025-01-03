import client from "../../tina/__generated__/client"
import {
  PostPostAuthors,
  PostPostCategories,
  WorkCategories,
  WorkImages,
  WorkServices,
} from "../../tina/__generated__/types"

import {
  getPageData,
  getPostPreviews,
  toAuthors,
  toImages,
  toPostCategories,
  toPublishDate,
  toServices,
  toSlug,
  toWorkCategories,
} from "./helpers"

// home

export const queryHome = async () => {
  const _page = await client.queries.page({ relativePath: "home.json" })
  const page = getPageData(_page.data.page)
  const posts = await getPostPreviews()

  return { page, posts }
}

// about

export const queryAbout = async () => {
  const _page = await client.queries.page({ relativePath: "about.json" })
  const page = getPageData(_page.data.page)
  const posts = await getPostPreviews()

  return { page, posts }
}

// contact

export const queryContact = async () => {
  const _page = await client.queries.page({ relativePath: "contact.json" })
  const page = getPageData(_page.data.page)

  return { page }
}

// work

export const queryWorkIndex = async () => {
  const _page = await client.queries.page({ relativePath: "work.json" })
  const page = getPageData(_page.data.page)
  const _entries = await client.queries.workConnection()

  const entries = _entries.data.workConnection.edges?.map((edge) => {
    const entry = edge?.node
    return {
      title: entry?.title,
      description: entry?.description,
      categories: toWorkCategories(entry?.categories as WorkCategories[]),
      images: toImages(entry?.images as WorkImages[]),
      slug: toSlug(entry!._sys.filename, "work"),
    }
  })

  return { page, entries }
}

export const queryWorkEntry = async (slug: string) => {
  try {
    const _page = await client.queries.work({ relativePath: `${slug}.md` })
    const page = {
      title: _page.data.work.title,
      description: _page.data.work.description,
      categories: toWorkCategories(_page.data.work.categories! as WorkCategories[]),
      services: toServices(_page.data.work.services! as WorkServices[]),
      images: toImages(_page.data.work.images! as WorkImages[]),
    }

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
    name: edge?.node?.categoryName,
    color: edge?.node?.categoryColor,
  }))

  const postsResponse = await client.queries.postConnection({
    sort: "postPublishDate",
  })
  const posts = postsResponse.data.postConnection.edges?.map((edge) => {
    const entry = edge?.node
    return {
      title: entry?.postTitle,
      description: entry?.postDescription,
      authors: toAuthors(entry!.postAuthors as PostPostAuthors[]),
      date: toPublishDate(entry!.postPublishDate),
      categories: toPostCategories(entry!.postCategories as PostPostCategories[]),
      slug: toSlug(entry!._sys.filename, "blog"),
    }
  })

  return { page, categories, posts }
}

export const queryBlogPost = async (slug: string, relatedPostLimit = 3) => {
  try {
    const _post = await client.queries.post({ relativePath: `${slug}.md` })
    const post = {
      title: _post.data.post.postTitle,
      description: _post.data.post.postDescription,
      body: _post.data.post.postBody,
      authors: toAuthors(_post.data.post.postAuthors as PostPostAuthors[]),
      date: toPublishDate(_post.data.post.postPublishDate),
      categories: toPostCategories(_post.data.post.postCategories as PostPostCategories[]),
    }

    const posts = await client.queries.postConnection({
      sort: "postPublishDate",
    })
    const postCategories: string[] = post.categories.map((category) => category.name)
    const relatedPosts = posts.data.postConnection.edges
      ?.filter((edge) => {
        const _post = edge?.node
        if (_post?.postCategories?.length) {
          for (let i = 0; i < _post?.postCategories.length; i++) {
            const category = _post?.postCategories[i].postCategoryName.categoryName
            if (postCategories.includes(category)) {
              return true
            }
          }
        } else {
          return false
        }
      })
      .slice(0, relatedPostLimit)
      .map((edge) => ({
        title: edge!.node!.postTitle,
        slug: toSlug(edge!.node!._sys.filename, "blog"),
        date: toPublishDate(edge!.node!.postPublishDate),
      }))

    return { post, relatedPosts }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return null
  }
}
