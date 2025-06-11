import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KTS Home',
  description: 'Smart Home Security and Automation Solutions',
  icons: {
    icon: 'logo.png',
    apple: 'logo.png',
    shortcut: 'logo.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  )
}
