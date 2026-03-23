import { getAllBlogPostsPublished, getBlogPosts } from "@/lib/mdx";
import { toAbsoluteUrl, toSitemapIsoDate, xmlEscape } from "@/lib/sitemap";

function buildBlogSitemapXml(
  entries: Array<{ slug: string; lastModified: string }>
): string {
  const body = entries
    .map(
      (entry) =>
        `\n  <url>\n    <loc>${xmlEscape(toAbsoluteUrl(`/blog/${entry.slug}`))}</loc>\n    <lastmod>${toSitemapIsoDate(entry.lastModified)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}\n</urlset>`;
}

export async function GET(): Promise<Response> {
  try {
    const entries = await getAllBlogPostsPublished();

    const xml = buildBlogSitemapXml(
        entries.map((post) => ({
            slug: post.slug,
            lastModified: post.updatedAt || post.publishedAt,
         }))
    );

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[sitemap-blog.xml] failed to build sitemap', error);
      return new Response('Sitemap generation failed. Check server logs.', {
        status: 500,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-store'
        }
      });
    }

    const fallback = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>`;

    return new Response(fallback, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600'
      }
    });
  }
}
