import React from "react"
import Script from 'next/script'
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Diplomas y Soluciones Grafica en Cali',
  description: 'Transformamos tus logros en piezas únicas. Diplomas, agendas y merchandising de calidad para instituciones educativas y empresas en Cali, Colombia.',
  generator: 'v0.app',
  keywords: ['diplomas', 'certificados', 'agendas corporativas', 'merchandising', 'Cali', 'Colombia'],

  // --- PROPIEDAD OPEN GRAPH AÑADIDA ---
  openGraph: {
    title: 'Diplomart | Diplomas y Agendas Personalizadas',
    description: 'Líderes en Merchandising Empresarial y Diplomas en Cali. ¡Haz que tus logros sean Arte!',
    url: 'https://diplomart.com.co', // Cambia esto por tu URL real
    siteName: 'DiplomArt',
    images: [
      {
        url: '/og-image.png', // Debes crear esta imagen y guardarla en la carpeta /public
        width: 1200,
        height: 630,
        alt: 'Muestra de Agendas y Diplomas Diplomart',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  
  icons: {
    icon: [
      {
        url: '/icon-light.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon_dark.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8DFQPGVDZD"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8DFQPGVDZD');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
