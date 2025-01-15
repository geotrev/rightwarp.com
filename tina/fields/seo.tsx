import { TinaField } from "tinacms"

import { KEYWORD_MIN } from "../constants"

export const SEOField: TinaField = {
  type: "object",
  name: "seo",
  label: "SEO & Metadata",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "string",
    },
    {
      name: "keywords",
      label: "SEO Keywords (comma separated)",
      type: "string",
      ui: {
        validate: (input) => {
          const keywords = input?.split(",")
          if (keywords && keywords.length < KEYWORD_MIN) {
            return `At least ${KEYWORD_MIN} keywords are required`
          }
        },
      },
    },
    {
      name: "url",
      label: "Canonical URL Or Path",
      type: "string",
      description: "E.g., https://google.com or /blog",
      ui: {
        validate: (input) => {
          if (input && !input.startsWith("/") && !input.startsWith("http")) {
            return "Must be a valid URL or relative path"
          }
        },
      },
    },
  ],
}
