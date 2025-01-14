export type FormState = "idle" | "pending" | "success" | "error"

export const FormStatus: Record<string, FormState> = {
  IDLE: "idle",
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
}

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

export const EMAIL_REGEXP: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// This will be replaced with a list of categories from the CMS
export const Categories = {
  DESIGN: "Design",
  WEB_DEV: "Development",
  TECHNOLOGY: "Technology",
}

// This will be replaced with a color set from the CMS
export const CategoryColors = {
  [Categories.DESIGN]: "bg-red-600 dark:bg-red-400",
  [Categories.WEB_DEV]: "bg-blue-600 dark:bg-blue-400",
  [Categories.TECHNOLOGY]: "bg-green-600 dark:bg-green-400",
}
