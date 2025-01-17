import { Post as PostType } from "@tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "@/components/core"

import { MarkdownComponents } from "../shared/MarkdownComponents"

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
        <div className="prose prose-slate xl:prose-lg">
          <TinaMarkdown content={post.body} components={MarkdownComponents} />
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
