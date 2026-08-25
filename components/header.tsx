'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const homeSectionHref = (id: string) => `/#${id}`

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
          <Link
            href="/#inicio"
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Volver al inicio"
          >
            <Image 
              src="/logo_texto.webp" 
              alt="DiplomArt Diplomas para Graduacion Cali" 
              width={50} 
              height={50}
              className="w-12 h-12 md:h-14 md:w-[168px]"
            />
          </Link>

          {/* Navigation Menu - Oculto en móvil */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href={homeSectionHref('inicio')} className="text-[#1A1A1A] font-medium hover:text-[#1A1A1A]/70 transition-colors font-serif">
              INICIO
            </Link>
            <Link href={homeSectionHref('productos')} className="text-[#1A1A1A] font-medium hover:text-[#1A1A1A]/70 transition-colors font-serif">
              PRODUCTOS
            </Link>
            <Link href={homeSectionHref('nosotros')} className="text-[#1A1A1A] font-medium hover:text-[#1A1A1A]/70 transition-colors font-serif">
              NOSOTROS
            </Link>
            <Link href={homeSectionHref('contacto')} className="text-[#1A1A1A] font-medium hover:text-[#1A1A1A]/70 transition-colors font-serif">
              CONTACTO
            </Link>
          </nav>

          {/* CTA Button - Cotizar Ahora */}
          <Link
            href={homeSectionHref('contacto')}
            className="inline-flex items-center rounded-md bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-white hover:bg-[#1A1A1A]/90"
          >
            <Phone className="mr-2 h-4 w-4" />
            Cotizar Ahora
          </Link>
        </div>
      </div>
    </header>
  )
}
