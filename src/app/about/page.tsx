import SelfImage from "@/app/_assets/its-a-me.jpg"
import Codecov from "@/app/_assets/logos/codecov.svg"
import Musicnotes from "@/app/_assets/logos/musicnotes.svg"
import Scribd from "@/app/_assets/logos/scribd.svg"
import ServiceNow from "@/app/_assets/logos/servicenow.svg"
import Zendesk from "@/app/_assets/logos/zendesk.svg"
import {
  Hero,
  Intro,
  SkillCategoriesProps,
  SkillCategories,
  LogoMarquee,
  LogoMarqueeProps,
} from "@/components/app"
import { Link } from "@/components/core"

export default function About() {
  const introProps = {
    bioImage: {
      src: SelfImage,
      alt: "George Treviranus",
    },
    heading: "Hello from Wisconsin!",
    textStart:
      "Right Warp is a boutique design & development studio currently operated by one person: George Treviranus. Let's switch to first person for a few moments: I've been designing and building digital products for a little over 10 years (longer if you count photoshopping in high school). I've worked at and helped scale som pretty cool websites and tools, including:",
    textEnd:
      "Right Warp is guided by principles of empathy, inclusivity, and sustainability. All projects are approached with a focus on custom-tailored user experience. In other words, no two projects will look the same, ensuring brand recognition and attention to detail.",
    experienceItems: [
      {
        id: "zendesk",
        content: (
          <>
            Zendesk&apos;s{" "}
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
            ServiceNow&apos;s{" "}
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
            Scribd&apos;s{" "}
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
            Codecov&apos;s{" "}
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
            Musicnotes&apos;{" "}
            <Link isExternal href="https://www.musicnotes.com/">
              web and mobile app design
            </Link>
          </>
        ),
      },
    ],
  }
  const marqueeProps: LogoMarqueeProps = {
    logos: [
      { name: "Codecov", Logo: Codecov },
      { name: "Musicnotes", Logo: Musicnotes },
      { name: "Scribd", Logo: Scribd },
      { name: "ServiceNow", Logo: ServiceNow },
      { name: "Zendesk", Logo: Zendesk },
    ],
  }

  const skillProps: SkillCategoriesProps = {
    categories: [
      {
        title: "Design",
        items: [
          "User Experience",
          "User Interface Design",
          "Design Systems",
          "Branding & Graphic Design",
          "Quality Assurance",
          "Iconography",
          "Typography",
          "Layout Design",
          "Theming",
        ],
      },
      {
        title: "Development",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "Bash",
          "Ruby",
          "Search Engine Optimization",
          "Performance",
          "Open Source",
          "Monorepos",
          "Content Management Systems",
          "React",
          "Tailwind",
          "Styled Components",
          "Node",
          "Next JS",
          "VCS / Git",
        ],
      },
    ],
  }

  return (
    <>
      <Hero variant="display" heading="About Us" description="Right Warp / raɪt-wɔrp" />
      <Intro {...introProps} />
      <div className="my-32">
        <LogoMarquee {...marqueeProps} />
      </div>
      <SkillCategories {...skillProps} />
      {/* Thoughts */}
      {/* EndActions */}
    </>
  )
}
