import { Collection } from "tinacms"

import { slugify } from "../plugins/slugify"

export const Author: Collection = {
  name: "author",
  label: "Authors",
  path: "src/content/authors",
  format: "json",
  ui: {
    ...slugify("name"),
  },
  fields: [
    {
      type: "image",
      name: "image",
      label: "Author Image",
      required: true,
    },
    {
      type: "string",
      name: "name",
      label: "Author Name",
      required: true,
    },
    {
      type: "string",
      name: "bio",
      label: "Author Bio",
      required: true,
    },
  ],
}
