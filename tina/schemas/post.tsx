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
  //   // This is an DEMO router. You can remove this to fit your site
  //   router: ({ document }) => `/demo/blog/${document._sys.filename}`,
  // },
}
