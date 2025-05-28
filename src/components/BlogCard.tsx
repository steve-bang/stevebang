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
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-200">
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
        {/* <div className="flex items-center space-x-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary bg-opacity-10 text-primary px-2.5 py-0.5 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
          <span className="text-gray-500 text-xs">{post.readingTime}</span>
        </div> */}
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm mb-4">{post.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          {/* <span>{post.author}</span> */}
          <Link href={`/blog/${post.slug}`} className="text-purple-600 hover:underline text-sm">Read more →</Link>
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMM d, yyyy')}
          </time>

        </div>

      </div>
    </article>
  );
} 