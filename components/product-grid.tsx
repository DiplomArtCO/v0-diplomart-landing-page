'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ImageCarousel from './image-carousel'

/**
 * Product Carousel Component - Carousel 1x3 de productos
 * Cada tarjeta tiene:
 * - Imagen del producto
 * - Título y descripción
 * - Características (badges)
 * - Hover effect: zoom en imagen, título cambia a amarillo, botón circular aparece
 * - Click abre modal con carrusel de imágenes y detalles adicionales
 * - Carrusel horizontal con flechas y puntos de navegación
 */

interface Product {
  id: string
  title: string
  description: string
  image: string
  images: Array<{ src: string; alt: string }> // Imágenes con alt text para SEO
  characteristics: string[]
  details: string
}

const products: Product[] = [
  {
    id: 'diplomas',
    title: 'Diplomas',
    description: 'Paquete de Diploma y Acta para Instituciones Educativas.',
    image: '/kit-diploma-carpeta-acta.webp',
    images: [
      { src: '/kit-diploma-carpeta-acta.webp', alt: 'Kit completo diploma carpeta acta con presentación premium Cali' },
      { src: '/kit-diploma-carpeta-acta.webp', alt: 'Diploma personalizado con acta y carpeta portadiploma Cali' },
      { src: '/kit-diploma-carpeta-acta.webp', alt: 'Paquete de graduación con materiales de lujo Cali' },
    ],
    characteristics: ['Papel Importado', 'Tinta UV de Seguridad', 'Diseño Personalizado', 'Acabados Premium', 'Escudo Repujado'],
    details: 'Paquete de Diplomas, Actas y Carpetas portadiploma de graduación elaborados con altos estándares de calidad. Papel importado de alto gramaje, impresion litográfica de seguridad UV con filigrana de seguridad. Diseños modernos y personalizados que reflejan la identidad de tu institución.'
  },
  {
    id: 'agendas',
    title: 'Agendas',
    description: 'Agendas ejecutivas y corporativas con encuadernación premium. Ideales para Kits empresariales y Merch Empresarial.',
    image: '/agendas-argollada-personalizada.webp',
    images: [
      { src: '/agendas-argollada-personalizada.webp', alt: 'Agenda argollada personalizada con encuadernación en pasta dura Cali' },
      { src: '/cuaderno-argollado-personalizado.webp', alt: 'Cuaderno argollado con diseño personalizado Cali' },
      { src: '/agenda-corporativa-personalizada.webp', alt: 'Agenda corporativa cosida con diseño personalizado Cali' },
      { src: '/cuaderno-corporativo-personalizado.webp', alt: 'Cuaderno empresarial personalizado argollado Cali' },
      { src: '/agenda-cosida-personalizada.webp', alt: 'Agenda tapa blanda personalizada Cali' },
      { src: '/agenda-pasta-dura.webp', alt: 'Cuaderno personalizado pasta dura argollado Cali' },
    ],
    characteristics: ['Personalización completa', 'Empastado rigido y/o blando', 'Anillado, Cosido, Hotmail', 'Insertos Full Color'],
    details: 'Agendas ejecutivas y corporativas con acabados premium. Fabricadas con materiales de alta calidad, incluye personalización completa del diseño interior y exterior. Disponibles con múltiples opciones de encuadernación: argollada, cosida y empastada. Diseños personalizados para reflejar tu identidad corporativa.'
  },
  {
    id: 'totebags',
    title: 'Totebags',
    description: 'Bolsas ecológicas personalizadas con tu marca. Ideales para eventos, conferencias y promociones.',
    image: '/totebag-estampado.webp',
    images: [
      { src: '/totebag-estampado.webp', alt: 'Totebag blanco con diseño personzaliado estampado' },
      { src: '/totebag-personalizado.webp', alt: 'Bolsa ecológica de algodón con imagen estampada' },
      { src: '/bolsa-ecologica-personalizada.webp', alt: 'Tote bag ecológica resistente personalizada' },
    ],
    characteristics: ['100% Algodón', 'Serigrafía', 'Eco-Friendly', 'Resistente', 'Personalización Completa'],
    details: 'Totebags ecológicos 100% algodón, personalizados con serigrafía de alta calidad. Perfectos para eventos corporativos, conferencias y como merchandising institucional. Material resistente y amigable con el medio ambiente. Disponibles en múltiples diseños y con opciones de personalización total para tu marca.'
  },
  {
    id: 'merchandising',
    title: 'Merchandising',
    description: 'Artículos promocionales de alta calidad: tazas, bolígrafos, llaveros y más con tu identidad corporativa.',
    image: '/merchandising-empresarial-cali.webp',
    images: [
      { src: '/merchandising-empresarial-cali.webp', alt: 'Merchandising empresarial con taza, totebag, agendas y bolígrafos. Todo personalizado' },
      { src: '/merchandising-empresarial-cali.webp', alt: 'Kit corporativo personalizado con mugs y artículos promocionales' },
      { src: '/merchandising-empresarial-cali.webp', alt: 'Material POP personalizado' },
    ],
    characteristics: ['Catálogo Amplio', 'Calidad Premium', 'Branding Completo', 'Personalización'],
    details: 'Línea completa de merchandising corporativo: tazas de cerámica, bolígrafos premium, libretas, llaveros metálicos, totebags y mucho más. Todos con opciones de personalización y branding completo para tu empresa. Cada artículo está diseñado para reflejar la identidad y valores de tu marca en cada detalle.'
  }
]

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Show 3 items at a time
  const itemsVisible = 3
  // Total number of slides (groups of 3 items)
  const totalSlides = Math.max(1, products.length - itemsVisible + 1)
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }
  
  const goToSlide = (slideIdx: number) => {
    setCurrentIndex(slideIdx)
  }
  
  // Get visible products for current index - always show 3 consecutive items
  const visibleProducts = products.slice(currentIndex, currentIndex + itemsVisible)

  return (
    <section id="productos" className="bg-white py-4">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="text-[#D7B63A] font-semibold text-xs uppercase tracking-wider mb-1">
            NUESTROS PRODUCTOS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">
            Productos y <span className="text-[#D7B63A]">Servicios</span>
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto text-pretty mt-2 text-sm md:text-base">
            Cada pieza que creamos refleja la excelencia y el compromiso con la calidad que nos 
            caracteriza desde hace más de 25 años.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative">
            {/* Products Grid - Always 3 columns, fills with visible products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative border-2 border-[#D7B63A] rounded-lg overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:shadow-2xl"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Product Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-[#F5F5F7]">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={false}
                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-3">
                    {/* Title */}
                    <h3 
                      className={`font-serif text-lg md:text-xl font-bold mb-1 transition-colors duration-300 ${
                        hoveredId === product.id ? 'text-[#D7B63A]' : 'text-[#1A1A1A]'
                      }`}
                    >
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#1A1A1A]/70 mb-2 leading-tight text-sm">
                      {product.description}
                    </p>

                    {/* Characteristics Badges */}
                    <div className="flex flex-wrap gap-1">
                      {product.characteristics.slice(0, 3).map((char) => (
                        <Badge 
                          key={char} 
                          variant="secondary"
                          className="bg-[#D7B63A]/10 text-[#1A1A1A] border-[#D7B63A]/20 text-xs"
                        >
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow Button */}
                  <div 
                    className={`absolute bottom-3 right-3 transition-all duration-300 ${
                      hoveredId === product.id 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#D7B63A] flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-5 h-5 text-[#1A1A1A]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Left Arrow - Visible on desktop */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-14 z-20 bg-[#D7B63A] hover:bg-[#D7B63A]/90 text-[#1A1A1A] p-2 rounded-full transition-colors duration-300 hidden md:flex items-center justify-center w-10 h-10"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow - Visible on desktop */}
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-14 z-20 bg-[#D7B63A] hover:bg-[#D7B63A]/90 text-[#1A1A1A] p-2 rounded-full transition-colors duration-300 hidden md:flex items-center justify-center w-10 h-10"
              aria-label="Next products"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots - Improved visibility */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-[#D7B63A] w-4 h-4 shadow-md'
                      : 'bg-[#D7B63A]/40 w-3 h-3 hover:bg-[#D7B63A]/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de Detalles del Producto con Carrusel */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col p-0">
          {/* Header */}
          <div className="bg-[#F5F5F7] px-4 py-3 md:px-6 border-b">
            <DialogTitle className="font-serif text-lg md:text-xl text-[#D7B63A]">
              {selectedProduct?.title}
            </DialogTitle>
          </div>

          {/* Content - Horizontal Split */}
          <div className="flex-1 overflow-y-auto flex flex-col">
            {/* Upper Section - Carousel (40% height) */}
            <div className="flex-shrink-0 px-4 py-4 md:px-6 md:py-5 border-b">
              {selectedProduct && (
                <ImageCarousel 
                  images={selectedProduct.images} 
                  title={selectedProduct.title}
                />
              )}
            </div>

            {/* Lower Section - Description & Details (60% height, scrollable) */}
            <div className="flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-5 space-y-3 md:space-y-4">
              {/* CTA Button - First */}
              <div className="pb-1">
                <button className="bg-[#D7B63A] hover:bg-[#D7B63A]/90 text-[#1A1A1A] font-semibold py-2 px-5 rounded-lg transition-colors duration-300 inline-flex items-center gap-2 text-sm">
                  <span>Solicitar Cotización</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Characteristics - Second */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-2">
                  Características
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct?.characteristics.map((char) => (
                    <Badge 
                      key={char} 
                      className="bg-[#D7B63A] text-[#1A1A1A]"
                    >
                      {char}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Description - Third */}
              <p className="text-[#1A1A1A]/75 leading-relaxed text-pretty text-sm md:text-base">
                {selectedProduct?.details}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
