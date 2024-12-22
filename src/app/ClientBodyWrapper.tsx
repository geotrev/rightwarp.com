"use client"

import { Header } from "@/components/app"
import { Footer } from "@/components/app/Footer"
import { useTheme } from "@/utils/useThemeContext"

export const ClientBodyWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()

  return (
    <body
      data-theme={theme}
      className="fg-body min-h-screen bg-base-100 antialiased transition-colors"
    >
      <div className="grid min-h-screen transition-[padding] ease-in-out lg:px-16 lg:pt-10 xl:px-24 xl:pt-16">
        <div className="relative bg-base-200 transition-[border-radius,background-color] ease-in-out lg:rounded-t-3xl">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </body>
  )
}
