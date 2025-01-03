import { WorkListProps, ActionListProps } from "@/components/app"

interface WorkProps {
  workListProps: WorkListProps
  actionsProps: ActionListProps
}

export const workProps: WorkProps = {
  workListProps: {
    items: [
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        title: "Zendesk",
        description: "Customer Service",
        categories: [{ name: "Development", color: "#666" }],
        slug: "/work/zendesk",
      },
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        title: "ServiceNow",
        description: "Customer & IT Service Management",
        categories: [{ name: "Development", color: "#666" }],
        slug: "/work/servicenow",
      },
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        title: "Rainier Consignment",
        description: "Marketing & eCommerce",
        categories: [
          { name: "Design", color: "#666" },
          { name: "Development", color: "#666" },
        ],
        slug: "/work/rainier-consignment",
      },
      {
        image: {
          href: "https://picsum.photos/500/300",
          alt: "image",
        },
        title: "Scribd",
        description: "User-Generated Content, Audiobooks, eBooks",
        categories: [
          { name: "Design", color: "#666" },
          { name: "Development", color: "#666" },
        ],
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
