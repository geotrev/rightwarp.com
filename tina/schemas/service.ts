import { Collection } from "tinacms"

import { slugValidation } from "../plugins/slugValidation"
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
      name: "serviceSlug",
      label: "Slug",
      required: true,
      ui: { ...slugValidation },
    },
    {
      type: "string",
      name: "serviceName",
      label: "Name",
      required: true,
    },
  ],
}
