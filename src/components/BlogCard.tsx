import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';
interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    image?: string;
    tags: string[];
    readingTime: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-200 cursor-pointer">
      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
            width={400}
            height={192}
          />
        )}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 line-clamp-3" title={post.title}>
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-5" title={post.description}>
            {post.description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            {/* <span>{post.author}</span> */}
            <span className="text-purple-600 hover:underline text-sm">Read more →</span>
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMM d, yyyy')}
            </time>
          </div>

        </div>
      </Link>
    </article>
  );
} 