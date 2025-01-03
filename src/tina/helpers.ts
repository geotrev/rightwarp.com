import client from "../../tina/__generated__/client"
import {
  PageQuery,
  PostPostAuthors,
  PostPostCategories,
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

export const toPostCategories = (categories: PostPostCategories[]) => {
  return categories.map((category) => ({
    color: category!.postCategoryName.categoryColor!,
    name: category!.postCategoryName.categoryName!,
  }))
}

export const toWorkCategories = (categories: WorkCategories[]) => {
  return categories.map((category) => ({
    color: category!.categoryRef.categoryColor!,
    name: category!.categoryRef.categoryName!,
  }))
}

export const toAuthors = (authors: PostPostAuthors[]) => {
  return authors.map((author) => ({
    image: author!.postAuthorName.authorImage,
    name: author!.postAuthorName.authorName,
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
    sort: "postPublishDate",
  })

  return posts.data?.postConnection?.edges
    ?.slice(0, PREVIEW_LIMIT)
    .map((edge) => edge?.node)
    ?.map((post) => ({
      title: post!.postTitle,
      description: post!.postDescription,
      categories: toPostCategories(post!.postCategories as PostPostCategories[]),
      slug: toSlug(post!._sys.filename, "blog"),
      authors: toAuthors(post!.postAuthors as PostPostAuthors[]),
      date: toPublishDate(post!.postPublishDate),
    }))
}
