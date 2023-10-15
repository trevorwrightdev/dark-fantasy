import './globals.css'
import type { Metadata } from 'next'
import { Pixelify_Sans } from 'next/font/google'

const font = Pixelify_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Dark Fantasy',
  description: 'A Dark Fantasy Adventure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
