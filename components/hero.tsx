'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

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
      className="relative min-h-[85vh] flex items-center justify-center bg-[#F5F5F7] overflow-hidden pt-0"
    >
      {/* Decorative background elements */}

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Image and Text Layout - Side by side */}
          <article className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 lg:gap-0 mb-8 md:mb-10 mt-5">
            {/* Hand Image - Left */}
            <figure className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
              <Image 
                src="/mano-negra.png" 
                alt="Mano Negra sosteniendo diploma - Simbolo de El Esfuerzo Hecho Arte" 
                width={300} 
                height={400}
                className="object-contain w-48 md:w-64 h-auto"
              />
            </figure>

            {/* Description - Right, aligned to right */}
            <div className="flex-1 text-center lg:text-right px-2 md:px-0">
              <p className="text-sm md:text-base lg:text-lg text-[#1A1A1A]/70 leading-relaxed">
                Líderes en soluciones gráficas integrales para instituciones y corporaciones. Nuestra oferta incluye paquetes completos de graduación: <strong>Diplomas, Actas y Carpetas</strong>; y productos de <strong>branding/merchandising</strong> para posicionar TU marca. Trayectoria de +25 años garantizando distinción, calidad y cumplimiento.
              </p>
            </div>
          </article>

          {/* CTA Buttons - Centered below */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-2 md:px-0">
            <Button 
              onClick={() => scrollToSection('contacto')}
              size="lg"
              className="bg-[#D7B63A] text-[#1A1A1A] hover:bg-[#D7B63A]/90 font-semibold text-base group w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Cotización
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('productos')}
              size="lg"
              variant="outline"
              className="border-2 border-[#D7B63A] text-[#1A1A1A] hover:bg-[#D7B63A]/10 font-semibold text-base bg-transparent w-full sm:w-auto"
            >
              Ver Productos
            </Button>
          </div>

          {/* Stats Row - Versión simplificada */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16 my-4 md:my-5 px-2">
            <div className="text-center flex-1 min-w-20">
              <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#D7B63A]">25+</div>
              <div className="text-xs md:text-sm lg:text-base text-[#1A1A1A]/60 font-medium mt-1">AÑOS</div>
            </div>
            <div className="text-center flex-1 min-w-20 py-1.5">
              <div className="font-serif font-bold text-[#D7B63A] text-xl md:text-2xl lg:text-3xl leading-tight">Personalización</div>
              <div className="text-[#1A1A1A]/60 font-medium mt-1 text-xs md:text-sm lg:text-base">AL DETALLE</div>
            </div>
            <div className="text-center flex-1 min-w-20">
              <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#D7B63A]">100%</div>
              <div className="text-xs md:text-sm lg:text-base text-[#1A1A1A]/60 font-medium mt-1">CALIDAD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
