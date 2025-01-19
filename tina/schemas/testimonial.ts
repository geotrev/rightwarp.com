import { Collection } from "tinacms"

import { slugify } from "../plugins/slugify"

export const Testimonial: Collection = {
  name: "testimonial",
  label: "Testimonials",
  path: "src/content/testimonials",
  format: "md",
  ui: {
    ...slugify("name"),
  },
  fields: [
    {
      type: "image",
      name: "image",
      label: "Image",
      required: true,
    },
    {
      type: "string",
      name: "name",
      label: "Name",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "position",
      label: "Position",
      required: true,
    },
    {
      type: "rich-text",
      name: "content",
      label: "Quote",
      isBody: true,
      required: true,
    },
  ],
}
