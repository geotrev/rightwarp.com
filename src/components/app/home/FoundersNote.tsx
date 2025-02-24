import { Bookmark } from "lucide-react"
import Image from "next/image"

import { Container } from "@/components/core"

export const FoundersNote = () => {
  return (
    <Container isConstrained className="mb-12 mt-40 sm:mb-16 md:mb-24 lg:my-36">
      <div className="relative flex-grow rounded-lg bg-base-300 px-6 pb-6 pt-12 md:px-8 md:pb-8 lg:py-8 lg:pe-8 lg:ps-20 xl:py-12 xl:pe-12">
        <Image
          src="/uploads/george-portrait.jpeg"
          width={300}
          height={300}
          alt="George"
          className="absolute -top-8 size-16 rounded-full lg:-left-[3.5rem] lg:top-1/2 lg:size-28 lg:-translate-y-[50%]"
        />
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <h2 className="display whitespace-nowrap text-2xl tracking-tight text-black sm:text-3xl xl:tracking-tighter 2xl:text-4xl dark:text-white">
            {"Founder's Note"}
          </h2>
          <div className="flex w-full items-center gap-4">
            <hr
              className="w-full border-purple-950/25 dark:border-purple-100/25"
              aria-hidden="true"
            />
            <Bookmark size={24} className="flex-shrink-0" />
          </div>
        </div>
        <p className="sm:text-lg lg:text-xl">
          {
            "My name is George! I'm passionate about digital design & web development. My goal is to help businesses of all sizes make an impact with their customers. While I'm not working, my wife and I are usually waist-deep in a TV show or playing video games."
          }
        </p>
      </div>
    </Container>
  )
}
