export const Container = ({
  tag = "div",
  children,
}: {
  // eslint-disable-next-line
  tag?: any
  children: React.ReactNode
}) => {
  // eslint-disable-next-line
  const Tag = tag as any

  return <Tag className="py-4 px-5 w-full">{children}</Tag>
}
