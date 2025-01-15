import client from "@tina/__generated__/client"
import {
  PostAuthors,
  PostCategories,
  WorkCategories,
  WorkImages,
  WorkServices,
} from "@tina/__generated__/types"

export const PREVIEW_LIMIT = 2

export const POST_PAGE_SIZE = 4

export const PostVisibility = {
  PUBLIC: "Public",
  DRAFT: "Draft",
}

export const toMonth = (date: Date) => date.toLocaleString("en", { month: "long" })

export const toPublishDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

export const toSlug = (filename: string, subpath?: string) => {
  return subpath ? `/${subpath}/${filename}` : `/${filename}`
}

export const toCategories = (categories: (WorkCategories | PostCategories)[]) => {
  return categories.map((category) => ({
    color: category!.categoryRef.color!,
    name: category!.categoryRef.name!,
  }))
}

export const toAuthors = (authors: PostAuthors[]) => {
  return authors.map((author) => ({
    image: author!.authorRef.image,
    name: author!.authorRef.name,
  }))
}

export const toServices = (services: WorkServices[]) => {
  return services.map((service) => ({
    name: service!.serviceRef.name,
  }))
}

export const toImages = (images: WorkImages[]) => {
  return images.map((image) => ({
    src: image!.src,
    alt: image!.alt,
  }))
}

export const getPostPreviews = async () => {
  const posts = await client.queries.postConnection({
    sort: "publishDate",
    last: PREVIEW_LIMIT,
    filter: {
      visibility: { eq: PostVisibility.PUBLIC },
    },
  })

  return posts.data?.postConnection.edges?.map((edge) => {
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
}

export const getPostByCategory = async (category: string) => {
  const posts = await client.queries.postConnection({
    sort: "publishDate",
    filter: {
      visibility: { eq: PostVisibility.PUBLIC },
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
}

export const getWorkPreviews = async () => {
  const entries = await client.queries.workConnection({
    sort: "date",
    last: PREVIEW_LIMIT,
    filter: {
      visibility: { eq: PostVisibility.PUBLIC },
    },
  })

  return entries.data?.workConnection?.edges?.map((edge) => {
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
}
