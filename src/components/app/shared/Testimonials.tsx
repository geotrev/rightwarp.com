import cn from "classnames"
import {
  ChevronLeft,
  ChevronRight,
  LucideIcon,
  Pause,
  Play,
} from "lucide-react"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text"

import { Container } from "@/components/core"

import { SectionHeading } from "./SectionHeading"

const TRANSITION_DELAY = 15000

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
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
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
      className={cn("flex flex-col items-center gap-8", {
        invisible: isHidden,
      })}
      aria-hidden={isHidden ? true : undefined}
    >
      <blockquote className="text-start italic sm:text-center md:text-2xl">
        <TinaMarkdown content={content!} />
      </blockquote>
      <div className="flex items-start gap-6 sm:items-center">
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
      transition={{ duration: 0.25 }}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <TestimonialContent {...props} />
    </motion.div>
  )
}

export const Testimonials = ({
  heading,
  subheading,
  icon,
  testimonials,
}: TestimonialsProps) => {
  const [page, setPage] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const createInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setPage((page) => (page + 1) % testimonials!.length)
    }, TRANSITION_DELAY)
  }, [testimonials])

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    } else {
      if (!intervalRef.current) {
        createInterval()
      }
    }

    return () => {
      if (!intervalRef.current) return

      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [testimonials, createInterval, isPaused])

  const resetInterval = useCallback(() => {
    if (!intervalRef.current || isPaused) return

    clearInterval(intervalRef.current)
    createInterval()
  }, [intervalRef, createInterval, isPaused])

  const handleNextClick = useCallback(() => {
    if (!testimonials?.length) return

    setPage((page) => (page + 1) % testimonials!.length)
    resetInterval()
  }, [resetInterval, testimonials])

  const handlePrevClick = useCallback(() => {
    if (!testimonials?.length) return

    setPage((page) => (page - 1 + testimonials!.length) % testimonials!.length)
    resetInterval()
  }, [resetInterval, testimonials])

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  if (!testimonials?.length) return null

  return (
    <section>
      <SectionHeading icon={icon} subheading={subheading}>
        {heading}
      </SectionHeading>
      <Container
        isConstrained
        outerStyles="lg:px-28"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative mb-6">
          <AnimatePresence>
            {testimonials[page] && (
              <Testimonial key={page} {...testimonials[page]} />
            )}
            {/* hidden copy of the testimonial to ensure the right size is used for the container */}
            {testimonials[page] && (
              <TestimonialContent {...testimonials[page]} isHidden />
            )}
          </AnimatePresence>
        </div>
        <div className="mb-2 flex justify-center gap-4">
          <button
            onClick={handlePrevClick}
            className="btn btn-circle btn-ghost"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNextClick}
            className="btn btn-circle btn-ghost"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex">
          <button
            className={cn("btn btn-ghost btn-xs mx-auto", {
              "opacity-75": !isHovered,
              "opacity-100": isHovered,
            })}
            onClick={() => setIsPaused((paused) => !paused)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
            {isPaused ? "Enable carousel" : "Pause carousel"}
          </button>
        </div>
      </Container>
    </section>
  )
}
