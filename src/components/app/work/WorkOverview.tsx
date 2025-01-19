import { PropsWithChildren } from "react"

import { ServiceList } from "../shared/ServiceList"

export const WorkOverview = ({
  services,
  children,
}: PropsWithChildren<{ services: { name: string }[] }>) => {
  return (
    <aside className="grid grid-cols-1 gap-8 xl:grid-cols-4">
      <div className="xl:col-span-3">
        <h2 className="display mb-4 text-xl text-black lg:text-2xl dark:text-white">Overview</h2>
        <div className="prose">{children}</div>
      </div>
      <div>
        <h2 className="display mb-4 text-xl text-black lg:text-2xl dark:text-white">Services</h2>
        <ul className="flex flex-wrap gap-1">
          <ServiceList services={services} />
        </ul>
      </div>
    </aside>
  )
}
