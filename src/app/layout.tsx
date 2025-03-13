import './globals.css'
import { Inter } from 'next/font/google'
import LoadingOptimizer from '@/components/LoadingOptimizer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yorkshire Linen Beds & More',
  description: 'Quality beds and furniture at great prices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.className} standard-rules`}>
        <LoadingOptimizer />
        {children}
      </body>
    </html>
  )
} 