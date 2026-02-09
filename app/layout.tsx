import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DON Modular Homes - Premium Housing Solutions',
  description: 'Premium modular housing solutions for the Irish market. €50,000 retail price, 72 units target per year.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
