import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Open Tee",
  description:
    "Build real businesses. In Michigan. Through Open Tee, we buy and grow service companies. We share what works. We help a few teams each year when it makes sense.",
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
        <title>Open Tee</title>
        <meta name="description" content="Build real businesses. In Michigan. Through Open Tee, we buy and grow service companies." />
        <link rel="icon" href="/OpenTeeFavicon3.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gilroy:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* Open Graph */}
        <meta property="og:title" content="Open Tee" />
        <meta property="og:description" content="Build real businesses. In Michigan. Through Open Tee, we buy and grow service companies." />
        <meta property="og:image" content="/OpenTeeLogo.png" />
        <meta property="og:url" content="https://tomhamilton.me/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Open Tee" />
        <meta name="twitter:description" content="Build real businesses. In Michigan. Through Open Tee, we buy and grow service companies." />
        <meta name="twitter:image" content="/OpenTeeLogo.png" />
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
