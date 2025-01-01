import { Collection } from "tinacms"

export const Category: Collection = {
  name: "category",
  label: "Categories",
  path: "src/content/categories",
  format: "json",
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
      type: "string",
      name: "categoryName",
      label: "Category Name",
      required: true,
    },
  ],
}
