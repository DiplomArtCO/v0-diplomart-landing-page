'use client'

import Image from 'next/image'

/**
 * Clients Carousel Component - Carrusel infinito de logos
 * Muestra logos de instituciones que confían en Diplomart
 * Background: #D7B63A con 15% de opacidad
 * Animación: Marquee infinito horizontal con logos
 */

const clientLogos = [
  { src: '/logo-sidoc.webp', alt: 'Fundación SIDOC', url: 'https://fundacionsidoc.org' },
  { src: '/logo-sc.webp', alt: 'Institucion Educativa Santa Cecilia Cali', url: '#' },
  { src: '/logo-clan.webp', alt: 'Colegio Los Ángeles del Norte Cali', url: '#' },
  { src: '/logo-anglo-americano.webp', alt: 'Colegio Anglo Americano Cali', url: 'https://www.colegioangloamericano.edu.co' },
  { src: '/logo-consac.webp', alt: 'Colegio Nuestra Señora de la Anunciacion Cali', url: '#' },
]

// Duplicate logos multiple times for seamless infinite carousel
// Using 3x duplication to ensure smooth loop across all breakpoints
const extendedLogos = [...clientLogos, ...clientLogos, ...clientLogos]

export default function ClientsCarousel() {
  return (
    <section className="bg-[#D7B63A]/15 overflow-hidden py-4.5">
      <div className="mb-8 text-center">
        <p className="text-[#1A1A1A]/60 font-medium text-sm uppercase tracking-wider">
          INSTITUCIONES QUE CONFÍAN EN NOSOTROS
        </p>
      </div>
      
      {/* Infinite Logo Carousel Container */}
      <div className="relative w-full overflow-hidden">
        {/* Scrolling Logos Wrapper */}
        <div className="flex animate-scroll gap-8 items-center pt-0 pb-2.25">
          {extendedLogos.map((logo, index) => (
            <a
              key={`${logo.alt}-${index}`}
              href={logo.url}
              onClick={(e) => logo.url === '#' && e.preventDefault()}
              target={logo.url !== '#' ? '_blank' : undefined}
              rel={logo.url !== '#' ? 'noopener noreferrer' : undefined}
              className="flex-shrink-0 h-28 w-28 flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
              style={{ pointerEvents: logo.url === '#' ? 'none' : 'auto' }}
              aria-label={logo.url !== '#' ? `Visitar ${logo.alt}` : logo.alt}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={112}
                height={112}
                className="h-full w-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* CSS Animation for Infinite Scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * ${clientLogos.length} * (112px + 32px)));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
