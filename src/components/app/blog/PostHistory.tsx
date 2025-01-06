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
      <h3 className="display mb-4 text-black lg:text-2xl dark:text-white">Post History</h3>
      {JSON.stringify(history, null, 2)}
    </div>
  )
}
