import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sean Reed",
  description: "Final year computer science student at Brock University. Aspiring software engineer with a passion for building solutions to real-world problems.",
  keywords: ["Software Engineer", "Web Developer", "Computer Science", "Portfolio", "Sean Reed"],
  authors: [{ name: "Sean Reed" }],
  openGraph: {
    title: "Sean Reed - Software Engineer",
    description: "Final year computer science student at Brock University. Aspiring software engineer with a passion for building solutions to real-world problems.",
    url: "https://reedsean.me",
    siteName: "Sean Reed Portfolio",
    images: [
      {
        url: "https://reedsean.me/header.PNG",
        width: 1082,
        height: 625,
        alt: "Sean Reed - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    'og:image': "https://reedsean.me/header.PNG",
    'og:image:width': '1082',
    'og:image:height': '625',
    'og:image:type': 'image/png',
    'og:image:alt': "Sean Reed - Software Engineer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Reed - Software Engineer",
    description: "Final year computer science student at Brock University. Aspiring software engineer with a passion for building solutions to real-world problems.",
    images: ["https://reedsean.me/header.PNG"],
    creator: "@seanreed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://reedsean.me/sr-icon.PNG",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}