import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //disallow: ['/private/', '/admin/'],
    },
    host: 'https://www.steve-bang.com/',
    sitemap: 'https://www.steve-bang.com/sitemap.xml',
  }
} 