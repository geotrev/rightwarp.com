import { PropsWithChildren } from "react"

export const BodyIntroComponents = {
  p: (props?: PropsWithChildren) => <p className="text-2xl leading-10">{props?.children}</p>,
}
