import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/navbar'
import Providers from './providers'
import WhatsAppButton from '@/components/WhatsAppButton'
import InfoBanner from '@/components/InfoBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beds & More',
  description: 'Premium quality beds and furniture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <InfoBanner />
            <Navbar />
            <main className="flex-grow pt-[92px]">
              {children}
            </main>
            <WhatsAppButton />
          </div>
        </Providers>
      </body>
    </html>
  )
}
