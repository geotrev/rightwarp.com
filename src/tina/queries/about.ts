import client from "@tina/__generated__/client"

import { getPostPreviews, getWorkPreviews } from "./helpers"

export const queryAbout = async () => {
  const page = await client.queries.page({ relativePath: "about.json" })
  const posts = await getPostPreviews()
  const work = await getWorkPreviews()

  return { page, work, posts }
}
