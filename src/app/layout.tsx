import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maicemita - Homemade Alfajores de Maicena',
  description: 'Beautiful e-commerce site for homemade alfajores de maicena - Sweet pastries made with love',
  keywords: 'alfajores, maicena, homemade, desserts, sweet pastries, dulce de leche, membrillo, batata',
  authors: [{ name: 'Maicemita' }],
  openGraph: {
    title: 'Maicemita - Homemade Alfajores de Maicena',
    description: 'Beautiful e-commerce site for homemade alfajores de maicena - Sweet pastries made with love',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maicemita - Homemade Alfajores de Maicena',
    description: 'Beautiful e-commerce site for homemade alfajores de maicena - Sweet pastries made with love',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}