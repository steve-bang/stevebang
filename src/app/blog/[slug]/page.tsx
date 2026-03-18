import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import GoogleAdsBanner from '@/components/GoogleAdsBanner';
import rehypeSlug from 'rehype-slug'
import { FaGlobeAmericas, FaUserAlt } from 'react-icons/fa';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  content: string;
  tags: string[];
  readingTime: string;
  schemaJsonLD?: string;
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
    keywords: post.tags.join(', '),
    authors: [{ name: post.author, url: 'https://www.steve-bang.com/about' }],
    creator: 'Steve Bang',
    alternates: {
      canonical: `https://www.steve-bang.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: `https://www.steve-bang.com/blog/${slug}`,
      siteName: 'Steve Bang',
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
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  };

  return metadata;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function addJsonLdFAQPost(post: BlogPost) {
  return {
    __html: JSON.stringify(post.schemaJsonLD)
  };
}

function buildBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "keywords": post.tags.join(', '),
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.steve-bang.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Steve Bang",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.steve-bang.com/logo.png"
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
  };
}

function buildBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.steve-bang.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.steve-bang.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.steve-bang.com/blog/${post.slug}`
      }
    ]
  };
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="pt-28 pb-20">

      {/* BlogPosting schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBlogPostingSchema(post)) }}
      />

      {post.schemaJsonLD && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLdFAQPost(post)}
        />
      )}

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(post)) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-10" aria-label="Breadcrumb">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to blogs
          </Link>
        </nav>

        {/* Tags above title */}
        {/* {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="tag-pill"
                rel="tag"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )} */}

        {/* Article Header */}
        <header className="mb-10">


          {/* Description / lead */}
          {/* <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {post.description}
          </p> */}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400 border-t border-b border-gray-100 dark:border-gray-800 py-4">
            <span className="inline-flex items-center gap-1.5">
              <FaUserAlt className="w-3 h-3 text-purple-500 dark:text-purple-400" />
              <span itemProp="author" className="font-medium text-gray-700 dark:text-gray-300">
                {post.author}
              </span>
            </span>
            <span className="text-gray-300 dark:text-gray-600" aria-hidden>·</span>
            <span className="inline-flex items-center gap-1.5">
              <FaGlobeAmericas className="w-3 h-3 text-purple-500 dark:text-purple-400" />
              <time dateTime={post.date} itemProp="datePublished">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
            </span>
            {post.readingTime && (
              <>
                <span className="text-gray-300 dark:text-gray-600" aria-hidden>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <FiClock className="w-3 h-3 text-purple-500 dark:text-purple-400" />
                  <span itemProp="timeRequired">{post.readingTime}</span>
                </span>
              </>
            )}
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold mb-5 leading-tight tracking-tight text-gray-900 dark:text-gray-50"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            {post.title}
          </h1>

        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12 -mx-4 sm:mx-0" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full max-h-[320px] sm:max-h-[420px] object-cover sm:rounded-xl shadow-md dark:shadow-black/40"
              priority
            />
            <meta itemProp="width" content="1200" />
            <meta itemProp="height" content="630" />
          </div>
        )}

        {/* Article Content */}
        <article className="markdown-content" itemProp="articleBody">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          {/* All tags */}
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="tag-pill"
                  rel="tag"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          <GoogleAdsBanner
            pId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
            adSlot='5558650644'
            adFormat="auto"
            fullWidthResponsive={true}
          />
        </footer>

      </div>
    </section>
  );
}