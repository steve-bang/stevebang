import Link from 'next/link';
import { getBlogPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Tags | Steve Bang',
  description: 'Explore all tags used in our blog posts.',
};

export default async function TagsPage() {
  const posts = await getBlogPosts();
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)));

  return (
    <div className="container mx-auto pt-32 pb-20">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Tags</h1>
        <p className="text-gray-600">Explore all tags used in our blog posts.</p>
      </header>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <Link key={tag} href={`/tags/${tag}`} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200">
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
} 