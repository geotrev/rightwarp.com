import { Container } from "@/components/core"

import { CategoryList } from "../shared/CategoryList"
import { MediaCard, MediaCardProps } from "../shared/MediaCard"

import { Pagination } from "./Pagination"

interface PostIndexProps {
  categories?: {
    name: string
    color: string
  }[]
  posts?: MediaCardProps[]
}

export const PostIndex = ({ posts, categories }: PostIndexProps) => {
  return (
    <Container>
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="col-span-3 grid gap-6">
          {posts?.map((post) => <MediaCard key={post.slug} {...post} />)}
          <Pagination />
        </div>
        <aside>
          <h2 className="display mb-4 text-black lg:text-2xl dark:text-white">Categories</h2>
          <CategoryList categories={categories} />
        </aside>
      </div>
    </Container>
  )
}
