import cn from "classnames"
import { LucideIcon } from "lucide-react"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text"

import { Container } from "@/components/core"

import { SectionHeading } from "./SectionHeading"

interface Testimonial {
  image?: string
  name?: string
  position?: string
  content?: TinaMarkdownContent
}

interface TestimonialContentProps extends Testimonial {
  isHidden?: boolean
}

export interface TestimonialsProps {
  heading: string
  subheading: string
  icon: LucideIcon
  testimonials?: Testimonial[]
}

const variants = {
  enter: {
    x: 100,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: -100,
    opacity: 0,
  },
}

const TestimonialContent = ({
  image,
  name,
  position,
  content,
  isHidden,
}: TestimonialContentProps) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-8", { invisible: isHidden })}
      aria-hidden={isHidden ? true : undefined}
    >
      <blockquote className="text-center italic md:text-lg">
        <TinaMarkdown content={content!} />
      </blockquote>
      <div className="flex items-center gap-6">
        {image && (
          <div className="overflow-hidden rounded-full">
            <Image src={image} alt={name!} width={48} height={48} />
          </div>
        )}
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm">{position}</p>
        </div>
      </div>
    </div>
  )
}

const Testimonial = (props: Testimonial) => {
  return (
    <motion.div
      className="absolute"
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <TestimonialContent {...props} />
    </motion.div>
  )
}

export const Testimonials = ({ heading, subheading, icon, testimonials }: TestimonialsProps) => {
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((page) => (page + 1) % testimonials!.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [page, testimonials])

  if (!testimonials?.length) return null

  return (
    <section>
      <SectionHeading icon={icon} subheading={subheading}>
        {heading}
      </SectionHeading>
      <Container isConstrained outerStyles="lg:px-28">
        <div className="relative">
          <AnimatePresence>
            {testimonials[page] && <Testimonial key={page} {...testimonials[page]} />}
            {/* hidden copy of the testimonial to ensure the right size is used for the container */}
            {testimonials[page] && <TestimonialContent {...testimonials[page]} isHidden />}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
