import { Collection } from "tinacms"

import { slugify } from "../plugins/slugify"

export const Category: Collection = {
  name: "category",
  label: "Categories",
  path: "src/content/categories",
  format: "json",
  ui: {
    ...slugify("name"),
  },
  fields: [
    {
      type: "string",
      name: "name",
      label: "Category Name",
      required: true,
    },
    {
      type: "string",
      name: "color",
      label: "Category Color",
      ui: {
        component: "color",
      },
    },
  ],
}
