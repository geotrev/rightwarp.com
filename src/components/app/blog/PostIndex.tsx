import { MouseEvent, MouseEventHandler, useCallback, useState } from "react"

import { Container } from "@/components/core"
import { queryPosts } from "@/tina/client-queries"
import { POST_PAGE_SIZE } from "@/tina/helpers"
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
  pages?: { start: string; end: string }[]
}

export const PostIndex = ({ posts, pages, categories, history }: PostIndexProps) => {
  const isLarge = useIsLarge()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageData, setPageData] = useState({
    posts,
    currentPage: 0,
  })

  const handlePageClick: (e: MouseEvent<HTMLButtonElement>, page: number) => void = useCallback(
    async (e, page) => {
      if (pageData.currentPage === page) return

      setIsLoading(true)

      const position = page > 0 ? { before: pages?.[page - 1]?.end } : undefined
      const result = await queryPosts({
        sort: "publishDate",
        last: POST_PAGE_SIZE,
        ...position,
      })

      if (result.posts) {
        setPageData({
          ...result,
          currentPage: page,
        })
      }

      setIsLoading(false)
    },
    [pageData.currentPage, pages],
  )

  const handleNewestClick: MouseEventHandler<HTMLButtonElement> = useCallback(async () => {
    if (pageData.currentPage === 0) return

    setIsLoading(true)

    const result = await queryPosts({
      sort: "publishDate",
      last: POST_PAGE_SIZE,
    })

    if (result.posts) {
      setPageData({
        ...result,
        currentPage: 0,
      })
    }

    setIsLoading(false)
  }, [pageData.currentPage])

  const handlePreviousClick: MouseEventHandler<HTMLButtonElement> = useCallback(async () => {}, [])

  const handleNextClick: MouseEventHandler<HTMLButtonElement> = useCallback(async () => {}, [])

  const handleOldestClick: MouseEventHandler<HTMLButtonElement> = useCallback(async () => {
    if (pages?.length && pageData.currentPage === pages.length - 1) return

    setIsLoading(true)

    const result = await queryPosts({
      sort: "publishDate",
      last: POST_PAGE_SIZE,
      before: pages?.[pages!.length - 2]?.end,
    })

    if (result.posts) {
      setPageData({
        ...result,
        currentPage: pages!.length - 1,
      })
    }

    setIsLoading(false)
  }, [pageData.currentPage, pages])

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
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="mb-8 grid gap-6 lg:mb-16 2xl:grid-cols-2">
                {pageData.posts?.map((post) => <MediaCard key={post.slug} {...post} />)}
              </div>
            )}
            {pages && (
              <Pagination
                currentPage={pageData.currentPage}
                totalPages={pages?.length}
                handlePageClick={handlePageClick}
                handleNewestClick={handleNewestClick}
                handlePreviousClick={handlePreviousClick}
                handleNextClick={handleNextClick}
                handleOldestClick={handleOldestClick}
              />
            )}
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
