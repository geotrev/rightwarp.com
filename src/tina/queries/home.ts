import client from "@tina/__generated__/client"

import { getPostPreviews, getTestimonials, getWorkPreviews } from "./helpers"

export const queryHome = async () => {
  const page = await client.queries.page({ relativePath: "home.json" })
  const posts = await getPostPreviews()
  const work = await getWorkPreviews()
  const testimonials = await getTestimonials()

  return { page, work, posts, testimonials }
}
