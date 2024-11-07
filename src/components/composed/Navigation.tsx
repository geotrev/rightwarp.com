import {
  BookUser,
  Handshake,
  House,
  NotebookPen,
  MessageCircle,
} from "lucide-react"
import { Link } from "../core/Link"

const items = [
  {
    href: "/",
    Icon: House,
    label: "Home",
  },
  {
    href: "/about",
    Icon: BookUser,
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
  {
    href: "/contact",
    Icon: MessageCircle,
    label: "Contact",
    emphasis: true,
  },
]

export const Navigation = () => {
  return (
    <div className="pointer-events-none fixed inset-0 h-screen w-screen">
      <nav className="navbar pointer-events-auto absolute bottom-12 left-1/2 z-50 flex h-fit max-w-fit -translate-x-1/2 gap-2 rounded-box bg-base-200 p-2 shadow-xl shadow-black/15 dark:shadow-black/25">
        {items.map(({ href, Icon, label }) => (
          <Link
            key={label}
            href={href}
            variant="ghost"
            className="flex h-auto w-24 flex-col justify-center gap-2 px-4 py-2"
          >
            <Icon strokeWidth={1} size={36} />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
