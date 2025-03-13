"use client"

import Navbar from '@/components/layout/navbar'
import HeroSection from '@/components/sections/hero'
import { default as FeaturedCategories } from '@/components/FeaturedCategories'
import { default as SecondaryCategories } from '@/components/SecondaryCategories'
import { default as CompanyIntro } from '@/components/CompanyIntro'
import { default as Footer } from '@/components/Footer'
import { Container, Typography, Grid } from '@mui/material'
import OffersGrid from '@/components/OffersGrid'
import FurniturePackages from '@/components/FurniturePackages'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <CompanyIntro />
        <SecondaryCategories />
        <OffersGrid />
        <FurniturePackages />
        <Footer />
      </main>
    </>
  )
}