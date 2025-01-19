import { Collection } from "tinacms"

import { OpenGraphField } from "../fields/openGraph"
import { SEOField } from "../fields/seo"
import { toReferenceLabel } from "../plugins/referenceLabel"
import { slugify } from "../plugins/slugify"

export const Work: Collection = {
  name: "work",
  label: "Work",
  path: "src/content/work",
  format: "mdx",
  ui: {
    router: ({ document }) => `/work/${document._sys.filename}`,
    ...slugify("title"),
  },
  fields: [
    {
      type: "string",
      name: "visibility",
      label: "Visibility",
      options: ["Public", "Draft"],
      ui: { defaultValue: "Draft" },
    },
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
    SEOField,
    OpenGraphField,
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
      required: true,
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
      name: "bodyIntro",
      label: "Body Intro",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      required: true,
      templates: [
        {
          name: "CallToAction",
          label: "Call To Action",
          fields: [
            {
              type: "string",
              name: "label",
              label: "Label",
              required: true,
            },
            {
              type: "string",
              name: "href",
              label: "URL",
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
