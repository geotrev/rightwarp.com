import { contactProps } from "@/app/_static/contactPage"
import { ActionList, ContactForm, Hero } from "@/components/app"

export default function Contact() {
  return (
    <>
      <Hero {...contactProps.heroProps} />
      <ActionList {...contactProps.scheduleActionsProps} />
      <ContactForm {...contactProps.contactFormProps} />
      <ActionList {...contactProps.endActionsProps} />
    </>
  )
}
