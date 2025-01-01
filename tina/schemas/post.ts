import { Collection } from "tinacms"

export const Post: Collection = {
  name: "post",
  label: "Posts",
  path: "src/content/posts",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
  // ui: {
  //   router: ({ document }) => `/blog/${document._sys.filename}`,
  // },
}