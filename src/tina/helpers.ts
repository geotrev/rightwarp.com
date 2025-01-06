import client from "../../tina/__generated__/client"
import {
  PostAuthors,
  PostCategories,
  WorkCategories,
  WorkImages,
  WorkServices,
} from "../../tina/__generated__/types"

const PREVIEW_LIMIT = 3

export const toPublishDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

export const toSlug = (filename: string, subpath?: string) => {
  return `/${subpath}/${filename}`
}

export const toPostCategories = (categories: PostCategories[]) => {
  return categories.map((category) => ({
    color: category!.categoryRef.color!,
    name: category!.categoryRef.name!,
  }))
}

export const toWorkCategories = (categories: WorkCategories[]) => {
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
  })

  return posts.data?.postConnection?.edges
    ?.slice(0, PREVIEW_LIMIT)
    ?.map((edge) => {
      const post = edge?.node

      return {
        title: post!.title,
        description: post!.description,
        categories: toPostCategories(post!.categories as PostCategories[]),
        slug: toSlug(post!._sys.filename, "blog"),
        authors: toAuthors(post!.authors as PostAuthors[]),
        date: toPublishDate(post!.publishDate),
      }
    })
    .reverse()
}
