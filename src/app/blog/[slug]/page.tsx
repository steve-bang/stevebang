import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  content: string;
  tags: string[];
  readingTime: string;
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {

  const { slug } = await params

  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Steve Bang',
      description: 'The requested blog post could not be found.',
      robots: 'noindex, nofollow'
    };
  }

  const metadata = {
    title: `${post.title} - Steve Bang`,
    description: post.description,
    alternates: {
      canonical: `https://www.steve-bang.com/blog/${slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image || '/default-og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@steve-bang',
      images: [post.image || '/default-twitter-image.jpg'],
    },
    robots: 'index, follow',
  };

  return metadata;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function addJsonLd(post: BlogPost) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Person",
        "name": post.author,
        "url": "https://www.steve-bang.com/about" // Add author URL if available
      },
      "publisher": {
        "@type": "Organization",
        "name": "Steve Bang",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.steve-bang.com/logo.png" // Add your logo URL
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": post.image || '/default-og-image.jpg',
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.steve-bang.com/blog/${post.slug}`
      }
    })
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-20">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd(post)}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Trở về
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <span itemProp="author">{post.author}</span>
            <span>•</span>
            <time dateTime={post.date} itemProp="datePublished">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            {/* <span>•</span>
            <span itemProp="timeRequired">{post.readingTime}</span> */}
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-[400px] object-cover rounded-lg"
              priority
              itemProp="url"
            />
            <meta itemProp="width" content="1200" />
            <meta itemProp="height" content="630" />
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-none markdown-content" itemProp="articleBody">
          <MDXRemote source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors"
                rel="tag"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </article>
  );
}