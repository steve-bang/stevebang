// This route generates the sitemap index XML, which references other sitemap files (e.g., static pages, blog posts).

import { toAbsoluteUrl, xmlEscape } from "@/lib/sitemap";


export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function buildSitemapIndexXml(urls: string[]): string {
  // This is a fixed date for all sitemaps. In a real application, you might want to use the actual last modified date of each sitemap.
  const date = '2025-12-01T06:45:12.110Z';

  const body = urls
    .map(
      (loc) =>
        `\n  <sitemap>\n    <loc>${xmlEscape(loc)}</loc>\n    <lastmod>${date}</lastmod>\n  </sitemap>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}\n</sitemapindex>`;
}

export async function GET(): Promise<Response> {
  const xml = buildSitemapIndexXml([
    toAbsoluteUrl('/sitemap-static.xml'),
    toAbsoluteUrl('/sitemap-blog.xml')
  ]);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=86400'
    }
  });
}
