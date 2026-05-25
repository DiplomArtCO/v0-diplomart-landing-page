'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function BusinessLocation() {
  // Business data
  const businessData = {
    name: 'DiplomArt',
    streetAddress: 'Calle 20 #3-22',
    addressLocality: 'Cali',
    addressRegion: 'Valle del Cauca',
    postalCode: '760001',
    addressCountry: 'Colombia',
    telephone: '+573184836892',
    email: 'info@diplomart.com.co',
    url: 'https://diplomart.com.co',
    latitude: 3.4372,
    longitude: -76.5225,
    openingHours: [
      'Mo-Fr 08:00-18:00',
      'Sa 09:00-14:00'
    ]
  }

  // JSON-LD Schema for LocalBusiness
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessData.name,
    image: 'https://diplomart.com.co/images/design-mode/Logo%20Texto%20Negro.png',
    description: 'Más de 25 años creando diplomas, agendas y merchandising de alta calidad en Cali, Colombia.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.streetAddress,
      addressLocality: businessData.addressLocality,
      addressRegion: businessData.addressRegion,
      postalCode: businessData.postalCode,
      addressCountry: businessData.addressCountry
    },
    telephone: businessData.telephone,
    email: businessData.email,
    url: businessData.url,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessData.latitude,
      longitude: businessData.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00'
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Business Location Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Column - Business Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                  {businessData.name}
                </h2>
                <p className="text-[#1A1A1A]/70">
                  Más de 25 años creando diplomas, agendas y merchandising de alta calidad
                </p>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#D7B63A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#D7B63A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Dirección</h3>
                  <address className="text-[#1A1A1A]/70 text-sm not-italic leading-relaxed">
                    {businessData.streetAddress}<br />
                    {businessData.addressLocality}, {businessData.addressRegion} {businessData.postalCode}<br />
                    {businessData.addressCountry}
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#D7B63A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#D7B63A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Teléfono</h3>
                  <a 
                    href={`tel:${businessData.telephone}`}
                    className="text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors text-sm"
                  >
                    {businessData.telephone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#D7B63A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#D7B63A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Correo Electrónico</h3>
                  <a 
                    href={`mailto:${businessData.email}`}
                    className="text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors text-sm"
                  >
                    {businessData.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#D7B63A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#D7B63A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Horarios de Atención</h3>
                  <div className="text-[#1A1A1A]/70 text-sm space-y-1">
                    <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p>Sábado: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Google Map */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.3199384729766!2d${businessData.longitude}!3d${businessData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f74a6b8b8b8b7%3A0x8b8b8b8b8b8b8b8b!2s${encodeURIComponent(businessData.streetAddress + ', ' + businessData.addressLocality)}!5e0!3m2!1ses!2sco!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de DiplomArt - Cali, Colombia"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
