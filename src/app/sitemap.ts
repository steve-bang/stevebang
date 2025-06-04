import { getBlogPosts } from '@/lib/mdx';
import { MetadataRoute } from 'next'

export interface RouteMap {
  path: string;
  date: Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


  const dobWebsite = new Date('2025-05-01');

  const staticRoutes: RouteMap[] = [
    {
      path: '',
      date: dobWebsite,
    },
    {
      path: 'blog',
      date: dobWebsite,
    },
    {
      path: 'about',
      date: dobWebsite,
    },
    {
      path: 'projects',
      date: dobWebsite,
    }
  ]

  const posts = await getBlogPosts();

  const postRoutes: RouteMap[] = posts.map((post) =>
    ({ path: `blog/${post.slug}`, date: new Date(post.date) })
  );

  const routes: RouteMap[] = [
    ...staticRoutes,
    ...postRoutes,
  ]

  // Add your static routes
  return routes.map((route) => ({
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/${route.path}`,
    lastModified: route.date,
    changeFrequency: 'daily' as const,
    priority: route.path === '' ? 1 : 0.8,
  }))

} 