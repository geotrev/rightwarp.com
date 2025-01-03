import { Collection } from "tinacms"

import { slugify } from "../plugins/slugify"

export const Service: Collection = {
  name: "service",
  label: "Services",
  path: "src/content/services",
  format: "json",
  ui: {
    ...slugify("serviceName"),
  },
  fields: [
    {
      type: "string",
      name: "serviceName",
      label: "Service Name",
      required: true,
    },
  ],
}
