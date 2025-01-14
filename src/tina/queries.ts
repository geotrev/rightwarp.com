import client from "@tina/__generated__/client"
import "server-only"

import { getPostPreviews, getWorkPreviews } from "./helpers"

// site settings

export const querySiteSettings = async () => {
  const settings = await client.queries.settings({ relativePath: "settings.json" })

  return settings
}

// home

export const queryHome = async () => {
  const page = await client.queries.page({ relativePath: "home.json" })
  const posts = await getPostPreviews()
  const work = await getWorkPreviews()

  return { page, work, posts }
}

// about

export const queryAbout = async () => {
  const page = await client.queries.page({ relativePath: "about.json" })
  const posts = await getPostPreviews()
  const work = await getWorkPreviews()

  return { page, work, posts }
}

// contact

export const queryContact = async () => {
  const page = await client.queries.page({ relativePath: "contact.json" })

  return { page }
}

// work index

export * from "./queries/work"

// blog

export * from "./queries/blog"

// blog category

export * from "./queries/blog-category"
