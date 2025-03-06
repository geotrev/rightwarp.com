import cn from "classnames"
import { Pause, Play } from "lucide-react"
import { useState } from "react"

import Codecov from "@/app/_assets/logos/codecov.svg"
import Musicnotes from "@/app/_assets/logos/musicnotes.svg"
import Scribd from "@/app/_assets/logos/scribd.svg"
import ServiceNow from "@/app/_assets/logos/servicenow.svg"
import YaharaSoftware from "@/app/_assets/logos/yahara-software.svg"
import Zendesk from "@/app/_assets/logos/zendesk.svg"

export interface LogoMarqueeProps {
  logos: { name: string; Logo: React.FC }[]
}

const Logos = [
  { name: "Zendesk", Logo: Zendesk },
  { name: "ServiceNow", Logo: ServiceNow },
  { name: "Scribd", Logo: Scribd },
  { name: "Yahara Software", Logo: YaharaSoftware },
  { name: "Musicnotes", Logo: Musicnotes },
  { name: "Codecov", Logo: Codecov },
]

export const LogoMarquee = () => {
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  const handlePauseClick = () => setIsPaused(!isPaused)

  return (
    <section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-12 max-w-full items-center overflow-x-hidden text-purple-950 opacity-75 md:gap-3 lg:gap-12 dark:text-purple-100"
    >
      {/* animation start */}
      <div
        className="absolute left-0 top-0 flex w-full min-w-[max-content] animate-marquee-start items-center justify-around"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {Logos.map(({ Logo, name }) => (
          <div
            key={name}
            className="mx-10 w-24 flex-shrink-0 sm:w-28 lg:mx-20 lg:w-32"
          >
            <Logo />
          </div>
        ))}
      </div>
      {/* animation continuation - without it, the animation leaves white space after the initial logos */}
      <div
        className="absolute left-[full] top-0 flex w-full min-w-[max-content] animate-marquee-end items-center justify-around"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {Logos.map(({ Logo, name }) => (
          <div
            key={name}
            className="mx-10 w-24 flex-shrink-0 sm:w-28 lg:mx-20 lg:w-32"
          >
            <Logo />
          </div>
        ))}
      </div>
      <button
        type="button"
        className={cn(
          "btn btn-secondary btn-sm absolute left-6 z-10 opacity-0 focus-within:opacity-100 md:left-12 lg:left-24",
          {
            "opacity-100": isHovered,
          },
        )}
        onClick={handlePauseClick}
      >
        {isPaused ? <Play size={16} /> : <Pause size={16} />}
        <span className="sr-only">
          {isPaused ? "Play animation" : "Pause animation"}
        </span>
      </button>
    </section>
  )
}
