"use client"

import cn from "classnames"
import { Asterisk, CheckCircle, Send } from "lucide-react"
import { useCallback, useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import { Button, Container } from "@/components/core"
import { FormStatus } from "@/utils/helpers"

import { SectionHeading } from "../shared/SectionHeading"

export interface ContactFormProps {
  heading: string
  subheading: string
  contact: {
    label: string
    name: string
    type: string
    placeholder?: string
    required?: boolean
  }[]
  topics: { label: string; name: string }[]
  details: {
    label: string
    name: string
    type: string
    hint: string
  }
}

export const ContactForm = (props: ContactFormProps) => {
  const [state, setState] = useState(FormStatus.IDLE)
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({
    ...props.contact.reduce((acc, { name }) => ({ ...acc, [name]: "" }), {}),
    [props.details.name]: "",
  })
  const [selectedTopics, setSelectedTopics] = useState<Record<string, boolean>>(
    props.topics.reduce((acc, { name }) => ({ ...acc, [name]: false }), {}),
  )
  const { executeRecaptcha } = useGoogleReCaptcha()

  const verifyRecaptcha = useCallback(async () => {
    if (!executeRecaptcha) return false

    const token = await executeRecaptcha("rw_contact_form")

    return token
  }, [executeRecaptcha])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (state === FormStatus.PENDING) return

      setState(FormStatus.PENDING)

      const gRecaptchaToken = await verifyRecaptcha()
      const formData = new FormData(e.target as HTMLFormElement)
      const formValues = [...formData.entries()].map(([key, value]) => [key, value.toString()])

      const res = await fetch("/api/contact", {
        method: "post",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gRecaptchaToken, formValues }),
      })

      if (res.ok) {
        const data = await res.json()

        setState(data.status)
      } else {
        setState(FormStatus.ERROR)
      }
    },
    [state, verifyRecaptcha],
  )

  return (
    <section>
      <Container>
        <SectionHeading icon={Send} subheading={props.subheading}>
          {props.heading}
        </SectionHeading>
      </Container>
      <Container className="mb-16" isConstrained>
        {state !== FormStatus.SUCCESS && (
          <>
            <p className="mb-8 flex items-center gap-4 italic">
              <Asterisk size="20" className="dark:text-white" />
              <span className="opacity-75">Fields with an asterisk are required</span>
            </p>
            <form className="grid gap-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {props.contact.map(({ label, name, type, placeholder, required }) => (
                  <div key={name} className="form-control">
                    <label htmlFor={name} className="label">
                      <span className="label-text flex items-center gap-1">
                        {label}
                        {required && <Asterisk className="inline" size={16} />}
                      </span>
                    </label>
                    <input
                      readOnly={state === FormStatus.PENDING}
                      id={name}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      value={fieldValues[name]}
                      onChange={(e) => setFieldValues({ ...fieldValues, [name]: e.target.value })}
                      className="input input-secondary w-full"
                      {...(type === "tel" && { pattern: "[0-9]{3}-?[0-9]{3}-?[0-9]{4}" })}
                    />
                  </div>
                ))}
              </div>
              <fieldset>
                <legend className="label">
                  <span className="label-text">I need help with...</span>
                </legend>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:max-w-[75%] 2xl:max-w-[52rem]">
                  {props.topics.map(({ label, name }) => (
                    <div key={name} className="form-control">
                      <label className="label cursor-pointer justify-start gap-4">
                        <input
                          readOnly={state === FormStatus.PENDING}
                          type="checkbox"
                          name={name}
                          checked={selectedTopics[name]}
                          onChange={(e) =>
                            setSelectedTopics({ ...selectedTopics, [name]: e.target.checked })
                          }
                          className="checkbox-secondary checkbox"
                        />
                        <span className="label-text text-purple-950 dark:text-white">{label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div className="form-control">
                <label htmlFor={props.details.name} className="label pb-0">
                  <span className="label-text flex items-center gap-1">
                    {props.details.label}
                    <Asterisk className="inline" size={16} />
                  </span>
                </label>
                <p className="label" id={`${props.details.name}-hint`}>
                  <span className="label-text text-xs">{props.details.hint}</span>
                </p>
                <textarea
                  readOnly={state === FormStatus.PENDING}
                  id={props.details.name}
                  name={props.details.name}
                  aria-describedby={`${props.details.name}-hint`}
                  required
                  value={fieldValues[props.details.name]}
                  onChange={(e) =>
                    setFieldValues({ ...fieldValues, [props.details.name]: e.target.value })
                  }
                  className="textarea textarea-secondary min-h-[8rem] w-full"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                className={cn("lg:btn-lg")}
                disabled={state === FormStatus.PENDING}
              >
                Send {<Send size={20} />}
              </Button>
            </form>
          </>
        )}
        {state === FormStatus.SUCCESS && (
          <p className="flex items-center justify-center gap-4">
            <span className="text-green-500 dark:text-green-400">
              <CheckCircle size={24} />{" "}
            </span>
            <span className="text-black dark:text-white">
              Your message has been sent and we&apos;ll be in touch soon!
            </span>
          </p>
        )}
      </Container>
    </section>
  )
}
