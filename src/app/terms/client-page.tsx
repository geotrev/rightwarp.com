"use client"

import { SettingsTerms } from "@tina/__generated__/types"

import { ActionList } from "@/components/app"
import { Content } from "@/components/app/policy/Content"

interface PageProps {
  policy?: SettingsTerms
}

export const ClientPage = ({ policy }: PageProps) => {
  return (
    <>
      {policy && <Content content={policy.content} />}
      <ActionList actions={["button", "newsletter"]} />
    </>
  )
}
