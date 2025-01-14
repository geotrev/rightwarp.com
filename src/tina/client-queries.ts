import { MediaCardProps } from "@/components/app"

import client from "../../tina/__generated__/client"
import {
  Exact,
  InputMaybe,
  PostAuthors,
  PostCategories,
  PostFilter,
  Scalars,
} from "../../tina/__generated__/types"

import { PostVisibility, toAuthors, toCategories, toPublishDate, toSlug } from "./helpers"

// Queries posts from TinaCMS on the client to support pagination

export async function queryPosts(
  options: Exact<{
    before?: InputMaybe<Scalars["String"]["input"]>
    after?: InputMaybe<Scalars["String"]["input"]>
    first?: InputMaybe<Scalars["Float"]["input"]>
    last?: InputMaybe<Scalars["Float"]["input"]>
    sort?: InputMaybe<Scalars["String"]["input"]>
    filter?: InputMaybe<PostFilter>
  }>,
): Promise<{ posts: MediaCardProps[] }> {
  const pages = await client.queries.postConnection({
    ...options,
    filter: {
      visibility: { eq: PostVisibility.PUBLIC },
    },
  })

  // Shape the essay data into a format the UI expects
  // Cursor must be included for pagination
  return {
    posts: pages.data?.postConnection?.edges?.map((edge) => {
      const post = edge?.node

      return {
        title: post!.title,
        description: post!.description,
        authors: toAuthors(post!.authors as PostAuthors[]),
        date: toPublishDate(post!.publishDate),
        categories: toCategories(post!.categories as PostCategories[]),
        slug: toSlug(post!._sys.filename, "blog"),
      }
    }) as MediaCardProps[],
  }
}
