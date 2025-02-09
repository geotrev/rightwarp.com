import { Send } from "lucide-react"

import { ContactFormProps } from "@/components/app"

interface ContactProps {
  contactFormProps: ContactFormProps
}

export const contactProps: ContactProps = {
  contactFormProps: {
    heading: "Message Us",
    subheading: "Share some details about your project—the more, the better!",
    icon: Send,
  },
}
