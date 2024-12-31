import { Hero, HeroProps } from "@/components/app"

export default function Blog() {
  const heroProps: HeroProps = {
    variant: "display",
    heading: "Thoughts",
    description: "Ramblings about tech, web development, and design",
  }
  return (
    <>
      <Hero {...heroProps} />
    </>
  )
}
