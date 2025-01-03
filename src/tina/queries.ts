import client from "../../tina/__generated__/client"

const PREVIEW_LIMIT = 3

const getPostPreviews = async () => {
  const posts = await client.queries.postConnection({
    sort: "postPublishDate",
  })

  return posts.data?.postConnection?.edges
    ?.slice(0, PREVIEW_LIMIT)
    .map((edge) => edge?.node)
    ?.map((post) => ({
      title: post!.postTitle,
      description: post!.postDescription,
      categories: post!.postCategories.map((category) => ({
        color: category!.postCategoryName.categoryColor!,
        name: category!.postCategoryName.categoryName!,
      })),
      slug: `/blog/${post?._sys.filename}`,
      authors: post!.postAuthors.map((author) => ({
        image: author!.postAuthorName.authorImage,
        name: author!.postAuthorName.authorName,
      })),
      date: new Date(post!.postPublishDate).toLocaleDateString(),
    }))
}

// home

export const queryHome = async () => {
  const page = await client.queries.page({ relativePath: "home.json" })
  const posts = await getPostPreviews()

  return { page: page.data?.page, posts }
}

// about

export const queryAbout = async () => {
  const page = await client.queries.page({ relativePath: "about.json" })
  const posts = await getPostPreviews()

  return { page: page.data?.page, posts }
}

// contact

export const queryContact = async () => {
  const query = await client.queries.page({ relativePath: "contact.json" })

  return { page: query.data?.page }
}

// work

export const queryWorkIndex = async () => {
  const page = await client.queries.page({ relativePath: "work.json" })
  const entries = await client.queries.workConnection()

  return {
    page: page.data?.page,
    entries: entries.data?.workConnection?.edges,
  }
}

export const queryWorkEntry = async (slug: string) => {
  const query = await client.queries.work({ relativePath: `${slug}.md` })

  return { page: query.data?.work }
}

// blog

export const queryBlogIndex = async () => {
  const page = await client.queries.page({ relativePath: "blog.json" })
  const categories = await client.queries.categoryConnection()
  const entries = await client.queries.postConnection({
    sort: "postPublishDate",
  })

  return {
    page: page.data?.page,
    categories: categories.data?.categoryConnection?.edges,
    entries: entries.data?.postConnection?.edges,
  }
}

export const queryBlogPost = async (slug: string, relatedPostLimit = 3) => {
  const post = await client.queries.post({ relativePath: `${slug}.md` })
  const posts = await client.queries.postConnection({
    sort: "postPublishDate",
  })

  const postCategories: string[] = post.data?.post.postCategories.map(
    (category) => category.postCategoryName.categoryName,
  )

  const relatedPosts = posts.data?.postConnection.edges
    ?.map((edge) => edge?.node)
    .filter((_post) => {
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

  return { post: post.data?.post, relatedPosts }
}
