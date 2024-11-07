/**
 * Shared props used by both button and link components
 */
export interface ButtonPropsBase {
  variant?: string
  size?: string
  className?: string
  isOutline?: boolean
  isBlock?: boolean
  isCircle?: boolean
  isDisabled?: boolean
}

/**
 * Shared variants used by both button and link components.
 */
export const ButtonVariants: Record<string, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghost: "btn-ghost",
}

/**
 * Shared sizes used by both button and link components.
 */
export const ButtonSizes: Record<string, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
}
