import { defineConfig } from "tinacms"

import { Author } from "./schemas/author"
import { Category } from "./schemas/category"
import { Page } from "./schemas/page"
import { Post } from "./schemas/post"
import { Service } from "./schemas/service"
import { SiteSettings } from "./schemas/site-settings"
import { Work } from "./schemas/work"

const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main"

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  schema: {
    collections: [
      // Singletons
      SiteSettings,

      // Blocks
      Category,
      Service,
      Author,
      // Component,

      // Documents
      Page,
      Post,
      Work,
    ],
  },
})
