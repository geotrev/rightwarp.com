import cn from "classnames"
import { CheckCircle } from "lucide-react"
import { ChangeEventHandler, FormEventHandler, useCallback, useRef, useState } from "react"

import { Button } from "@/components/core"
import { EMAIL_REGEXP, FormState, FormStatus } from "@/utils/helpers"

export const SubscribeForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [state, setState] = useState<FormState>(FormStatus.IDLE)
  const [value, setValue] = useState("")

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (state === FormStatus.ERROR) setState(FormStatus.IDLE)

      setValue(e.target.value)
    },
    [state],
  )

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault()

      if (state === FormStatus.PENDING) return

      const formData = new FormData(e.target as HTMLFormElement)
      const email = formData.get("email") as string

      if (!EMAIL_REGEXP.test(email)) {
        setState(FormStatus.ERROR)
        inputRef.current?.focus()

        return
      }

      setState(FormStatus.PENDING)

      const body = JSON.stringify({ email })

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      })

      if (res.ok) {
        const data = await res.json()
        setState(data.status)
      } else {
        setState(FormStatus.ERROR)
      }
    },
    [state],
  )

  return (
    <>
      {state !== FormStatus.SUCCESS && (
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
          <input
            ref={inputRef}
            type="email"
            required
            name="email"
            value={value}
            readOnly={state === FormStatus.PENDING}
            onChange={handleChange}
            placeholder="mario@bros.com"
            className={cn(
              "input input-secondary sm:flex-grow md:w-[50%] md:flex-grow-0 lg:w-[unset] lg:flex-grow",
              {
                "input-error": state === FormStatus.ERROR,
              },
            )}
          />
          <Button
            type="submit"
            disabled={state === FormStatus.PENDING}
            variant="secondary"
            className="btn-outline"
          >
            Subscribe
          </Button>
        </form>
      )}
      {state === FormStatus.SUCCESS && (
        <p className="flex items-center justify-center gap-4">
          <span className="text-green-500 dark:text-green-400">
            <CheckCircle size={24} />{" "}
          </span>
          <span className="text-black dark:text-white">Thank you for subscribing!</span>
        </p>
      )}
    </>
  )
}
