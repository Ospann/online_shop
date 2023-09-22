import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce online shop',
  description: 'Find something what you need',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}