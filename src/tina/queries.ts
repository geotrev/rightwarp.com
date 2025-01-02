import client from "../../tina/__generated__/client"

export const queryHome = async () => {
  return client.queries.page({ relativePath: "home.json" })
}

export const queryAbout = async () => {
  return client.queries.page({ relativePath: "about.json" })
}

export const queryContact = async () => {
  return client.queries.page({ relativePath: "contact.json" })
}

export const queryWorkIndex = async () => {
  const page = client.queries.page({ relativePath: "work.json" })
  const entries = client.queries.workConnection()

  return { page, entries }
}

export const queryWorkEntry = async (slug: string) => {
  return client.queries.work({ relativePath: `${slug}.md` })
}

export const queryBlogIndex = async () => {
  const page = await client.queries.page({ relativePath: "blog.json" })
  const categories = await client.queries.categoryConnection()
  const entries = await client.queries.postConnection()

  return { page, categories, entries }
}

export const queryBlogPost = async (slug: string, relatedPostLimit = 3) => {
  const post = await client.queries.post({ relativePath: `${slug}.md` })
  const posts = await client.queries.postConnection()

  try {
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
  } catch {
    throw new Error("Tina: Failed to fetch blog post data")
  }
}
