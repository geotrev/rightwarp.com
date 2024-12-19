import cn from "classnames"

export const Hero = ({
  heading,
  description,
  isDisplay = false,
}: {
  heading: string
  description?: string
  isDisplay?: boolean
}) => {
  const headingStyles = {
    default:
      "mb-4 md:mb-8 text-xl md:text-3xl lg:text-5xl leading-8 md:leading-10 lg:leading-[4rem] tracking-tight md:tracking-tighter",
    display:
      "mb-6 sm:mb-8 lg:mb-12 text-[6vw] leading-[9vw] xl:leading-[7.5vw] tracking-tight md:tracking-tighter",
  }

  return (
    <div
      className={cn(
        "flex flex-col justify-center px-8 py-20 transition-[padding] duration-300 sm:py-16 md:px-12 md:py-20 lg:px-24",
        {
          "sm:py-48 md:h-[50vh] lg:h-[75vh]": isDisplay,
        },
      )}
    >
      <h1
        className={cn("display text-black dark:text-white", {
          [headingStyles.display]: isDisplay,
          [headingStyles.default]: !isDisplay,
        })}
      >
        {heading}
      </h1>
      {description && (
        <p className="text-md tracking-tight text-purple-950 sm:text-lg md:text-xl lg:text-3xl dark:text-purple-100">
          {description}
        </p>
      )}
    </div>
  )
}
