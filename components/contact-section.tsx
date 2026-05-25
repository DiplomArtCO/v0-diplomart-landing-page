'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react'

/**
 * Contact Section Component - Formulario de contacto y cotización
 * Layout: 2 columnas (Información de contacto | Formulario)
 * El formulario genera un mensaje directo a WhatsApp con los datos ingresados
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    mensaje: ''
  })

  const WHATSAPP_NUMBER = '+573184836892'

  const getDefaultMessage = (name: string, product: string): string => {
    if (name && product) {
      return `Hola, mi nombre es ${name} y me interesa información sobre ${product}.`
    }
    return 'Hola, solicito información sobre sus servicios'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const messageText = formData.mensaje.trim() || getDefaultMessage(formData.name, formData.product)
    const encodedMessage = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contacto" className="bg-white py-16" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Business Information */}
          <address className="not-italic space-y-8">
            {/* Company Header */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-2">
                DiplomArt
              </h2>
              <p className="text-[#1A1A1A]/70 text-base">
                Más de 25 años creando diplomas, agendas y merchandising de alta calidad
              </p>
            </div>

            {/* Address Block */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#D7B63A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#D7B63A]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">Dirección</h3>
                <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
                  Calle 20 #3-22<br />
                  Cali, Valle del Cauca 760001<br />
                  Colombia
                </p>
              </div>
            </div>

            {/* Phone Block */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#D7B63A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#D7B63A]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">Teléfono</h3>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getDefaultMessage(formData.name, formData.product))}`} target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors text-sm">+57 318 483 6892</a>
              </div>
            </div>

            {/* Email Block */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#D7B63A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#D7B63A]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">Correo Electrónico</h3>
                <a href="mailto:info@diplomart.com.co" className="text-[#1A1A1A]/70 hover:text-[#D7B63A] transition-colors text-sm">info@diplomart.com.co</a>
              </div>
            </div>

            {/* Hours Block */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#D7B63A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#D7B63A]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">Horarios de Atención</h3>
                <div className="text-[#1A1A1A]/70 text-sm space-y-1">
                  <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábado: 9:00 AM - 2:00 PM</p>
                  <p>7:00 am a 6 pm de lunes a sabado</p>
                </div>
              </div>
            </div>
          </address>

          {/* Middle Column - Contact Form */}
          <aside aria-label="Formulario de contacto">
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

                {/* Mensaje */}
                <div className="md:col-span-2">
                  <label htmlFor="mensaje" className="block text-[#1A1A1A] font-semibold mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto, cantidad aproximada, fechas... (opcional)"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="bg-white border-[#D7B63A]/30 min-h-[120px]"
                  />
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

          {/* Right Column - Google Maps */}
          <aside aria-label="Mapa de ubicación">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8235123456789!2d-76.5225!3d3.4372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a0a0a0a0a0a1%3A0x1234567890abcdef!2sCalle%2020%20%233-22%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </aside>
        </div>
      </div>
    </section>
  )
}
