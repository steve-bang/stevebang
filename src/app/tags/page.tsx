import Link from 'next/link';
import { getBlogPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Tags | Steve Bang',
  description: 'Explore all tags used in our blog posts.',
};

export default async function TagsPage() {
  const posts = await getBlogPosts();

  // Build tag → post count map
  const tagCountMap = posts
    .flatMap((post) => post.tags)
    .reduce<Record<string, number>>((acc, tag) => {
      acc[tag] = (acc[tag] ?? 0) + 1;
      return acc;
    }, {});

  const tags = Object.entries(tagCountMap).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-gray-50">
            Tags
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Explore all topics covered across{' '}
            <span className="font-semibold text-primary dark:text-purple-400">
              {posts.length}
            </span>{' '}
            articles.
          </p>
        </header>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-3 justify-center">
          {tags.map(([tag, count]) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="
                group inline-flex items-center gap-1.5
                px-4 py-2 rounded-full
                bg-white dark:bg-gray-800/60
                border border-gray-200 dark:border-gray-700/50
                text-gray-700 dark:text-gray-300
                text-sm font-medium
                shadow-sm dark:shadow-gray-900/30
                hover:border-primary dark:hover:border-purple-500
                hover:text-primary dark:hover:text-purple-400
                hover:bg-primary/5 dark:hover:bg-purple-500/10
                hover:shadow-md dark:hover:shadow-gray-900/50
                hover:-translate-y-0.5
                transition-all duration-150
              "
            >
              <span className="text-gray-400 dark:text-gray-500 group-hover:text-primary/60 dark:group-hover:text-purple-500 transition-colors">
                #
              </span>
              {tag}
              <span className="
                ml-0.5 text-xs font-semibold tabular-nums
                px-1.5 py-0.5 rounded-full
                bg-gray-100 dark:bg-gray-700/60
                text-gray-500 dark:text-gray-400
                group-hover:bg-primary/10 dark:group-hover:bg-purple-500/20
                group-hover:text-primary dark:group-hover:text-purple-400
                transition-colors
              ">
                {count}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}