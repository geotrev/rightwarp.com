import { Container } from "@/components/core"
import { useIsLarge } from "@/utils/useMediaQuery"

import { CategoryList } from "../shared/CategoryList"
import { MediaCard, MediaCardProps } from "../shared/MediaCard"

import { Pagination } from "./Pagination"
import { PostHistory, PostHistoryProps } from "./PostHistory"

interface PostIndexProps {
  categories?: {
    name: string
    color: string
    slug: string
  }[]
  posts?: MediaCardProps[]
  history?: PostHistoryProps["history"]
}

export const PostIndex = ({ posts, categories, history }: PostIndexProps) => {
  const isLarge = useIsLarge()

  return (
    <>
      <Container className="mb-16 lg:mb-24" tag="section">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          <aside className="order-1 col-span-4 lg:order-2 lg:col-span-1">
            <div>
              <h3 className="display mb-4 text-black lg:text-2xl dark:text-white">Categories</h3>
              <CategoryList categories={categories} asLinks />
            </div>
            {isLarge && history && (
              <>
                <hr
                  className="my-12 block w-full border-purple-950/25 dark:border-purple-100/25"
                  aria-hidden="true"
                />
                <PostHistory history={history} />
              </>
            )}
          </aside>
          <div className="order-2 col-span-3 grid lg:order-1">
            <div className="mb-8 grid gap-6 lg:mb-16 2xl:grid-cols-2">
              {posts?.map((post) => <MediaCard key={post.slug} {...post} />)}
            </div>
            <Pagination />
          </div>
        </div>
      </Container>
      {!isLarge && history && (
        <Container className="mb-16 lg:mb-24" tag="section">
          <PostHistory history={history} />
        </Container>
      )}
    </>
  )
}
