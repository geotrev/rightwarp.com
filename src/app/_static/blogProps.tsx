import { HeroProps } from "@/components/app"

interface BlogProps {
  heroProps: HeroProps
}

export const blogProps: BlogProps = {
  heroProps: {
    variant: "display",
    heading: "Thoughts",
    description: "Ramblings about tech, web development, and design",
  },
}
