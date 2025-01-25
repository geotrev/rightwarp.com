import { Work } from "@tina/__generated__/types"
import Image from "next/image"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container, SubContainer } from "@/components/core"

import { WorkComponentsBody, WorkComponentsBodyIntro } from "../shared/MarkdownComponents"

import { WorkOverview } from "./WorkOverview"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const WorkEntry = (props: Work) => {
  const services = props.services!.map((service) => ({
    name: service!.serviceRef.name!,
  }))

  const [leadImage, secondaryImage, ...restImages] = props.images

  return (
    <Container isRaised collapseHorizontalPadding>
      <SubContainer isConstrained>
        <WorkOverview services={services}>
          <TinaMarkdown content={props.overview} components={WorkComponentsBodyIntro} />
        </WorkOverview>
      </SubContainer>
      <div className="relative h-96 w-full lg:h-[40rem]">
        <Image src={leadImage.src} alt={leadImage.alt} fill style={{ objectFit: "cover" }} />
      </div>
      {secondaryImage && (
        <div className="relative h-96 w-full lg:h-[40rem]">
          <Image
            src={secondaryImage.src}
            alt={secondaryImage.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <SubContainer isConstrained className="prose prose-slate xl:prose-lg dark:prose-invert">
        <TinaMarkdown content={props.body} components={WorkComponentsBody} />
      </SubContainer>
      {restImages.length > 0 &&
        restImages.map((image) => (
          <div key={image.alt} className="relative h-96 w-full lg:h-[40rem]">
            <Image src={leadImage.src} alt={leadImage.alt} fill style={{ objectFit: "cover" }} />
          </div>
        ))}
    </Container>
  )
}
