import { contactProps } from "@/app/_static/contactPage"
import { ActionList, ContactForm, Hero } from "@/components/app"
import { queryContact } from "@/tina/queries"

export default async function Contact() {
  const query = await queryContact()

  return (
    <>
      <Hero {...query.page} variant="display" />
      <ActionList {...contactProps.scheduleActionsProps} />
      <ContactForm {...contactProps.contactFormProps} />
      <ActionList {...contactProps.endActionsProps} />
    </>
  )
}
