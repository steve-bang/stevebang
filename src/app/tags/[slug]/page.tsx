import Link from 'next/link';
import { getBlogPosts } from '@/lib/mdx';
import { format } from 'date-fns';
import Image from 'next/image';

export const metadata = {
  title: 'Tag | Steve Bang',
  description: 'Explore blog posts by tag.',
};

interface TagPageProps {
  params: Promise<{ slug: string }>
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const filteredPosts = posts.filter(post => post.tags.includes(slug));

  return (
    <div className="container mx-auto pt-32 pb-20">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Posts tagged with: {slug}</h1>
        <p className="text-gray-600">Explore all posts associated with this tag.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <div key={post.slug} className="border rounded-lg overflow-hidden shadow-lg">
            {post.image && (
              <Image src={post.image} alt={post.title} className="w-full h-48 object-cover" width={400} height={192} />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.description}</p>
              <p className="text-sm text-gray-500">By {post.author} on {format(new Date(post.date), 'MMMM d, yyyy')}</p>
              <Link href={`/blog/${post.slug}`} className="text-purple-600 hover:underline">Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 