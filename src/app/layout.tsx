import './globals.css'
import { Inter } from 'next/font/google'

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
      <body className={`${inter.className} standard-rules`}>
        {children}
      </body>
    </html>
  )
} 