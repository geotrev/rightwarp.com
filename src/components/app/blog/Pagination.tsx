import cn from "classnames"
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react"
import { MouseEventHandler, useMemo } from "react"

export interface PaginationProps {
  totalPages: number
  currentPage: number
  handleNewestClick: MouseEventHandler<HTMLButtonElement>
  handlePreviousClick: MouseEventHandler<HTMLButtonElement>
  handlePageClick: MouseEventHandler<HTMLButtonElement>
  handleNextClick: MouseEventHandler<HTMLButtonElement>
  handleOldestClick: MouseEventHandler<HTMLButtonElement>
}

export const Pagination = ({
  totalPages,
  currentPage,
  handleNewestClick,
  handlePreviousClick,
  handlePageClick,
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

  return (
    <nav className="mt-4">
      <div className="mb-4 flex justify-center">Page 1 of 4</div>
      <div className="flex items-center justify-center gap-4">
        <button className="btn btn-outline" type="button" onClick={handleNewestClick}>
          <span className="sr-only">Newest posts</span> <ChevronFirst size={20} />
        </button>
        <button className="btn btn-outline" type="button" onClick={handlePreviousClick}>
          <span className="sr-only">Previous posts</span>
          <ChevronLeft size={20} />
        </button>
        {visiblePages.map((page, i) =>
          typeof page === "number" ? (
            <button
              key={page}
              className={cn("btn", {
                "btn-ghost": page !== currentPage,
                "btn-primary text-white dark:text-black": page === currentPage,
              })}
              type="button"
              onClick={handlePageClick}
            >
              {page + 1}
            </button>
          ) : (
            <div className="leading-[16px]" key={`${i}${page}`}>
              {page}
            </div>
          ),
        )}
        <button className="btn btn-outline" type="button" onClick={handleNextClick}>
          <span className="sr-only">Older posts</span>
          <ChevronRight size={20} />
        </button>
        <button className="btn btn-outline" type="button" onClick={handleOldestClick}>
          <span className="sr-only">Oldest posts</span> <ChevronLast size={20} />
        </button>
      </div>
    </nav>
  )
}
