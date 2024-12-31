import { WorkListProps } from "@/components/app"

export const workListProps: WorkListProps = {
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
}
