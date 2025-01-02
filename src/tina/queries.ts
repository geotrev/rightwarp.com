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
  const entries = await client.queries.workConnection()

  return { page, entries }
}

export const queryWorkEntry = async (slug: string) => {
  return client.queries.work({ relativePath: `${slug}.md` })
}

export const queryBlogIndex = async () => {
  const page = client.queries.page({ relativePath: "blog.json" })
  const entries = await client.queries.postConnection()

  return { page, entries }
}
