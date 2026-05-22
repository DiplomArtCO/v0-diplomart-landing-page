'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/" // Replace with your WhatsApp link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </Link>
  )
}
