"use client"

import { useTina } from "tinacms/dist/react"

import { ActionList, ContactForm, Hero, RecaptchaVerifyWrapper } from "@/components/app"

import { PageQuery } from "../../../tina/__generated__/types"
import { contactProps } from "../_static/contactPage"

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
      <Hero heading={data.title} description={data.description} variant="display" />
      <ActionList {...contactProps.scheduleActionsProps} />
      <RecaptchaVerifyWrapper>
        <ContactForm {...contactProps.contactFormProps} />
      </RecaptchaVerifyWrapper>
      <ActionList {...contactProps.endActionsProps} />
    </>
  )
}
