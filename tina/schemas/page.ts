import { Collection } from "tinacms"

import { OpenGraphField } from "../fields/openGraph"
import { SEOField } from "../fields/seo"
import { slugify } from "../plugins/slugify"

export const Page: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  format: "json",
  ui: {
    ...slugify("title"),
    router: ({ document }) => {
      switch (document._sys.filename) {
        case "home":
          return "/"
        case "category":
        case "archive":
          return undefined
        default:
          return document._sys.filename
      }
    },
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
    },
    SEOField,
    OpenGraphField,
  ],
}
