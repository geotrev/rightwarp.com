import { Collection } from "tinacms"

import { slugify } from "../plugins/slugify"

export const Category: Collection = {
  name: "category",
  label: "Categories",
  path: "src/content/categories",
  format: "json",
  ui: {
    ...slugify("categoryName"),
  },
  fields: [
    {
      type: "string",
      name: "categoryName",
      label: "Category Name",
      required: true,
    },
    {
      type: "string",
      name: "categoryColor",
      label: "Category Color",
      ui: {
        component: "color",
      },
    },
  ],
}
