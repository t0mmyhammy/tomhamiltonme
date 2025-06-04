import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tom Hamilton | What I Do",
  description:
    "Strategy that actually ships. For founders and executives who refuse to let good strategy die in a slide deck.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Tom Hamilton</title>
        <meta name="description" content="Tom Hamilton" />
        {/* Open Graph */}
        <meta property="og:title" content="Tom Hamilton" />
        <meta property="og:description" content="Tom Hamilton" />
        <meta property="og:image" content="/THlogo.jpg" />
        <meta property="og:url" content="https://tomhamilton.me/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tom Hamilton" />
        <meta name="twitter:description" content="Tom Hamilton" />
        <meta name="twitter:image" content="/THlogo.jpg" />
      </head>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
