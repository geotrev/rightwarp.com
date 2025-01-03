import client from "../../tina/__generated__/client"
import {
  PageQuery,
  PostAuthors,
  PostCategories,
  WorkCategories,
  WorkImages,
  WorkServices,
} from "../../tina/__generated__/types"

const PREVIEW_LIMIT = 3

export const getPageData = (pageData: PageQuery["page"]) => ({
  heading: pageData.pageTitle,
  description: pageData.pageDescription,
})

export const toPublishDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

export const toSlug = (filename: string, subpath?: string) => {
  return `/${subpath}/${filename}`
}

export const toPostCategories = (categories: PostCategories[]) => {
  return categories.map((category) => ({
    color: category!.categoryRef.categoryColor!,
    name: category!.categoryRef.categoryName!,
  }))
}

export const toWorkCategories = (categories: WorkCategories[]) => {
  return categories.map((category) => ({
    color: category!.categoryRef.categoryColor!,
    name: category!.categoryRef.categoryName!,
  }))
}

export const toAuthors = (authors: PostAuthors[]) => {
  return authors.map((author) => ({
    image: author!.authorRef.authorImage,
    name: author!.authorRef.authorName,
  }))
}

export const toServices = (services: WorkServices[]) => {
  return services.map((service) => ({
    name: service!.serviceRef.serviceName,
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

  return posts.data?.postConnection?.edges?.slice(0, PREVIEW_LIMIT)?.map((edge) => {
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
}
