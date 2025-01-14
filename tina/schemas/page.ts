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
