import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    author: string;
    image?: string;
    keywords: string[];
    readingTime: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="
      group
      bg-white dark:bg-gray-800/60
      border border-transparent dark:border-gray-700/50
      rounded-xl
      shadow-sm dark:shadow-gray-900/40
      overflow-hidden
      hover:-translate-y-1
      transition-all duration-200
      cursor-pointer
    ">
      <Link href={`/blog/${post.slug}`} className="block hover:text-primary transition-colors">

        {/* Cover image */}
        {post.image && (
          <div className="overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              width={400}
              height={224}
            />
          </div>
        )}

        <div className="p-6">

          {/* Tags row */}
          {post.keywords.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.keywords.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 dark:bg-purple-500/15 text-primary dark:text-purple-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2
            className="text-xl font-semibold mb-2 line-clamp-3 text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-purple-400 transition-colors"
            title={post.title}
          >
            {post.title}
          </h2>

          {/* Description */}
          <p
            className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-4"
            title={post.description}
          >
            {post.description}
          </p>

          {/* Footer row */}
          <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100 dark:border-gray-700/60">
            <span className="text-purple-600 dark:text-purple-400 font-medium group-hover:underline">
              Read more →
            </span>
            <time
              dateTime={post.publishedAt}
              className="text-gray-400 dark:text-gray-500 tabular-nums"
            >
              {format(new Date(post.publishedAt), 'MMM d, yyyy')}
            </time>
          </div>

        </div>
      </Link>
    </article>
  );
}