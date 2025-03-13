"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import PageWrapper from '@/components/layout/PageWrapper'
import { Navbar } from '@/components/layout/navbar'
import HeroSection from '@/components/sections/hero'
import { Footer } from '@/components/layout/footer'

// Dynamic imports for non-critical components
const FurniturePackages = dynamic(() => import('@/components/FurniturePackages'), {
  loading: () => <div className="h-[500px] animate-pulse bg-gray-100" />
})

const FeaturedCategories = dynamic(() => import('@/components/FeaturedCategories'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-100" />
})

const CompanyIntro = dynamic(() => import('@/components/CompanyIntro'))
const SecondaryCategories = dynamic(() => import('@/components/SecondaryCategories'))
const OffersGrid = dynamic(() => import('@/components/OffersGrid'))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="h-[500px] animate-pulse bg-gray-100" />}>
        <FurniturePackages />
      </Suspense>
      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-100" />}>
        <FeaturedCategories />
      </Suspense>
      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-100" />}>
        <CompanyIntro />
      </Suspense>
      <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-100" />}>
        <SecondaryCategories />
      </Suspense>
      <Suspense fallback={<div className="h-[500px] animate-pulse bg-gray-100" />}>
        <OffersGrid />
      </Suspense>
    </>
  )
} 