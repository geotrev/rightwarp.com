"use client"

import cn from "classnames"
import { Asterisk, CheckCircle, LucideIcon, Send } from "lucide-react"
import { useCallback, useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import { Button, Container } from "@/components/core"
import { FormStatus } from "@/utils/helpers"

import { SectionHeading } from "../shared/SectionHeading"

export interface ContactFormProps {
  heading: string
  subheading: string
  icon: LucideIcon
}

const ContactFields = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Mario",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "mario@bros.com",
    required: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    placeholder: "555-123-4567",
  },
]

const Topics = [
  { label: "Design", name: "topic-design" },
  { label: "Development", name: "topic-development" },
  { label: "UI / UX", name: "topic-ui-ux" },
  { label: "Design Systems", name: "topic-design-systems" },
  { label: "Accessibility", name: "topic-a11y" },
  { label: "Other", name: "topic-other" },
]

const DetailsField = {
  label: "Details",
  name: "details",
  type: "textarea",
  hint: "Share some more details about the project: problem, goals, timeline, etc.",
}

export const ContactForm = (props: ContactFormProps) => {
  const [state, setState] = useState(FormStatus.IDLE)
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({
    ...ContactFields.reduce((acc, { name }) => ({ ...acc, [name]: "" }), {}),
    [DetailsField.name]: "",
  })
  const [selectedTopics, setSelectedTopics] = useState<Record<string, boolean>>(
    Topics.reduce((acc, { name }) => ({ ...acc, [name]: false }), {}),
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
      const formValues = [...formData.entries()].map(([key, value]) => [
        key,
        value.toString(),
      ])

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
      <SectionHeading icon={props.icon} subheading={props.subheading}>
        {props.heading}
      </SectionHeading>
      <Container className="mb-16" isConstrained>
        {state !== FormStatus.SUCCESS && (
          <>
            <p className="mb-8 flex items-center gap-4 italic">
              <Asterisk size="20" className="dark:text-white" />
              <span className="opacity-75">
                Fields with an asterisk are required
              </span>
            </p>
            <form className="grid gap-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {ContactFields.map(
                  ({ label, name, type, placeholder, required }) => (
                    <div key={name} className="form-control">
                      <label htmlFor={name} className="label">
                        <span className="label-text flex items-center gap-1">
                          {label}
                          {required && (
                            <Asterisk className="inline" size={16} />
                          )}
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
                        onChange={(e) =>
                          setFieldValues({
                            ...fieldValues,
                            [name]: e.target.value,
                          })
                        }
                        className="input input-secondary w-full"
                        {...(type === "tel" && {
                          pattern: "[0-9]{3}-?[0-9]{3}-?[0-9]{4}",
                        })}
                      />
                    </div>
                  ),
                )}
              </div>
              <fieldset>
                <legend className="label">
                  <span className="label-text">I need help with...</span>
                </legend>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:max-w-[75%] 2xl:max-w-[52rem]">
                  {Topics.map(({ label, name }) => (
                    <div key={name} className="form-control">
                      <label className="label cursor-pointer justify-start gap-4">
                        <input
                          readOnly={state === FormStatus.PENDING}
                          type="checkbox"
                          name={name}
                          checked={selectedTopics[name]}
                          onChange={(e) =>
                            setSelectedTopics({
                              ...selectedTopics,
                              [name]: e.target.checked,
                            })
                          }
                          className="checkbox-secondary checkbox"
                        />
                        <span className="label-text text-purple-950 dark:text-white">
                          {label}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div className="form-control">
                <label htmlFor={DetailsField.name} className="label pb-0">
                  <span className="label-text flex items-center gap-1">
                    {DetailsField.label}
                    <Asterisk className="inline" size={16} />
                  </span>
                </label>
                <p className="label" id={`${DetailsField.name}-hint`}>
                  <span className="label-text text-xs">
                    {DetailsField.hint}
                  </span>
                </p>
                <textarea
                  readOnly={state === FormStatus.PENDING}
                  id={DetailsField.name}
                  name={DetailsField.name}
                  aria-describedby={`${DetailsField.name}-hint`}
                  required
                  value={fieldValues[DetailsField.name]}
                  onChange={(e) =>
                    setFieldValues({
                      ...fieldValues,
                      [DetailsField.name]: e.target.value,
                    })
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
              Your message has been sent! Be sure to add{" "}
              <strong>ave@rightwarp.com</strong> to your contact list.
            </span>
          </p>
        )}
      </Container>
    </section>
  )
}
