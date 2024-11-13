/**
 * Shared props used by both button and link components
 */
export interface ButtonPropsBase {
  variant?: string
  size?: string
  className?: string
  isPrimary?: boolean
  isSecondary?: boolean
  isAccent?: boolean
  isGhost?: boolean
  isOutline?: boolean
  isBlock?: boolean
  isCircle?: boolean
  isDisabled?: boolean
}
