'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

/**
 * Header Component - Navegación superior pegajosa
 * Incluye logo, menú de navegación y botón de cotización rápida
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#D7B63A] shadow-lg' 
          : 'bg-[#D7B63A]'
      }`}
    >
      <div className="container mx-auto px-4 py-1.5">
        <div className="flex items-center justify-between">
          {/* Logo - Clicable para ir al inicio */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Volver al inicio"
          >
            <Image 
              src="/images/design-mode/Logo%20Texto%20Negro.png" 
              alt="DiplomArt Diplomas para Graduacion Cali" 
              width={50} 
              height={50}
              className="w-12 h-12 md:h-14 md:w-[168px]"
              style={{ width: 'auto', height: 'auto' }}
            />
          </button>

          {/* Navigation Menu - Oculto en móvil */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-[#1A1A1A] font-medium hover:text-[#1A1A1A]/70 transition-colors font-serif"
            >
              INICIO
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="text-[#1A1A1A] font-medium hover:text-[#1A1A1A]/70 transition-colors font-serif"
            >
              PRODUCTOS
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-[#1A1A1A] font-medium hover:text-[#1A1A1A]/70 transition-colors font-serif"
            >
              NOSOTROS
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-[#1A1A1A] font-medium hover:text-[#1A1A1A]/70 transition-colors font-serif"
            >
              CONTACTO
            </button>
          </nav>

          {/* CTA Button - Cotizar Ahora */}
          <Button 
            onClick={() => scrollToSection('contacto')}
            className="bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90 font-medium"
          >
            <Phone className="w-4 h-4 mr-2" />
            Cotizar Ahora
          </Button>
        </div>
      </div>
    </header>
  )
}
