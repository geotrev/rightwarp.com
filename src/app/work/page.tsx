import { workProps } from "@/app/_static/workPage"
import { ActionList, Hero, WorkList } from "@/components/app"
import { queryWorkIndex } from "@/tina/queries"

export default async function Work() {
  const query = await queryWorkIndex()

  return (
    <>
      <Hero
        variant="display"
        heading={query.page.pageTitle}
        description={query.page.pageDescription}
      />
      <WorkList {...workProps.workListProps} />
      <ActionList {...workProps.actionsProps} />
    </>
  )
}
