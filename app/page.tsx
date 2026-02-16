import Header from '@/components/header'
import Hero from '@/components/hero'
import ProductGrid from '@/components/product-grid'
import ClientsCarousel from '@/components/clients-carousel'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      {/* Header - Navegación superior pegajosa */}
      <Header />
      
      <main className="min-h-screen">
        {/* Hero - Sección principal con eslogan y CTAs */}
        <Hero />
        
        {/* Product Grid - Grid 2x2 de productos */}
        <ProductGrid />
        
        {/* Clients Carousel - Carrusel infinito de logos de clientes */}
        <ClientsCarousel />
        
        {/* About Section - Sobre nosotros con stats y feature cards */}
        <AboutSection />
        
        {/* Contact Section - Formulario de contacto y WhatsApp */}
        <ContactSection />
      </main>
      
      {/* Footer - Información de la empresa y enlaces */}
      <Footer />
    </>
  )
}
