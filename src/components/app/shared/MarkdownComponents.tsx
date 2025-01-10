import { SquareArrowOutUpRight } from "lucide-react"
import { PropsWithChildren } from "react"

export const WorkComponentsBodyIntro = {
  p: (props?: PropsWithChildren) => <p className="text-2xl leading-10">{props?.children}</p>,
}

export const WorkComponentsBody = {
  CallToAction: ({ label, href }: { label: string; href: string }) => (
    <div className="flex justify-center">
      <a href={href} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
        {label} <SquareArrowOutUpRight size={20} />
      </a>
    </div>
  ),
}

export const HeroDescriptionComponents = {
  p: (props?: PropsWithChildren) => (
    <p className="text-md tracking-tight text-purple-950 sm:text-lg md:text-xl lg:text-3xl lg:leading-[3rem] dark:text-purple-100">
      {props?.children}
    </p>
  ),
}
