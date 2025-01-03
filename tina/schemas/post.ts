import { Collection } from "tinacms"

import { toReferenceLabel } from "../plugins/referenceLabel"
import { slugify } from "../plugins/slugify"

export const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "src/content/posts",
  ui: {
    // router: ({ document }) => `/blog/${document._sys.filename}`,
    ...slugify("title"),
  },
  fields: [
    {
      type: "datetime",
      name: "publishDate",
      label: "Publish Date",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "object",
      name: "authors",
      label: "Authors",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ ...toReferenceLabel(item.authorRef) }),
      },
      fields: [
        {
          type: "reference",
          name: "authorRef",
          label: "Author",
          collections: ["author"],
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "categories",
      label: "Categories",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ ...toReferenceLabel(item.categoryRef) }),
      },
      fields: [
        {
          type: "reference",
          name: "categoryRef",
          label: "Category",
          collections: ["category"],
          required: true,
        },
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
}
