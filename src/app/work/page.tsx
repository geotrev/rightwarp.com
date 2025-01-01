import { workProps } from "@/app/_static/workPage"
import { ActionList, Hero, WorkList } from "@/components/app"

export default function Work() {
  return (
    <>
      <Hero {...workProps.heroProps} />
      <WorkList {...workProps.workListProps} />
      <ActionList {...workProps.actionsProps} />
    </>
  )
}
