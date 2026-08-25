import type { Metadata } from 'next'
import ProductDetailPage, { getProductOrThrow } from '@/components/product-detail-page'

const product = getProductOrThrow('agendas')
export const metadata: Metadata = { title: product.seoTitle, description: product.seoDescription, keywords: product.keywords, alternates: { canonical: '/agendas' }, openGraph: { title: product.seoTitle, description: product.seoDescription, url: '/agendas', type: 'website', locale: 'es_CO', images: [product.heroImage] }, twitter: { card: 'summary_large_image', title: product.seoTitle, description: product.seoDescription } }
export default function Page() { return <ProductDetailPage product={product} /> }
