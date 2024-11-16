import { Link } from "../core"

const items = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
]

export const HeaderLinks = () => {
  return (
    <div className="hidden items-center self-stretch md:flex">
      {items.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          isGhost
          size="sm"
          className="flex h-full flex-col justify-center gap-2 px-6 py-2"
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
