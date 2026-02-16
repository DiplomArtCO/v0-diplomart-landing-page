'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface ImageCarouselProps {
  images: Array<{ src: string; alt: string }>
  title: string
}

/**
 * Image Carousel Component - Displays product images with alt text for SEO
 * Similar to Instagram/eBay carousel functionality with descriptive alt text
 */
export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  const currentImage = images[currentIndex]

  return (
    <div className="w-full">
      {/* Main Image Container - Full Width */}
      <div className="relative w-full bg-[#F5F5F7] rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
        <Image
          src={currentImage?.src || "/placeholder.svg"}
          alt={currentImage?.alt || `${title} - Imagen ${currentIndex + 1}`}
          fill
          className="object-contain transition-opacity duration-300"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  )
}
