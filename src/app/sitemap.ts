import { getBlogPosts } from '@/lib/mdx';
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = 'https://www.steve-bang.com'

  const staticRoutes = [
    '',
    '/blog',
    '/about',
    '/projects',
  ]

  const posts = await getBlogPosts();
  
  const postRoutes = posts.map((post) => {`/blog/${post.slug}`});

  const routes = [
    ...staticRoutes,
    ...postRoutes,
  ]

  // Add your static routes
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

} 