import { ChevronRight } from "lucide-react"

export type PostHistoryItem = {
  year: number
  months: { month: number; count: number; label: string }[]
}

export interface PostHistoryProps {
  history?: {
    year: number
    months: { month: number; count: number; label: string }[]
  }[]
}

export const PostHistory = ({ history }: PostHistoryProps) => {
  return (
    <div>
      <h3 className="display mb-4 text-xl text-black lg:text-2xl dark:text-white">Post History</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {history?.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h4 className="text-lg text-black dark:text-white">{item.year}</h4>
            <div className="flex flex-col gap-2">
              {item.months.map((month, index) => (
                <a
                  key={index}
                  className="link flex items-center gap-2 no-underline transition-[gap] hover:gap-3 hover:underline"
                  href={`/blog/archive/${item.year}/${month.label.toLowerCase()}`}
                >
                  {month.label} ({month.count}){" "}
                  <ChevronRight size={16} className="text-black dark:text-white" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
