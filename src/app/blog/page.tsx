import { blogProps } from "@/app/_static/blogProps"
import { Hero } from "@/components/app"

export default function Blog() {
  return (
    <>
      <Hero {...blogProps.heroProps} />
    </>
  )
}
