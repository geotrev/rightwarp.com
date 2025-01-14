import cn from "classnames"
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react"
import { MouseEvent, MouseEventHandler, useCallback, useMemo } from "react"

export interface PaginationProps {
  totalPages: number
  currentPage: number
  handleNewestClick: MouseEventHandler<HTMLButtonElement>
  handlePreviousClick: MouseEventHandler<HTMLButtonElement>
  handlePageClick: (e: MouseEvent<HTMLButtonElement>, page: number) => void
  handleNextClick: MouseEventHandler<HTMLButtonElement>
  handleOldestClick: MouseEventHandler<HTMLButtonElement>
}

export const Pagination = ({
  totalPages,
  currentPage,
  handleNewestClick,
  handlePreviousClick,
  handlePageClick: _handlePageClick,
  handleNextClick,
  handleOldestClick,
}: PaginationProps) => {
  const visiblePages: (number | string)[] = useMemo(() => {
    const pages = Array.from({ length: totalPages }, (_, i) => i)
    if (totalPages <= 5) {
      return pages
    }

    if (currentPage <= 3) {
      return [...pages.slice(0, 4), "...", totalPages]
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", ...pages.slice(-4)]
    }

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
  }, [totalPages, currentPage])

  const handlePageClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      if (_handlePageClick) {
        _handlePageClick(e, parseInt((e.target as HTMLButtonElement).dataset.page!))
      }
    },
    [_handlePageClick],
  )

  return (
    <nav className="mt-4">
      <div className="mb-4 flex justify-center">
        Page {currentPage + 1} of {totalPages}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          className="btn btn-outline size-12 min-h-0 p-0"
          type="button"
          onClick={handleNewestClick}
        >
          <span className="sr-only">Newest posts</span> <ChevronFirst size={20} />
        </button>
        <button
          className="btn btn-outline size-12 min-h-0 p-0"
          type="button"
          onClick={handlePreviousClick}
        >
          <span className="sr-only">Previous posts</span>
          <ChevronLeft size={20} />
        </button>
        {visiblePages.map((page, i) =>
          typeof page === "number" ? (
            <button
              key={page}
              className={cn("btn size-12 min-h-0 p-0", {
                "btn-ghost": page !== currentPage,
                "btn-primary text-white dark:text-black": page === currentPage,
              })}
              type="button"
              onClick={handlePageClick}
              data-page={page}
            >
              {page + 1}
            </button>
          ) : (
            <div className="leading-[16px]" key={`${i}${page}`}>
              {page}
            </div>
          ),
        )}
        <button
          className="btn btn-outline size-12 min-h-0 p-0"
          type="button"
          onClick={handleNextClick}
        >
          <span className="sr-only">Older posts</span>
          <ChevronRight size={20} />
        </button>
        <button
          className="btn btn-outline size-12 min-h-0 p-0"
          type="button"
          onClick={handleOldestClick}
        >
          <span className="sr-only">Oldest posts</span> <ChevronLast size={20} />
        </button>
      </div>
    </nav>
  )
}
