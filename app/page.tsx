"use client"
import { useRef, useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProductShowcase from "@/components/product-showcase"
import FeaturesSection from "@/components/features-section"
import StickerGallery from "@/components/sticker-gallery"
import Footer from "@/components/footer"
import HistoryAndIngredients from "@/components/history-and-ingredients"
import ProductDetails from "@/components/product-details"

export default function Home() {
  const productsRef = useRef<HTMLDivElement>(null)
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full bg-white">
      <Header />
      <HeroSection onExploreClick={scrollToProducts} />
      <HistoryAndIngredients />
      <div ref={productsRef}>
        <ProductShowcase onSelectProduct={setSelectedProductIndex} />
      </div>
      <ProductDetails selectedProductIndex={selectedProductIndex} />
      <FeaturesSection />
      <StickerGallery />
      <Footer />
    </div>
  )
}
