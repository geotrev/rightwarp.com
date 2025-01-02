import { Collection } from "tinacms"

import { slugValidation } from "../plugins/slugValidation"
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
      name: "categorySlug",
      label: "Slug",
      required: true,
      ui: { ...slugValidation },
    },
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
