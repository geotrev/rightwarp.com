import { Navigation, Header, Footer } from "@/components/composed"
import React from "react"

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col transition-colors duration-200">
      <Navigation />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
