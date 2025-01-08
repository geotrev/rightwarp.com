import { Container } from "@/components/core"

import { MediaCard, MediaCardProps } from "../shared/MediaCard"

export interface WorkListProps {
  items?: MediaCardProps[]
}

export const WorkList = ({ items }: WorkListProps) => {
  return (
    <Container tag="section" isConstrained className="grid gap-8 md:grid-cols-2">
      {items?.map((item) => <MediaCard key={item.title} headingTag="h2" {...item} />)}
    </Container>
  )
}
