import { useEffect, useState } from "react"

export type UseMediaQueryProps = {
  query: string
}

export type UseMediaQueryReturnValue = boolean

export const useMediaQuery = ({ query }: UseMediaQueryProps): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => {
      setMatches(media.matches)
    }

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener)
    } else {
      media.addListener(listener)
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener)
      } else {
        media.removeListener(listener)
      }
    }
  }, [matches, query])

  return matches
}

export const useIsSmall = () => useMediaQuery({ query: "(min-width: 640px)" })
export const useIsMedium = () => useMediaQuery({ query: "(min-width: 768px)" })
export const useIsLarge = () => useMediaQuery({ query: "(min-width: 1024px)" })
export const useIsXLarge = () => useMediaQuery({ query: "(min-width: 1280px)" })
export const useIs2XLarge = () =>
  useMediaQuery({ query: "(min-width: 1536px)" })
