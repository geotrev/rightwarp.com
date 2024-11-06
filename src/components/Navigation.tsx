import { BookHeart, Handshake, House, NotebookPen } from "lucide-react"
import Link from "next/link"

const items = [
  {
    href: "/",
    Icon: House,
    label: "Home",
  },
  {
    href: "/about",
    Icon: BookHeart,
    label: "About",
  },
  {
    href: "/services",
    Icon: Handshake,
    label: "Services",
  },
  {
    href: "/blog",
    Icon: NotebookPen,
    label: "Blog",
  },
]

export const Navigation = () => {
  return (
    <div className="pointer-events-none fixed inset-0 h-screen w-screen">
      <nav className="navbar pointer-events-auto absolute bottom-12 left-1/2 z-50 flex h-fit max-w-fit -translate-x-1/2 gap-2 rounded-box bg-base-200 p-2 shadow-xl">
        {items.map(({ href, Icon, label }) => (
          <Link
            key={label}
            href={href}
            className="btn btn-ghost grid h-auto gap-2 px-4 py-2"
          >
            <Icon strokeWidth={1} size={36} />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
