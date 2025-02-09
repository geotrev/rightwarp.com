"use client"

import { SettingsPrivacy } from "@tina/__generated__/types"

import { ActionList } from "@/components/app"
import { Content } from "@/components/app/policy/Content"

interface PageProps {
  policy?: SettingsPrivacy
}

export const ClientPage = ({ policy }: PageProps) => {
  return (
    <>
      {policy && <Content content={policy.content} />}
      <ActionList actions={["button", "newsletter"]} />
    </>
  )
}
