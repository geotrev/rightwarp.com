import Image from "next/image"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container, SubContainer } from "@/components/core"

import { Work } from "../../../../tina/__generated__/types"
import { BodyIntroComponents } from "../shared/MarkdownComponents"

import { WorkMetadata } from "./WorkMetadata"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const WorkEntry = (props: Work) => {
  const categories = props.categories!.map((category) => ({
    name: category!.categoryRef.name!,
    color: category!.categoryRef.color!,
  }))

  const services = props.services!.map((service) => ({
    name: service!.serviceRef.name!,
  }))

  const [leadImage, secondaryImage, ...restImages] = props.images

  return (
    <Container isRaised collapseHorizontalPadding>
      <SubContainer isConstrained>
        <WorkMetadata services={services} categories={categories} />
      </SubContainer>
      <div className="relative h-96 w-full lg:h-[40rem]">
        <Image src={leadImage.src} alt={leadImage.alt} fill style={{ objectFit: "cover" }} />
      </div>
      <SubContainer isConstrained className="prose">
        <TinaMarkdown content={props.bodyIntro} components={BodyIntroComponents} />
      </SubContainer>
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
      <SubContainer isConstrained className="prose">
        <TinaMarkdown content={props.body} />
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
