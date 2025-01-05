import { CategoryList } from "../shared/CategoryList"

export const WorkMetadata = ({
  categories,
  services,
}: {
  categories: { name: string; color: string }[]
  services: { name: string }[]
}) => {
  return (
    <aside className="grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="display mb-4 text-black lg:text-2xl dark:text-white">Work Type</h2>
        <CategoryList categories={categories} />
      </div>
      <div>
        <h2 className="display mb-4 text-black lg:text-2xl dark:text-white">Services</h2>
        <ul className="flex flex-wrap gap-1">
          {services.map((service, index) => (
            <li key={service.name}>
              {service.name}
              {index === services.length - 1 ? "" : ","}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
