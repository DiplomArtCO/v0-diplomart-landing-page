import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, MapPin, MessageCircle } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ClientsCarousel from '@/components/clients-carousel'
import { getProduct, products, type ProductRecord } from '@/lib/products'

const siteUrl = 'https://www.diplomart.com.co'
const whatsappUrl = 'https://wa.me/573184836892?text=Hola%2C%20solicito%20una%20cotizaci%C3%B3n%20para%20un%20proyecto%20personalizado'

function JsonLd({ product }: { product: ProductRecord }) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: product.title, item: `${siteUrl}/${product.slug}` },
    ],
  }
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: product.title,
    description: product.longDescription,
    areaServed: product.serviceArea,
    provider: { '@type': 'LocalBusiness', name: 'DiplomArt', url: siteUrl, telephone: '+57 318 483 6892' },
    image: `${siteUrl}${product.heroImage}`,
    url: `${siteUrl}/${product.slug}`,
  }
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  }
  return <>{[breadcrumb, service, faq].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}</>
}

export default function ProductDetailPage({ product }: { product: ProductRecord }) {
  const related = product.relatedSlugs.map((slug) => products[slug]).filter(Boolean)
  return (
    <>
      <JsonLd product={product} />
      <Header />
      <main>
        <section className="bg-[#F5F5F7] py-8 md:py-14">
          <div className="container mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center">
            <div>
              <nav aria-label="Migas de pan" className="mb-6 flex items-center gap-2 text-sm text-[#1A1A1A]/60">
                <Link href="/" className="hover:text-[#D7B63A]">Inicio</Link><ChevronRight className="h-4 w-4" aria-hidden="true" /><span>{product.title}</span>
              </nav>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D7B63A]">DiplomArt en Cali</p>
              <h1 className="text-balance font-serif text-4xl font-bold leading-tight md:text-6xl">{product.title}</h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-[#1A1A1A]/70">{product.longDescription}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contacto" className="inline-flex items-center gap-2 rounded-lg bg-[#D7B63A] px-5 py-3 font-semibold text-[#1A1A1A] transition-opacity hover:opacity-85">Solicitar cotización <ArrowRight className="h-4 w-4" /></a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border-2 border-[#1A1A1A] px-5 py-3 font-semibold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"><MessageCircle className="h-4 w-4" /> Hablar por WhatsApp</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border-2 border-[#D7B63A] bg-white shadow-xl">
              <Image src={product.heroImage} alt={product.gallery[0].alt} width={900} height={700} className="aspect-[4/3] w-full object-cover" priority />
            </div>
          </div>
        </section>

        <section className="container mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D7B63A]">Soluciones a tu medida</p>
            <h2 className="font-serif text-3xl font-bold">Calidad que representa tu marca</h2>
            <p className="mt-4 text-pretty leading-relaxed text-[#1A1A1A]/70">Trabajamos cada proyecto con atención al detalle, desde la selección de materiales hasta la entrega final. Nuestro equipo acompaña el proceso para que el resultado responda a tus objetivos y a la identidad de tu institución o empresa.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">{product.features.map((item) => <div key={item} className="flex items-start gap-3 rounded-lg bg-[#F5F5F7] p-4"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D7B63A]" /><span className="font-medium">{item}</span></div>)}</div>
          </div>
          <aside className="rounded-xl bg-[#1A1A1A] p-6 text-white"><MapPin className="mb-5 h-7 w-7 text-[#D7B63A]" /><h2 className="font-serif text-2xl font-bold">Servicio local y nacional</h2><p className="mt-3 leading-relaxed text-white/70">Atendemos proyectos en Cali, el Valle del Cauca y enviamos a toda Colombia.</p><a href="#contacto" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#D7B63A]">Cuéntanos tu proyecto <ArrowRight className="h-4 w-4" /></a></aside>
        </section>

        <section className="bg-[#F5F5F7] py-14"><div className="container mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2"><div><h2 className="font-serif text-3xl font-bold">Materiales y personalización</h2><h3 className="mt-6 font-semibold text-[#D7B63A]">Materiales</h3><ul className="mt-3 flex flex-col gap-2 text-[#1A1A1A]/70">{product.materials.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true">•</span>{item}</li>)}</ul></div><div><h3 className="font-semibold text-[#D7B63A]">Opciones de personalización</h3><ul className="mt-3 flex flex-col gap-2 text-[#1A1A1A]/70">{product.customizationOptions.map((item) => <li key={item} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-[#D7B63A]" />{item}</li>)}</ul></div></div></section>

        <section className="container mx-auto max-w-6xl px-4 py-14"><h2 className="font-serif text-3xl font-bold">Ideas para tu proyecto</h2><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{product.useCases.map((item) => <div key={item} className="border-l-4 border-[#D7B63A] bg-[#F5F5F7] p-4 font-medium">{item}</div>)}</div><div className="mt-12 grid gap-4 sm:grid-cols-3">{product.gallery.map((item) => <Image key={item.src + item.alt} src={item.src} alt={item.alt} width={600} height={450} className="aspect-[4/3] w-full rounded-lg object-cover" />)}</div></section>

        <ClientsCarousel />
        <section className="bg-[#F5F5F7] py-14"><div className="container mx-auto max-w-4xl px-4"><h2 className="font-serif text-3xl font-bold">Preguntas frecuentes</h2><div className="mt-6 flex flex-col gap-3">{product.faqs.map((item) => <details key={item.question} className="rounded-lg bg-white p-5"><summary className="cursor-pointer font-semibold">{item.question}</summary><p className="mt-3 leading-relaxed text-[#1A1A1A]/70">{item.answer}</p></details>)}</div></div></section>

        <section className="container mx-auto max-w-6xl px-4 py-14"><h2 className="font-serif text-3xl font-bold">También puede interesarte</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/${item.slug}`} className="group rounded-lg border-2 border-[#D7B63A] p-5 hover:bg-[#F5F5F7]"><h3 className="font-serif text-xl font-bold group-hover:text-[#D7B63A]">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/70">{item.shortDescription}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Ver servicio <ArrowRight className="h-4 w-4" /></span></Link>)}</div></section>
        <section id="contacto" className="bg-[#D7B63A] py-12"><div className="container mx-auto flex max-w-5xl flex-col items-start justify-between gap-5 px-4 md:flex-row md:items-center"><div><h2 className="font-serif text-3xl font-bold">Hablemos de tu próximo proyecto</h2><p className="mt-2 text-[#1A1A1A]/75">Solicita una cotización personalizada para {product.title.toLowerCase()}.</p></div><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-5 py-3 font-semibold text-white hover:opacity-90">Solicitar cotización <ArrowRight className="h-4 w-4" /></a></div></section>
      </main>
      <Footer />
    </>
  )
}

export function getProductOrThrow(slug: string) {
  const product = getProduct(slug)
  if (!product) throw new Error(`Product not found: ${slug}`)
  return product
}
