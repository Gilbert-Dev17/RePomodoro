import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { MarketingNav } from '@/components/LandingPage/layout/MarketingNav'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Re.Focus — Rethink how you rest',
  description:
    "Stop letting a 25-minute timer cut your flow short. Re.Focus adapts to how you actually work and rewards you with the rest you've genuinely earned.",
  openGraph: {
    title: 'Re.Focus',
    description: 'Rethink how you rest.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex flex-col font-sans">
        <div className="min-h-full w-full flex flex-col">
          <MarketingNav />

            {children}
        </div>
      </body>
    </html>
  )
}