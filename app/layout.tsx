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
  metadataBase: new URL('https://www.diplomart.com.co'),
  title: 'Diplomas Personalizados, Agendas y Merchandising en Cali | DiplomArt',
  description: 'Diplomas personalizados, actas de grado, carpetas porta diplomas, agendas corporativas y merchandising empresarial para instituciones y empresas en Cali y Colombia. +25 años de trayectoria.',
  keywords: ['diplomas personalizados', 'diplomas Cali', 'actas de grado', 'carpetas porta diplomas', 'paquetes de graduación', 'agendas corporativas', 'merchandising empresarial', 'certificados', 'Cali', 'Colombia'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'DiplomArt | Diplomas y Agendas Personalizadas en Cali',
    description: 'Líderes en diplomas, paquetes de graduación y merchandising empresarial en Cali. ¡Haz que tus logros sean Arte!',
    url: 'https://www.diplomart.com.co',
    siteName: 'DiplomArt',
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
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'DiplomArt',
              description: 'Diplomas personalizados, actas de grado, carpetas porta diplomas, agendas corporativas y merchandising empresarial en Cali, Colombia.',
              url: 'https://www.diplomart.com.co',
              telephone: '+57 318 483 6892',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle 20 #3-22',
                addressLocality: 'Cali',
                addressRegion: 'Valle del Cauca',
                addressCountry: 'CO',
              },
              openingHours: 'Mo-Sa 07:00-18:00',
              foundingDate: '2000',
              areaServed: ['Cali', 'Valle del Cauca', 'Colombia'],
              knowsAbout: ['diplomas personalizados', 'paquetes de graduación', 'agendas corporativas', 'merchandising empresarial'],
            }),
          }}
        />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
