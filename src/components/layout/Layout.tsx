import { Navbar } from './navbar'
import { Footer } from './footer'
import WhatsAppButton from '../WhatsAppButton'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <WhatsAppButton />
      <Footer />
    </>
  )
} 