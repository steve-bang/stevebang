import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types';

const rootDirectory = path.join(process.cwd(), 'content');


export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(path.join(rootDirectory, 'blog'));
  
  const posts = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(rootDirectory, 'blog', filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: filename.replace('.mdx', ''),
        title: data.title,
        publishedAt: data.publishedAt,
        description: data.description,
        content,
        keywords: data.keywords || [],
        author: data.author,
        readingTime: data.readingTime,
        image: data.image,
        updatedAt: data.updatedAt,
      };
    })
  );

  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// Get only posts that have been published (publishedAt in the past)
export async function getAllBlogPostsPublished(): Promise<BlogPost[]> {
  const posts = await getBlogPosts();

  return posts
    .filter(post => new Date(post.publishedAt) <= new Date());
}

// Get a specific blog post by its slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(rootDirectory, 'blog', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      description: data.description,
      content,
      keywords: data.keywords || [],
      author: data.author,
      readingTime: data.readingTime,
      image: data.image,
      schemaJsonLD: data.schemaJsonLD
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter(post => post.keywords.includes(tag));
}

export async function getBlogPostsByAuthor(author: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter(post => post.author === author);
}

export async function getBlogPostsBySearch(query: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  const searchQuery = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery) ||
    post.description.toLowerCase().includes(searchQuery)
  );
} 