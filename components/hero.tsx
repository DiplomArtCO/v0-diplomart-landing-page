'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

/**
 * Hero Section - Sección principal de la landing page
 * Incluye eslogan, descripción y CTAs principales
 * Fondo: #F5F5F7 con logo en marca de agua
 */
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="inicio" 
      className="relative min-h-[68vh] flex items-center justify-center bg-[#F5F5F7] overflow-hidden pt-0"
    >
      {/* Decorative background elements */}

      <div className="container relative z-10 px-0 mx-40">
        <div className="max-w-6xl mx-auto">
          {/* Image and Text Layout - Side by side */}
          <article className="flex flex-col lg:flex-row items-center lg:gap-8 ml-0 mr-0 mb-8 mt-4">
            {/* Hand Image - Left (50% smaller) */}
            <figure className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
              <Image 
                src="/mano-negra.webp" 
                alt="Mano Negra sosteniendo diploma - Simbolo de El Esfuerzo Hecho Arte" 
                width={150} 
                height={200}
                sizes="128px"
                className="object-contain leading-10 size-32"
              />
            </figure>

            {/* Description - Right, aligned to right */}
            <div className="flex-1 text-center lg:text-right">
              <h1 className="font-serif text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-3 text-balance">
                Diplomas, Agendas y Merchandising Personalizado en Cali
              </h1>
              <p className="text-base md:text-lg text-[#1A1A1A]/70 leading-relaxed text-pretty">
                Líderes en <span className="font-bold text-[#1A1A1A]">soluciones gráficas integrales</span> para instituciones y corporaciones. Nuestra oferta incluye paquetes completos de graduación: <span className="font-bold text-[#D7B63A]">Diplomas, Actas y Carpetas</span>; y productos de <span className="font-bold text-[#D7B63A]">branding/merchandising</span> para posicionar TU marca. Trayectoria de <span className="font-bold text-[#1A1A1A]">+25 años</span> garantizando distinción, calidad y cumplimiento.
              </p>
            </div>
          </article>

          {/* CTA Buttons - Centered below */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-9.6">
            <Button 
              onClick={() => {
                trackEvent('cta_click', { placement: 'hero', action: 'quote' })
                scrollToSection('contacto')
              }}
              size="lg"
              className="bg-[#D7B63A] text-[#1A1A1A] hover:bg-[#D7B63A]/90 font-semibold text-base group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Cotización
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => {
                trackEvent('cta_click', { placement: 'hero', action: 'products' })
                scrollToSection('productos')
              }}
              size="lg"
              variant="outline"
              className="border-2 border-[#D7B63A] text-[#1A1A1A] hover:bg-[#D7B63A]/10 font-semibold text-base bg-transparent"
            >
              Ver Productos
            </Button>
          </div>

          {/* Stats Row - 2 columns */}
          <div className="grid grid-cols-2 justify-center gap-2 md:gap-13 my-4">
            <div className="text-center px-1">
              <div className="font-serif text-2xl md:text-5xl font-bold text-[#D7B63A] leading-tight">25+</div>
              <div className="text-xs md:text-base text-[#1A1A1A]/60 font-medium mt-0.5 md:mt-1">AÑOS</div>
            </div>
            <div className="text-center px-1">
              <div className="font-serif font-bold text-[#D7B63A] text-base md:text-3xl leading-snug">{"Personalización"}</div>
              <div className="text-[#1A1A1A]/60 font-medium mt-0.5 md:mt-1 text-xs md:text-base">{"AL DETALLE"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
