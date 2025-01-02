import client from "../../tina/__generated__/client"

export const queryHome = async () => {
  const page = await client.queries.page({ relativePath: "home.json" })
  const posts = await client.queries.postConnection({
    sort: "postPublishDate",
  })

  return {
    page: page.data?.page,
    posts: posts.data?.postConnection?.edges?.slice(0, 3).map((edge) => edge?.node),
  }
}

export const queryAbout = async () => {
  const page = await client.queries.page({ relativePath: "about.json" })
  const posts = await client.queries.postConnection({
    sort: "postPublishDate",
  })

  return {
    page,
    posts: posts.data?.postConnection?.edges?.slice(0, 3).map((edge) => edge?.node),
  }
}

export const queryContact = async () => {
  return client.queries.page({ relativePath: "contact.json" })
}

export const queryWorkIndex = async () => {
  const page = await client.queries.page({ relativePath: "work.json" })
  const entries = await client.queries.workConnection()

  return { page, entries: entries.data?.workConnection?.edges }
}

export const queryWorkEntry = async (slug: string) => {
  return client.queries.work({ relativePath: `${slug}.md` })
}

export const queryBlogIndex = async () => {
  const page = await client.queries.page({ relativePath: "blog.json" })
  const categories = await client.queries.categoryConnection()
  const entries = await client.queries.postConnection({
    sort: "postPublishDate",
  })

  return {
    page,
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

  return { post, relatedPosts }
}
