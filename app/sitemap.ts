import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.diplomart.com.co',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...['diplomas', 'agendas', 'totebags', 'merchandising', 'material-pop'].map((slug) => ({
      url: `https://www.diplomart.com.co/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
