import Image, { StaticImageData } from "next/image"

import { Container } from "@/components/core"

export interface IntroProps {
  bioImage: {
    src: StaticImageData
    alt: string
  }
  heading: string
  textStart: string
  textEnd: string
  experienceItems: {
    id: string
    content: React.ReactNode
  }[]
}

export const Intro = (props: IntroProps) => {
  return (
    <Container tag="section">
      <div className="flex flex-col gap-8 lg:flex-row 2xl:px-[15%]">
        <figure className="relative h-48 w-48 overflow-hidden rounded-full lg:h-[19.125rem] lg:w-[19.125rem] lg:flex-shrink-0">
          <Image src={props.bioImage.src} fill alt="" />
          <figcaption className="sr-only">{props.bioImage.alt}</figcaption>
        </figure>
        <div className="text-black lg:flex-grow lg:pt-16 dark:text-white">
          <h2 className="display mb-4 text-2xl tracking-tighter lg:mb-12 lg:text-4xl">
            {props.heading}
          </h2>
          <p className="mb-8 leading-7">{props.textStart}</p>
          <ul className="mb-8 list-disc ps-4 leading-7">
            {props.experienceItems.map((item) => (
              <li key={item.id}>{item.content}</li>
            ))}
          </ul>
          <p className="leading-7">{props.textEnd}</p>
        </div>
      </div>
    </Container>
  )
}
