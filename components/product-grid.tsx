'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { products as productRecords } from '@/lib/products'

type CarouselProduct = {
  id: string
  title: string
  description: string
  image: string
  href: string
  characteristics: string[]
}

const routeByProduct: Record<string, string> = {
  diplomas: '/diplomas',
  agendas: '/agendas',
  totebags: '/totebags',
  merchandising: '/merchandising',
}

const products: CarouselProduct[] = Object.values(productRecords)
  .filter((product) => routeByProduct[product.id])
  .map((product) => ({
    id: product.id,
    title: product.title,
    description: product.shortDescription,
    image: product.image,
    href: routeByProduct[product.id],
    characteristics: product.features,
  }))

const trackEvent = (name: string, params: Record<string, string>) => {
  if (typeof window === 'undefined') return
  const gtag = (window as Window & { gtag?: (event: string, name: string, params: Record<string, string>) => void }).gtag
  if (typeof gtag === 'function') gtag('event', name, params)
}

const getQuoteUrl = (productTitle: string) =>
  `https://wa.me/573184836892?text=${encodeURIComponent(`Hola, me interesa recibir una cotización de ${productTitle}.`)}`

export default function ProductGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsVisible = 3
  const totalSlides = Math.max(1, products.length - itemsVisible + 1)
  const visibleProducts = products.slice(currentIndex, currentIndex + itemsVisible)

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  const goToNext = () => setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))

  const handleProductView = (product: CarouselProduct) => {
    trackEvent('view_product', { product: product.id, placement: 'product_carousel' })
  }

  const handleQuote = (product: CarouselProduct) => {
    trackEvent('generate_lead', { method: 'whatsapp_product', product: product.id })
  }

  return (
    <section id="productos" className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#D7B63A]">NUESTROS PRODUCTOS</p>
          <h2 className="text-balance font-serif text-3xl font-bold md:text-4xl">Productos y <span className="text-[#D7B63A]">Servicios</span></h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-sm text-[#1A1A1A]/70 md:text-base">Cada pieza que creamos refleja la excelencia y el compromiso con la calidad que nos caracteriza desde hace más de 25 años.</p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {visibleProducts.map((product) => (
                <article key={product.id} className="group relative overflow-hidden rounded-lg border-2 border-[#D7B63A] bg-white transition-all duration-300 hover:shadow-2xl" onMouseEnter={() => setHoveredId(product.id)} onMouseLeave={() => setHoveredId(null)}>
                  <Link href={product.href} onClick={() => handleProductView(product)} aria-label={`Ver detalles de ${product.title}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B63A] focus-visible:ring-inset">
                    <div className="aspect-[4/3] overflow-hidden bg-[#F5F5F7]">
                      <Image src={product.image} alt={product.title} width={400} height={300} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-3 pb-16">
                      <h3 className={`mb-1 font-serif text-lg font-bold transition-colors duration-300 md:text-xl ${hoveredId === product.id ? 'text-[#D7B63A]' : 'text-[#1A1A1A]'}`}>{product.title}</h3>
                      <p className="mb-2 text-sm leading-tight text-[#1A1A1A]/70">{product.description}</p>
                      <div className="flex flex-wrap gap-1">{product.characteristics.slice(0, 3).map((characteristic) => <Badge key={characteristic} variant="secondary" className="border-[#D7B63A]/20 bg-[#D7B63A]/10 text-xs text-[#1A1A1A]">{characteristic}</Badge>)}</div>
                    </div>
                  </Link>
                  <Link href={product.href} onClick={() => handleProductView(product)} aria-label={`Ver detalles de ${product.title}`} className={`absolute bottom-14 right-3 flex size-10 items-center justify-center rounded-full bg-[#D7B63A] text-[#1A1A1A] shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] ${hoveredId === product.id ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'} group-focus-within:translate-x-0 group-focus-within:opacity-100`}>
                    <ArrowRight aria-hidden="true" />
                  </Link>
                  <a href={getQuoteUrl(product.title)} target="_blank" rel="noopener noreferrer" onClick={() => handleQuote(product)} className="absolute bottom-3 left-3 text-sm font-semibold text-[#1A1A1A] underline decoration-[#D7B63A] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B63A]">Solicitar cotización</a>
                </article>
              ))}
            </div>

            <button type="button" onClick={goToPrevious} aria-label="Producto anterior" className="absolute left-0 top-1/2 hidden size-10 -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#D7B63A] text-[#1A1A1A] transition-colors hover:bg-[#D7B63A]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] md:flex"><ChevronLeft aria-hidden="true" /></button>
            <button type="button" onClick={goToNext} aria-label="Siguiente producto" className="absolute right-0 top-1/2 hidden size-10 translate-x-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#D7B63A] text-[#1A1A1A] transition-colors hover:bg-[#D7B63A]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] md:flex"><ChevronRight aria-hidden="true" /></button>
          </div>

          {totalSlides > 1 && <div className="mt-8 flex justify-center gap-3">{Array.from({ length: totalSlides }).map((_, index) => <button type="button" key={index} onClick={() => setCurrentIndex(index)} aria-label={`Ir al grupo de productos ${index + 1}`} aria-current={index === currentIndex ? 'true' : 'false'} className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] ${index === currentIndex ? 'h-4 w-4 bg-[#D7B63A] shadow-md' : 'h-3 w-3 bg-[#D7B63A]/40 hover:bg-[#D7B63A]/70'}`} />)}</div>}
        </div>
      </div>
    </section>
  )
}
