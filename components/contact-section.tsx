'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

/**
 * Contact Section Component - Formulario de contacto y cotización
 * Layout: 2 columnas (Información de contacto | Formulario)
 * El formulario genera un mensaje directo a WhatsApp con los datos ingresados
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    product: ''
  })

  const WHATSAPP_LINK = 'https://wa.me/' // Same as WhatsApp button

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(WHATSAPP_LINK, '_blank')
  }

  return (
    <section id="contacto" className="bg-[#F5F5F7] py-10" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <p className="text-[#D7B63A] font-semibold text-sm uppercase tracking-wider mb-2">
            CONTÁCTANOS
          </p>
          <h2 id="contact-heading" className="font-serif text-4xl md:text-5xl font-bold text-balance">
            Solicita tu <span className="text-[#D7B63A]">Cotización</span>
          </h2>
          <p className="text-[#1A1A1A]/70 mt-4 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada en 
            menos de 24 horas.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <address className="lg:col-span-2 space-y-8 not-italic">
            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D7B63A] rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                  <p className="text-[#1A1A1A]/70">
                    Cali, Valle del Cauca<br />
                    Colombia
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D7B63A] rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Phone className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors">+57 315 7292101</a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D7B63A] rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Mail className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:info@diplomart.com.co" className="text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors">info@diplomart.com.co</a>
                </div>
              </div>
            </div>
          </address>

          {/* Right Column - Contact Form */}
          <aside className="lg:col-span-3" aria-label="Formulario de contacto">
            <form onSubmit={handleSubmit} className="bg-[#D7B63A] p-8 rounded-lg shadow-xl border-2 border-[#D7B63A]/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre completo */}
                <div className="md:col-span-2">
                  <label className="block text-[#1A1A1A] font-semibold mb-2">
                    Nombre completo <span className="text-red-600">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-[#D7B63A]/30"
                  />
                </div>

                {/* Producto de interés */}
                <div className="md:col-span-2">
                  <label className="block text-[#1A1A1A] font-semibold mb-2">
                    Producto de interés <span className="text-red-600">*</span>
                  </label>
                  <Select required onValueChange={(value) => setFormData({ ...formData, product: value })}>
                    <SelectTrigger className="bg-white border-[#D7B63A]/30">
                      <SelectValue placeholder="Selecciona un producto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diplomas">Diplomas</SelectItem>
                      <SelectItem value="agendas">Agendas</SelectItem>
                      <SelectItem value="totebags">Totebags</SelectItem>
                      <SelectItem value="merchandising">Merchandising</SelectItem>
                      <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full mt-6 bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90 font-semibold text-base"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  )
}
