import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react"

export const Pagination = () => {
  return (
    <div className="mt-4">
      <div className="mb-4 flex justify-center">Page 1 of 4</div>
      <div className="flex justify-center gap-4">
        <button className="btn btn-ghost btn-primary" type="button" disabled>
          <span className="sr-only">Newest</span> <ChevronFirst size={20} />
        </button>
        <button className="btn btn-ghost btn-primary" type="button" disabled>
          <ChevronLeft size={20} /> Newer
        </button>
        <button className="btn btn-ghost btn-primary" type="button">
          Older <ChevronRight size={20} />
        </button>
        <button className="btn btn-ghost btn-primary" type="button">
          <span className="sr-only">Oldest</span> <ChevronLast size={20} />
        </button>
      </div>
    </div>
  )
}
