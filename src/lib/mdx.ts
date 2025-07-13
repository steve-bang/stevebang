import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const rootDirectory = path.join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
  author: string;
  readingTime: string;
  image?: string;
}

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
        date: data.date,
        description: data.description,
        content,
        tags: data.tags || [],
        author: data.author,
        readingTime: data.readingTime,
        image: data.image,
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(rootDirectory, 'blog', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      content,
      tags: data.tags || [],
      author: data.author,
      readingTime: data.readingTime,
      image: data.image,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
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