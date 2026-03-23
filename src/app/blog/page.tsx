import { getAllBlogPostsPublished } from '@/lib/mdx';
import Pagination from '@/components/Pagination';
import BlogCard from '@/components/BlogCard';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Blog - Steve Bang',
  description: 'Explore our latest articles about software development, .NET, and technology. Find in-depth tutorials, best practices, and insights from experienced developers.',
  keywords: 'software development, .NET, programming, technology blog, coding tutorials, software engineering',
  openGraph: {
    title: 'Blog - Steve Bang',
    description: 'Explore our latest articles about software development, .NET, and technology.',
    type: 'website',
    url: 'https://www.steve-bang.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Steve Bang',
    description: 'Explore our latest articles about software development, .NET, and technology.',
  },
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;

  const posts = await getAllBlogPostsPublished();
  const pageNumber = page ? Number(page) : 1;
  const maxItemsPerPage = 6;
  const totalPages = Math.ceil(posts.length / maxItemsPerPage);
  const startIndex = (pageNumber - 1) * maxItemsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + maxItemsPerPage);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Steve Bang',
    name: 'Steve Bang Blog',
    description: 'Explore our latest articles about software development, .NET, and technology.',
    url: 'https://steve-bang.com/blog',
    blogPost: paginatedPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: { '@type': 'Person', name: post.author },
      image: post.image,
      keywords: post.keywords.join(', '),
    })),
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore insights, tutorials, and best practices in .NET development, software architecture, and more.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts
            .filter(post => post.slug !== '.DS_Store')
            .map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <Pagination currentPage={pageNumber} totalPages={totalPages} baseUrl="/blog" />
        </div>
      </div>
    </>
  );
}