import cn from "classnames"
import React from "react"

export interface HeroProps {
  heading: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description?: string
  variant?: "standard" | "display"
  details?: React.ReactNode
}

export const Hero = ({ heading, description, details, variant = "standard" }: HeroProps) => {
  const fontStyles: Record<string, string> = {
    standard: cn(
      "mb-4 text-3xl leading-8 tracking-tight md:mb-8 md:text-4xl md:leading-10 md:tracking-tighter lg:text-[4rem] lg:leading-[4rem]",
    ),
    display: cn(
      "mb-6 text-2xl tracking-tight sm:mb-8 sm:text-5xl sm:leading-[7vw] md:text-[6vw] md:tracking-tighter lg:mb-12",
    ),
  }

  const sizeStyles: Record<string, string> = {
    standard: cn("my-20 sm:my-24 md:my-28"),
    display: cn("my-20 sm:my-32 md:my-56 lg:my-[unset] lg:h-[70vh]"),
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
        <p className="text-md tracking-tight text-purple-950 sm:text-lg md:text-xl lg:text-3xl lg:leading-[3rem] dark:text-purple-100">
          {description}
        </p>
      )}
      {details}
    </section>
  )
}
