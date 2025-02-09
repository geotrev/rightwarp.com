"use client"

import { PageQuery } from "@tina/__generated__/types"
import { Send } from "lucide-react"
import { useTina } from "tinacms/dist/react"

import {
  ActionList,
  ContactForm,
  Hero,
  RecaptchaVerifyWrapper,
} from "@/components/app"

interface PageProps {
  page: {
    data: PageQuery
    variables: {
      relativePath: string
    }
    query: string
  }
}

export const ClientPage = ({ page }: PageProps) => {
  const { data: _data } = useTina(page)
  const data = _data.page

  return (
    <>
      <Hero heading={data.title} description={data.description} />
      <ActionList actions={["call"]} />
      <RecaptchaVerifyWrapper>
        <ContactForm
          heading="Message Us"
          subheading="Share some details about your project—the more, the better!"
          icon={Send}
        />
      </RecaptchaVerifyWrapper>
      <ActionList actions={["newsletter"]} />
    </>
  )
}
