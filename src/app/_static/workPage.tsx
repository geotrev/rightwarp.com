import { HeroProps, WorkListProps, ActionListProps } from "@/components/app"

interface WorkProps {
  heroProps: HeroProps
  workListProps: WorkListProps
  actionsProps: ActionListProps
}

export const workProps: WorkProps = {
  heroProps: {
    variant: "display",
    heading: "Work",
    description:
      "From mockup to code, we focus on clear, accessible, and delightful digital design",
  },
  workListProps: {
    items: [
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        title: "Zendesk",
        description: "Customer Service",
        categories: ["Development"],
        slug: "/work/zendesk",
      },
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        title: "ServiceNow",
        description: "Customer & IT Service Management",
        categories: ["Development"],
        slug: "/work/servicenow",
      },
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        title: "Rainier Consignment",
        description: "Marketing & eCommerce",
        categories: ["Design", "Development"],
        slug: "/work/rainier-consignment",
      },
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        title: "Scribd",
        description: "User-Generated Content, Audiobooks, eBooks",
        categories: ["Design", "Development"],
        slug: "/work/scribd",
      },
    ],
  },
  actionsProps: {
    actions: [
      {
        heading: "Need help on a project?",
        description: "Whether it’s a brand new or needs some renewed attention, we can help",
        action: "button",
      },
      {
        heading: "Subscribe to the newsletter",
        description: "Get occasional emails about blog posts & industry happenings",
        action: "newsletter",
      },
    ],
  },
}
