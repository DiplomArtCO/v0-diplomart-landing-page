'use client'

import Image from 'next/image'
import { Instagram, Facebook, Linkedin, Heart } from 'lucide-react'

/**
 * Footer Component - Pie de página
 * Background: #D7B63A con 15% de opacidad
 * Layout: 3 columnas (Bio | Navegación | Contacto y Redes Sociales)
 * Bottom Bar: Copyright y "Diseñado con ❤️ en Cali, Colombia"
 */

export default function Footer() {
  const WHATSAPP_NUMBER = '+573184836892'
  const DEFAULT_MESSAGE = 'Hola, solicito información sobre sus servicios'
  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#D7B63A]/15 border-t border-[#D7B63A]/20">
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Column 1 - Company Bio */}
          <article>
            <Image 
              src="/images/design-mode/Logo%20Texto%20Negro.png" 
              alt="DiplomArt Diplomas para Graduacion Cali" 
              width={150} 
              height={50}
              className="mb-4 object-contain"
            />
            <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
              Transformamos el esfuerzo en arte. Más de 25 años creando 
              diplomas, agendas y merchandising de alta calidad en Cali, 
              Colombia.
            </p>
          </article>

          {/* Column 2 - Navigation Links */}
          <nav aria-label="Enlaces de navegación del sitio">
            <h3 className="font-bold text-[#1A1A1A] mb-4">Navegación</h3>
            <ul className="space-y-2 list-none">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="block text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('productos')}
                  className="block text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors text-sm"
                >
                  Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="block text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors text-sm"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="block text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>

          {/* Column 3 - Contact Info and Social Media */}
          <aside>
            <h3 className="font-bold text-[#1A1A1A] mb-4">Contacto</h3>
            <address className="space-y-2 text-sm text-[#1A1A1A]/70 mb-6 not-italic">
              <p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#D7B63A] transition-colors">+57 318 483 6892</a></p>
              <p><a href="mailto:info@diplomart.com.co" className="hover:text-[#D7B63A] transition-colors">info@diplomart.com.co</a></p>
              <p>Calle 20 #3-22 Cali, Valle del Cauca, Colombia </p>
            </address>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D7B63A] rounded-lg flex items-center justify-center hover:bg-[#D7B63A]/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#1A1A1A]" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D7B63A] rounded-lg flex items-center justify-center hover:bg-[#D7B63A]/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#1A1A1A]" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D7B63A] rounded-lg flex items-center justify-center hover:bg-[#D7B63A]/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#1A1A1A]" />
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-[#D7B63A]/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#1A1A1A]/60">
            <p>© 2026 Diplomart. Todos los derechos reservados.</p>
            <p className="flex items-center gap-2">
              Diseñado con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Cali, Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
