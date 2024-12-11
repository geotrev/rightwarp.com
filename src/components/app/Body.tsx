export const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-grow">{children}</main>
      <footer>Footer</footer>
    </div>
  )
}
