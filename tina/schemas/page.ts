import { Collection } from "tinacms"

import { slugify } from "../plugins/slugify"

export const Page: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  format: "json",
  ui: {
    ...slugify("title"),
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Page Description",
      required: true,
    },
    {
      type: "rich-text",
      name: "richDescription",
      label: "Rich Description",
      description: "A rich text alternative that supersedes the base description (visual only)",
    },
  ],
}
