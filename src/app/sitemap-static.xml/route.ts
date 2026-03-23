// This route generates the sitemap XML for static pages and case studies. It defines a list of static paths with their last modified dates, change frequencies, and priorities, and also includes URLs for case studies. The generated XML is returned as a response with appropriate headers for caching and content type.

import { toAbsoluteUrl, toSitemapIsoDate, xmlEscape } from "@/lib/sitemap";


export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function buildXmlUrlset(
  urls: Array<{
    loc: string;
    lastmod?: string;
    changefreq?: string;
    priority?: string;
  }>
): string {
  const body = urls
    .map(
      (item) =>
        `\n  <url>\n    <loc>${xmlEscape(item.loc)}</loc>\n    <lastmod>${toSitemapIsoDate(item.lastmod)}</lastmod>${
          item.changefreq
            ? `\n    <changefreq>${item.changefreq}</changefreq>`
            : ''
        }${item.priority ? `\n    <priority>${item.priority}</priority>` : ''}\n  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}\n</urlset>`;
}

export async function GET(): Promise<Response> {
  const staticPath = [
    {
      path: '/',
      lastmod: '2025-05-01T00:00:00.000Z',
      changefreq: 'monthly',
      priority: '1.0'
    },
    {
      path: '/blog',
      lastmod: '2025-05-01T00:00:00.000Z',
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      path: '/about',
      lastmod: '2025-05-01T00:00:00.000Z',
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      path: '/projects',
      lastmod: '2025-05-01T00:00:00.000Z',
      changefreq: 'monthly',
      priority: '0.9'
    },
  ];

  const staticUrls = staticPath.map((path) => ({
    loc: toAbsoluteUrl(path.path),
    lastmod: path.lastmod,
    changefreq: path.changefreq,
    priority: path.priority
  }));

  const xml = buildXmlUrlset([...staticUrls]);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
}
