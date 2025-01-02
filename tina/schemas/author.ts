import { Collection } from "tinacms"

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
      ui: {
        validate: (input) => {
          if (input && !input.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)) {
            return `Must be dash-separated, lowercase words`
          }
        },
      },
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
