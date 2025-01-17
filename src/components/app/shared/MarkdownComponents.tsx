import { SquareArrowOutUpRight } from "lucide-react"
import { PropsWithChildren } from "react"

/**
 * table and td overrides are workarounds for a bug in TinaCMS' rich text editor.
 */

export const MarkdownComponents = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: (props?: any) => <table>{props?.children}</table>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  td: (props?: any) => <td>{props?.children}</td>,
}

export const WorkComponentsBodyIntro = {
  ...MarkdownComponents,
  p: (props?: PropsWithChildren) => <p className="text-2xl leading-10">{props?.children}</p>,
}

export const WorkComponentsBody = {
  ...MarkdownComponents,
  CallToAction: ({ label, href }: { label: string; href: string }) => (
    <div className="flex justify-center">
      <a href={href} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
        {label} <SquareArrowOutUpRight size={20} />
      </a>
    </div>
  ),
}
