import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import React from "react"

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen transition-colors duration-200">
      <Navigation />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
