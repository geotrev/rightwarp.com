import { Post as PostType } from "@tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "@/components/core"

import { PostMetadata } from "./PostMetadata"

export interface PostProps {
  post: PostType
  relatedPosts?: {
    title: string
    slug: string
    date: string
  }[]
}

export const Post = ({ post, relatedPosts }: PostProps) => {
  return (
    <Container isRaised isConstrained className="grid gap-8 lg:grid-cols-4 lg:gap-12">
      <div className="lg:col-span-3">
        <div className="prose xl:prose-lg dark:prose-invert">
          <TinaMarkdown content={post.body} />
        </div>
      </div>
      <div className="lg:col-span-1">
        <PostMetadata
          relatedPosts={relatedPosts}
          authors={post.authors}
          publishDate={post.publishDate}
        />
      </div>
    </Container>
  )
}
