'use client'

import { MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export function WhatsAppButton() {
  const WHATSAPP_NUMBER = '+573184836892'
  const DEFAULT_MESSAGE = 'Hola, solicito información sobre sus servicios'
  
  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('contact_click', { method: 'whatsapp_floating' })}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
