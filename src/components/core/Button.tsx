import { PropsWithChildren } from "react"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  isPrimary?: boolean
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="flex gap-2 py-2 px-3 border border-white/50 text-white"
      {...props}
    >
      {children}
    </button>
  )
}
