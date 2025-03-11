import { Hero } from '@/components/sections/hero'
import { Categories } from '@/components/sections/categories'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { WhyChooseUs } from '@/components/sections/why-choose-us'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 pb-20">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  )
} 