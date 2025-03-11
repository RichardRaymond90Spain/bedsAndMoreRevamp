"use client"

import { ThemeProvider } from "@/lib/node_modules/@mui/material/styles"
import CssBaseline from "@/lib/node_modules/@mui/material/CssBaseline"
import { theme } from "./theme"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import ProductGrid from "./components/product-grid"
import AboutSection from "./components/about-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <AboutSection />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

