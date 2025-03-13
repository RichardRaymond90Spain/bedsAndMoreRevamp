"use client"

import PageWrapper from '@/components/layout/PageWrapper'
import { Navbar } from '@/components/layout/navbar'
import HeroSection from '@/components/sections/hero'
import FeaturedCategories from '@/components/FeaturedCategories'
import SecondaryCategories from '@/components/SecondaryCategories'
import CompanyIntro from '@/components/CompanyIntro'
import OffersGrid from '@/components/OffersGrid'
import { Footer } from '@/components/layout/footer'
import FurniturePackages from '@/components/FurniturePackages'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FurniturePackages />
      <FeaturedCategories />
      <CompanyIntro />
      <SecondaryCategories />
      <OffersGrid />
    </>
  )
} 