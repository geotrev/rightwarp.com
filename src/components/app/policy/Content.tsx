import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text"

import { Container } from "@/components/core"

export const Content = ({ content }: { content: TinaMarkdownContent }) => {
  return (
    <Container isConstrained>
      <div className="prose">
        <TinaMarkdown content={content} />
      </div>
    </Container>
  )
}
