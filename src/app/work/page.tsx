import { workProps } from "@/app/_static/workPage"
import { ActionList, Hero, WorkList } from "@/components/app"
import { queryWorkIndex } from "@/tina/queries"

export default async function Work() {
  const query = await queryWorkIndex()

  return (
    <>
      <Hero {...query.page} variant="display" />
      <WorkList {...workProps.workListProps} items={query.entries} />
      <ActionList {...workProps.actionsProps} />
    </>
  )
}
