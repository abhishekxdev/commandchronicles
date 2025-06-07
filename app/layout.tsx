import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CommandChronicles - Master Your Terminal History",
  description:
    "Your encrypted, cross-device command log. Search, sync, and understand your CLI history like never before — with full context and total control.",
  keywords: ["terminal", "command history", "CLI", "developer tools", "sync", "encrypted"],
  authors: [{ name: "CommandChronicles Team" }],
  openGraph: {
    title: "CommandChronicles - Master Your Terminal History",
    description:
      "Your encrypted, cross-device command log. Search, sync, and understand your CLI history like never before.",
    type: "website",
    url: "https://commandchronicles.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CommandChronicles - Master Your Terminal History",
    description:
      "Your encrypted, cross-device command log. Search, sync, and understand your CLI history like never before.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
