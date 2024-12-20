export const Routes = {
  HOME: "/",
  ABOUT: "/about",
  WORK: "/work",
  BLOG: "/blog",
  CONTACT: "/contact",
}

export const NavItems = [
  {
    label: "Home",
    href: Routes.HOME,
  },
  {
    label: "About",
    href: Routes.ABOUT,
  },
  {
    label: "Work",
    href: Routes.WORK,
  },
  {
    label: "Blog",
    href: Routes.BLOG,
  },
]

export const Categories = {
  DESIGN: "Design",
  WEB_DEV: "Web Dev",
  TECHNOLOGY: "Technology",
}

export const CategoryColors = {
  [Categories.DESIGN]: "bg-red-600 dark:bg-red-400",
  [Categories.WEB_DEV]: "bg-blue-600 dark:bg-blue-400",
  [Categories.TECHNOLOGY]: "bg-green-600 dark:bg-green-400",
}
