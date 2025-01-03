import { Collection } from "tinacms"

import { toReferenceLabel } from "../plugins/referenceLabel"
import { slugify } from "../plugins/slugify"

export const Work: Collection = {
  name: "work",
  label: "Work",
  path: "src/content/work",
  format: "md",
  ui: {
    router: ({ document }) => `/work/${document._sys.filename}`,
    ...slugify("title"),
  },
  fields: [
    {
      type: "datetime",
      name: "date",
      label: "Date",
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
      name: "categories",
      label: "Categories",
      list: true,
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
      type: "object",
      name: "services",
      label: "Services",
      list: true,
      ui: {
        itemProps: (item) => ({ ...toReferenceLabel(item.serviceRef) }),
      },
      fields: [
        {
          type: "reference",
          name: "serviceRef",
          label: "Category",
          collections: ["service"],
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "images",
      label: "Images",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.alt }),
      },
      fields: [
        {
          type: "image",
          name: "src",
          label: "Image",
          required: true,
        },
        {
          type: "string",
          name: "alt",
          label: "Alt Text",
          required: true,
        },
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      required: true,
    },
  ],
}
