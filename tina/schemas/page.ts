import { Collection, Template } from "tinacms"

import { OpenGraphField } from "../fields/openGraph"
import { SEOField } from "../fields/seo"
import { slugify } from "../plugins/slugify"

const FoundersNoteBlock: Template = {
  name: "foundersNote",
  label: "Founder's Note",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      required: true,
    },
  ],
}

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
    {
      type: "object",
      name: "blocks",
      label: "Blocks",
      list: true,
      templates: [FoundersNoteBlock],
    },
    SEOField,
    OpenGraphField,
  ],
}
