import slug from "slug"
import { Collection } from "tinacms"

export const slugify = (slugField: string): Partial<Collection["ui"]> => {
  return {
    filename: {
      slugify: (values) => {
        return values?.[slugField] ? slug(values[slugField]) : ""
      },
    },
  }
}
