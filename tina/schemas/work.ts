import { Collection } from "tinacms"

import { toReferenceLabel } from "../plugins/referenceLabel"
import { slugify } from "../plugins/slugify"

export const Work: Collection = {
  name: "work",
  label: "Work",
  path: "src/content/work",
  format: "json",
  ui: {
    // router: ({ document }) => `/work/${document._sys.filename}`,
    ...slugify("workTitle"),
  },
  fields: [
    {
      type: "string",
      name: "workTitle",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "workDescription",
      label: "Description",
      required: true,
    },
    {
      type: "object",
      name: "workCategories",
      label: "Categories",
      list: true,
      ui: {
        itemProps: (item) => ({ ...toReferenceLabel(item.workCategoryName) }),
      },
      fields: [
        {
          type: "reference",
          name: "workCategoryName",
          label: "Category",
          collections: ["category"],
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "workServices",
      label: "Services",
      list: true,
      ui: {
        itemProps: (item) => ({ ...toReferenceLabel(item.workServiceName) }),
      },
      fields: [
        {
          type: "reference",
          name: "workServiceName",
          label: "Category",
          collections: ["service"],
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "workImages",
      label: "Images",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.workImageAlt }),
      },
      fields: [
        {
          type: "image",
          name: "workImageSrc",
          label: "Image",
          required: true,
        },
        {
          type: "string",
          name: "workImageAlt",
          label: "Alt Text",
          required: true,
        },
      ],
    },
    {
      type: "rich-text",
      name: "workBody",
      label: "Body",
      required: true,
    },
  ],
}
