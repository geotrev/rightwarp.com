import type { Metadata } from "next"
import { Krona_One } from "next/font/google"
import { Public_Sans } from "next/font/google"

import { Header } from "@/components/app/Header"
import { getTheme } from "@/server/utils"

import "./globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
})

const kronaOne = Krona_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-krona-one",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = await getTheme()

  return (
    <html lang="en" className="min-h-screen" data-theme={theme}>
      <body
        className={`${publicSans.className} ${publicSans.variable} ${kronaOne.variable} fg-body min-h-screen bg-base-100 antialiased transition-colors duration-300`}
      >
        <div className="grid min-h-screen transition-[padding] duration-300 ease-in-out lg:px-16 lg:pt-10 xl:px-24 xl:pt-16">
          <div className="relative bg-base-200 transition-[border-radius,background-color] duration-300 ease-in-out lg:rounded-t-3xl">
            <Header theme={theme} />
            {children}
            {/* Footer + nav links */}
          </div>
        </div>
      </body>
    </html>
  )
}
