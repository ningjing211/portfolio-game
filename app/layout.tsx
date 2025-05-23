import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import type React from "react"

export const metadata = {
  title: "你最愛的那本作品集",
  description: "An innovative team that blends technology with humanity, focusing on future trends, digital content management",
  generator: 'v0.dev',
  icons: {
    icon: 'https://conflux-tech.com/wp-content/uploads/2025/03/conflux-game-favicon-48.png',
    shortcut: 'https://conflux-tech.com/wp-content/uploads/2025/03/conflux-game-favicon-48.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'