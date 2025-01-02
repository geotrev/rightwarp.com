import { Collection } from "tinacms"

import { slugValidation } from "../plugins/slugValidation"
import { slugify } from "../plugins/slugify"

export const Author: Collection = {
  name: "author",
  label: "Authors",
  path: "src/content/authors",
  format: "json",
  ui: {
    ...slugify("authorName"),
  },
  fields: [
    {
      type: "string",
      name: "categorySlug",
      label: "Slug",
      required: true,
      ui: { ...slugValidation },
    },
    {
      type: "image",
      name: "authorImage",
      label: "Author Image",
      required: true,
    },
    {
      type: "string",
      name: "authorName",
      label: "Author Name",
      required: true,
    },
    {
      type: "string",
      name: "authorBio",
      label: "Author Bio",
      required: true,
    },
  ],
}
