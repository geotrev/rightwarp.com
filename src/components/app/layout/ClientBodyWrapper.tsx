"use client"

import { MotionConfig } from "motion/react"
import { Suspense } from "react"

import { Header } from "@/components/app"
import { Footer } from "@/components/app/layout/Footer"
import PostHogPageView from "@/components/context/PostHogPageView"
import { useTheme } from "@/utils/useThemeContext"

export const ClientBodyWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <body
        suppressHydrationWarning
        data-theme={theme}
        className="fg-body min-h-screen bg-base-200 antialiased transition-colors lg:bg-base-100"
      >
        <div className="grid min-h-screen transition-[padding] ease-in-out lg:px-16 lg:pt-10 xl:px-24 xl:pt-16">
          <div className="relative bg-base-200 transition-[border-radius,background-color] ease-in-out lg:rounded-t-3xl">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            const localStorage = window?.localStorage
            if (localStorage) {
              const currentTheme = localStorage.getItem("__rw_theme__")
              const body = document.body
              if (currentTheme) {
                body.dataset.theme = currentTheme
                } else {
                  body.dataset.theme = "dark"
              }
              }
              })();
              `,
          }}
        />

        <Suspense>
          <PostHogPageView />
        </Suspense>
      </body>
    </MotionConfig>
  )
}
