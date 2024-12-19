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
    <div className="relative flex h-20 max-w-full items-center overflow-x-hidden text-purple-950 md:gap-3 lg:gap-12 dark:text-purple-100">
      {/* animation start */}
      <div className="animate-marquee-start absolute left-0 top-0 flex w-full min-w-[max-content] items-center justify-around">
        {logos.map(({ Logo, name }) => (
          <div key={name} className="mx-10 w-24 flex-shrink-0 sm:w-32 lg:mx-20 lg:w-44">
            <Logo />
          </div>
        ))}
      </div>
      {/* animation continuation - without it, the animation leaves white space after the initial logos */}
      <div className="animate-marquee-end absolute left-[full] top-0 flex w-full min-w-[max-content] items-center justify-around">
        {logos.map(({ Logo, name }) => (
          <div key={name} className="mx-10 w-24 flex-shrink-0 sm:w-32 lg:mx-20 lg:w-44">
            <Logo />
          </div>
        ))}
      </div>
    </div>
  )
}
