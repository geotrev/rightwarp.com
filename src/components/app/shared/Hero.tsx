import cn from "classnames"

export interface HeroProps {
  heading: string
  description: string
  variant?: "standard" | "display"
  details?: React.ReactNode
}

export const Hero = ({ heading, description, details, variant = "standard" }: HeroProps) => {
  const fontStyles: Record<string, string> = {
    standard: cn(
      "mb-4 text-xl leading-8 tracking-tight md:mb-8 md:text-3xl md:leading-10 md:tracking-tighter lg:text-5xl lg:leading-[4rem]",
    ),
    display: cn(
      "mb-6 text-2xl tracking-tight sm:mb-8 sm:text-5xl sm:leading-[7vw] md:text-[6vw] md:tracking-tighter lg:mb-12",
    ),
  }

  const sizeStyles: Record<string, string> = {
    standard: cn("py-20 sm:py-24 md:py-28"),
    display: cn("py-20 sm:py-32 md:py-56 lg:py-72"),
  }

  return (
    <section
      className={cn("flex flex-col justify-center px-6 transition-[padding] md:px-12 lg:px-24", {
        [sizeStyles[variant]]: true,
      })}
    >
      <h1
        className={cn("display text-black dark:text-white", {
          [fontStyles[variant]]: true,
        })}
      >
        {heading}
      </h1>
      {description && (
        <p
          className={cn(
            "text-md tracking-tight text-purple-950 sm:text-lg md:text-xl lg:text-3xl lg:leading-[3rem] dark:text-purple-100",
            {
              "mb-8": !!details,
            },
          )}
        >
          {description}
        </p>
      )}
      {details}
    </section>
  )
}
