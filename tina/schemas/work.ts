import { Collection } from "tinacms"

export const Work: Collection = {
  name: "work",
  label: "Work",
  path: "src/content/work",
  format: "json",
  fields: [
    {
      type: "string",
      name: "workTitle",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "workDescription",
      label: "Description",
      required: true,
    },
    {
      type: "object",
      name: "workCategories",
      label: "Categories",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.workCategoryName }),
      },
      fields: [
        {
          type: "reference",
          name: "workCategoryName",
          label: "Category",
          collections: ["category"],
          required: true,
        },
      ],
    },
    {
      type: "datetime",
      name: "workDateStart",
      label: "Date Start",
    },
    {
      type: "datetime",
      name: "workDateEnd",
      label: "Date End",
    },
    {
      type: "image",
      name: "workImageOne",
      label: "Display Image One",
      required: true,
    },
    {
      type: "image",
      name: "workImageTwo",
      label: "Display Image Two",
    },
    {
      type: "rich-text",
      name: "workBody",
      label: "Body",
      required: true,
    },
  ],
  // ui: {
  //   router: (props) => {
  //     return `/work/$props.document._sys.filename}`
  //   },
  // },
}
