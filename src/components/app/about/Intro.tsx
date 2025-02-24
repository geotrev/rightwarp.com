import Image, { StaticImageData } from "next/image"

import SelfImage from "@/app/_assets/its-a-me.jpg"
import { Container, Link } from "@/components/core"

export interface IntroProps {
  bioImage: {
    src: StaticImageData
    alt: string
  }
  heading: string
  textStart: string
  textEnd: string
}

const ExperienceItems = [
  {
    id: "zendesk",
    content: (
      <>
        {"Zendesk's "}
        <Link isExternal href="https://garden.zendesk.com/">
          Garden design system
        </Link>
      </>
    ),
  },
  {
    id: "servicenow",
    content: (
      <>
        {"ServiceNow's "}
        <Link isExternal href="https://horizon.servicenow.com/">
          Horizon design system
        </Link>
      </>
    ),
  },
  {
    id: "scribd",
    content: (
      <>
        {"Scribd's "}
        <Link isExternal href="https://www.scribd.com/">
          Ruby on Rails web app
        </Link>
      </>
    ),
  },
  {
    id: "codecov",
    content: (
      <>
        {"Codecov's "}
        <Link isExternal href="https://about.codecov.io/">
          visual identity & logo design
        </Link>
      </>
    ),
  },
  {
    id: "musicnotes",
    content: (
      <>
        {"Musicnotes' "}
        <Link isExternal href="https://www.musicnotes.com/">
          web and mobile app design
        </Link>
      </>
    ),
  },
]

export const Intro = () => {
  return (
    <Container tag="section" isConstrained className="mb-24 sm:mb-36">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="relative h-48 w-48 overflow-hidden rounded-full lg:h-[19.125rem] lg:w-[19.125rem] lg:flex-shrink-0">
          <Image src={SelfImage} fill alt="George Treviranus" />
        </div>
        <div className="text-black lg:flex-grow lg:pt-16 dark:text-white">
          <h2 className="display mb-4 text-2xl tracking-tighter lg:mb-12 lg:text-4xl">
            Hello from Wisconsin!
          </h2>
          <p className="mb-8 leading-7">
            {
              "Welcome to Right Warp, a boutique design & development studio currently operated by me: George Treviranus. I've been designing and building digital products professionally for a little over 10 years. I've worked at and helped scale some pretty cool websites and tools, including:"
            }
          </p>
          <ul className="mb-8 list-disc ps-4 leading-7">
            {ExperienceItems.map((item) => (
              <li key={item.id}>{item.content}</li>
            ))}
          </ul>
          <p className="leading-7">
            {
              "Right Warp is guided by principles of empathy, inclusivity, and sustainability. When I work with clients, my goal is to foster a relationship of trust. All projects are approached with a focus on intuitive, accessible user experiences."
            }
          </p>
        </div>
      </div>
    </Container>
  )
}
