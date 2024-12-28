import type { Metadata } from "next"
import { Krona_One } from "next/font/google"
import { Public_Sans } from "next/font/google"

import { ClientBodyWrapper } from "@/components/app/layout/ClientBodyWrapper"
import { ThemeProvider } from "@/components/context/ThemeProvider"

import "./globals.css"

export const metadata: Metadata = {
  title: "Right Warp",
  description: "Web design and development",
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
  return (
    <html
      lang="en"
      className={`${publicSans.className} ${publicSans.variable} ${kronaOne.variable} min-h-screen`}
    >
      <ThemeProvider>
        <ClientBodyWrapper>{children}</ClientBodyWrapper>
      </ThemeProvider>
    </html>
  )
}
