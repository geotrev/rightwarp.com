export interface LogoMarqueeProps {
  logos: { name: string; Logo: React.FC }[]
}

export const LogoMarquee = ({ logos }: LogoMarqueeProps) => {
  return (
    <section className="relative flex h-10 max-w-full items-center overflow-x-hidden text-purple-950 md:gap-3 lg:gap-12 dark:text-purple-100">
      {/* animation start */}
      <div className="absolute left-0 top-0 flex w-full min-w-[max-content] animate-marquee-start items-center justify-around">
        {logos.map(({ Logo, name }) => (
          <div key={name} className="mx-10 w-24 flex-shrink-0 sm:w-32 lg:mx-20 lg:w-44">
            <Logo />
          </div>
        ))}
      </div>
      {/* animation continuation - without it, the animation leaves white space after the initial logos */}
      <div className="absolute left-[full] top-0 flex w-full min-w-[max-content] animate-marquee-end items-center justify-around">
        {logos.map(({ Logo, name }) => (
          <div key={name} className="mx-10 w-24 flex-shrink-0 sm:w-32 lg:mx-20 lg:w-44">
            <Logo />
          </div>
        ))}
      </div>
    </section>
  )
}
