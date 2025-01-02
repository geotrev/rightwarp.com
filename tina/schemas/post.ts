import { Collection } from "tinacms"

import { toReferenceLabel } from "../plugins/referenceLabel"
import { slugify } from "../plugins/slugify"

export const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "src/content/posts",
  ui: {
    // router: ({ document }) => `/blog/${document._sys.filename}`,
    ...slugify("postTitle"),
  },
  fields: [
    {
      type: "datetime",
      name: "postPublishDate",
      label: "Publish Date",
      required: true,
    },
    {
      type: "string",
      name: "postTitle",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "postDescription",
      label: "Description",
      required: true,
    },
    {
      type: "object",
      name: "postAuthors",
      label: "Authors",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ ...toReferenceLabel(item.postAuthorName) }),
      },
      fields: [
        {
          type: "reference",
          name: "postAuthorName",
          label: "Author",
          collections: ["author"],
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "postCategories",
      label: "Categories",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ ...toReferenceLabel(item.postCategoryName) }),
      },
      fields: [
        {
          type: "reference",
          name: "postCategoryName",
          label: "Category",
          collections: ["category"],
          required: true,
        },
      ],
    },
    {
      type: "rich-text",
      name: "postBody",
      label: "Body",
      isBody: true,
    },
  ],
}
