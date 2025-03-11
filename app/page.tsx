"use client"

import HeroSection from '@/components/hero-section'
import { default as CashbackBanner } from '@/components/CashbackBanner'
import { default as FeaturedCategories } from '@/components/FeaturedCategories'
import { default as CompanyIntro } from '@/components/CompanyIntro'
import { Container, Typography, Grid } from '@mui/material'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CashbackBanner />
      <FeaturedCategories />
      <CompanyIntro />
      <Container maxWidth="xl" className="py-16">
        <Typography variant="h2" className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {/* Add ProductCard components here */}
        </Grid>
      </Container>
    </main>
  )
}