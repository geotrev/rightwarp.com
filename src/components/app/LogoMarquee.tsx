import Codecov from "@/app/_assets/codecov.svg"
import Musicnotes from "@/app/_assets/musicnotes.svg"
import Scribd from "@/app/_assets/scribd.svg"
import ServiceNow from "@/app/_assets/servicenow.svg"
import Zendesk from "@/app/_assets/zendesk.svg"

const logos = [
  { name: "Codecov", Logo: Codecov },
  { name: "Musicnotes", Logo: Musicnotes },
  { name: "Scribd", Logo: Scribd },
  { name: "ServiceNow", Logo: ServiceNow },
  { name: "Zendesk", Logo: Zendesk },
]

export const LogoMarquee = () => {
  return (
    <div className="relative flex max-w-full gap-2 overflow-x-hidden text-purple-950 md:gap-3 lg:gap-12 dark:text-purple-100">
      {/* animation start */}
      <div className="animate-marquee-start flex h-[5rem] w-full items-center justify-around whitespace-nowrap">
        {logos.map(({ Logo, name }) => (
          <div key={name} className="h-6 w-24">
            <Logo />
          </div>
        ))}
      </div>
      {/* animation continuation - without it, the animation leaves white space after the initial logos */}
      <div className="animate-marquee-end absolute top-0 flex h-[5rem] w-full items-center justify-around whitespace-nowrap">
        {logos.map(({ Logo, name }) => (
          <div key={name} className="h-6 w-24">
            <Logo />
          </div>
        ))}
      </div>
    </div>
  )
}
