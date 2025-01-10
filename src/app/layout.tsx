import { Metadata } from "next"
import { Public_Sans, Krona_One } from "next/font/google"

import { ClientBodyWrapper } from "@/components/app/layout/ClientBodyWrapper"
import { PostHogProvider } from "@/components/context/PostHogProvider"
import { ThemeProvider } from "@/components/context/ThemeProvider"
import { generatePageMeta } from "@/utils/generatePageMetadata"

import "./globals.css"

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
})

const kronaOne = Krona_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-krona-one",
})

/**
 * Root site metadata
 */
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMeta()
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PostHogProvider>
      <html
        lang="en"
        className={`${publicSans.className} ${publicSans.variable} ${kronaOne.variable} min-h-screen`}
      >
        <ThemeProvider>
          <ClientBodyWrapper>{children}</ClientBodyWrapper>
        </ThemeProvider>
      </html>
    </PostHogProvider>
  )
}
