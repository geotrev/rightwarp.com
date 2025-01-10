import { Collection } from "tinacms"

import { OpenGraphField } from "../fields/openGraph"
import { SEOField } from "../fields/seo"

export const Settings: Collection = {
  name: "settings",
  label: "Settings",
  path: "src/content/settings",
  format: "json",
  // https://tina.io/docs/editing/single-document-collections#caveats
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "siteName",
      label: "Site Name",
      description: "e.g., MyCoolWebsite LLC",
      type: "string",
      required: true,
    },
    SEOField,
    OpenGraphField,
    {
      name: "icons",
      label: "Icons",
      type: "object",
      fields: [
        {
          name: "baseIcon",
          label: "Favicon",
          description: "Must be 32x32 pixels",
          type: "image",
          required: true,
        },
        {
          name: "denseIcon",
          label: "Dense Favicon",
          description: "Must be 96x96 pixels",
          type: "image",
          required: true,
        },
        {
          name: "svgIcon",
          label: "Lossless Icon",
          description: "Must be SVG file format",
          type: "image",
          required: true,
        },
        {
          name: "appleIcon",
          label: "Apple Icon",
          description: "Must be 180x180 pixels",
          type: "image",
          required: true,
        },
      ],
    },
  ],
}
