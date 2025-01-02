import { Collection } from "tinacms"

export const Service: Collection = {
  name: "service",
  label: "Services",
  path: "src/content/services",
  format: "json",
  fields: [
    {
      type: "string",
      name: "serviceSlug",
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
      name: "serviceName",
      label: "Name",
      required: true,
    },
  ],
}
