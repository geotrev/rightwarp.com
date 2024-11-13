import { Link } from "../core"

const items = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/blog",
    label: "Blog",
  },
]

export const HeaderLinks = () => {
  return (
    <div className="hidden items-center gap-4 md:inline-flex">
      {items.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          isGhost
          className="h-autoflex-col flex justify-center gap-2 px-4 py-2"
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
