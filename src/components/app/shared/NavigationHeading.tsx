export const NavigationHeading = ({
  label,
  icon,
}: {
  label: string
  icon?: React.ReactNode
}) => {
  return (
    <div className="flex w-full items-center gap-4">
      <span className="display text-nowrap text-[0.625rem] uppercase text-primary">
        {label}
      </span>
      <hr
        className="w-full border-purple-950/25 dark:border-purple-100/25"
        aria-hidden="true"
      />
      {icon}
    </div>
  )
}
