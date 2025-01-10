"use client"

import cn from "classnames"
import { Asterisk, Send } from "lucide-react"
import { useState } from "react"

import { Button, Container } from "@/components/core"
import { ContactFormStatus } from "@/utils/helpers"

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
  const [state, setState] = useState(ContactFormStatus.IDLE)
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({
    ...props.contact.reduce((acc, { name }) => ({ ...acc, [name]: "" }), {}),
    [props.details.name]: "",
  })
  const [selectedTopics, setSelectedTopics] = useState<Record<string, boolean>>(
    props.topics.reduce((acc, { name }) => ({ ...acc, [name]: false }), {}),
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (state === ContactFormStatus.PENDING) return

    setState(ContactFormStatus.PENDING)

    const formData = new FormData(e.currentTarget)

    fetch("/api/contact", {
      method: "post",
      body: formData,
    }).then((result) => {
      if (result.ok) {
        setState(ContactFormStatus.SUCCESS)
      } else {
        setState(ContactFormStatus.ERROR)
      }
    })
  }

  return (
    <section>
      <Container>
        <SectionHeading icon={Send} subheading={props.subheading}>
          {props.heading}
        </SectionHeading>
      </Container>
      <Container className="mb-16" isConstrained>
        {state !== ContactFormStatus.SUCCESS && (
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
                disabled={state === ContactFormStatus.PENDING}
              >
                Send {<Send size={20} />}
              </Button>
            </form>
          </>
        )}
        {state === ContactFormStatus.SUCCESS && (
          <p className="text-green-500 dark:text-green-400">
            Your message has been sent and we&apos;ll be in touch soon!
          </p>
        )}
      </Container>
    </section>
  )
}
